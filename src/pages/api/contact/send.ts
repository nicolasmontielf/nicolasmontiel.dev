import type { APIRoute } from 'astro';
import type { ContactPayload } from '@/types/api/contact';
import { Resend } from 'resend';

const CONTACT_TO_EMAIL = 'nicolasmontielf@gmail.com';
const CONTACT_FROM_EMAIL = 'ecommerce@nicolasmontiel.dev';
const TURNSTILE_SITEVERIFY_URL =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const SOURCE_LABELS: Record<string, string> = {
    ecommerce: 'ecommerce',
    web: 'web',
};

type TurnstileSiteVerifyResponse = {
    success?: boolean;
    'error-codes'?: string[];
};

function normalizeString(value: unknown) {
    return typeof value === 'string' ? value.trim() : '';
}

function json(body: Record<string, unknown>, status: number) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function getClientIp(request: Request) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0]?.trim() || 'unknown';
    }

    return request.headers.get('x-real-ip') || 'unknown';
}

async function verifyTurnstileToken(request: Request, token: string) {
    const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
        return {
            ok: false,
            code: 'TURNSTILE_NOT_CONFIGURED',
            status: 500,
            message:
                'Contact verification is not configured yet. Please use WhatsApp for now.',
        };
    }

    if (!token) {
        return {
            ok: false,
            code: 'TURNSTILE_FAILED',
            status: 400,
            message: 'Verification failed. Please try again.',
        };
    }

    const body = new URLSearchParams({
        secret: secretKey,
        response: token,
    });
    const clientIp = getClientIp(request);
    if (clientIp !== 'unknown') {
        body.set('remoteip', clientIp);
    }

    try {
        const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        });
        const result = (await response.json()) as TurnstileSiteVerifyResponse;

        if (!response.ok || !result.success) {
            return {
                ok: false,
                code: 'TURNSTILE_FAILED',
                status: 400,
                message: 'Verification failed. Please try again.',
            };
        }

        return {
            ok: true,
        };
    } catch (error) {
        console.error('Failed to verify Turnstile token', error);
        return {
            ok: false,
            code: 'TURNSTILE_FAILED',
            status: 400,
            message: 'Verification failed. Please try again.',
        };
    }
}

export const POST: APIRoute = async ({ request }) => {
    let payload: ContactPayload;

    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return json(
            {
                ok: false,
                code: 'INVALID_JSON',
                message: 'Invalid request body. Expected JSON.',
            },
            400,
        );
    }

    const name = normalizeString(payload.name);
    const email = normalizeString(payload.email);
    const whatsapp = normalizeString(payload.whatsapp);
    const projectType = normalizeString(payload.projectType);
    const message = normalizeString(payload.message);
    const turnstileToken = normalizeString(payload.turnstileToken);
    const source =
        SOURCE_LABELS[normalizeString(payload.source)] || 'ecommerce';

    if (!name) {
        return json(
            {
                ok: false,
                code: 'VALIDATION_ERROR',
                message: 'Name is required.',
            },
            400,
        );
    }

    if (!email && !whatsapp) {
        return json(
            {
                ok: false,
                code: 'VALIDATION_ERROR',
                message: 'Email or WhatsApp is required.',
            },
            400,
        );
    }

    if (!import.meta.env.DEV) {
        const turnstileResult = await verifyTurnstileToken(
            request,
            turnstileToken,
        );

        if (!turnstileResult.ok) {
            return json(
                {
                    ok: false,
                    code: turnstileResult.code,
                    message: turnstileResult.message,
                },
                turnstileResult.status ?? 400,
            );
        }
    }

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    if (!resendApiKey) {
        return json(
            {
                ok: false,
                code: 'NOT_CONFIGURED',
                message:
                    'Contact delivery is not configured yet. Please use WhatsApp for now.',
            },
            500,
        );
    }

    const clientIp = getClientIp(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const sentAt = new Date().toISOString();

    const text = [
        `Nuevo contacto ${source}`,
        '',
        `Nombre: ${name}`,
        `Email: ${email || 'No especificado'}`,
        `WhatsApp: ${whatsapp || 'No especificado'}`,
        `Tipo de proyecto: ${projectType || 'No especificado'}`,
        `Mensaje: ${message || 'No especificado'}`,
        `Fecha: ${sentAt}`,
        `IP: ${clientIp}`,
        `User-Agent: ${userAgent}`,
    ].join('\n');

    try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: CONTACT_TO_EMAIL,
            subject: `Nuevo contacto ${source} - ${name}`,
            text,
        });

        return json(
            {
                ok: true,
                message: 'Message sent. I will get back to you soon.',
            },
            200,
        );
    } catch (error) {
        console.error('Failed to deliver contact form email', error);
        return json(
            {
                ok: false,
                code: 'DELIVERY_ERROR',
                message:
                    'There was a delivery problem. Please try again or use WhatsApp.',
            },
            500,
        );
    }
};
