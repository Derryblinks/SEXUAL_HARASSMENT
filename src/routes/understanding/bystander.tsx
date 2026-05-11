import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Megaphone,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/understanding/bystander")({
  head: () => ({
    meta: [
      { title: "Bystander Intervention — SpeakSafe UG" },
      {
        name: "description",
        content:
          "Learn how to safely intervene and support others as a bystander within the University of Ghana community.",
      },
    ],
  }),
  component: BystanderPage,
});

const strategies = [
  {
    icon: Megaphone,
    title: "Direct",
    body: "Safely and directly interrupt the behaviour. Ask the person to stop or ask the recipient if they are okay.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Eye,
    title: "Distract",
    body: "Create a diversion to break the moment. Ask for the time, directions, or start a random conversation.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Delegate",
    body: "Get help from someone with authority or more experience, like a lecturer, security, or a senior staff member.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Shield,
    title: "Document",
    body: "Record the details of what happened (dates, times, locations, witnesses). Do not share without the recipient's consent.",
    color: "bg-slate-50 text-slate-600",
  },
];

function BystanderPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Bystander Intervention"
        title={
          <>
            See something. Say something.{" "}
            <span
              className="italic"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Stand with someone
            </span>
            .
          </>
        }
        description="Every member of the University of Ghana community has a role in upholding dignity. You don't need to confront — you just need to care."
      />

      {/* The Role of a Bystander */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Your Impact"
              title="Why bystanders matter."
              description="A bystander is anyone who witnesses an incident of sexual harassment or misconduct. Your reaction can change the outcome for the person involved."
            />
            <div className="mt-8 space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Research shows that when bystanders intervene, they often stop the harassment and provide critical emotional support to the recipient. It also sends a clear message that such behavior is not tolerated in our community.
              </p>
              <div className="flex items-center gap-4 p-5 bg-[#1f3a5f]/5 rounded-sm border-l-4 border-[#1f3a5f]">
                <Info className="h-5 w-5 text-[#1f3a5f] shrink-0" />
                <p className="text-sm text-[#1f3a5f] font-medium italic">
                  "Intervention doesn't always mean confrontation. It means choosing not to be a passive observer."
                </p>
              </div>
            </div>
          </Reveal>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1f3a5f] to-[#c59d5f] rounded-sm blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white rounded-sm overflow-hidden border border-slate-200 aspect-[4/3]">
              <img 
                src="/src/assets/bystander-study.jpg" 
                alt="Bystander intervention study" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-white/80 font-medium uppercase tracking-widest">UCLA Psychology Study Context</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Ds */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Strategies"
            title="The 4 Ds of Intervention"
            description="Choose the strategy that feels safest and most appropriate for the situation."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full p-8 border border-slate-200 bg-white rounded-sm hover:border-[#c59d5f]/30 transition-all group">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${s.color}`}>
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f3a5f] mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-[#1f3a5f] text-white p-10 rounded-sm shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertTriangle className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6">Safety is Paramount</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Only intervene if it is safe to do so. If you feel there is a risk of physical harm, do not engage directly. Seek professional help immediately.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Assess the environment for exits",
                  "Keep a safe physical distance",
                  "Call Campus Security if needed",
                  "Involve others for safety in numbers",
                ].map((tip) => (
                  <div key={tip} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#c59d5f]" />
                    <span className="text-sm text-white/80">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-[#1f3a5f] mb-4">
              Help us build a safer campus.
            </h2>
            <p className="text-slate-500 mb-8">
              Download our quick-reference guide for bystander intervention or share these strategies with your colleagues and peers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-[#1f3a5f] hover:bg-[#152a47]">
                <Link to="/resources">Resource Center <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-slate-300">
                <Link to="/understanding/procedures">Reporting Procedures</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
