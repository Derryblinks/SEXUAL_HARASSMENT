import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Scale, FileText, Users, BookOpen, Download, CheckCircle2, Gavel, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import policyHero from "@/assets/policy-hero.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Policy — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Purpose, definitions, scope and institutional framework of the University of Ghana Sexual Harassment and Misconduct Policy." },
      { property: "og:title", content: "UG Sexual Harassment & Misconduct Policy" },
      { property: "og:description", content: "Institutional commitment to a campus free from sexual harassment and misconduct." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sexual Harassment & Misconduct Policy"
        bgImage={policyHero}
        title={<>A campus culture of <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>safety, dignity and accountability</span>.</>}
        description="This platform is grounded in the University of Ghana Sexual Harassment and Misconduct Policy — defining prohibited conduct, reporting procedures, investigation, sanctions, non-retaliation and the role of the Anti-Sexual Harassment Committee."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7">
            <Link to="/understanding">Read the education hub</Link>
          </Button>
          <a
            href="/UG-Gender-Policy.pdf"
            download="UG-Gender-Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground h-12 px-7 text-sm font-medium hover:bg-primary-foreground/15 transition-colors"
          >
            <Download className="h-4 w-4" />
            Related: Gender Policy (PDF)
          </a>
        </div>
      </PageHero>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Purpose"
            title={<>Why this policy exists.</>}
            description="The University is committed to a community in which all who participate in its programmes and activities do so free from intimidation, exploitation and abuse — with work and study conducted in an atmosphere of respect and dignity."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Define prohibited conduct", desc: "The policy sets out sexual harassment, other sexual misconduct, and behaviours that harm sexual integrity or create hostile environments." },
              { icon: FileText, title: "Reporting & investigation", desc: "Formal and informal pathways, the role of the Anti-Sexual Harassment Committee, and fair grievance procedures." },
              { icon: Scale, title: "Sanctions & accountability", desc: "Disciplinary measures when violations are found, without prejudice to criminal proceedings where offences arise under Ghanaian law." },
              { icon: Users, title: "Protection from retaliation", desc: "Complainants and those who participate in good faith are protected from reprisal; retaliation may be treated as a separate report under the same procedures." },
              { icon: BookOpen, title: "Education & awareness", desc: "Prevention through dissemination, training and materials that promote compliance and familiarity with reporting routes." },
              { icon: HeartHandshake, title: "Support", desc: "CEGENSA facilitates implementation and maintains a sexual harassment crisis and counselling unit for staff and students." },
            ].map((o, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-sm border border-slate-200 border border-border bg-card p-7 hover:shadow-elegant transition-shadow">
                  <o.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Definitions at a glance"
            title={<>What the policy covers.</>}
            description="Sexual harassment includes unwelcome conduct of a sexual nature — verbal, non-verbal, written, electronic, graphic or physical — when it conditions opportunities, affects decisions, or unreasonably interferes with study or work, or creates an intimidating, hostile or offensive environment."
          />
          <div className="mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { t: "Other forms of sexual misconduct", b: "Including sexual or amorous behaviour with students or subordinates where power is imbalanced; exploitation for sexual ends; undue favours; sexual abuse and assault; degrading behaviour; retaliation after rejection; and sexual intimidation. Student–teacher or supervisor relationships are especially sensitive: “voluntary” participation does not on its own show conduct was welcome." },
                { t: "Sexual abuse & assault (policy definitions)", b: "Sexual abuse: forceful or degrading sexual contact, or contact without disclosure of HIV/STI status where required. Sexual assault: intercourse or contact without consent; consent obtained through force, threat, coercion or incapacitation is not consent." },
                { t: "Exploitative or degrading behaviour", b: "Taking sexual advantage without consent — including incapacitation to gain advantage; recording or transmitting intimate images without consent; enabling observation without consent; or spying in intimate situations." },
                { t: "Sexual intimidation & stalking", b: "Threats of assault, indecent exposure, or stalking (including online) — repeated unwelcome attention a reasonable person would find fear-inducing." },
                { t: "Hostile environment", b: "Conduct sufficiently severe or pervasive to alter the conditions of education or employment so a reasonable person would find it intimidating, uncomfortable or offensive." },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <AccordionItem value={`p${i}`} className="rounded-sm border border-slate-200 border border-border bg-card px-6 overflow-hidden data-[state=open]:shadow-elegant">
                    <AccordionTrigger className="text-left font-display text-base font-medium py-5">{p.t}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{p.b}</AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Scope & governance"
            title={<>Who it applies to — and who leads.</>}
            description="The policy applies to all members of the University community: employees, students and agents under University control, across all locations and facilities, including vehicles."
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-5">
            <Reveal className="lg:col-span-7">
              <div className="relative h-full rounded-sm border border-slate-200 border border-border bg-card p-8 md:p-10 shadow-elegant overflow-hidden">
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Institutional roles</div>
                <ul className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-3"><Gavel className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">University Council</strong> — overall responsibility for compliance; ensuring the policy is reflected in statutes, handbooks and regulations.</span></li>
                  <li className="flex gap-3"><Gavel className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Vice-Chancellor</strong> — constitutes the Anti-Sexual Harassment Committee, appoints the Chair, and ensures recommendations are acted on.</span></li>
                  <li className="flex gap-3"><Gavel className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">CEGENSA</strong> — supports the Committee and hosts crisis and counselling services.</span></li>
                  <li className="flex gap-3"><Gavel className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Anti-Sexual Harassment Committee</strong> — education, records, annual reporting, investigations and recommended sanctions.</span></li>
                </ul>
              </div>
            </Reveal>

            <div className="lg:col-span-5 grid gap-5 content-start">
              <Reveal delay={0.05}>
                <div className="rounded-sm border border-slate-200 border border-border bg-card p-6 hover:shadow-elegant transition-shadow">
                  <div className="font-display text-base font-semibold">Official publication</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    The Sexual Harassment and Misconduct Policy was published in the <em>Republic of Ghana Gazette</em>, Vol. 54, No. 20, Friday 5 May 2017 (Special Reporter No. 873). The University reviews the policy periodically.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-sm border border-slate-200 border border-border bg-card p-6">
                  <div className="font-display text-base font-semibold">Who is covered</div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {["Students and staff", "Persons serving as University agents", "All University locations and facilities"].map((x) => (
                      <li key={x} className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.05]" />
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Objectives</div>
            <p className="mt-8 font-display text-xl md:text-2xl font-medium leading-relaxed text-balance text-primary-foreground/90">
              To prevent sexual harassment and misconduct through education; prohibit and sanction offences; investigate reports fairly; apply appropriate discipline; and ensure victims and participants do not face retaliation or stigmatisation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Next steps</h3>
            <p className="mt-3 text-muted-foreground">Learn what behaviours are prohibited, how to report, and what support looks like — in plain language.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/understanding">Education hub <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/reporting" hash="report-form">Report & support</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
