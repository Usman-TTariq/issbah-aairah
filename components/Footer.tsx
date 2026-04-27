"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <li>
              <Link href="/#case-studies" className="text-gray-500 hover:text-yellow-600 transition-colors text-sm">
                Case Studies
              </Link>
            </li>
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
          <div className="flex border-b border-white/20 pb-2 gap-2">
            <input
              className="bg-transparent border-0 focus:ring-0 text-white w-full text-sm placeholder:text-gray-600 outline-none"
              placeholder="Email Address"
              type="email"
              aria-label="Newsletter email"
            />
            <button type="button" className="text-primary material-symbols-outlined shrink-0" aria-label="Subscribe">
              send
            </button>
          </div>
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
