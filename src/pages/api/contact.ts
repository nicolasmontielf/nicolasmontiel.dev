import type { APIRoute } from 'astro';

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    whatsapp?: unknown;
    projectType?: unknown;
    message?: unknown;
    source?: unknown;
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

    return json(
        {
            ok: false,
            code: 'NOT_CONFIGURED',
            message:
                'Contact delivery is not configured yet. Please use WhatsApp for now.',
        },
        501,
    );
};
