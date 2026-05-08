import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, BookOpen, Video, Headphones, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Learning Hub — Aegis UG" },
      { name: "description", content: "Policies, guides, training and curated reading on gender equity, consent and safe reporting." },
      { property: "og:title", content: "Resources & Learning Hub — Aegis UG" },
      { property: "og:description", content: "Policies, guides, training and curated reading." },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  { icon: FileText, type: "Policy", title: "UG Gender Policy 2022", desc: "The full policy document — principles, scope and procedures.", href: "/UG-Gender-Policy.pdf", action: "Download PDF", download: true },
  { icon: BookOpen, type: "Guide", title: "A Survivor's Guide", desc: "Trauma-informed pathway from disclosure to support.", href: "/reporting", action: "Read guide" },
  { icon: BookOpen, type: "Guide", title: "Bystander Action Toolkit", desc: "Direct, distract, delegate, document — practical scripts.", href: "/understanding", action: "Open toolkit" },
  { icon: Video, type: "Training", title: "Consent in Practice", desc: "A 12-minute interactive module on consent in everyday life.", href: "#", action: "Coming soon" },
  { icon: Headphones, type: "Audio", title: "Voices of Dignity", desc: "Anonymised first-person reflections from survivors and allies.", href: "#", action: "Coming soon" },
  { icon: FileText, type: "Reference", title: "Glossary of Terms", desc: "Key vocabulary in plain, respectful language.", href: "/faq", action: "Read glossary" },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Hub"
        title={<>Resources to <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>understand</span>, prevent and respond.</>}
        description="A curated library of policies, guides and training — written in plain language, grounded in dignity."
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
                <div className="group relative h-full rounded-3xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" style={{ background: "var(--gradient-gold)" }} />
                  <div className="relative">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{r.type}</div>
                    <r.icon className="mt-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      {r.download ? <Download className="h-3.5 w-3.5" /> : isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                      {r.action}
                    </div>
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

      <section className="py-20 md:py-24 bg-secondary/60">
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
