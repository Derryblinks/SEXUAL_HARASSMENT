import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, AlertCircle, MessageCircle, Hand, Globe, ShieldOff, Users, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/understanding")({
  head: () => ({
    meta: [
      { title: "Understanding Sexual Harassment — Aegis UG" },
      { name: "description", content: "Trauma-informed education on what sexual harassment is, its forms, power dynamics, consent, and how to recognise and respond." },
      { property: "og:title", content: "Understanding Sexual Harassment — Aegis UG" },
      { property: "og:description", content: "Recognise. Respond. Refer." },
    ],
  }),
  component: UnderstandingPage,
});

const TYPES = [
  {
    id: "verbal",
    icon: MessageCircle,
    label: "Verbal",
    title: "Verbal harassment",
    body: "Unwelcome sexual comments, jokes, requests for sexual favours, persistent personal questions or repeated invitations after a clear refusal.",
    examples: ["Sexually suggestive remarks about appearance", "Persistent unwelcome romantic advances", "Pressuring someone for a date or relationship"],
  },
  {
    id: "physical",
    icon: Hand,
    label: "Physical",
    title: "Physical conduct",
    body: "Unwelcome physical contact of a sexual nature, including touching, blocking movement, or any non-consensual physical interaction.",
    examples: ["Unwanted touching, hugging or kissing", "Blocking someone's path", "Standing too close in a way that is intimidating"],
  },
  {
    id: "online",
    icon: Globe,
    label: "Online",
    title: "Digital & online harassment",
    body: "Sexual harassment that occurs via email, messaging apps, social media, or other digital platforms within the University environment.",
    examples: ["Sending sexually explicit messages or images", "Cyberstalking or repeated unwanted contact", "Sharing intimate images without consent"],
  },
  {
    id: "power",
    icon: ShieldOff,
    label: "Power",
    title: "Power imbalance & quid pro quo",
    body: "When someone in a position of authority — a supervisor, lecturer, or senior — uses that power to demand sexual favours or condition opportunities on them.",
    examples: ["Linking grades to sexual favours", "Conditioning promotions on dating", "Threatening retaliation for refusal"],
  },
  {
    id: "gbv",
    icon: AlertCircle,
    label: "GBV",
    title: "Gender-based violence",
    body: "Force targeted at a person because of their gender — manifesting in physical, sexual or psychological harm, including threats and coercion.",
    examples: ["Sexual assault", "Coercion through threats", "Psychological intimidation rooted in gender"],
  },
  {
    id: "retaliation",
    icon: Eye,
    label: "Retaliation",
    title: "Retaliation",
    body: "Adverse action against someone for raising a complaint or supporting an investigation. Retaliation itself is a violation of the policy.",
    examples: ["Punishing a complainant academically", "Excluding someone from opportunities", "Threats against witnesses"],
  },
];

function UnderstandingPage() {
  const [active, setActive] = useState(TYPES[0].id);
  const current = TYPES.find((t) => t.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Education · Awareness"
        title={<>Understanding harassment is the first <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>act of prevention</span>.</>}
        description="Trauma-informed, respectful and accessible education for every member of our community. Recognise the signs. Know the language. Respond with care."
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
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
                <p className="font-display text-2xl leading-relaxed text-pretty">
                  Interaction between individuals — of the opposite or same gender — characterised by{" "}
                  <em className="text-primary">unwelcome sexual advances</em>,{" "}
                  <em className="text-primary">unwelcome requests for sexual favours</em>, and other{" "}
                  <em className="text-primary">verbal or physical conduct of a sexual nature</em>.
                </p>
                <p className="mt-6 text-sm text-muted-foreground">As defined in the Sexual Harassment & Misconduct Policy of the University of Ghana.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {[
                  { t: "Unwelcome", d: "Conduct the recipient has not invited and does not want." },
                  { t: "Sexual nature", d: "Verbal, physical or visual conduct of a sexual character." },
                  { t: "Impact-based", d: "What matters is the impact on the person, not solely intent." },
                ].map((p) => (
                  <div key={p.t} className="rounded-2xl border border-border bg-card p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-gold font-medium">{p.t}</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Types interactive */}
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Forms of Harassment"
            title={<>Six contexts. One shared standard of <span className="italic">respect</span>.</>}
            description="Harassment takes many forms. Recognising them is how we protect each other."
          />
          <div className="mt-16 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto">
              {TYPES.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`group flex-shrink-0 lg:flex-shrink text-left flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all ${
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
                  className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
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

      {/* Consent */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Consent"
            title={<>What consent looks like.</>}
            description="Consent is freely given, reversible, informed, enthusiastic and specific."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Freely given", d: "No pressure, manipulation or intoxication." },
              { t: "Reversible", d: "Anyone can change their mind at any time." },
              { t: "Informed", d: "All parties have the full picture." },
              { t: "Enthusiastic", d: "Yes, eagerly — not silence or hesitation." },
              { t: "Specific", d: "Yes to one act is not yes to all." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <Heart className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <div className="mt-4 font-display text-base font-semibold">{c.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Bystander */}
      <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
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
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6">
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
                <Link to="/reporting">Begin a report <ArrowRight className="h-4 w-4" /></Link>
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