"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const WHY = [
  {
    icon: "database",
    title: "Data-Driven",
    text: "Every click is tracked, every action is analyzed, every strategy is backed by hard evidence.",
  },
  {
    icon: "trending_up",
    title: "ROI-Focused",
    text: "We don\u2019t care about vanity metrics. We care about the numbers that actually grow your bank account.",
  },
  {
    icon: "groups",
    title: "Dedicated Experts",
    text: "You get a specialized team assigned to your brand, not a generic account manager.",
  },
  {
    icon: "contract",
    title: "Full Transparency",
    text: "Live dashboards and honest reporting. You\u2019ll never wonder what your budget is doing.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Issbah-Aairah transformed our digital presence from a whisper to a roar. Their PPC management alone increased our monthly revenue by 42% in ninety days.",
    name: "Julian D'Arby",
    role: "CEO, Zenith Luxury",
    avatar: "initials",
    initials: "JD",
    img: null as string | null,
  },
  {
    quote:
      "The only agency that understands high-net-worth psychology. They don\u2019t just find leads; they find the right leads.",
    name: "Marcus Sterling",
    role: "Founder, Sterling Real Estate",
    avatar: "img",
    initials: "",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkHDh1K-A5388hA1PnQ9Au91Nx_TCNQihQ_xGFeottMvRAaLzl3QPE18GcF2vpLfCLWu4H9rTVOWHT5aIkaNZKe7OJE9eIR1_XrGLy2yvS6bu8PWIpl7en9kQE1WqSAf7pBkK0qi8HqYO6kj2IxqYb0x7xO_3uCv8y-WMfSFwWXZOFgOrANqjF5XSDckylw-MHYgkdVI6oc4Zr0OZHMU1XaR9sizHlmjkWlnbNNWKlZnMM2P917G3p1Ws-tgwMsdmVXWqcKYnlMuw",
  },
  {
    quote:
      "Methodical, professional, and uncompromising. Issbah-Aairah is the standard by which all digital marketing should be measured.",
    name: "Elena Korvak",
    role: "Marketing Director, Avant-Tech",
    avatar: "img",
    initials: "",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJIOjV3vKuRvJ4PKPUCfVxR7-Axu6xkGZdSb2WvAoGuhG2jfv2udB-JOW6pSQDLuURSpvwgRLcj2a7tRm5tB2q8rIr1CwdwZAaKRNeVQ9gx3GduM-TuF-o3PNvrVclTkaWhimcO8t_nrw9zXTFUJRogy6iplk2IijXmVYyTqHKkRpvqL_03DshbEJJJG1ma6gX83m1IauZVc_IHbzEPsWAChpUdBRLHbAMESYW71ncc_7ZHK1Q3txn8k9_VW_g7bN1sfyy0Zc8C4U",
  },
];

function StarRow() {
  return (
    <div className="flex text-primary mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="material-symbols-outlined text-sm material-symbols-filled">
          star
        </span>
      ))}
    </div>
  );
}

export default function Pricing() {
  const router = useRouter();

  return (
    <>
      <section className="py-section-padding bg-black scroll-mt-24" id="about">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-white mb-4">
              Uncompromising Standards
            </h2>
            <p className="text-outline uppercase tracking-widest font-label-sm">How we ensure your market dominance</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {WHY.map((item, i) => (
              <div
                key={item.title}
                className={`text-center p-8 ${i < WHY.length - 1 ? "md:border-r md:border-white/5" : ""}`}
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{item.icon}</span>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-outline">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-white mb-16 text-center">
            Words From The <span className="text-primary">Elite</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="premium-card p-10 relative rounded-xl">
                <StarRow />
                <p className="text-on-surface italic mb-8">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  {t.avatar === "initials" ? (
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {t.initials}
                    </div>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border border-primary/30"
                      src={t.img!}
                      width={48}
                      height={48}
                    />
                  )}
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-outline">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-black scroll-mt-24" id="contact">
        <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-white mb-6">
              Request Your <span className="text-primary">Dominance</span> Strategy
            </h2>
            <p className="text-on-surface-variant mb-12">
              We only work with a select number of brands to ensure uncompromising attention. Apply below to see if your
              brand qualifies for our elite ecosystem.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <div>
                  <h5 className="text-white font-bold">Office</h5>
                  <p className="text-sm text-outline">
                    29641 S Western Ave Unit 308
                    <br />
                    Rch Palos Vrd, CA 90275
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                <div>
                  <h5 className="text-white font-bold">Direct Inquiry</h5>
                  <p className="text-sm text-outline">info@issbah-aairah.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">call</span>
                <div>
                  <h5 className="text-white font-bold">Private Line</h5>
                  <p className="text-sm text-outline">(315) 222-9614</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/contact");
              }}
            >
              <div>
                <input
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-primary text-white placeholder:text-outline transition-all outline-none"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-primary text-white placeholder:text-outline transition-all outline-none"
                  placeholder="Business Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div>
                <select
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-primary text-outline transition-all appearance-none outline-none cursor-pointer"
                  name="type"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black">
                    Select Business Type
                  </option>
                  <option className="bg-black">Luxury Retail</option>
                  <option className="bg-black">Professional Services</option>
                  <option className="bg-black">Technology/SaaS</option>
                  <option className="bg-black">Real Estate</option>
                </select>
              </div>
              <div>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-primary text-white placeholder:text-outline transition-all outline-none resize-y min-h-[120px]"
                  placeholder="Briefly describe your objectives"
                  rows={4}
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-black py-5 font-label-sm uppercase tracking-[0.2em] hover:brightness-110 transition-all rounded-sm"
              >
                Start Your Campaign
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" aria-hidden />
        <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
          <h2 className="font-display-xl text-5xl md:text-7xl text-white mb-8">Ready to Dominate Your Market?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
            The digital landscape rewards the bold. Secure your position at the top.
          </p>
          <Link
            href="/contact"
            className="inline-block gold-gradient text-black px-12 py-5 font-label-sm uppercase tracking-widest rounded-sm hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(212,175,55,0.4)]"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
