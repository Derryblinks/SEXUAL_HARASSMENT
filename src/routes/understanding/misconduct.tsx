import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Hand,
  Globe,
  ShieldOff,
  CloudLightning,
  AlertCircle,
  Eye,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/understanding/misconduct")({
  head: () => ({
    meta: [
      { title: "Recognising Misconduct — SpeakSafe UG" },
      {
        name: "description",
        content:
          "Learn to identify the different forms of sexual harassment and misconduct recognised by the University of Ghana policy.",
      },
    ],
  }),
  component: MisconductPage,
});

const TYPES = [
  {
    id: "verbal",
    icon: MessageCircle,
    label: "Verbal & Written",
    title: "Verbal, written & electronic conduct",
    body: "Unwelcome sexual advances, propositions, epithets, jokes, innuendo, and offensive messages including email, SMS, WhatsApp, and social media. Sharing pornographic or degrading material.",
    examples: [
      "Sexual jokes or comments about someone's body",
      "Unwanted love letters or persistent calls",
      "Sharing sexual images without consent",
      "Sending harassing messages in group chats",
    ],
    color: "bg-blue-50 text-blue-600",
    borderActive: "border-blue-300",
  },
  {
    id: "physical",
    icon: Hand,
    label: "Physical & Non-verbal",
    title: "Non-verbal & physical conduct",
    body: "Unwelcome touching, patting, pinching, brushing, grabbing, kisses, blocking movement, leering, whistling, heckling, indecent exposure, and other physical conduct of a sexual nature.",
    examples: [
      "Unnecessary or persistent hugging",
      "Unwelcome touching or fondling",
      "Intimidating proximity or threatening gestures",
      "Blocking someone's path or exit",
    ],
    color: "bg-orange-50 text-orange-600",
    borderActive: "border-orange-300",
  },
  {
    id: "online",
    icon: Globe,
    label: "Online & Digital",
    title: "Online harassment & misuse of technology",
    body: "Conduct of a sexual nature through digital channels — including cyberstalking, unwanted electronic contact, and non-consensual recording or sharing of intimate images.",
    examples: [
      "Harassing DMs, calls, or group chats",
      "Sharing intimate images without consent",
      "Monitoring or tracking someone's online activity",
      "Using technology to coerce sexual compliance",
    ],
    color: "bg-purple-50 text-purple-600",
    borderActive: "border-purple-300",
  },
  {
    id: "power",
    icon: ShieldOff,
    label: "Abuse of Authority",
    title: "Abuse of authority & quid pro quo",
    body: "Using a position of power to condition employment, grades, recommendations, or opportunities on sexual submission; punishing refusal; or promising rewards for sexual favours.",
    examples: [
      "Hints that grades depend on sexual cooperation",
      "Threatening academic or career harm after refusal",
      "Promises of promotion in exchange for sexual favours",
      "Favourable treatment conditioned on sexual compliance",
    ],
    color: "bg-amber-50 text-amber-600",
    borderActive: "border-amber-300",
  },
  {
    id: "hostile",
    icon: CloudLightning,
    label: "Hostile Environment",
    title: "Hostile environment",
    body: "Conduct that is sufficiently severe or pervasive to unreasonably interfere with work or study, or to create an intimidating, hostile or offensive environment for a reasonable person.",
    examples: [
      "Persistent sexual display materials in shared spaces",
      "Ongoing sexual comments that affect how safe someone feels",
      "Patterns of humiliation with sexual overtones",
      "A culture that tolerates or normalises harassment",
    ],
    color: "bg-slate-100 text-slate-700",
    borderActive: "border-slate-400",
  },
  {
    id: "assault",
    icon: AlertCircle,
    label: "Sexual Assault",
    title: "Sexual assault, abuse & exploitation",
    body: "Non-consensual sexual contact or intercourse, sexual abuse, and conduct that exploits incapacitation, recording private sexual activity without consent, or voyeurism.",
    examples: [
      "Sexual contact or intercourse without consent",
      "Drugging or incapacitating someone to gain sexual access",
      "Recording intimate acts without consent",
      "Voyeurism or distributing intimate images",
    ],
    color: "bg-red-50 text-red-600",
    borderActive: "border-red-300",
  },
  {
    id: "stalking",
    icon: Eye,
    label: "Stalking",
    title: "Sexual intimidation & stalking",
    body: "Threats of sexual assault, indecent exposure, and stalking — including repeated unwelcome attention that causes a reasonable person to fear for their safety or well-being.",
    examples: [
      "Following or waiting near places someone frequents",
      "Repeated harassing calls, messages, or contact",
      "Vandalism or threats after rejection",
      "Cyberstalking or tracking location",
    ],
    color: "bg-rose-50 text-rose-600",
    borderActive: "border-rose-300",
  },
  {
    id: "retaliation",
    icon: ShieldAlert,
    label: "Retaliation",
    title: "Retaliation",
    body: "Threats, intimidation, reprisals, or adverse academic or employment actions against someone who reports in good faith, assists a report, or participates in an investigation.",
    examples: [
      "Spreading gossip to punish a reporter",
      "Removing opportunities or benefits after a complaint",
      "Pressure on witnesses to stay silent",
      "Deliberate exclusion or marginalisation after reporting",
    ],
    color: "bg-fuchsia-50 text-fuchsia-600",
    borderActive: "border-fuchsia-300",
  },
];

function MisconductPage() {
  const [active, setActive] = useState(TYPES[0].id);
  const current = TYPES.find((t) => t.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Learn · Recognising Misconduct"
        title={
          <>
            Eight forms of conduct that violate{" "}
            <span
              className="italic"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              dignity
            </span>
            .
          </>
        }
        description="Sexual harassment takes many forms — verbal, physical, digital, and environmental. The University of Ghana policy names them all. Understanding them is the first step toward prevention."
      />

      {/* Interactive explorer */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Forms of misconduct"
            title="Select a category to explore."
            description="Each form of misconduct is recognised under the University's policy and subject to the same formal process."
          />

          <div className="mt-14 grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {TYPES.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`flex-shrink-0 lg:flex-shrink text-left flex items-center gap-3 rounded-sm border px-4 py-3 transition-all ${
                      isActive
                        ? `border-[#1f3a5f] bg-white`
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-[#1f3a5f] text-white" : "bg-slate-100 text-slate-500"}`}>
                      <t.icon className="h-4 w-4" />
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap lg:whitespace-normal ${isActive ? "text-[#1f3a5f]" : "text-slate-600"}`}>
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-slate-200 rounded-sm p-8 md:p-10"
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 ${current.color}`}>
                    <current.icon className="h-3.5 w-3.5" />
                    {current.label}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1f3a5f] mb-4">
                    {current.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-pretty mb-8">
                    {current.body}
                  </p>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                      Common examples
                    </div>
                    <ul className="space-y-3">
                      {current.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-[#c59d5f] shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="leading-relaxed">{ex}</span>
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

      {/* What to do */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="What to do"
                title="If you witness or experience misconduct."
                description="You have the right to report, to seek support, and to remain confidential. The University's process is designed to protect you."
              />
              <div className="mt-10 space-y-4">
                {[
                  { step: "01", action: "Document what happened — date, time, location, and any witnesses." },
                  { step: "02", action: "Reach out to the Anti-Sexual Harassment Committee (ASHC) or a trusted staff member." },
                  { step: "03", action: "Submit a formal report through the SpeakSafe platform or in person." },
                  { step: "04", action: "Access confidential counselling and legal support provided by the University." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 p-4 border border-slate-200 rounded-sm bg-white">
                    <span className="text-2xl font-bold text-[#c59d5f] shrink-0 leading-none pt-0.5">{item.step}</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 bg-[#1f3a5f] rounded-sm p-10">
              <div className="text-[11px] font-bold tracking-widest text-[#c59d5f] uppercase mb-4">
                Remember
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Retaliation is also misconduct.
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Any adverse action taken against you for reporting, cooperating with an investigation, or supporting another person's report is treated as a separate and serious violation under University policy.
              </p>
              <p className="text-white/70 leading-relaxed">
                You are protected whether your report is resolved in your favour or not — provided you acted in good faith.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-sm bg-white text-[#1f3a5f] hover:bg-slate-100 font-bold text-[12px] uppercase tracking-wider">
                  <Link to="/reporting">Report an Incident <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-sm border-white/20 text-white hover:bg-white/10 font-bold text-[12px] uppercase tracking-wider">
                  <Link to="/resources">Get Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue learning */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Continue learning</div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/understanding" className="group p-6 bg-white border border-slate-200 rounded-sm hover:border-[#1f3a5f] transition-colors">
              <div className="text-[11px] font-bold text-[#c59d5f] uppercase tracking-widest mb-2">Foundation</div>
              <div className="font-semibold text-[#1f3a5f] group-hover:underline">What is Sexual Harassment?</div>
              <p className="text-xs text-slate-500 mt-1">Definition, scope and policy overview</p>
            </Link>
            <Link to="/understanding/consent" className="group p-6 bg-white border border-slate-200 rounded-sm hover:border-[#1f3a5f] transition-colors">
              <div className="text-[11px] font-bold text-[#c59d5f] uppercase tracking-widest mb-2">Core Concept</div>
              <div className="font-semibold text-[#1f3a5f] group-hover:underline">Consent & Power Dynamics</div>
              <p className="text-xs text-slate-500 mt-1">What valid consent means in practice</p>
            </Link>
            <Link to="/quiz" className="group p-6 bg-white border border-slate-200 rounded-sm hover:border-[#1f3a5f] transition-colors">
              <div className="text-[11px] font-bold text-[#c59d5f] uppercase tracking-widest mb-2">Self-Assessment</div>
              <div className="font-semibold text-[#1f3a5f] group-hover:underline">Take the Awareness Quiz</div>
              <p className="text-xs text-slate-500 mt-1">Test your understanding</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
