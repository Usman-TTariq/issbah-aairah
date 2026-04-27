"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logot.png"
      alt="ISSBAH-AAIRAH"
      width={520}
      height={230}
      className={`h-12 sm:h-14 md:h-[50px] w-auto max-w-[260px] sm:max-w-[380px] md:max-w-[480px] object-contain object-left ${className ?? ""}`}
      priority
    />
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleHome = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItemClass =
    "font-inter text-[10px] font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors";
  const navItemActive =
    "font-inter text-[10px] font-bold tracking-widest uppercase text-primary border-b border-primary pb-1 brightness-110";

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-yellow-600/20">
      <nav className="flex justify-between items-center h-20 px-4 sm:px-8 max-w-[1280px] mx-auto">
        {isHomePage ? (
          <button
            type="button"
            onClick={handleHome}
            className="flex items-center shrink-0 py-1 text-left"
            aria-label="ISSBAH-AAIRAH — scroll to top"
          >
            <BrandLogo />
          </button>
        ) : (
          <Link href="/" className="flex items-center shrink-0 py-1 hover:opacity-90 transition-opacity">
            <BrandLogo />
          </Link>
        )}

        <div className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
              <button type="button" onClick={handleHome} className={navItemActive}>
                Home
              </button>
              <button type="button" onClick={() => scrollToSection("services")} className={navItemClass}>
                Services
              </button>
              <button type="button" onClick={() => scrollToSection("case-studies")} className={navItemClass}>
                Case Studies
              </button>
              <button type="button" onClick={() => scrollToSection("about")} className={navItemClass}>
                About
              </button>
              <button type="button" onClick={() => scrollToSection("contact")} className={navItemClass}>
                Contact
              </button>
            </>
          ) : (
            <>
              <Link href="/" className={navItemActive}>
                Home
              </Link>
              <Link href="/#services" className={navItemClass}>
                Services
              </Link>
              <Link href="/#case-studies" className={navItemClass}>
                Case Studies
              </Link>
              <Link href="/#about" className={navItemClass}>
                About
              </Link>
              <Link href="/#contact" className={navItemClass}>
                Contact
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="gold-gradient text-black px-6 py-2 font-label-sm uppercase tracking-widest rounded-sm hover:brightness-110 transition-all inline-block text-center"
          >
            Get Proposal
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2 rounded-sm border border-white/20"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          {mobileMenuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-4 py-6 space-y-4">
          {isHomePage ? (
            <>
              <button type="button" onClick={handleHome} className="block w-full text-left text-white py-2 font-semibold uppercase text-xs tracking-widest">
                Home
              </button>
              <button type="button" onClick={() => scrollToSection("services")} className="block w-full text-left text-white/80 py-2 text-xs tracking-widest uppercase">
                Services
              </button>
              <button type="button" onClick={() => scrollToSection("case-studies")} className="block w-full text-left text-white/80 py-2 text-xs tracking-widest uppercase">
                Case Studies
              </button>
              <button type="button" onClick={() => scrollToSection("about")} className="block w-full text-left text-white/80 py-2 text-xs tracking-widest uppercase">
                About
              </button>
              <button type="button" onClick={() => scrollToSection("contact")} className="block w-full text-left text-white/80 py-2 text-xs tracking-widest uppercase">
                Contact
              </button>
            </>
          ) : (
            <>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-white py-2 font-semibold uppercase text-xs tracking-widest">
                Home
              </Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 py-2 text-xs tracking-widest uppercase">
                Services
              </Link>
              <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 py-2 text-xs tracking-widest uppercase">
                Case Studies
              </Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 py-2 text-xs tracking-widest uppercase">
                About
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 py-2 text-xs tracking-widest uppercase">
                Contact
              </Link>
            </>
          )}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full gold-gradient text-black py-3 font-label-sm uppercase tracking-widest text-center rounded-sm"
          >
            Get Proposal
          </Link>
        </div>
      )}
    </header>
  );
}
