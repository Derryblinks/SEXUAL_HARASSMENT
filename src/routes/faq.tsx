import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Aegis UG" },
      { name: "description", content: "Plain-language answers to the most common questions about the Gender Policy, reporting, confidentiality and support." },
      { property: "og:title", content: "Frequently Asked Questions — Aegis UG" },
      { property: "og:description", content: "Answers in plain language, no legal jargon." },
    ],
  }),
  component: FAQPage,
});

const GROUPS = [
  {
    label: "The Policy",
    items: [
      { q: "Who does the Gender Policy apply to?", a: "Every member of the University community — students, faculty, administrative and technical staff, contractors, and visitors participating in University activities." },
      { q: "When was the policy last updated?", a: "The current edition was adopted in January 2022. The policy is reviewed every five years to address emerging issues." },
      { q: "Where can I read the full document?", a: "You can download the official PDF from the Policy page or the Resources hub." },
    ],
  },
  {
    label: "Reporting & Confidentiality",
    items: [
      { q: "Will my report stay confidential?", a: "Yes. Reports are handled by trained officers who limit disclosure to those strictly necessary for investigation, support and any required action." },
      { q: "Can I report anonymously?", a: "Anonymous disclosures are accepted and used to inform prevention. Formal investigations, however, generally require an identifiable complainant." },
      { q: "What happens after I report?", a: "You are met with care, offered support, informed of your options, and — if you choose — guided through investigation under the policy's procedures." },
      { q: "Will I face retaliation for reporting?", a: "Retaliation is itself a violation of the policy and is treated with equal seriousness." },
    ],
  },
  {
    label: "Support",
    items: [
      { q: "What support is available to me?", a: "Counselling, academic accommodations, safety planning, and accompaniment through any process you choose to pursue." },
      { q: "Do I have to make a formal report to receive support?", a: "No. Support is available regardless of whether you pursue a formal complaint." },
      { q: "Can someone help me decide what to do?", a: "Yes — confidential advisors at the EOB will walk you through your options without pressure." },
    ],
  },
  {
    label: "Definitions",
    items: [
      { q: "What counts as sexual harassment?", a: "Unwelcome sexual advances, requests for sexual favours and other verbal, physical or visual conduct of a sexual nature. Impact matters more than intent." },
      { q: "Is consent the same as 'not saying no'?", a: "No. Consent is freely given, reversible, informed, enthusiastic and specific. Silence or hesitation is not consent." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ · Plain Language"
        title={<>Questions, answered with <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>care</span>.</>}
        description="No jargon. No legalese. Just clear answers about the policy, reporting and the support available to you."
      />

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 space-y-16">
          {GROUPS.map((g, gi) => (
            <div key={g.label}>
              <SectionHeader eyebrow={`0${gi + 1}`} title={g.label} />
              <Accordion type="single" collapsible className="mt-8 space-y-3">
                {g.items.map((item, i) => (
                  <Reveal key={item.q} delay={i * 0.04}>
                    <AccordionItem value={`${gi}-${i}`} className="rounded-2xl border border-border bg-card px-6 overflow-hidden data-[state=open]:shadow-elegant">
                      <AccordionTrigger className="text-left font-display text-base font-medium py-5">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
                    </AccordionItem>
                  </Reveal>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Still have questions?</h3>
            <p className="mt-3 text-muted-foreground">Our team responds with discretion and care.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact EOB <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
