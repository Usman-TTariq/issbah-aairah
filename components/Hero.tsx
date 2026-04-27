"use client";

import Link from "next/link";
import Navbar from "./Navbar";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-gn4rGQ36set9kFYJVecZReBrC8tqvmGysNTe-s17Jrp7fx_4vn6e8Jcm39X5pqXGoxhC4KMWW62Dy8w3LBvsaWkxnQbgTocKUz5P8zUkIPF993YSPjSNlRh2oVjsa8NR-RJxsBU7Mk40X3b6LdMWexJ8pQEpg-v44hUJfFIH-zWgc8c7XDMlFOkOOu4_Bh4-5guOEYEIn4thqcEkNa58lOh4ZM5wd7RMK5hqkYxvMSxc1XLslrrODEudhv8TWISYovlSuJLt_VM";

export default function Hero() {
  const scrollToCaseStudies = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative text-on-surface overflow-hidden bg-black">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" aria-hidden />
        <div className="max-w-[1280px] mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-xl text-4xl sm:text-5xl md:text-display-xl mb-6 text-white">
              Elevate Your Brand with <span className="text-primary italic">Elite</span> Digital Marketing
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Focus on growth, ROI, and authority. We build digital ecosystems for brands that demand nothing less than
              market dominance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="gold-gradient text-black px-8 py-4 font-label-sm uppercase tracking-widest rounded-sm hover:scale-95 transition-all inline-block text-center"
              >
                Get Free Strategy
              </Link>
              <button
                type="button"
                onClick={scrollToCaseStudies}
                className="border border-primary text-primary px-8 py-4 font-label-sm uppercase tracking-widest rounded-sm hover:bg-primary/10 transition-all"
              >
                View Case Studies
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="premium-card p-4 rounded-xl gold-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Digital marketing analytics dashboard"
                className="rounded-lg opacity-80 w-full h-auto"
                src={HERO_IMG}
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container p-6 rounded-lg border border-primary/20 backdrop-blur-md">
              <div className="text-primary font-headline-md text-3xl sm:text-4xl">+240%</div>
              <div className="text-xs uppercase tracking-tighter text-outline">Average Client ROI</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
