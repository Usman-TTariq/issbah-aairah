const services = [
  {
    icon: "search",
    title: "SEO",
    description:
      "Organic domination through architectural integrity and authoritative content mapping.",
  },
  {
    icon: "ads_click",
    title: "PPC",
    description: "High-precision paid acquisition designed for maximum conversion and minimal waste.",
  },
  {
    icon: "share",
    title: "Social Media",
    description: "Elite community management and targeted social scaling for luxury perception.",
  },
  {
    icon: "edit_note",
    title: "Content Strategy",
    description: "Storytelling that converts, establishing your brand as the definitive voice in its niche.",
  },
  {
    icon: "mail",
    title: "Email Marketing",
    description: "Sophisticated automation flows that nurture leads into loyal, high-lifetime-value clients.",
  },
  {
    icon: "analytics",
    title: "CRO",
    description: "Meticulous optimization of every touchpoint to squeeze more revenue from existing traffic.",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-12 bg-black border-y border-white/5 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-center text-label-sm uppercase tracking-[0.3em] text-outline mb-8">
            Trusted by ambitious brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="text-xl font-bold italic tracking-widest">LUMINA</div>
            <div className="text-xl font-bold tracking-widest">AVANT-GARDE</div>
            <div className="text-xl font-bold tracking-widest">VELOCITY</div>
            <div className="text-xl font-bold tracking-widest">PRESTIGE</div>
            <div className="text-xl font-bold italic tracking-widest">ONYX</div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-black scroll-mt-24" id="services">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-white mb-4">
              Precision Engineering for <span className="text-primary">Digital Growth</span>
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="premium-card p-8 group hover:-translate-y-2 transition-all duration-500 rounded-xl"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{s.icon}</span>
                <h3 className="font-headline-md text-2xl text-white mb-4">{s.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">{s.description}</p>
                <span className="text-primary font-label-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all cursor-default">
                  Explore{" "}
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    arrow_forward
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
