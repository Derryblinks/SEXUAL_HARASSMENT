import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Lock, ShieldCheck, ArrowRight, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report and Support - Aegis UG" },
      { name: "description", content: "A confidential pathway to report and access support under the UG Gender Policy." },
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
  { n: "01", t: "Raise the concern", d: "Speak informally with a supervisor, or go directly to the Equal Opportunities Board (EOB)." },
  { n: "02", t: "Submit your complaint", d: "Submit in writing to the EOB Administrator. If unable to write, the Administrator will record and transcribe it for you." },
  { n: "03", t: "Acknowledgement", d: "The Administrator forwards the complaint to the Chair of the EOB. You are kept informed throughout." },
  { n: "04", t: "Investigation or mediation", d: "A panel reviews evidence; mediation may be offered with the mutual agreement of both parties." },
  { n: "05", t: "Outcome and support", d: "A decision is reached with full confidentiality and protection from retaliation." },
];

function ReportingPage() {
  return (
    <>
      <PageHero
        eyebrow="Confidential and trauma-informed"
        title={<>You will be <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>believed</span>, respected and supported.</>}
        description="The reporting process is designed to reduce anxiety. Your rights are protected at every stage. So are those of the respondent."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7">
            <a href="tel:+233000000000"><Phone className="h-4 w-4" />Call EOB now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-7">
            <a href="mailto:eob@ug.edu.gh"><Mail className="h-4 w-4" />Email confidentially</a>
          </Button>
        </div>
      </PageHero>

      {/* Steps */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="The pathway" title="Step by step, with care." description="Every report follows a clear, structured process so you always know what comes next." />
          <div className="mt-16 grid lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6">
                  <div className="font-display text-4xl font-semibold text-gold/80">{s.n}</div>
                  <h4 className="mt-4 font-display text-base font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Your rights" title={<>Protection on both sides of the process.</>} description="The UG Gender Policy enshrines the rights of complainants and respondents." />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><ShieldCheck className="h-5 w-5" /></div>
                  <h3 className="font-display text-xl font-semibold">Rights of the Complainant</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {["To be heard with respect and without judgement", "To confidentiality throughout the process", "To be informed of the progress of your case", "To withdraw a complaint at any stage", "To full protection from retaliation", "To support and counselling services"].map((r) => (
                    <li key={r} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span className="leading-relaxed">{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><Scale className="h-5 w-5" /></div>
                  <h3 className="font-display text-xl font-semibold">Rights of the Respondent</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {["To be presumed innocent until proven otherwise", "To be informed of the complaint made against them", "To respond fully and in writing", "To object to any panel member with stated basis", "To call witnesses and present evidence", "To confidentiality throughout the proceedings"].map((r) => (
                    <li key={r} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span className="leading-relaxed">{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What we promise" title="Confidentiality is the foundation." description="All parties to an investigation are required to maintain confidentiality to protect the integrity of the proceedings." />
          <StaggerGroup className="mt-16 grid sm:grid-cols-3 gap-5">
            {[
              { i: Lock, t: "End-to-end confidentiality", d: "Information is shared only with those directly involved in the proceedings." },
              { i: ShieldCheck, t: "Protection from retaliation", d: "Retaliation is itself a violation of the policy and is treated seriously." },
              { i: AlertTriangle, t: "Bad-faith protection", d: "Knowingly false reports are also a policy violation. Fairness flows both ways." },
            ].map((c, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full rounded-3xl border border-border bg-card p-7">
                  <c.i className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h4 className="mt-5 font-display text-lg font-semibold">{c.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary text-primary-foreground p-10 md:p-14">
            <div className="absolute inset-0 grain opacity-[0.06]" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Ready when you are</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">Take the next step on your own terms.</h3>
                <p className="mt-4 text-primary-foreground/70 max-w-xl">There is no wrong way to begin. A call. An email. A walk-in visit. We will meet you where you are.</p>
              </div>
              <div className="md:col-span-4 flex md:justify-end gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-6 bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link to="/contact">Contact EOB <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
