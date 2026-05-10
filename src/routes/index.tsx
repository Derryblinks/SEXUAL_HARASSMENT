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
      { title: "Sexual Harassment Awareness & Reporting — University of Ghana" },
      { name: "description", content: "Official University of Ghana platform for sexual harassment and misconduct education, prevention, confidential reporting, and support under the Sexual Harassment and Misconduct Policy." },
      { property: "og:title", content: "Sexual Harassment Awareness & Reporting — University of Ghana" },
      { property: "og:description", content: "Education, safe reporting, and support aligned with the UG Sexual Harassment and Misconduct Policy." },
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
          University of Ghana — Sexual Harassment &amp; Misconduct Policy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-[3.75rem] font-medium tracking-tight leading-[1.08] text-balance"
        >
          Awareness, prevention, and safe reporting for every member of our community.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/80 leading-relaxed text-pretty font-sans"
        >
          This is an official University of Ghana institutional platform focused on sexual harassment
          awareness, misconduct prevention, consent education, victim support, and accountable reporting —
          grounded in the Sexual Harassment and Misconduct Policy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild size="lg" className="rounded-sm bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7 text-[14px] font-medium tracking-wide">
            <Link to="/reporting" hash="report-form">
              Report safely <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-sm bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-7 text-[14px]">
            <Link to="/understanding">Education hub</Link>
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
            { k: "All", v: "Students, staff & agents covered" },
            { k: "1 yr", v: "Report promptly (policy guidance)" },
            { k: "60", v: "Working days target for formal process" },
            { k: "2017", v: "Policy gazette foundation" },
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
    "Confidential processes",
    "Policy-grounded",
    "Non-retaliation",
    "Survivor-centered",
    "Institutionally accountable",
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
              description="The University is committed to a community free from intimidation, exploitation and abuse — where work and study happen with respect, and where sexual harassment and misconduct are prohibited, investigated and sanctioned under clear institutional procedures."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> From the policy
                </div>
                <p className="mt-5 font-display text-xl leading-relaxed text-pretty">
                  "The University seeks to provide an atmosphere of work and study in which all individuals are treated with respect and dignity… [This policy] defines prohibited conduct, outlines procedures for reporting violations, conduct of investigations, sanctions, non-retaliatory mechanisms and establishes the Anti-Sexual Harassment Committee."
                </p>
                <div className="mt-6 text-xs text-muted-foreground">— University of Ghana Sexual Harassment and Misconduct Policy</div>
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
    { icon: ShieldCheck, title: "Prohibited conduct defined", body: "Sexual harassment and related misconduct — including quid pro quo, hostile environments, and abuse of authority in teaching or employment relationships.", href: "/about" },
    { icon: Scale, title: "Formal & informal pathways", body: "Direct communication, trusted intervention, optional mediation where appropriate, and formal complaints to the Anti-Sexual Harassment Committee.", href: "/reporting" },
    { icon: BookOpen, title: "Education & training", body: "Wide dissemination of the policy, materials on reporting, and training for those who receive informal disclosures.", href: "/understanding" },
    { icon: Users, title: "Institutional accountability", body: "Oversight by Council and the Vice-Chancellor; CEGENSA supports implementation and crisis counselling.", href: "/about" },
    { icon: Lock, title: "Confidentiality", body: "The Committee maintains confidentiality of reports and proceedings to protect the integrity of investigations.", href: "/reporting" },
    { icon: HeartHandshake, title: "Victim protection & non-retaliation", body: "Complainants and participants should not face retaliation or stigmatisation; retaliation may be reported under the same procedures.", href: "/reporting" },
  ];
  return (
    <section className="relative py-28 md:py-36 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Policy in practice"
          title={<>Six anchors for a safer campus culture.</>}
          description="Drawn from the Sexual Harassment and Misconduct Policy — what the University commits to teach, prevent, investigate and uphold."
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
    { v: "14", l: "Member Anti-Sexual Harassment Committee (with gender parity)" },
    { v: "60", l: "Working days to complete formal investigation (extendable with VC approval)" },
    { v: "7d", l: "Written response window for respondents after notification" },
    { v: "All", l: "Campus locations, vehicles & controlled activities — policy scope" },
  ];
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 grain opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why it matters"
              title={<span className="text-primary-foreground">Clear timelines and structures — so people know what to expect.</span>}
              description={<span className="text-primary-foreground/70">The policy sets out who investigates, how confidentiality works, and how outcomes and sanctions are approached — alongside rights for complainants and respondents.</span>}
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
    { tag: "Definition", title: "Sexual harassment", body: "Unwelcome conduct of a sexual nature — including when submission is tied to outcomes, or when conduct creates an intimidating, hostile or offensive environment." },
    { tag: "Power", title: "Authority & consent", body: "Where there is a power imbalance, “voluntary” participation does not on its own show conduct was welcome. Certain supervisory relationships are prohibited." },
    { tag: "Misconduct", title: "Other prohibited behaviour", body: "Includes sexual assault, abuse, exploitative or degrading acts, stalking, intimidation, and retaliation after rejection or reporting." },
    { tag: "Support", title: "Reporting & care", body: "Formal and informal options, CEGENSA counselling support, and measures to reduce retaliation during investigation." },
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
    { n: "01", t: "Consider informal options", d: "You may ask that unwelcome behaviour stop, seek a trusted intermediary, or request mediation through the Committee where both parties agree." },
    { n: "02", t: "Severe cases", d: "For extreme incidents (e.g. sexual assault), you should be counselled to report to Police and lodge a formal complaint before the Committee." },
    { n: "03", t: "Formal complaint", d: "Present your grievance orally to a Committee member, then submit a written complaint (the Committee can assist if you cannot write)." },
    { n: "04", t: "Response & hearing", d: "The respondent is notified; an adjudication panel may hear parties, consider evidence, and take steps to pre-empt retaliation." },
    { n: "05", t: "Outcome & review", d: "Findings and recommended sanctions go to institutional authorities; appeals lie with the University Appeals Board." },
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
              <Link to="/reporting" hash="report-form">Begin a confidential report <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-7">
              <Link to="/reporting" hash="report-form">Read your rights</Link>
            </Button>
          </div>
        </Reveal>
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
          <div className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">University of Ghana — Anti-Sexual Harassment Committee &amp; CEGENSA</div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FaqPreview() {
  const faqs = [
    { q: "Is my report confidential?", a: "The Anti-Sexual Harassment Committee maintains confidentiality of matters reported to it and of proceedings. Parties and representatives are advised that confidentiality protects the integrity of the process." },
    { q: "What if I'm afraid of retaliation?", a: "The policy requires measures to pre-empt retaliation and treats reports of retaliation under the same procedures. Good-faith reporting and participation should not be punished." },
    { q: "Can I use informal resolution first?", a: "Yes — unless the matter is severe. Choosing not to use informal routes cannot be held against you in a later formal complaint." },
    { q: "What rights does a respondent have?", a: "A respondent is presumed innocent until a final finding; both parties may be represented by counsel (with procedural limits during hearings)." },
    { q: "How long do formal investigations take?", a: "The policy targets completion within 60 working days of the request for formal investigation, unless an extension is approved by the Vice-Chancellor." },
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
                Reach CEGENSA&apos;s sexual harassment crisis and counselling unit or the Anti-Sexual Harassment Committee intake.
                You will be treated with respect, dignity and care.
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
