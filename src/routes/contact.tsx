import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, Check, AlertCircle, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-[#1f3a5f] text-white py-3.5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px]">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-[#c59d5f]" />
            <span>In immediate danger? Call <span className="text-[#c59d5f] font-bold">Campus Security +233 30 250 0381</span> or dial <span className="font-bold text-[#c59d5f]">112</span>.</span>
          </div>
          <Link to="/reporting" hash="report-form" className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors">
            Submit a report <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-6">Institutional Access</div>
              <h1 className="text-4xl md:text-6xl font-semibold text-[#1f3a5f] leading-[1.1] mb-10">
                Talk to someone who can help.
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                The Anti-Sexual Harassment Committee Secretariat is the primary point of contact for policy guidance, reports, and institutional support. Counselling, legal aid, hospital, and security services are listed alongside.
              </p>
            </div>
            
            <div className="lg:col-span-5 pt-8 lg:pt-0">
              <div className="border-l border-[#c59d5f] pl-10 py-2">
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-4">Office Hours</div>
                <div className="text-2xl font-semibold text-[#1f3a5f] mb-2">Monday – Friday</div>
                <div className="text-2xl font-semibold text-[#1f3a5f] mb-6">08:30 – 17:00</div>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  Closed on University and public holidays. Crisis lines remain open 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-3xl font-semibold text-[#1f3a5f] mb-4">Confidential coordinators and support units.</h2>
          <p className="text-slate-500 mb-20 max-w-2xl leading-relaxed">
            You may approach any unit below as your first point of contact — they will help connect you with the others. Every coordinator listed is bound by the 2017 Privacy Statutes.
          </p>

          <div className="space-y-16">
            {/* 01 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-1 text-2xl font-semibold text-[#c59d5f]/40">01</div>
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold text-[#1f3a5f] mb-2">Anti-Sexual Harassment Committee</h3>
                <p className="text-[14px] text-slate-500">Primary point of contact for reports and policy guidance</p>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-y-10 gap-x-12">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Address</div>
                    <div className="text-[14px] text-slate-600 leading-relaxed">
                      University Administration Block, Ground Floor, Room 12, Legon
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-[14px] text-slate-600">+233 30 213 5378</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-[14px] text-slate-600">ashc@ug.edu.gh</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hours</div>
                    <div className="text-[14px] text-slate-600">Mon - Fri • 8:30 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-1 text-2xl font-semibold text-[#c59d5f]/40">02</div>
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold text-[#1f3a5f] mb-2">Counselling & Placement Centre</h3>
                <p className="text-[14px] text-slate-500">Confidential trauma-informed counselling for students and staff</p>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-y-10 gap-x-12">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Address</div>
                    <div className="text-[14px] text-slate-600">
                      Old Counselling Block, Behind Balme Library, Legon
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-[14px] text-slate-600">+233 30 250 0124</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-[14px] text-slate-600">counselling@ug.edu.gh</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-[#c59d5f] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hours</div>
                    <div className="text-[14px] text-slate-600">Mon - Fri • 8:30 - 17:00 • 24h Crisis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finding Us */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-6">Finding Us</div>
              <h2 className="text-4xl font-semibold text-[#1f3a5f] mb-8">Visiting the Secretariat.</h2>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-10 max-w-xl">
                The ASHC Secretariat sits inside the University Administration Block, ground floor,
                immediately to the right of the main reception. Wheelchair access is available via
                the side ramp. You may bring a friend, support person, or counsellor with you to any
                meeting.
              </p>
              <Button variant="outline" className="h-14 px-8 rounded-full border-slate-300 text-[#1f3a5f] font-medium" asChild>
                 <Link to="/reporting" hash="report-form">Initiate a confidential report</Link>
              </Button>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-white border border-slate-100 p-16 rounded-sm shadow-xl flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-[#FDF8F1] rounded-full flex items-center justify-center mb-8">
                  <MapPin className="h-6 w-6 text-[#c59d5f]" strokeWidth={1.5} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#c59d5f] uppercase mb-4">Main Secretariat</div>
                <h3 className="text-xl font-semibold text-[#1f3a5f] leading-[1.4]">
                  University Administration Block<br />
                  Ground Floor · Room 12<br />
                  Legon Campus, Accra
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
