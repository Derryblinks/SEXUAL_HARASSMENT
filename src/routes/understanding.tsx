import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  AlertCircle,
  MessageCircle,
  Hand,
  Globe,
  ShieldOff,
  Users,
  Eye,
  Heart,
  CloudLightning,
  ShieldAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/understanding")({
  head: () => ({
    meta: [
      { title: "Education — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Institutional education on sexual harassment and misconduct, consent, hostile environments, reporting and support under the University of Ghana policy." },
      { property: "og:title", content: "Education — Sexual Harassment & Misconduct | University of Ghana" },
      { property: "og:description", content: "Recognise misconduct. Understand consent. Know how to report and get support." },
    ],
  }),
  component: UnderstandingPage,
});

const TYPES = [
  {
    id: "verbal",
    icon: MessageCircle,
    label: "Verbal / written",
    title: "Verbal, written & electronic conduct",
    body: "Unwelcome sexual advances, propositions, epithets, jokes, innuendo, gossip about sexual activity, offensive messages (including email, SMS and WhatsApp), and passing pornographic or degrading material.",
    examples: ["Sexual jokes or comments about someone’s body or clothing", "Unwanted love letters, calls or gifts", "Sharing sexual images or messages without consent"],
  },
  {
    id: "physical",
    icon: Hand,
    label: "Physical / non-verbal",
    title: "Non-verbal & physical conduct",
    body: "Unwelcome touching, patting, pinching, brushing, grabbing, kisses, blocking movement, leering, whistling, heckling, indecent exposure, and other physical or bodily conduct of a sexual nature.",
    examples: ["Unnecessary hugging or touching", "Unwelcome kissing or fondling", "Intimidating proximity or gestures"],
  },
  {
    id: "online",
    icon: Globe,
    label: "Online / digital",
    title: "Online harassment & misuse of tech",
    body: "Conduct of a sexual nature through digital channels that affects study, work or safety — including cyberstalking, unwanted electronic contact, and non-consensual recording or sharing of intimate images.",
    examples: ["Harassing DMs or group chats", "Sharing intimate images without consent", "Tracking or monitoring someone online in a way that induces fear"],
  },
  {
    id: "power",
    icon: ShieldOff,
    label: "Authority",
    title: "Abuse of authority & quid pro quo",
    body: "Using a position of power to condition employment, grades, recommendations or opportunities on sexual submission; punishing refusal; or promising rewards for sexual favours. Student–teacher and supervisor–subordinate relationships carry heightened risk.",
    examples: ["Hints that grades depend on sexual cooperation", "Threatening career harm after refusal", "Undue favours to pressure someone sexually"],
  },
  {
    id: "hostile",
    icon: CloudLightning,
    label: "Hostile climate",
    title: "Hostile environment",
    body: "Conduct that is sufficiently severe or pervasive to unreasonably interfere with work or study, or to create an intimidating, hostile or offensive environment for a reasonable person.",
    examples: ["Persistent sexual display materials in shared spaces", "Ongoing sexual comments that change how safe someone feels at work or class", "Patterns of humiliation with sexual overtones"],
  },
  {
    id: "severe",
    icon: AlertCircle,
    label: "Assault / abuse",
    title: "Sexual assault, abuse & exploitative conduct",
    body: "Includes non-consensual sexual contact or intercourse, sexual abuse, and taking sexual advantage through incapacitation, recording private sexual activity without consent, voyeurism, or degrading sexual conduct.",
    examples: ["Sex without valid consent", "Drugging or tying someone to gain sexual access", "Recording intimate acts without consent"],
  },
  {
    id: "stalking",
    icon: Eye,
    label: "Stalking",
    title: "Sexual intimidation & stalking",
    body: "Threats of sexual assault, indecent exposure, and stalking (including in cyberspace): repeated unwelcome attention that would cause a reasonable person to fear for their safety or well-being.",
    examples: ["Following someone or waiting near places they frequent", "Repeated harassing calls or messages", "Vandalism or threats after rejection"],
  },
  {
    id: "retaliation",
    icon: ShieldAlert,
    label: "Retaliation",
    title: "Retaliation",
    body: "Threats, intimidation, reprisals, or adverse education or employment actions against someone who reports in good faith, assists a report, or participates in an investigation. Retaliation is treated as misconduct under the same procedures.",
    examples: ["Spreading gossip to punish a reporter", "Removing opportunities after a complaint", "Pressure on witnesses"],
  },
];

function UnderstandingPage() {
  const [active, setActive] = useState(TYPES[0].id);
  const current = TYPES.find((t) => t.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Education · Sexual harassment & misconduct"
        title={<>Understanding misconduct is the first <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>act of prevention</span>.</>}
        description="Trauma-informed education grounded in the University of Ghana Sexual Harassment and Misconduct Policy — for students, staff and everyone the University serves."
        bgImage="/education-hero.png"
      />

      {/* Definition */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Definition"
              title={<>What sexual harassment is.</>}
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-sm border border-slate-200 border border-border bg-card p-8 md:p-10 shadow-elegant">
                <p className="font-display text-2xl leading-relaxed text-pretty">
                  Sexual harassment means <em className="text-primary">unwelcome conduct of a sexual nature</em>, including advances, requests for sexual favours, and verbal, non-verbal, written, electronic, graphic or physical behaviour when submission is tied to outcomes, affects evaluations, or{" "}
                  <em className="text-primary">unreasonably interferes</em> with work or study or creates an{" "}
                  <em className="text-primary">intimidating, hostile or offensive</em> environment.
                </p>
                <p className="mt-6 text-sm text-muted-foreground">Paraphrased from the University of Ghana Sexual Harassment and Misconduct Policy (2017).</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {[
                  { t: "Unwelcome", d: "Conduct the recipient has not invited and does not want." },
                  { t: "Power context", d: "In unequal relationships, “voluntary” participation alone does not prove conduct was welcome." },
                  { t: "Outcomes & climate", d: "Harassment includes conditioning opportunities on sex and conduct that poisons the environment." },
                ].map((p, i) => (
                  <motion.div
                    key={p.t}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-sm border border-slate-200 border border-border bg-card p-5 overflow-hidden cursor-default"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(120% 80% at 50% 0%, oklch(0.78 0.13 75 / 0.10), transparent 70%)" }} />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs text-muted-foreground/70">0{i + 1}</span>
                        <div className="text-xs uppercase tracking-[0.18em] text-gold font-medium">{p.t}</div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Types interactive */}
      <section className="py-28 md:py-36 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Forms of misconduct"
            title={<>Eight lenses on the same standard of <span className="italic">dignity</span>.</>}
            description="The policy lists examples from campus life — online and in person. These modules summarise how misconduct commonly appears."
          />
          <div className="mt-16 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto">
              {TYPES.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`group flex-shrink-0 lg:flex-shrink text-left flex items-center gap-3 rounded-sm border border-slate-200 border px-4 py-3.5 transition-all ${
                      isActive
                        ? "border-primary bg-card shadow-elegant"
                        : "border-border bg-card/50 hover:bg-card"
                    }`}
                  >
                    <div className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
                      <t.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t.label}</div>
                      <div className="text-xs text-muted-foreground hidden lg:block">{t.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-sm border border-slate-200 border border-border bg-card p-8 md:p-10 shadow-elegant"
                >
                  <current.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">{current.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{current.body}</p>
                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Examples</div>
                    <ul className="mt-4 space-y-3">
                      {current.examples.map((e) => (
                        <li key={e} className="flex items-start gap-3 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span className="leading-relaxed">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Global Context */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold text-[#1f3a5f] tracking-tight mb-8">Research & Global Context</h2>
              
              <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  The University of Ghana's policy does not exist in a vacuum. It is informed by global best practices,
                  international human rights law, and localized academic research into the dynamics of campus safety in
                  West Africa.
                </p>
                <p>
                  Our <span className="font-bold text-[#1f3a5f]">Knowledge Center</span> provides access to peer-reviewed research papers and institutional studies that
                  examine the socio-economic and psychological drivers of sexual misconduct. By understanding the root
                  causes, our community can better implement preventative strategies.
                </p>

                <div className="bg-[#F8FAFC] border-l-4 border-[#c59d5f] p-8 my-10">
                  <p className="text-lg md:text-xl font-medium text-[#1f3a5f] italic leading-relaxed">
                    "Knowledge is the prerequisite for transformation. We provide the intellectual tools
                    needed to dismantle institutional harassment."
                  </p>
                </div>

                <p>
                  We encourage faculty members to utilize these resources in their curriculum and for students to engage
                  with the research for academic projects related to social justice and institutional reform.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* External Links Box */}
              <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
                <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-6">External Links</h3>
                <div className="space-y-4">
                  {[
                    "Ministry of Gender (Ghana)",
                    "UN Women - African Region",
                    "Global Campus Safety Alliance",
                    "Ghana Police Service",
                  ].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="flex items-center justify-between text-[14px] text-slate-600 hover:text-[#1f3a5f] transition-colors group"
                    >
                      <span>{link}</span>
                      <span className="text-slate-300 group-hover:text-[#1f3a5f]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Physical Archive Box */}
              <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="h-6 w-6 text-[#1f3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3">Physical Archive</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed">
                      Hard copies available at the Balme Library<br />
                      (Reference Section) and ASHC Secretariat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consent */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Consent"
            title={<>What valid consent is — and is not.</>}
            description="Under the policy, consent achieved through force, threat, coercion or incapacitation is not consent. Sexual assault includes intercourse or contact without the other person’s consent."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Voluntary", d: "Agreement without force, threat or coercion." },
              { t: "Ongoing", d: "Consent to one moment or act is not automatic consent to another." },
              { t: "Clear capacity", d: "Incapacitation undermines the ability to consent." },
              { t: "No coercion", d: "Fear of consequences is not freely given consent." },
              { t: "Boundaries", d: "Silence, passivity or prior intimacy alone are not substitutes for clear agreement." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full rounded-sm border border-slate-200 border border-border bg-card p-6 overflow-hidden cursor-default"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(120% 80% at 50% 0%, oklch(0.78 0.13 75 / 0.12), transparent 70%)" }} />
                  <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="relative">
                    <div className="h-10 w-10 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-500">
                      <Heart className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 font-display text-base font-semibold">{c.t}</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Procedures overview */}
      <section id="procedures" className="py-28 md:py-36 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Institutional procedures"
            title={<>Reporting, investigation &amp; support — at a glance.</>}
            description="These steps summarise Annex III of the policy. They are not a substitute for the full text; they help you know what the University framework provides."
          />
          <Reveal>
            <div className="mt-12 max-w-3xl rounded-sm border border-slate-200 border border-border bg-card p-2 shadow-elegant">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Informal routes",
                    a: "You may tell the person to stop, ask someone you trust to intervene confidentially, or request mediation through the Anti-Sexual Harassment Committee if the respondent agrees. Not using informal routes cannot be held against you later.",
                  },
                  {
                    q: "Severe or extreme cases",
                    a: "For incidents such as attempted rape, rape, sexual battery or assault with a weapon, the policy directs that complainants be counselled to report to the Police and to file a formal complaint before the Committee rather than relying only on informal resolution.",
                  },
                  {
                    q: "Formal complaint",
                    a: "Speak orally to a Committee member (who explains the process without dissuading you), then lodge a written complaint with details of behaviour, dates, places and names where possible. Assistance is available if you cannot write.",
                  },
                  {
                    q: "Investigation & timing",
                    a: "The respondent is notified and may respond in writing within seven days. An adjudication panel may hear parties, consider evidence including messages and medical material, and complete the process within 60 working days unless the Vice-Chancellor approves an extension.",
                  },
                  {
                    q: "Sanctions & appeals",
                    a: "Where a violation is found, sanctions may range from apology to suspension, dismissal and other measures, without prejudice to criminal proceedings where applicable. Either party may appeal to the University of Ghana Appeals Board.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={item.q} value={`proc-${i}`} className="border-b last:border-b-0 px-5">
                    <AccordionTrigger className="text-left font-display text-base font-medium py-5">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-4">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bystander */}
      <section id="bystander" className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.2em] text-gold">Bystander Action</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              See something. Say something. Stand with someone.
            </h2>
            <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed text-pretty max-w-xl">
              Every member of the University community has a role in upholding dignity.
              You don't need to confront — you just need to care.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              { t: "Direct", d: "Safely interrupt the behaviour." },
              { t: "Distract", d: "Create a reason to break the moment." },
              { t: "Delegate", d: "Get help from someone with authority." },
              { t: "Document", d: "Record what happened, when, where." },
            ].map((s) => (
              <Reveal key={s.t}>
                <div className="rounded-sm border border-slate-200 border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6">
                  <div className="font-display text-2xl font-semibold text-gold">{s.t}</div>
                  <div className="mt-2 text-sm text-primary-foreground/70">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Users className="mx-auto h-10 w-10 text-gold" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-tight">If you've experienced harassment — you are not alone.</h3>
            <p className="mt-4 text-muted-foreground">Confidential support is available. You will be believed, respected and supported.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/reporting" hash="report-form">Begin a report <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/contact">Talk to someone</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}