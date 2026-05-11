import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, BookOpen, Video, Headphones, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Policies, education modules and references on sexual harassment, consent, reporting to the Anti-Sexual Harassment Committee, and CEGENSA support." },
      { property: "og:title", content: "Resources — Sexual Harassment & Misconduct | University of Ghana" },
      { property: "og:description", content: "Curated institutional learning on harassment, misconduct and safe reporting." },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  { icon: FileText, type: "Related policy", title: "UG Gender Policy 2022 (PDF)", desc: "Broader institutional gender framework; use alongside the Sexual Harassment and Misconduct Policy.", href: "/UG-Gender-Policy.pdf", action: "Download PDF", download: true },
  { icon: BookOpen, type: "On-site", title: "Report & support pathway", desc: "How to report safely, what to expect, and rights under the Sexual Harassment and Misconduct Policy.", href: "/reporting", action: "Open pathway" },
  { icon: BookOpen, type: "On-site", title: "Education hub", desc: "Definitions, forms of misconduct, consent, procedures and bystander awareness.", href: "/understanding", action: "Start learning" },
  { icon: Video, type: "Training", title: "Committee & CEGENSA orientation", desc: "Placeholder for future video modules on policy dissemination and trauma-informed response.", href: "#", action: "Coming soon" },
  { icon: Headphones, type: "Audio", title: "Listening project", desc: "Placeholder for anonymised educational audio on help-seeking and institutional support.", href: "#", action: "Coming soon" },
  { icon: FileText, type: "Reference", title: "Glossary of terms", desc: "Plain-language definitions from the sexual harassment policy context.", href: "/glossary", action: "Read glossary" },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Hub"
        title={<>Resources to <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>understand</span>, prevent and respond.</>}
        description="Curated materials for understanding sexual harassment and misconduct, reporting, and support — written in plain language, grounded in dignity."
        bgImage="/resources-hero.png"
      />

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Library"
            title={<>Everything you need, in one place.</>}
          />
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r) => {
              const isExternal = r.href.startsWith("/UG-") || r.href.startsWith("http");
              const inner = (
                <div className="group h-full rounded-sm border border-slate-200 border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-sm bg-secondary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <r.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{r.type}</div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    {r.download ? <Download className="h-3.5 w-3.5" /> : isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                    {r.action}
                  </div>
                </div>
              );
              if (r.download) {
                return (
                  <StaggerItem key={r.title}>
                    <a href={r.href} download target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>
                  </StaggerItem>
                );
              }
              if (r.href === "#") {
                return <StaggerItem key={r.title}><div className="h-full opacity-70 cursor-not-allowed">{inner}</div></StaggerItem>;
              }
              return (
                <StaggerItem key={r.title}>
                  <Link to={r.href} className="block h-full">{inner}</Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-6">Your Academic Rights</div>
              <h2 className="text-4xl font-semibold text-[#1f3a5f] mb-8 leading-tight">Academic protections.</h2>
              <p className="text-[17px] text-slate-500 leading-relaxed max-w-md">
                Your education is a right, not collateral. The 2017 Policy provides specific institutional safeguards so that responding to harm — or being responded to — does not derail your progress, your residency, or your record.
              </p>
            </div>

            {/* Right Column (List) */}
            <div className="lg:col-span-7 space-y-12 pt-4">
              {[
                {
                  id: "01",
                  title: "No-contact directives",
                  desc: "On request, the Anti-Sexual Harassment Committee can issue a binding no-contact instruction to the respondent — covering classrooms, halls, and online channels. Breach is itself a disciplinary offence.",
                },
                {
                  id: "02",
                  title: "Examination accommodations",
                  desc: "You may sit examinations in a separate room, request an alternate invigilator, or defer a paper without academic penalty. The Faculty Officer is informed only of the accommodation, never of the underlying matter.",
                },
                {
                  id: "03",
                  title: "Schedule and supervision changes",
                  desc: "Tutorial groups, lab partners, project supervisors, and timetables can be quietly reassigned to prevent forced contact. Where the respondent is your supervisor, alternative supervision is arranged through your department head.",
                },
              ].map((p) => (
                <div key={p.id} className="grid sm:grid-cols-12 gap-6 group border-b border-slate-100 pb-12 last:border-0">
                  <div className="sm:col-span-2 text-2xl font-semibold text-[#c59d5f]/30">{p.id}</div>
                  <div className="sm:col-span-10">
                    <h3 className="text-xl font-semibold text-[#1f3a5f] mb-4 group-hover:text-[#c59d5f] transition-colors">{p.title}</h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Have a resource to suggest?</h3>
            <p className="mt-3 text-muted-foreground">We welcome contributions from staff, faculty and student bodies.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7">
                <Link to="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
