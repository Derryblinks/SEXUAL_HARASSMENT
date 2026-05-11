import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Users,
  ShieldCheck,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/understanding/")({
  component: UnderstandingIndexPage,
});

function UnderstandingIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · Sexual harassment & misconduct"
        title={<>Understanding misconduct is the first <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>act of prevention</span>.</>}
        description="Trauma-informed education grounded in the University of Ghana Sexual Harassment and Misconduct Policy — for students, staff and everyone the University serves."
        bgImage="/education-hero.png"
      />

      {/* Definition */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Definition"
              title={<>What sexual harassment is.</>}
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-sm border border-slate-200 bg-card p-8 md:p-10 shadow-none">
                <p className="font-display text-2xl leading-relaxed text-pretty">
                  Sexual harassment means <em className="text-[#1f3a5f]">unwelcome conduct of a sexual nature</em>, including advances, requests for sexual favours, and verbal, non-verbal, written, electronic, graphic or physical behaviour when submission is tied to outcomes, affects evaluations, or{" "}
                  <em className="text-[#1f3a5f]">unreasonably interferes</em> with work or study or creates an{" "}
                  <em className="text-[#1f3a5f]">intimidating, hostile or offensive</em> environment.
                </p>
                <p className="mt-6 text-sm text-slate-400 font-medium italic">Paraphrased from the University of Ghana Sexual Harassment and Misconduct Policy (2017).</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hub Modules */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Curriculum"
            title="Explore our educational modules."
            description="Deep dive into specific topics to understand your rights, responsibilities, and how to protect our community."
          />
          
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Recognising Misconduct",
                desc: "Learn about the eight specific forms of harassment identified in the University policy, from verbal conduct to hostile environments.",
                link: "/understanding/misconduct",
                icon: AlertCircle,
              },
              {
                title: "Consent & Power Dynamics",
                desc: "Understand the requirements for valid consent and how institutional power imbalances can affect free choice.",
                link: "/understanding/consent",
                icon: Heart,
              },
              {
                title: "Bystander Intervention",
                desc: "Discover the 4 Ds of intervention and learn how to safely support others as a member of the UG community.",
                link: "/understanding/bystander",
                icon: Users,
              },
              {
                title: "Procedures & Rights",
                desc: "A roadmap of the formal reporting and investigation process, including your rights as a complainant.",
                link: "/understanding/procedures",
                icon: ShieldCheck,
              },
            ].map((mod, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link to={mod.link} className="group block">
                  <div className="p-10 border border-slate-200 bg-white rounded-sm group-hover:border-[#c59d5f]/40 transition-all h-full flex flex-col">
                    <div className="h-12 w-12 rounded-xl bg-[#1f3a5f]/5 flex items-center justify-center mb-6 group-hover:bg-[#1f3a5f] group-hover:text-white transition-all">
                      <mod.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">{mod.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-8 flex-1">{mod.desc}</p>
                    <div className="flex items-center gap-2 text-[#c59d5f] font-bold text-sm uppercase tracking-widest">
                      Enter Module <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold text-[#1f3a5f] tracking-tight mb-8">Research & Global Context</h2>
              <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  The University of Ghana's policy is informed by global best practices and localized academic research into the dynamics of campus safety in West Africa.
                </p>
                <div className="bg-[#F8FAFC] border-l-4 border-[#c59d5f] p-8 my-10 shadow-none">
                  <p className="text-lg md:text-xl font-medium text-[#1f3a5f] italic leading-relaxed">
                    "Knowledge is the prerequisite for transformation. We provide the intellectual tools needed to dismantle institutional harassment."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-none">
                <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-6 uppercase tracking-widest text-xs">External Resources</h3>
                <div className="space-y-4">
                  {["Ministry of Gender (Ghana)", "UN Women - African Region", "Global Campus Safety Alliance", "Ghana Police Service"].map((link) => (
                    <a key={link} href="#" className="flex items-center justify-between text-[14px] text-slate-500 hover:text-[#1f3a5f] transition-colors group">
                      <span>{link}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -rotate-45 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1f3a5f] text-white overflow-hidden relative">
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <Reveal>
            <ShieldAlert className="mx-auto h-12 w-12 text-[#c59d5f] mb-8" strokeWidth={1} />
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">Ready to test your knowledge?</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Take our institutional quiz to receive a certification of awareness and contribute to a safer, more respectful University of Ghana.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-[#c59d5f] hover:bg-[#b08b50] text-white border-0 font-bold uppercase tracking-widest text-xs">
              <Link to="/quiz">Start Certification Quiz <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
