import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary — Aegis UG" },
      { name: "description", content: "Key terms used in the University of Ghana Sexual Harassment & Gender Policy, defined in plain language." },
      { property: "og:title", content: "Glossary — Aegis UG" },
      { property: "og:description", content: "Definitions of key terms in the UG Sexual Harassment Policy." },
    ],
  }),
  component: GlossaryPage,
});

const TERMS: { term: string; def: string }[] = [
  { term: "Sexual Harassment", def: "Any unwelcome sexual advance, request for sexual favour, or other verbal, non-verbal or physical conduct of a sexual nature that has the purpose or effect of violating a person's dignity, or of creating an intimidating, hostile, degrading, humiliating or offensive environment." },
  { term: "Sextortion", def: "An abuse of entrusted authority where a person in a position of power demands sexual favours in exchange for a benefit they control — such as grades, promotion, employment, accommodation or research opportunities." },
  { term: "Consent", def: "A clear, voluntary, informed and ongoing agreement to engage in a particular activity. Consent cannot be given under coercion, intimidation, incapacitation or by a person under the lawful age." },
  { term: "Quid Pro Quo Harassment", def: "When submission to or rejection of unwelcome sexual conduct is used as the basis for academic, employment or institutional decisions affecting an individual." },
  { term: "Hostile Environment", def: "Conduct that is severe or pervasive enough to create an environment a reasonable person would find intimidating, hostile or abusive — even if no tangible benefit was demanded." },
  { term: "Complainant", def: "A person who reports having experienced behaviour that may breach the policy. The complainant is supported, believed and protected from retaliation throughout the process." },
  { term: "Respondent", def: "A person against whom a complaint is brought. The respondent is entitled to fair process, the presumption of innocence and confidentiality." },
  { term: "Retaliation", def: "Any adverse action — direct or indirect — taken against a person for reporting, supporting a report, or participating in an investigation. Retaliation is itself a separate breach of the policy." },
  { term: "Confidentiality", def: "The principle that information shared during disclosure, support or investigation is restricted to those who must know in order to act, and is never disclosed for curiosity or punishment." },
  { term: "Trauma-Informed Approach", def: "A way of responding to disclosures that recognises the impact of trauma, prioritises emotional safety, restores agency and avoids re-traumatisation." },
  { term: "Equal Opportunities Board (EOB)", def: "The institutional body of the University of Ghana responsible for receiving complaints, monitoring compliance with the Gender Policy and recommending action." },
  { term: "Special Measures", def: "Lawful, time-bound interventions designed to correct historical or structural imbalances between genders. They are an instrument of equity, not a deviation from it." },
  { term: "Bystander", def: "Anyone who witnesses or becomes aware of harassment. Bystanders are encouraged to act through the four D's: Direct, Distract, Delegate, Document." },
  { term: "Gender Equity", def: "Fairness in treatment of people of all genders — recognising that equal outcomes may sometimes require different approaches to address historical disadvantage." },
  { term: "Disclosure", def: "The act of sharing an experience of harassment with a trusted person or office. Disclosure is not the same as filing a formal complaint." },
];

function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference · Glossary"
        title={<>The <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>language</span> of dignity and accountability.</>}
        description="Plain-language definitions of the key terms used throughout the University of Ghana Sexual Harassment & Gender Policy."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="A–Z" title={<>Terms you should know.</>} />
          <dl className="mt-14 divide-y divide-border border-y border-border">
            {TERMS.map((t, i) => (
              <Reveal key={t.term} delay={i * 0.02}>
                <div className="grid md:grid-cols-12 gap-6 py-7">
                  <dt className="md:col-span-4 font-display text-lg font-semibold text-primary tracking-tight">{t.term}</dt>
                  <dd className="md:col-span-8 text-muted-foreground leading-relaxed text-pretty">{t.def}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Need clarification?</h3>
            <p className="mt-3 text-muted-foreground">Our FAQ answers the most common questions in everyday language.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/faq">Browse FAQ <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact EOB</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
