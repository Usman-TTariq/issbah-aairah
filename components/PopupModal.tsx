"use client";

import { useEffect, useState } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({ isOpen, onClose }: PopupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState("+1");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const phoneFull = phoneLocal.trim() ? `${dialCode} ${phoneLocal.trim()}` : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneFull) {
      setStatus("error");
      setErrorMessage("Phone number is required.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    const composedMessage = [
      company.trim() ? `Company / project: ${company.trim()}` : null,
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phoneFull,
          service: company.trim() || undefined,
          message: composedMessage || message,
          source: "navbar_get_proposal",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhoneLocal("");
      setCompany("");
      setMessage("");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1600);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface-container-high/80 border border-white/10 text-white placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary/40 focus:outline-none transition-colors text-sm";

  const labelClass = "block text-sm font-semibold text-white mb-2";

  return (
    <div className="fixed inset-0 z-[100] overflow-x-hidden overflow-y-auto scrollbar-none animate-fadeIn">
      <div className="flex min-h-[100dvh] min-w-0 items-center justify-center px-4 py-10 sm:px-6">
        <div
          className="fixed inset-0 z-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="proposal-modal-title"
          className="relative z-10 w-full max-w-lg min-w-0 max-h-[90vh] overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-primary/25 bg-surface-container-lowest shadow-[0_0_60px_-12px_rgba(242,202,80,0.25)] animate-slideUp scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="p-8 pt-12 min-w-0 overflow-x-hidden">
          <h2 id="proposal-modal-title" className="text-2xl sm:text-3xl font-bold text-white pr-12 mb-2 break-words">
            Hire Expert App Developers
          </h2>
          <p className="text-sm text-on-surface-variant mb-8">
            Share your details and we&apos;ll get back with a custom plan.
          </p>

          <form className="space-y-5 min-w-0" onSubmit={handleSubmit}>
            <div>
              <label className={labelClass}>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label className={labelClass}>
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label className={labelClass}>
                Phone <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-[5.5rem_1fr] gap-2 min-w-0 w-full">
                <select
                  value={dialCode}
                  onChange={(e) => setDialCode(e.target.value)}
                  className={`${inputClass} w-full max-w-full cursor-pointer text-xs tabular-nums overflow-hidden text-ellipsis`}
                  aria-label="Country code"
                >
                  <option value="+1" className="bg-neutral-900">
                    US +1
                  </option>
                  <option value="+44" className="bg-neutral-900">
                    UK +44
                  </option>
                </select>
                <input
                  type="tel"
                  placeholder="555 123 4567"
                  value={phoneLocal}
                  onChange={(e) => setPhoneLocal(e.target.value)}
                  className={`${inputClass} min-w-0 w-full`}
                  required
                  autoComplete="tel-national"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Company / Project Name</label>
              <input
                type="text"
                placeholder="Your company or project"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputClass}
                autoComplete="organization"
              />
            </div>

            <div>
              <label className={labelClass}>
                Tell us about your project <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="App idea, timeline, platform (iOS/Android)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none min-h-[100px] max-w-full`}
                required
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-300 bg-red-950/50 border border-red-500/30 px-4 py-3 rounded-xl">
                {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-primary bg-primary/10 border border-primary/30 px-4 py-3 rounded-xl">
                Thanks! We&apos;ll reach out shortly.
              </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2 min-w-0">
              <button
                type="button"
                onClick={onClose}
                className="sm:flex-1 min-w-0 px-4 sm:px-6 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/5 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:flex-1 min-w-0 px-4 sm:px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-60 disabled:pointer-events-none text-sm sm:text-base whitespace-normal text-center"
              >
                {status === "sending" ? "Sending…" : "Submit & Get a Callback"}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
