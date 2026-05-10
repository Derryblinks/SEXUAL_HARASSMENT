import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, GraduationCap, Briefcase, ShieldCheck, Scale, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/stakeholders")({
  head: () => ({
    meta: [
      { title: "Stakeholders — Aegis UG" },
      { name: "description", content: "The people, offices and bodies responsible for upholding the University of Ghana Gender Policy." },
      { property: "og:title", content: "Stakeholders — Aegis UG" },
      { property: "og:description", content: "Who upholds the policy — students, staff, EOB and university leadership." },
    ],
  }),
  component: StakeholdersPage,
});

const STAKEHOLDERS = [
  { icon: ShieldCheck, name: "Equal Opportunities Board (EOB)", role: "Receives, reviews and oversees all formal complaints. Recommends action and monitors compliance with the policy." },
  { icon: Scale, name: "Anti-Sexual Harassment Committee", role: "Investigates allegations of sexual harassment with confidentiality, fairness and a trauma-informed approach." },
  { icon: GraduationCap, name: "Students", role: "Empowered to learn, study and live in an environment free from discrimination, intimidation and harassment." },
  { icon: Briefcase, name: "Faculty & Staff", role: "Held to the highest professional standard. Required to model dignity and report observed misconduct." },
  { icon: Users, name: "Heads of Department & Deans", role: "First-line stewards of equity within their units. Responsible for prevention, education and timely escalation." },
  { icon: BookOpen, name: "University Leadership", role: "Council, Vice-Chancellor and Senior Management — accountable for institutional resourcing of gender equity." },
];

function StakeholdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Stakeholders · Accountability"
        title={<>Equity is a <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>shared</span> responsibility.</>}
        description="Every member of the University community has a role in protecting dignity. These are the offices, committees and people who carry it forward."
      />

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Roles & Responsibilities"
            title={<>Who upholds the policy.</>}
            description="From individual students to the University Council, these are the bodies that carry institutional weight."
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAKEHOLDERS.map((s) => (
              <StaggerItem key={s.name}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-500">
                  <div className="h-11 w-11 rounded-xl bg-secondary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Need to reach a stakeholder?</h3>
            <p className="mt-3 text-muted-foreground">Connect with the EOB or designated officers — confidentially.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/contact">Contact us <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
