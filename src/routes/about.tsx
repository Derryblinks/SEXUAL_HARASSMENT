import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { ArrowRight, Shield, Scale, FileText, Users, BookOpen, Download, CheckCircle2, Gavel, HeartHandshake } from "lucide-react";
=======
import { motion } from "framer-motion";
import { ArrowRight, FileText, Scale, Target, Shield, Users, BookOpen, Download, CheckCircle2, Compass, RefreshCw } from "lucide-react";
>>>>>>> cb1628592c231f56f54661977629a3248306c706
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import policyHero from "@/assets/policy-hero.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "About the Policy — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Purpose, definitions, scope and institutional framework of the University of Ghana Sexual Harassment and Misconduct Policy." },
      { property: "og:title", content: "UG Sexual Harassment & Misconduct Policy" },
      { property: "og:description", content: "Institutional commitment to a campus free from sexual harassment and misconduct." },
=======
      { title: "The Gender Policy — Aegis UG" },
      { name: "description", content: "The University of Ghana Gender Policy 2022 — purpose, principles, scope and institutional framework for gender equity." },
      { property: "og:title", content: "The Gender Policy — Aegis UG" },
      { property: "og:description", content: "Purpose, principles and framework of the UG Gender Policy." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
<<<<<<< HEAD
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

=======
        eyebrow="Gender Policy 2022"
        bgImage={policyHero}
        title={<>An institution where equity is a <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>policy</span>, not a platitude.</>}
        description="The University of Ghana Gender Policy provides the framework for achieving a gender-equitable environment that engages both males and females in all critical spheres of decision-making."
      >
        <a
          href="/UG-Gender-Policy.pdf"
          download="UG-Gender-Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gold text-gold-foreground h-12 px-7 text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-500 active:scale-[0.98]"
        >
          <Download className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Download Full Policy (PDF)
          <span className="text-xs text-gold-foreground/70 ml-1 hidden sm:inline">· PDF · 311 KB</span>
        </a>
      </PageHero>

      {/* Purpose */}
>>>>>>> cb1628592c231f56f54661977629a3248306c706
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Purpose"
<<<<<<< HEAD
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
=======
            title={<>Addressing gendered imbalance through equal opportunity.</>}
            description="This policy responds to research confirming the gendered character of the University, evident in imbalanced representation of females in the student population, teaching, administrative, technical and senior management positions."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: "Achieve gender equality", desc: "Promote measures to achieve equality at all levels within the University." },
              { icon: Scale, title: "Balance ratios", desc: "Achieve balance in male-to-female employees and students at all levels." },
              { icon: Users, title: "Empower units", desc: "Help units identify and develop innovative gender balance plans." },
              { icon: Shield, title: "Provide redress", desc: "An avenue for redress when there is non-compliance with the policy." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
            ].map((o, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow">
                  <o.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Definitions at a glance"
            title={<>What the policy covers.</>}
            description="Sexual harassment includes unwelcome conduct of a sexual nature — verbal, non-verbal, written, electronic, graphic or physical — when it conditions opportunities, affects decisions, or unreasonably interferes with study or work, or creates an intimidating, hostile or offensive environment."
=======
      {/* Principles */}
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Guiding Principles"
            title={<>The five pillars of equity.</>}
            description="These principles govern all activities — recruitment, admissions, curricula, research, governance and community life."
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          />
          <div className="mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {[
<<<<<<< HEAD
                { t: "Other forms of sexual misconduct", b: "Including sexual or amorous behaviour with students or subordinates where power is imbalanced; exploitation for sexual ends; undue favours; sexual abuse and assault; degrading behaviour; retaliation after rejection; and sexual intimidation. Student–teacher or supervisor relationships are especially sensitive: “voluntary” participation does not on its own show conduct was welcome." },
                { t: "Sexual abuse & assault (policy definitions)", b: "Sexual abuse: forceful or degrading sexual contact, or contact without disclosure of HIV/STI status where required. Sexual assault: intercourse or contact without consent; consent obtained through force, threat, coercion or incapacitation is not consent." },
                { t: "Exploitative or degrading behaviour", b: "Taking sexual advantage without consent — including incapacitation to gain advantage; recording or transmitting intimate images without consent; enabling observation without consent; or spying in intimate situations." },
                { t: "Sexual intimidation & stalking", b: "Threats of assault, indecent exposure, or stalking (including online) — repeated unwelcome attention a reasonable person would find fear-inducing." },
                { t: "Hostile environment", b: "Conduct sufficiently severe or pervasive to alter the conditions of education or employment so a reasonable person would find it intimidating, uncomfortable or offensive." },
=======
                { t: "Gender-Friendly, Inclusive and Secure Environment", b: "The University is committed to creating an environment free from direct or indirect forms of gender discrimination, providing a space for equal participation of men and women in decision-making bodies." },
                { t: "Equal Opportunity in Employment & Admissions", b: "Reflected in recruitments, appointments, promotions and student enrolment. Special measures shall be instituted to ensure gender equality at all levels. Existing measures from the 1980s shall be continued and expanded." },
                { t: "Gender Sensitivity in Teaching & Curriculum", b: "Gender courses shall be developed and integrated into existing curricula. The mandatory undergraduate foundational gender course continues. Gender-inclusive perspectives in teaching methodology and content of all courses." },
                { t: "Gender-Sensitive Research & Innovation", b: "Promote the integration of gender analyses in research processes and innovations. Encourage staff and students to undertake gender-sensitive research, including research that focuses on the University." },
                { t: "Gender Balance in Management & Committees", b: "Committed to ensuring gender parity in all spheres — including governance and student governance structures. Both de jure and de facto equality shall be pursued." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
              ].map((p, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <AccordionItem value={`p${i}`} className="rounded-2xl border border-border bg-card px-6 overflow-hidden data-[state=open]:shadow-elegant">
                    <AccordionTrigger className="text-left font-display text-base font-medium py-5">{p.t}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{p.b}</AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Scope & governance"
            title={<>Who it applies to — and who leads.</>}
            description="The policy applies to all members of the University community: employees, students and agents under University control, across all locations and facilities, including vehicles."
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-5">
            <Reveal className="lg:col-span-7">
              <div className="relative h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant overflow-hidden">
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
                <div className="rounded-3xl border border-border bg-card p-6 hover:shadow-elegant transition-shadow">
                  <div className="font-display text-base font-semibold">Official publication</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    The Sexual Harassment and Misconduct Policy was published in the <em>Republic of Ghana Gazette</em>, Vol. 54, No. 20, Friday 5 May 2017 (Special Reporter No. 873). The University reviews the policy periodically.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <div className="font-display text-base font-semibold">Who is covered</div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {["Students and staff", "Persons serving as University agents", "All University locations and facilities"].map((x) => (
=======
      {/* Governance — balanced editorial bento */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(60% 50% at 80% 20%, oklch(0.78 0.13 75 / 0.10), transparent 70%), radial-gradient(50% 40% at 10% 90%, oklch(0.42 0.14 265 / 0.08), transparent 70%)" }} />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Governance"
            title={<>Application & scope.</>}
            description="This policy applies to all members — current and prospective — of the University community, covering all activities and programmes in education, training, research and work approved by the University."
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-5">
            {/* LEFT — acknowledgment quote card */}
            <Reveal className="lg:col-span-7">
              <div className="relative h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant overflow-hidden">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Acknowledgment</div>
                  <p className="mt-5 font-display text-xl md:text-2xl leading-relaxed text-pretty">
                    The policy acknowledges that to enable the University to achieve gender
                    equality, there may be the need to enact <em className="text-primary">special measures</em> for the benefit of one gender.
                  </p>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                    According to law, the University shall not be held to be in breach of this policy by those who do not benefit from — or who feel discriminated against as a result of — these special measures.
                  </p>
                  <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
                    <RefreshCw className="h-4 w-4 text-gold" />
                    <span>Reviewed every <strong className="text-foreground">five (5) years</strong> to account for emerging issues and trends.</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — institutional cards */}
            <div className="lg:col-span-5 grid gap-5 content-start">
              <Reveal delay={0.05}>
                <div className="rounded-3xl border border-border bg-card p-6 hover:shadow-elegant transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-secondary text-primary flex items-center justify-center"><Compass className="h-4 w-4" /></div>
                    <div className="font-display text-base font-semibold">Who it covers</div>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {["Students — undergraduate & graduate", "Faculty & administrative staff", "Visiting & contract personnel", "Prospective members of the community"].map((x) => (
>>>>>>> cb1628592c231f56f54661977629a3248306c706
                      <li key={x} className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
<<<<<<< HEAD
=======

              <div className="grid grid-cols-2 gap-5">
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-6 h-full relative overflow-hidden">
                    <div className="absolute inset-0 grain opacity-[0.06]" />
                    <div className="relative">
                      <div className="font-display text-4xl font-semibold">5<span className="text-gold">.</span></div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Years between reviews</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="rounded-3xl border border-border bg-card p-6 h-full">
                    <div className="font-display text-4xl font-semibold text-primary">2022</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Current edition adopted</div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-secondary/60 to-card p-6 flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Special measures are a <strong className="text-foreground">lawful instrument of equity</strong>, not a deviation from it.
                  </p>
                </div>
              </Reveal>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.05]" />
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Objectives</div>
            <p className="mt-8 font-display text-xl md:text-2xl font-medium leading-relaxed text-balance text-primary-foreground/90">
              To prevent sexual harassment and misconduct through education; prohibit and sanction offences; investigate reports fairly; apply appropriate discipline; and ensure victims and participants do not face retaliation or stigmatisation.
            </p>
=======
      {/* Preamble */}
      <section className="py-28 md:py-36 bg-primary text-primary-foreground">
        <div className="absolute inset-0 grain opacity-[0.05]" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Preamble</div>
            <blockquote className="mt-8 font-display text-2xl md:text-4xl font-medium tracking-tight leading-relaxed text-balance text-primary-foreground/90">
              "Recognising that maintaining gender equality is vital to the realisation of human rights for all and the overall objective of gender equality is to create a society in which women and men enjoy the same opportunities, rights and obligations in all spheres of life."
            </blockquote>
            <div className="mt-8 text-sm text-primary-foreground/50">— UG Gender Policy, January 2022</div>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Have questions about the policy?</h3>
            <p className="mt-3 text-muted-foreground">We explain everything in accessible language — no legal jargon.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/faq">Browse FAQ <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact EOB</Link>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cb1628592c231f56f54661977629a3248306c706
