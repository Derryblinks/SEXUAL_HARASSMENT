import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  AlertCircle,
  UserCheck,
  ArrowRight,
  Heart,
  Lock,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/understanding/consent")({
  head: () => ({
    meta: [
      { title: "Consent & Power Dynamics — SpeakSafe UG" },
      {
        name: "description",
        content:
          "Understand what valid consent means and how power imbalances affect it within the University of Ghana community.",
      },
    ],
  }),
  component: ConsentPage,
});

const consentPillars = [
  {
    icon: Heart,
    title: "Freely Given",
    body: "Consent must be a genuine choice — not the result of force, threat, coercion, or undue pressure from someone in a position of authority.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing & Reversible",
    body: "Consent to one act does not imply consent to others. It can be withdrawn at any point, and withdrawal must always be respected.",
  },
  {
    icon: UserCheck,
    title: "Informed",
    body: "All parties must have a clear and accurate understanding of what is being agreed to. Deception or withholding information invalidates consent.",
  },
  {
    icon: Lock,
    title: "Capacity",
    body: "A person who is incapacitated through alcohol, drugs, sleep, or fear cannot legally or morally provide valid consent.",
  },
  {
    icon: ShieldCheck,
    title: "Enthusiastic",
    body: "Silence, passivity, or a lack of resistance does not equal consent. Agreement should be clear, active, and enthusiastic.",
  },
  {
    icon: Scale,
    title: "Specific",
    body: "Consent to one context or activity does not extend to another. Each situation requires its own clear agreement.",
  },
];

function ConsentPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Consent & Power Dynamics"
        title={
          <>
            Understanding{" "}
            <span
              className="italic"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              consent
            </span>{" "}
            and authority.
          </>
        }
        description="The University of Ghana policy recognises that where power imbalances exist, the ability to freely say 'no' must be carefully protected."
      />

      {/* Definition */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="The standard"
                title="What is valid consent?"
                description="Under institutional policy, consent achieved through force, threat, coercion or incapacitation is not consent — regardless of any prior relationship."
              />
              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#c59d5f] rounded-sm">
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Submission is not the same as consent. In the context of authority, apparent agreement may be shaped by fear rather than free choice."
                </p>
                <p className="mt-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  UG Sexual Harassment & Misconduct Policy (2017)
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <StaggerGroup className="grid sm:grid-cols-2 gap-5">
                {consentPillars.map((pillar, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="group p-6 border border-slate-200 rounded-sm bg-white hover:border-[#c59d5f]/40 transition-colors cursor-default"
                    >
                      <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#c59d5f]/10 transition-colors">
                        <pillar.icon className="h-5 w-5 text-[#1f3a5f] group-hover:text-[#c59d5f] transition-colors" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-semibold text-[#1f3a5f] mb-2">{pillar.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{pillar.body}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Power dynamics */}
      <section className="py-24 md:py-32 bg-[#1f3a5f] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-4">
                Power dynamics
              </div>
              <h2 className="font-display text-4xl font-semibold mb-6 leading-tight">
                When authority shapes "yes".
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                The University policy explicitly acknowledges that relationships between supervisors and subordinates — or lecturers and students — carry an inherent power imbalance that can compromise the ability to consent freely.
              </p>
              <p className="text-white/70 leading-relaxed">
                A person may comply not because they genuinely agree, but because they fear consequences to their academic performance, employment, or safety. The policy treats any sexual conduct conditioned on such compliance as misconduct.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Academic authority",
                  desc: "Grading, thesis supervision, academic recommendations, and progression decisions.",
                  examples: ["Lecturer ↔ Student", "Supervisor ↔ Postgraduate"],
                },
                {
                  label: "Employment authority",
                  desc: "Hiring, promotion, performance reviews, and workload allocation.",
                  examples: ["Manager ↔ Staff", "PI ↔ Research Assistant"],
                },
                {
                  label: "Institutional power",
                  desc: "Access to resources, facilities, opportunities, or platforms controlled by one party.",
                  examples: ["Administrator ↔ Student", "Senior ↔ Junior Staff"],
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-6 border border-white/10 bg-white/5 rounded-sm">
                    <div className="text-[11px] font-bold text-[#c59d5f] uppercase tracking-widest mb-2">
                      {item.label}
                    </div>
                    <p className="text-sm text-white/70 mb-3">{item.desc}</p>
                    <div className="flex gap-3 flex-wrap">
                      {item.examples.map((ex) => (
                        <span key={ex} className="text-[11px] bg-white/10 px-2 py-1 rounded-sm text-white/60">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Common misconceptions"
            title="Myths about consent — corrected."
            description="Misunderstandings about consent contribute to harmful environments. Understanding what consent is not is as important as understanding what it is."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { myth: "Silence or no response means yes.", fact: "Consent requires a clear, affirmative signal. Silence or passive behaviour is not consent." },
              { myth: "Prior consent covers future situations.", fact: "Consent is specific to each instance. Previous agreement does not extend to new acts." },
              { myth: "Being in a relationship implies consent.", fact: "Being in a relationship — including marriage — does not create a standing consent to all sexual activity." },
              { myth: "Dressing or acting provocatively implies consent.", fact: "Appearance, behaviour, or past conduct are never indicators of consent to sexual acts." },
              { myth: "Intoxication loosens the requirement for consent.", fact: "Incapacitation due to alcohol or drugs removes the ability to consent. Taking advantage of this is assault." },
              { myth: "Consent given under pressure is still consent.", fact: "Any agreement obtained through fear, coercion, or exploitation of authority is not valid consent." },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="border border-slate-200 rounded-sm overflow-hidden">
                  <div className="bg-red-50 px-5 py-4 border-b border-slate-200">
                    <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Myth</div>
                    <p className="text-sm text-slate-700 font-medium">{item.myth}</p>
                  </div>
                  <div className="bg-white px-5 py-4">
                    <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Fact</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.fact}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <AlertCircle className="mx-auto h-10 w-10 text-[#c59d5f] mb-6" strokeWidth={1.5} />
            <h2 className="font-display text-3xl font-semibold text-[#1f3a5f] mb-4">
              Experienced a violation? You have options.
            </h2>
            <p className="text-slate-500 mb-8">
              The University provides confidential support and a formal process for reporting. You will be believed and supported.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-[#1f3a5f] hover:bg-[#152a47]">
                <Link to="/reporting">Begin a Report <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-slate-300">
                <Link to="/understanding/misconduct">Recognising Misconduct</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
