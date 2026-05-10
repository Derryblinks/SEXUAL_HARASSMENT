import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Help — Sexual Harassment Support | University of Ghana" },
      { name: "description", content: "Confidential channels for sexual harassment crisis counselling (CEGENSA), Anti-Sexual Harassment Committee intake, and reporting assistance." },
      { property: "og:title", content: "Contact & Help — Sexual Harassment Support | University of Ghana" },
      { property: "og:description", content: "Reach counselling and committee intake with discretion." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact · Confidential"
        title={<>We're <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>here</span>, and we will listen.</>}
        description="For sexual harassment and misconduct concerns, connect with CEGENSA&apos;s crisis and counselling unit or the Anti-Sexual Harassment Committee secretariat. Every contact is treated with discretion, warmth and respect."
      />

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-5">
            <SectionHeader eyebrow="Channels" title={<>How to reach us.</>} />
            <div className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Committee / intake email", value: "eob@ug.edu.gh", href: "mailto:eob@ug.edu.gh" },
                { icon: Phone, label: "Helpline (Mon–Fri, 9am–5pm)", value: "+233 (0) 302 213 820", href: "tel:+233302213820" },
                { icon: MapPin, label: "In-person", value: "CEGENSA / Anti-Sexual Harassment Committee\n(Main Administration — confirm room with reception)\nUniversity of Ghana, Legon", href: "#" },
              ].map((c) => (
                <Reveal key={c.label}>
                  <a href={c.href} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-500">
                    <div className="h-10 w-10 rounded-xl bg-secondary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
                      <div className="mt-1 font-display text-base font-medium whitespace-pre-line">{c.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Communication is handled consistent with the Sexual Harassment and Misconduct Policy. You decide what happens next — we will not act beyond your choices except where safety or the law requires it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Response time: most enquiries receive a confidential reply within <strong className="text-foreground">two working days</strong>.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
                <h3 className="font-display text-2xl font-semibold tracking-tight">Send a confidential message</h3>
                <p className="mt-2 text-sm text-muted-foreground">You may use a pseudonym. Provide only what you're comfortable sharing.</p>

                {sent ? (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"><Check className="h-5 w-5" /></div>
                    <h4 className="mt-4 font-display text-xl font-semibold">Message received.</h4>
                    <p className="mt-2 text-sm text-muted-foreground">A confidential officer will respond within two working days.</p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name (or pseudonym)</Label>
                        <Input id="name" required className="mt-2" placeholder="Optional" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="mt-2" placeholder="you@ug.edu.gh" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required className="mt-2" placeholder="How can we help?" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" required rows={6} className="mt-2" placeholder="Share as much or as little as you wish." />
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <div className="text-xs text-muted-foreground">Encrypted in transit · Read only by designated intake staff</div>
                      <Button type="submit" size="lg" className="rounded-full h-12 px-7">
                        <Send className="h-4 w-4" /> Send securely
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
