const OFFICE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZGmigxWbzvzNjStfO82gSIkI_sDomQjLfpAghXtEMsRpy76-wh6f9JZozHWugQRZmBUs-yWbuG86wOi3JKGcUpJKsOe1qkaIqmHQYSg1YxUrDw9_kci3QFL1HoSjORlk9H_uZ8gzZOWYDVirSC8s5-QtqJvNa8I-mGolwOBWiQ9vxg8awhdTfuCutXh-Zj9dNStb2fNYkRpGH75IkBuekEU3fRFsuklKd27A9fwHE0xH4zJdU5gdtHwqleHWBuaLudq0ZdUuuuZ8";

export default function Portfolio() {
  return (
    <section className="py-section-padding bg-surface-container-lowest scroll-mt-24" id="case-studies">
      <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative isolate">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Elite office interior"
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto relative z-10"
            src={OFFICE_IMG}
            width={900}
            height={600}
          />
          <div className="absolute -top-10 -right-10 w-48 h-48 border-2 border-primary/30 z-0 hidden md:block" aria-hidden />
        </div>
        <div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-white mb-6">
            The Gatekeeper of <span className="text-primary">Excellence</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Issbah-Aairah isn&apos;t just an agency; it&apos;s a strategic partner for those who refuse to settle for
            mediocrity. Our methodologies are data-driven, our execution is flawless, and our results are indisputable.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-primary font-display-xl text-4xl sm:text-5xl mb-2">$45M+</div>
              <div className="text-label-sm uppercase tracking-widest text-outline">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-primary font-display-xl text-4xl sm:text-5xl mb-2">120+</div>
              <div className="text-label-sm uppercase tracking-widest text-outline">Active Campaigns</div>
            </div>
            <div>
              <div className="text-primary font-display-xl text-4xl sm:text-5xl mb-2">12k+</div>
              <div className="text-label-sm uppercase tracking-widest text-outline">Leads Generated</div>
            </div>
            <div>
              <div className="text-primary font-display-xl text-4xl sm:text-5xl mb-2">98%</div>
              <div className="text-label-sm uppercase tracking-widest text-outline">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
