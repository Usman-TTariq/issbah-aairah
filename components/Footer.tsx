"use client";

import Link from "next/link";
import { useState } from "react";
import { submitSiteLead } from "@/lib/siteLead";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [newsletterError, setNewsletterError] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError("");
    const email = newsletterEmail.trim();
    if (!email) {
      setNewsletterStatus("error");
      setNewsletterError("Enter your email.");
      return;
    }
    setNewsletterStatus("sending");
    const result = await submitSiteLead({
      name: "Newsletter signup",
      email,
      phone: "—",
      message: "Requested: weekly elite digital insights (footer newsletter).",
      source: "newsletter_footer",
    });
    if (!result.ok) {
      setNewsletterStatus("error");
      setNewsletterError(result.error);
      return;
    }
    setNewsletterStatus("success");
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-black py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-yellow-600 dark:text-[#D4AF37] mb-8">ISSBAH-AAIRAH</div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Pioneering the next generation of elite digital marketing strategies for high-impact brands globally.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/#services" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Search Engine Optimization
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Pay Per Click Management
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Social Strategy
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Email Automation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/#about" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Our Philosophy
              </Link>
            </li>
            {/* <li>
              <Link href="/#case-studies" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Case Studies
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-6">Receive elite digital insights weekly.</p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <div className="flex border-b border-white/20 pb-2 gap-2">
              <input
                className="bg-transparent border-0 focus:ring-0 text-white w-full text-sm placeholder:text-gray-600 outline-none"
                placeholder="Email Address"
                type="email"
                aria-label="Newsletter email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === "sending"}
              />
              <button
                type="submit"
                className="text-primary material-symbols-outlined shrink-0 disabled:opacity-50"
                aria-label="Subscribe"
                disabled={newsletterStatus === "sending"}
              >
                send
              </button>
            </div>
            {newsletterStatus === "error" && (
              <p className="text-xs text-red-400">{newsletterError}</p>
            )}
            {newsletterStatus === "success" && (
              <p className="text-xs text-primary">You&apos;re on the list. Thank you!</p>
            )}
          </form>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-8 mt-24 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
        <p className="font-inter text-sm text-gray-400">© 2026 ISSBAH-AAIRAH. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
            Terms of Service
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 gold-gradient text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
