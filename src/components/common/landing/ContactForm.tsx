import { useRef, useState } from 'preact/hooks';
import type { ContactFormProps } from '@/types/contact-form';

type StatusTone = 'error' | 'success' | 'warning';

type FormStatus = {
    message: string;
    tone: StatusTone;
} | null;

type TurnstileWindow = Window & {
    turnstile?: {
        reset: (container?: Element | string) => void;
    };
};

const statusClassByTone: Record<StatusTone, string> = {
    error: 'border-red-200 bg-red-50 text-red-700',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    warning: 'border-amber-200 bg-amber-50 text-amber-700',
};

function getFallbackSuccessMessage(locale: ContactFormProps['locale']) {
    return locale === 'es'
        ? 'Mensaje enviado. Me pondré en contacto contigo en menos de 24 horas.'
        : 'Message sent. I will get back to you within 24 hours.';
}

function getTurnstileRequiredMessage(locale: ContactFormProps['locale']) {
    return locale === 'es'
        ? 'Completá la verificación para enviar el formulario.'
        : 'Please complete the verification before sending the form.';
}

function resetTurnstile(form: HTMLFormElement | null) {
    const widget = form?.querySelector('.cf-turnstile');
    const turnstile = (window as TurnstileWindow).turnstile;

    if (widget && turnstile) {
        turnstile.reset(widget);
    }
}

export default function ContactForm({
    contact,
    locale,
    source,
    isTurnstileEnabled,
    turnstileSiteKey,
}: ContactFormProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const whatsapp = String(formData.get('whatsapp') || '').trim();
        const projectType = String(formData.get('projectType') || '').trim();
        const message = String(formData.get('message') || '').trim();
        const turnstileToken = String(
            formData.get('cf-turnstile-response') || '',
        ).trim();

        setStatus(null);

        if (!name) {
            setStatus({
                message: contact.nameRequiredMessage,
                tone: 'error',
            });
            return;
        }

        if (!email && !whatsapp) {
            setStatus({
                message: contact.contactRequiredMessage,
                tone: 'error',
            });
            return;
        }

        if (isTurnstileEnabled && !turnstileToken) {
            setStatus({
                message: getTurnstileRequiredMessage(locale),
                tone: 'error',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    whatsapp,
                    projectType,
                    message,
                    source,
                    turnstileToken,
                }),
            });

            const payload = await response.json().catch(() => null);

            if (!response.ok) {
                setStatus({
                    message:
                        payload?.message ||
                        (payload?.code === 'NOT_CONFIGURED'
                            ? contact.notConfiguredMessage
                            : contact.errorMessage),
                    tone:
                        payload?.code === 'NOT_CONFIGURED'
                            ? 'warning'
                            : 'error',
                });
                resetTurnstile(form);
                return;
            }

            setStatus({
                message:
                    contact.successMessage || getFallbackSuccessMessage(locale),
                tone: 'success',
            });
            form.reset();
            resetTurnstile(form);
        } catch (_error) {
            setStatus({
                message: contact.errorMessage,
                tone: 'error',
            });
            resetTurnstile(form);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            ref={formRef}
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
        >
            <div>
                <label
                    htmlFor={`contact-${source}-${locale}-name`}
                    className="block text-sm font-medium text-slate-700"
                >
                    {contact.nameLabel}
                </label>
                <input
                    id={`contact-${source}-${locale}-name`}
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
                    placeholder={contact.namePlaceholder}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor={`contact-${source}-${locale}-email`}
                    className="block text-sm font-medium text-slate-700"
                >
                    {contact.emailLabel}
                </label>
                <input
                    id={`contact-${source}-${locale}-email`}
                    name="email"
                    type="email"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
                    placeholder={contact.emailPlaceholder}
                />
            </div>

            <div>
                <label
                    htmlFor={`contact-${source}-${locale}-whatsapp`}
                    className="block text-sm font-medium text-slate-700"
                >
                    {contact.whatsappLabel}
                </label>
                <input
                    id={`contact-${source}-${locale}-whatsapp`}
                    name="whatsapp"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
                    placeholder={contact.whatsappPlaceholder}
                />
            </div>

            <p className="text-xs leading-relaxed text-slate-500">
                {contact.helperText}
            </p>

            {isTurnstileEnabled && turnstileSiteKey && (
                <div
                    className="cf-turnstile"
                    data-sitekey={turnstileSiteKey}
                />
            )}

            {status && (
                <p
                    className={`rounded-lg border px-4 py-3 text-sm ${statusClassByTone[status.tone]}`}
                    aria-live="polite"
                >
                    {status.message}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-500/70"
            >
                {isSubmitting ? contact.submittingLabel : contact.submitLabel}
            </button>
        </form>
    );
}
