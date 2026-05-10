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
<<<<<<< HEAD
      { title: "FAQ — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Answers on sexual harassment, consent, reporting to the Anti-Sexual Harassment Committee, investigations, confidentiality and support under the UG policy." },
      { property: "og:title", content: "FAQ — Sexual Harassment & Misconduct | University of Ghana" },
      { property: "og:description", content: "Plain-language answers aligned with the Sexual Harassment and Misconduct Policy." },
=======
      { title: "Frequently Asked Questions — Aegis UG" },
      { name: "description", content: "Plain-language answers to the most common questions about the Gender Policy, reporting, confidentiality and support." },
      { property: "og:title", content: "Frequently Asked Questions — Aegis UG" },
      { property: "og:description", content: "Answers in plain language, no legal jargon." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  }),
  component: FAQPage,
});

const GROUPS = [
  {
<<<<<<< HEAD
    label: "Policy & scope",
    items: [
      {
        q: "Who does the Sexual Harassment and Misconduct Policy apply to?",
        a: "All members of the University community — officers, employees, students, and agents under the University’s control — across campuses, facilities and vehicles.",
      },
      {
        q: "What is the main purpose of the policy?",
        a: "To prevent sexual harassment and misconduct through education; prohibit and sanction offences; investigate reports; apply disciplinary measures; and protect victims and participants from retaliation and stigmatisation.",
      },
      {
        q: "Where can I read the official policy?",
        a: "The policy was published in the University’s Special Reporter (No. 873, May 2017). Use the About page and Resources hub for links and context; your department or CEGENSA can also provide copies.",
      },
    ],
  },
  {
    label: "Definitions & consent",
    items: [
      {
        q: "What counts as sexual harassment under the policy?",
        a: "Unwelcome conduct of a sexual nature — including when submission is explicitly or implicitly a condition of employment or academic standing, when rejection is used for decisions affecting someone, or when conduct unreasonably interferes with performance or creates an intimidating, hostile or offensive environment.",
      },
      {
        q: "What other behaviours are sexual misconduct?",
        a: "Examples include abuse of authority for sexual ends, sexual assault and abuse, exploitative or degrading behaviour, sexual intimidation, stalking, and retaliatory conduct after rejection or reporting. The policy treats sexual harassment as including acts constituting sexual abuse or assault within its scope.",
      },
      {
        q: "Can a relationship be ‘consensual’ if one person has more power?",
        a: "Because of power differences, a student’s or subordinate’s apparent willingness does not on its own prove conduct was welcome. The University prohibits sexual relationships where an imbalance allows one person to affect the other’s education or career.",
      },
      {
        q: "What is valid consent for sexual contact?",
        a: "Consent must be genuine. Consent obtained through force, threat, coercion or incapacitation is not consent. Sexual assault includes non-consensual intercourse or contact, including between partners or strangers.",
      },
    ],
  },
  {
    label: "Reporting & procedures",
    items: [
      {
        q: "Do I have to report informally first?",
        a: "No. You may use informal steps if you wish, but choosing not to cannot be used against you if you later file a formal complaint.",
      },
      {
        q: "How do I make a formal complaint?",
        a: "Speak to a member of the Anti-Sexual Harassment Committee, then submit a written complaint with details of the behaviour and, where possible, dates, places and names. The Committee can help you write the complaint if needed.",
      },
      {
        q: "How soon should I report?",
        a: "Reports should be brought as soon as possible after the conduct, optimally within one year, so facts can be investigated and remedies considered promptly.",
      },
      {
        q: "What if the incident is very serious?",
        a: "For severe cases such as sexual assault, you should be counselled to report to the Police and to lodge a formal complaint before the Committee.",
      },
      {
        q: "How long does a formal investigation take?",
        a: "The investigation procedure should be completed within 60 working days of the request for formal investigation, unless the Committee seeks an extension from the Vice-Chancellor with reasons.",
      },
      {
        q: "Can I withdraw my complaint?",
        a: "Yes. You may withdraw after filing by giving written reasons and signing the withdrawal.",
      },
    ],
  },
  {
    label: "Confidentiality, retaliation & fairness",
    items: [
      {
        q: "Will my case stay confidential?",
        a: "The Committee maintains confidentiality of reports and proceedings. Parties and representatives are advised that confidentiality is essential to protect the integrity of investigations.",
      },
      {
        q: "What if I face retaliation?",
        a: "The Committee takes steps to pre-empt retaliation. Reports of retaliation are treated as sexual harassment and misconduct reports and follow the same procedures.",
      },
      {
        q: "What rights does a respondent have?",
        a: "A respondent is presumed innocent until a final finding or stipulated admission, may respond in writing, be heard, be represented by counsel (with limits on counsel speaking in hearings), and must cooperate with investigations.",
      },
      {
        q: "What about false or malicious complaints?",
        a: "Deliberately malicious complaints can result in formal disciplinary action. The University takes knowingly false allegations seriously.",
      },
      {
        q: "Can I appeal the outcome?",
        a: "Yes. Dissatisfied complainants or respondents may appeal to the University of Ghana Appeals Board under the Statutes.",
      },
=======
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
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  },
  {
    label: "Support",
    items: [
<<<<<<< HEAD
      {
        q: "Where can I get counselling?",
        a: "CEGENSA facilitates the policy and maintains a sexual harassment crisis and counselling unit to support staff and students affected by harassment or assault.",
      },
      {
        q: "Will I be forced to participate in mediation?",
        a: "Mediation requires mutual willingness. If it does not resolve the matter, you can be advised to file a formal complaint.",
      },
=======
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
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  },
];

function FAQPage() {
  return (
    <>
      <PageHero
<<<<<<< HEAD
        eyebrow="FAQ · Plain language"
        title={<>Questions, answered with <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>care</span>.</>}
        description="Focused on sexual harassment, misconduct, consent and institutional procedures — aligned with the University of Ghana Sexual Harassment and Misconduct Policy."
        bgImage="/faq-hero.png"
=======
        eyebrow="FAQ · Plain Language"
        title={<>Questions, answered with <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>care</span>.</>}
        description="No jargon. No legalese. Just clear answers about the policy, reporting and the support available to you."
>>>>>>> cb1628592c231f56f54661977629a3248306c706
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
<<<<<<< HEAD
            <p className="mt-3 text-muted-foreground">Reach CEGENSA or the Anti-Sexual Harassment Committee intake — with discretion and care.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact &amp; help <ArrowRight className="h-4 w-4" /></Link>
=======
            <p className="mt-3 text-muted-foreground">Our team responds with discretion and care.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact EOB <ArrowRight className="h-4 w-4" /></Link>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
