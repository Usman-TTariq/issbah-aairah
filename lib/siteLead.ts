/** Inbox for all site leads (popup + contact forms + home brief + newsletter). */
export const SITE_LEAD_EMAIL = "marketing@issbah-aairah.com";

export type LeadSource =
  | "popup"
  | "contact_desktop"
  | "contact_mobile"
  | "home_contact"
  | "newsletter_footer";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: LeadSource;
};

type FormSubmitSuccess = { success?: boolean; message?: string };

/**
 * Delivers lead to {@link SITE_LEAD_EMAIL} via FormSubmit (no API key).
 * First submission from a new domain may require activating the inbox (FormSubmit sends a one-time link).
 */
export async function submitSiteLead(
  payload: LeadPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(SITE_LEAD_EMAIL)}`;
  const body = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    message: payload.message.trim(),
    _subject: `issbah-aairah lead — ${payload.source.replace(/_/g, " ")}`,
    _template: "table",
    _replyto: payload.email.trim(),
    _captcha: false,
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const raw = await res.text();
    let data: FormSubmitSuccess = {};
    try {
      data = JSON.parse(raw) as FormSubmitSuccess;
    } catch {
      /* FormSubmit sometimes returns non-JSON on error */
    }

    if (!res.ok) {
      return { ok: false, error: data.message || raw.slice(0, 180) || `Request failed (${res.status})` };
    }

    if (data.success === false) {
      return { ok: false, error: data.message || "Submission was not accepted." };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}

export function getContactLeadSource(): LeadSource {
  if (typeof window === "undefined") return "contact_desktop";
  return window.matchMedia("(max-width: 768px)").matches ? "contact_mobile" : "contact_desktop";
}
