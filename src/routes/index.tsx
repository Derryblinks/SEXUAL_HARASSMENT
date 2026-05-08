import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ShieldCheck, Lock, BookOpen, HeartHandshake, Scale,
  AlertTriangle, ChevronRight, Sparkles, Users, MessageSquareWarning,
  Phone, FileText, GraduationCap, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aegis UG — A Safe, Respectful & Inclusive University" },
      { name: "description", content: "The University of Ghana's institutional commitment to gender equity, safe reporting and a community free from harassment." },
      { property: "og:title", content: "Aegis UG — A Safe, Respectful & Inclusive University" },
      { property: "og:description", content: "Learn the policy. Know your rights. Access confidential support." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CommitmentSection />
      <PolicyHighlights />
      <StatsSection />
      <UnderstandingPreview />
      <ReportingPathway />
      <StakeholdersGrid />
      <ImpactQuote />
      <FaqPreview />
      <EmergencyBanner />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-hero text-primary-foreground">
      <div className="absolute inset-0 grain opacity-[0.06]" />
      {/* aurora orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, oklch(0.42 0.16 285) 0%, transparent 65%)" }} />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-32 -right-32 h-[700px] w-[700px] rounded-full opacity-30 blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 75) 0%, transparent 65%)" }} />
      </motion.div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 pt-44 pb-32 md:pt-56 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground/85"
        >
          <Sparkles className="h-3 w-3 text-gold" />
          University of Ghana — Gender Policy 2022
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-5xl font-display text-[2.75rem] sm:text-6xl md:text-[5.5rem] font-semibold tracking-[-0.035em] leading-[0.98] text-balance"
        >
          A safe, respectful and{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic font-medium" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              inclusive
            </span>
          </span>{" "}
          university community.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg md:text-xl text-primary-foreground/70 leading-relaxed text-pretty"
        >
          Aegis UG is the University of Ghana's institutional initiative for gender equity,
          harassment prevention and confidential support — guided by our Gender Policy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow h-12 px-7 text-base font-medium">
            <Link to="/reporting">
              Report safely <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground backdrop-blur h-12 px-7 text-base">
            <Link to="/understanding">Learn the policy</Link>
          </Button>
        </motion.div>

        {/* hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.03] backdrop-blur overflow-hidden"
        >
          {[
            { k: "100%", v: "Confidential reporting" },
            { k: "24/7", v: "Support availability" },
            { k: "9", v: "Implementation bodies" },
            { k: "2022", v: "Gender Policy in force" },
          ].map((s) => (
            <div key={s.v} className="p-6 md:p-8 bg-primary/40">
              <div className="font-display text-3xl md:text-4xl font-semibold text-gold tracking-tight">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-primary-foreground/60">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40"
      >
        scroll to explore
      </motion.div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    "Trauma-informed",
    "Confidential",
    "Policy-aligned",
    "Gender-equitable",
    "Survivor-centered",
    "WCAG-conscious",
  ];
  return (
    <div className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- COMMITMENT ---------------- */
function CommitmentSection() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Our Commitment"
              title={<>An institution where dignity is <span className="italic text-muted-foreground/80">non-negotiable</span>.</>}
              description="The University of Ghana is committed to creating an environment free from direct or indirect gender discrimination — one that provides equal participation in all decision-making bodies and a workplace and learning space where every person is safe."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Policy Preamble
                </div>
                <p className="mt-5 font-display text-xl leading-relaxed text-pretty">
                  "Maintaining gender equality is vital to the realisation of human rights for all — a society in which women and men enjoy the same opportunities, rights and obligations in all spheres of life."
                </p>
                <div className="mt-6 text-xs text-muted-foreground">— UG Gender Policy, 2022</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- POLICY HIGHLIGHTS ---------------- */
function PolicyHighlights() {
  const items = [
    { icon: ShieldCheck, title: "Inclusive & secure environment", body: "A space free from direct or indirect gender discrimination, with equal participation in decision-making.", href: "/about" },
    { icon: Scale, title: "Equal opportunity", body: "Equity in recruitment, appointments, promotions, student enrolment and retention across all levels.", href: "/about" },
    { icon: BookOpen, title: "Gender sensitivity in learning", body: "Gender-inclusive perspectives in teaching methodology, curriculum design and research.", href: "/understanding" },
    { icon: Users, title: "Gender balance in governance", body: "Approximately equal representation in governance and student leadership structures.", href: "/stakeholders" },
    { icon: Lock, title: "Confidential complaints mechanism", body: "A trusted, structured route to raise concerns — with rights protected for all parties.", href: "/reporting" },
    { icon: HeartHandshake, title: "Support & mediation", body: "Trained mediators and the Equal Opportunities Board guide the resolution process.", href: "/reporting" },
  ];
  return (
    <section className="relative py-28 md:py-36 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Policy Pillars"
          title={<>Six commitments that shape every classroom, office and corridor.</>}
          description="Drawn directly from the University of Ghana Gender Policy — these principles guide how we recruit, teach, govern and protect."
        />
        <StaggerGroup className="mt-16 grid gap-px bg-border rounded-3xl overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <StaggerItem key={i} className="group relative bg-card p-8 md:p-10 transition-colors hover:bg-card/60">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(600px at var(--mx,50%) var(--my,50%), oklch(0.78 0.13 75 / 0.06), transparent 40%)" }} />
              <it.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">{it.body}</p>
              <Link to={it.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary magnetic-link">
                Learn more <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function StatsSection() {
  const stats = [
    { v: "1992", l: "Constitution recognises sex-based discrimination as prohibited" },
    { v: "5yr", l: "Policy review cycle to address emerging issues" },
    { v: "EOB", l: "Equal Opportunities Board — independent oversight" },
    { v: "All", l: "Members of the University community covered by the policy" },
  ];
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 grain opacity-[0.05]" />
      <div className="absolute -top-32 right-1/3 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 75) 0%, transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why It Matters"
              title={<span className="text-primary-foreground">Numbers that ground a generational commitment.</span>}
              description={<span className="text-primary-foreground/70">From constitutional recognition to institutional architecture, the framework is built to last — and to be held accountable.</span>}
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-primary-foreground/10 rounded-3xl border border-primary-foreground/10 overflow-hidden">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.05} className="p-8 md:p-10 bg-primary">
                <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-gold">{s.v}</div>
                <div className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UNDERSTANDING ---------------- */
function UnderstandingPreview() {
  const cards = [
    { tag: "Definition", title: "What constitutes harassment", body: "Unwelcome sexual advances, requests for sexual favours, and other verbal or physical conduct of a sexual nature." },
    { tag: "Power", title: "Imbalance & coercion", body: "Differential treatment attributable to gender — privileges or restrictions one group does not face." },
    { tag: "Form", title: "Gender-based violence", body: "Force targeted at a person because of their gender — physical, sexual, psychological harm or threats." },
    { tag: "Online", title: "Digital & retaliation", body: "Conduct that extends online, and protections against retaliation for raising concerns in good faith." },
  ];
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Understanding"
            title={<>Education is the first line of <span className="italic">prevention</span>.</>}
            description="Trauma-informed, respectful, accessible knowledge — so every member of the community can recognise, respond and refer."
          />
          <Reveal>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/understanding">Explore all topics <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
        <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <StaggerItem key={i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-deep">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{c.tag}</div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 75 / 0.4), transparent)" }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- REPORTING ---------------- */
function ReportingPathway() {
  const steps = [
    { n: "01", t: "Raise the concern", d: "Informally with a supervisor or directly with the Equal Opportunities Board (EOB)." },
    { n: "02", t: "Submit a formal complaint", d: "In writing, or recorded and transcribed by the Administrator if you are unable to write." },
    { n: "03", t: "Acknowledgement & review", d: "The Administrator forwards to the Chair of the EOB. You'll be kept informed." },
    { n: "04", t: "Investigation or mediation", d: "A panel reviews evidence; mediation may be offered with mutual agreement." },
    { n: "05", t: "Outcome & support", d: "A decision is made with full confidentiality and protection from retaliation." },
  ];
  return (
    <section className="relative py-28 md:py-36 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Reporting Pathway"
          title={<>What happens when you report — <span className="italic">step by step</span>.</>}
          description="Designed to reduce anxiety. Your rights are protected at every stage. So are those of the respondent."
        />
        <div className="mt-16 grid lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative h-full rounded-3xl border border-border bg-card p-6">
                <div className="font-display text-4xl font-semibold text-gold/80">{s.n}</div>
                <h4 className="mt-4 font-display text-base font-semibold">{s.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full h-12 px-7">
              <Link to="/reporting">Begin a confidential report <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-7">
              <Link to="/reporting">Read your rights</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- STAKEHOLDERS ---------------- */
function StakeholdersGrid() {
  const items = [
    { t: "University Council", d: "Overall responsibility for compliance with the Gender Policy." },
    { t: "Vice-Chancellor", d: "Implementation across all units of the University." },
    { t: "Academic Board", d: "Engendering curriculum and gender-inclusive scholarship." },
    { t: "Equal Opportunities Board", d: "Oversees implementation and investigates complaints." },
    { t: "CEGENSA", d: "Centre for Gender Studies & Advocacy — research, training and mentoring." },
    { t: "Anti-Sexual Harassment Committee", d: "Specialised body addressing harassment and misconduct." },
  ];
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Stakeholders"
          title={<>An institutional architecture of <span className="italic">accountability</span>.</>}
          description="Every body has a defined role. Every role has clear responsibility."
        />
        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <StaggerItem key={i}>
              <Link to="/stakeholders" className="group block h-full rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-elegant">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Scale className="h-5 w-5" />
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- IMPACT QUOTE ---------------- */
function ImpactQuote() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-30 blur-3xl" style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.13 75 / 0.3), transparent 60%)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Quote className="mx-auto h-10 w-10 text-gold" strokeWidth={1.5} />
        <Reveal delay={0.1}>
          <p className="mt-8 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-balance">
            "The dignity of the human person is protected when every member of this community is fairly heard, safely supported and equally respected."
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">University of Ghana — Equal Opportunities Board</div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FaqPreview() {
  const faqs = [
    { q: "Is my report confidential?", a: "Yes. All parties to an investigation, including their representatives, are required to maintain confidentiality to protect the integrity of proceedings." },
    { q: "What if I'm afraid of retaliation?", a: "The policy protects complainants and witnesses. Retaliation is itself a violation of the policy and is taken seriously by the EOB." },
    { q: "Can I report anonymously?", a: "Yes — initial concerns can be raised anonymously. For a formal investigation to proceed, identifying information may be needed at later stages." },
    { q: "What rights does a respondent have?", a: "Respondents are presumed innocent until proven otherwise, are informed of allegations, may respond fully, and may object to panel members." },
    { q: "How long do investigations take?", a: "Timelines vary depending on complexity. The EOB aims to resolve matters efficiently while ensuring fairness for all parties." },
  ];
  return (
    <section className="relative py-28 md:py-36 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Frequently Asked"
              title={<>Answers, in plain language.</>}
              description="The questions we hear most often — addressed with care and clarity."
            />
            <Reveal delay={0.2}>
              <Button asChild variant="outline" className="mt-8 rounded-full">
                <Link to="/faq">All questions <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-2 shadow-elegant">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`f${i}`} className="border-b last:border-b-0 px-5">
                      <AccordionTrigger className="text-left font-display text-base font-medium py-5">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-6">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EMERGENCY BANNER ---------------- */
function EmergencyBanner() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary text-primary-foreground p-10 md:p-14 shadow-deep">
          <div className="absolute inset-0 grain opacity-[0.06]" />
          <div className="absolute -top-20 -right-10 h-[280px] w-[280px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 75 / 0.5), transparent)" }} />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                <AlertTriangle className="h-3 w-3" /> Need help right now?
              </div>
              <h3 className="mt-5 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-balance">
                Confidential support is one call away.
              </h3>
              <p className="mt-4 text-primary-foreground/70 max-w-xl leading-relaxed">
                Speak privately with a trained advisor at the Equal Opportunities Board.
                You will be believed, respected and supported.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-6 bg-gold text-gold-foreground hover:bg-gold/90">
                <a href="tel:+233000000000"><Phone className="h-4 w-4" />Call now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6 bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/contact"><MessageSquareWarning className="h-4 w-4" />Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
