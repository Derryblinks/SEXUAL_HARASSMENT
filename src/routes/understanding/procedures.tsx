import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  ShieldCheck,
  Scale,
  ArrowRight,
  Gavel,
  History,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/understanding/procedures")({
  head: () => ({
    meta: [
      { title: "Institutional Procedures — SpeakSafe UG" },
      {
        name: "description",
        content:
          "Detailed breakdown of reporting, investigation, and disciplinary procedures under the University of Ghana Sexual Harassment Policy.",
      },
    ],
  }),
  component: ProceduresPage,
});

const steps = [
  {
    icon: MessageSquare,
    title: "1. Intake",
    desc: "Speak orally to a Committee member who explains the process. You can choose informal or formal routes.",
  },
  {
    icon: FileText,
    title: "2. Filing",
    desc: "Lodge a written complaint with details of the behavior, dates, and locations. Assistance is available if needed.",
  },
  {
    icon: Clock,
    title: "3. Notification",
    desc: "The respondent is notified and given 7 days to provide a written response to the allegations.",
  },
  {
    icon: Gavel,
    title: "4. Adjudication",
    desc: "A panel considers evidence, hears parties, and completes the process usually within 60 working days.",
  },
  {
    icon: Scale,
    title: "5. Resolution",
    desc: "The panel determines if policy was violated and recommends sanctions ranging from apology to dismissal.",
  },
  {
    icon: History,
    title: "6. Appeal",
    desc: "Either party may appeal the decision to the University of Ghana Appeals Board within specified timelines.",
  },
];

function ProceduresPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Institutional Procedures"
        title={
          <>
            Fairness,{" "}
            <span
              className="italic"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              confidentiality
            </span>
            , and due process.
          </>
        }
        description="A summary of Annex III of the University policy. We ensure that every report is handled with professional care and institutional integrity."
      />

      {/* Workflow */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="The Process"
            title="The 6-step roadmap to resolution."
            description="From initial intake to final adjudication, here is how the University handles formal complaints."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 border border-slate-200 rounded-sm bg-white hover:border-[#1f3a5f]/20 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-[#1f3a5f]/5 flex items-center justify-center mb-6">
                    <step.icon className="h-6 w-6 text-[#1f3a5f]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f3a5f] mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rights & Safeguards */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <SectionHeader
                eyebrow="Safeguards"
                title="Your rights as a complainant."
                description="The policy provides explicit protections to ensure that seeking justice does not lead to further harm."
              />
              <ul className="mt-10 space-y-5">
                {[
                  "Right to confidentiality and privacy throughout the process.",
                  "Right to be accompanied by a person of choice to any meeting.",
                  "Right to interim measures (e.g. no-contact orders) during investigation.",
                  "Right to protection from retaliation or secondary victimization.",
                  "Right to be informed of the outcome and the basis for the decision.",
                ].map((right, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-3 w-3 text-emerald-500" />
                    </div>
                    <span className="text-sm leading-relaxed">{right}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="bg-white p-8 md:p-10 border border-slate-200 rounded-sm">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-8">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Can I report anonymously?",
                    a: "Yes. However, the University's ability to investigate and take disciplinary action may be limited if the complainant's identity is not known to the respondent.",
                  },
                  {
                    q: "What are the time limits for reporting?",
                    a: "While there is no strict deadline, the policy encourages reporting as soon as possible to ensure evidence remains available and fresh.",
                  },
                  {
                    q: "What if I am reporting a lecturer?",
                    a: "The same procedures apply. The Committee is an independent body designed to handle power-imbalanced complaints fairly.",
                  },
                  {
                    q: "Can I use informal resolution for assault?",
                    a: "No. For severe cases like sexual assault or rape, the policy directs formal investigation and referral to the Police.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="text-left text-sm font-medium py-4 text-slate-700">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-500 leading-relaxed pb-4">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Requirements */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <Users className="mx-auto h-10 w-10 text-[#c59d5f] mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold text-[#1f3a5f] mb-4">Requirements for Staff</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Staff members have specific responsibilities under the policy to report and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-slate-200 rounded-sm">
              <h3 className="text-lg font-semibold text-[#1f3a5f] mb-4">Mandatory Reporting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Staff who receive a report of sexual misconduct are required to refer the complainant to a member of the Anti-Sexual Harassment Committee within 24 hours.
              </p>
            </div>
            <div className="p-8 border border-slate-200 rounded-sm">
              <h3 className="text-lg font-semibold text-[#1f3a5f] mb-4">Professional Boundaries</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Staff must maintain strictly professional relationships with students. Any sexual conduct with a student under one's academic supervision is a severe policy violation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1f3a5f] text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold mb-4">
              Ready to take the next step?
            </h2>
            <p className="text-white/60 mb-8">
              Whether you need to report or just want to speak to someone, we are here for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-[#c59d5f] hover:bg-[#b08b50] text-white border-0">
                <Link to="/reporting">Access Reporting Form <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" className="rounded-full px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Link to="/contact">Contact Secretariat</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
