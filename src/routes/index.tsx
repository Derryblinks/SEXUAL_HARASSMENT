import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Lock, BookOpen, HeartHandshake, Scale,
  AlertTriangle, ChevronRight, Users, MessageSquareWarning,
  Phone, Quote
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "University of Ghana Sextortion Platform" },
      { name: "description", content: "An institutional platform of the University of Ghana for education, prevention, confidential reporting and support against sexual harassment and sextortion." },
      { property: "og:title", content: "University of Ghana Sextortion Platform" },
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
  return (
    <section className="relative min-h-[88vh] overflow-hidden text-primary-foreground pt-[112px]">
      <img
        src={heroCampus}
        alt="University of Ghana Balme Library tower at golden hour with students walking on the lawn"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      {/* Editorial gradient overlay for legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.05 260 / 0.55) 0%, oklch(0.18 0.05 260 / 0.45) 45%, oklch(0.14 0.04 260 / 0.85) 100%)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 grain opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-32 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border-l-2 border-gold pl-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/85"
        >
          University of Ghana — Gender Policy 2022
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-[3.75rem] font-medium tracking-tight leading-[1.08] text-balance"
        >
          A safe, respectful and inclusive university community.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/80 leading-relaxed text-pretty font-sans"
        >
          The University of Ghana Sextortion Platform is an institutional initiative for
          education, prevention and confidential support — guided by the UG Gender Policy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild size="lg" className="rounded-sm bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7 text-[14px] font-medium tracking-wide">
            <Link to="/reporting">
              Report safely <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-sm bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-7 text-[14px]">
            <Link to="/understanding">Learn the policy</Link>
          </Button>
        </motion.div>

        {/* hero stats — institutional, calm */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-primary-foreground/15"
        >
          {[
            { k: "100%", v: "Confidential reporting" },
            { k: "24/7", v: "Support availability" },
            { k: "09", v: "Implementation bodies" },
            { k: "2022", v: "Gender Policy in force" },
          ].map((s) => (
            <div key={s.v} className="py-6 md:py-7 pr-6 border-r border-primary-foreground/10 last:border-r-0">
              <div className="font-display text-2xl md:text-3xl font-medium text-gold tracking-tight">{s.k}</div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/65">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
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
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/40">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Quote className="mx-auto h-9 w-9 text-gold" strokeWidth={1.5} />
        <Reveal delay={0.1}>
          <p className="mt-7 font-display text-2xl md:text-[2.25rem] font-medium tracking-tight leading-[1.25] text-balance text-foreground">
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
