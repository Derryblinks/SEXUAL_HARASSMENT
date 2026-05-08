import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Scale, Target, Shield, Users, BookOpen, Download, CheckCircle2, Compass, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Gender Policy — Aegis UG" },
      { name: "description", content: "The University of Ghana Gender Policy 2022 — purpose, principles, scope and institutional framework for gender equity." },
      { property: "og:title", content: "The Gender Policy — Aegis UG" },
      { property: "og:description", content: "Purpose, principles and framework of the UG Gender Policy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Gender Policy 2022"
        title={<>An institution where equity is a <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>policy</span>, not a platitude.</>}
        description="The University of Ghana Gender Policy provides the framework for achieving a gender-equitable environment that engages both males and females in all critical spheres of decision-making."
      >
        <a
          href="/UG-Gender-Policy.pdf"
          download="UG-Gender-Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gold text-gold-foreground h-12 px-7 text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-500 active:scale-[0.98]"
        >
          <Download className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Download Full Policy (PDF)
          <span className="text-xs text-gold-foreground/70 ml-1 hidden sm:inline">· 1.4 MB</span>
        </a>
      </PageHero>

      {/* Purpose */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Purpose"
            title={<>Addressing gendered imbalance through equal opportunity.</>}
            description="This policy responds to research confirming the gendered character of the University, evident in imbalanced representation of females in the student population, teaching, administrative, technical and senior management positions."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: "Achieve gender equality", desc: "Promote measures to achieve equality at all levels within the University." },
              { icon: Scale, title: "Balance ratios", desc: "Achieve balance in male-to-female employees and students at all levels." },
              { icon: Users, title: "Empower units", desc: "Help units identify and develop innovative gender balance plans." },
              { icon: Shield, title: "Provide redress", desc: "An avenue for redress when there is non-compliance with the policy." },
            ].map((o, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow">
                  <o.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Guiding Principles"
            title={<>The five pillars of equity.</>}
            description="These principles govern all activities — recruitment, admissions, curricula, research, governance and community life."
          />
          <div className="mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { t: "Gender-Friendly, Inclusive and Secure Environment", b: "The University is committed to creating an environment free from direct or indirect forms of gender discrimination, providing a space for equal participation of men and women in decision-making bodies." },
                { t: "Equal Opportunity in Employment & Admissions", b: "Reflected in recruitments, appointments, promotions and student enrolment. Special measures shall be instituted to ensure gender equality at all levels. Existing measures from the 1980s shall be continued and expanded." },
                { t: "Gender Sensitivity in Teaching & Curriculum", b: "Gender courses shall be developed and integrated into existing curricula. The mandatory undergraduate foundational gender course continues. Gender-inclusive perspectives in teaching methodology and content of all courses." },
                { t: "Gender-Sensitive Research & Innovation", b: "Promote the integration of gender analyses in research processes and innovations. Encourage staff and students to undertake gender-sensitive research, including research that focuses on the University." },
                { t: "Gender Balance in Management & Committees", b: "Committed to ensuring gender parity in all spheres — including governance and student governance structures. Both de jure and de facto equality shall be pursued." },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <AccordionItem value={`p${i}`} className="rounded-2xl border border-border bg-card px-6 overflow-hidden data-[state=open]:shadow-elegant">
                    <AccordionTrigger className="text-left font-display text-base font-medium py-5">{p.t}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{p.b}</AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Governance — balanced editorial bento */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(60% 50% at 80% 20%, oklch(0.78 0.13 75 / 0.10), transparent 70%), radial-gradient(50% 40% at 10% 90%, oklch(0.42 0.14 265 / 0.08), transparent 70%)" }} />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Governance"
            title={<>Application & scope.</>}
            description="This policy applies to all members — current and prospective — of the University community, covering all activities and programmes in education, training, research and work approved by the University."
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-5">
            {/* LEFT — acknowledgment quote card */}
            <Reveal className="lg:col-span-7">
              <div className="relative h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant overflow-hidden">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Acknowledgment</div>
                  <p className="mt-5 font-display text-xl md:text-2xl leading-relaxed text-pretty">
                    The policy acknowledges that to enable the University to achieve gender
                    equality, there may be the need to enact <em className="text-primary">special measures</em> for the benefit of one gender.
                  </p>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                    According to law, the University shall not be held to be in breach of this policy by those who do not benefit from — or who feel discriminated against as a result of — these special measures.
                  </p>
                  <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
                    <RefreshCw className="h-4 w-4 text-gold" />
                    <span>Reviewed every <strong className="text-foreground">five (5) years</strong> to account for emerging issues and trends.</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — institutional cards */}
            <div className="lg:col-span-5 grid gap-5 content-start">
              <Reveal delay={0.05}>
                <div className="rounded-3xl border border-border bg-card p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-secondary text-primary flex items-center justify-center"><Compass className="h-4 w-4" /></div>
                    <div className="font-display text-base font-semibold">Who it covers</div>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {["Students — undergraduate & graduate", "Faculty & administrative staff", "Visiting & contract personnel", "Prospective members of the community"].map((x) => (
                      <li key={x} className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-5">
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-6 h-full relative overflow-hidden">
                    <div className="absolute inset-0 grain opacity-[0.06]" />
                    <div className="relative">
                      <div className="font-display text-4xl font-semibold">5<span className="text-gold">.</span></div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Years between reviews</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="rounded-3xl border border-border bg-card p-6 h-full">
                    <div className="font-display text-4xl font-semibold text-primary">2022</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Current edition adopted</div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-secondary/60 to-card p-6 flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Special measures are a <strong className="text-foreground">lawful instrument of equity</strong>, not a deviation from it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Preamble */}
      <section className="py-28 md:py-36 bg-primary text-primary-foreground">
        <div className="absolute inset-0 grain opacity-[0.05]" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Preamble</div>
            <blockquote className="mt-8 font-display text-2xl md:text-4xl font-medium tracking-tight leading-relaxed text-balance text-primary-foreground/90">
              "Recognising that maintaining gender equality is vital to the realisation of human rights for all and the overall objective of gender equality is to create a society in which women and men enjoy the same opportunities, rights and obligations in all spheres of life."
            </blockquote>
            <div className="mt-8 text-sm text-primary-foreground/50">— UG Gender Policy, January 2022</div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Have questions about the policy?</h3>
            <p className="mt-3 text-muted-foreground">We explain everything in accessible language — no legal jargon.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/faq">Browse FAQ <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact EOB</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}