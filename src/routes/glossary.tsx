import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "Glossary — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Key terms from the University of Ghana Sexual Harassment and Misconduct Policy, in plain language." },
      { property: "og:title", content: "Glossary — Sexual Harassment & Misconduct | University of Ghana" },
      { property: "og:description", content: "Definitions aligned with the UG sexual harassment policy." },
=======
      { title: "Glossary — Aegis UG" },
      { name: "description", content: "Key terms used in the University of Ghana Sexual Harassment & Gender Policy, defined in plain language." },
      { property: "og:title", content: "Glossary — Aegis UG" },
      { property: "og:description", content: "Definitions of key terms in the UG Sexual Harassment Policy." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  }),
  component: GlossaryPage,
});

const TERMS: { term: string; def: string }[] = [
<<<<<<< HEAD
  {
    term: "Sexual harassment",
    def: "Unwelcome conduct of a sexual nature — including unwelcome advances, requests for sexual favours, and verbal, non-verbal, written, electronic, graphic or physical behaviour — when it affects employment or academic standing, is used as a basis for decisions, or interferes with performance or creates an intimidating, hostile or offensive environment.",
  },
  {
    term: "Sexual misconduct",
    def: "Conduct prohibited under the policy beyond core harassment definitions, such as abuse of authority for sexual ends, sexual assault, exploitative or degrading behaviour, intimidation, stalking and retaliatory conduct after rejection or reporting.",
  },
  {
    term: "Complainant",
    def: "A person who files a complaint under the policy. Complainants are entitled to pursue redress without reprisal for good-faith reporting.",
  },
  {
    term: "Respondent",
    def: "A person whose alleged conduct is the subject of a complaint. Presumed innocent unless and until a final finding of culpability or a stipulated admission.",
  },
  {
    term: "Anti-Sexual Harassment Committee",
    def: "The University committee that educates on the policy, receives and documents reports, investigates complaints, recommends sanctions, and reports annually to the Vice-Chancellor and/or Council.",
  },
  {
    term: "CEGENSA",
    def: "The Centre for Gender Studies and Advocacy — facilitates the Committee’s work and hosts a sexual harassment crisis and counselling unit for staff and students.",
  },
  {
    term: "Sexual assault",
    def: "Having or attempting to have sexual intercourse or contact without consent. Consent obtained through force, threat, coercion or incapacitation is not consent. May occur between intimate partners or strangers.",
  },
  {
    term: "Sexual abuse",
    def: "Forceful sexual contact or conduct that humiliates, degrades or violates sexual integrity, including certain non-disclosure of HIV or STI status as defined in the policy.",
  },
  {
    term: "Sexually exploitative or degrading behaviour",
    def: "Taking sexual advantage without consent — for example causing incapacitation, non-consensual recording or transmission of intimate images, enabling voyeurism, or spying on intimate situations.",
  },
  {
    term: "Sexual intimidation",
    def: "Threatening sexual assault, indecent exposure, or stalking (including online stalking): repeated unwelcome attention that would cause a reasonable person to fear for their safety or well-being.",
  },
  {
    term: "Hostile environment",
    def: "Sufficiently severe or pervasive conduct that alters education or employment conditions so a reasonable person would find them intimidating, uncomfortable or offensive.",
  },
  {
    term: "Consent",
    def: "Affirmative agreement to sexual contact. Not valid when procured by force, threat, coercion or incapacitation.",
  },
  {
    term: "Retaliation",
    def: "Threats, intimidation, reprisals or adverse actions against someone for good-faith reporting, assisting a report, or participating in an investigation. Treated as misconduct under the same procedures.",
  },
  {
    term: "Confidentiality",
    def: "The Committee maintains confidentiality of matters reported and of proceedings; parties are advised that confidentiality protects investigative integrity.",
  },
  {
    term: "Adjudication committee",
    def: "A panel of five members drawn from the Anti-Sexual Harassment Committee (including a lawyer, with gender parity) that may hear cases and recommend outcomes.",
  },
  {
    term: "Trauma-informed approach",
    def: "Responses that recognise trauma’s impact, prioritise emotional safety, restore choice and avoid re-traumatisation.",
  },
=======
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
>>>>>>> cb1628592c231f56f54661977629a3248306c706
];

function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference · Glossary"
        title={<>The <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>language</span> of dignity and accountability.</>}
<<<<<<< HEAD
        description="Plain-language definitions drawn from the Sexual Harassment and Misconduct Policy context at the University of Ghana."
=======
        description="Plain-language definitions of the key terms used throughout the University of Ghana Sexual Harassment & Gender Policy."
>>>>>>> cb1628592c231f56f54661977629a3248306c706
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
<<<<<<< HEAD
            <p className="mt-3 text-muted-foreground">The FAQ answers common questions in everyday language.</p>
=======
            <p className="mt-3 text-muted-foreground">Our FAQ answers the most common questions in everyday language.</p>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/faq">Browse FAQ <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
<<<<<<< HEAD
                <Link to="/contact">Contact support</Link>
=======
                <Link to="/contact">Contact EOB</Link>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
