import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Lock, ShieldCheck, Users, ArrowRight, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report and Support - Aegis UG" },
      { name: "description", content: "A confidential pathway to report sexual harassment and access support." },
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
  { n: "01", t: "Raise the concern", d: "Speak informally with a supervisor, or go directly to the Equal Opportunities Board." },
  { n: "02", t: "Submit your complaint", d: "Submit in writing. If you cannot write, the Administrator will record and transcribe it." },
  { n: "03", t: "Acknowledgement", d: "The Administrator forwards the complaint to the Chair of the EOB." },
  { n: "04", t: "Investigation or mediation", d: "A panel reviews evidence; mediation may be offered with mutual agreement." },
  { n: "05", t: "Outcome and support", d: "A decision is reached with full confidentiality and protection from retaliation." },
];

const RIGHTS_C = [
  "To be heard with respect and without judgement",
  "To confidentiality throughout the process",
  "To be informed of the progress of your case",
  "To withdraw a complaint at any stage",
  "To protection from retaliation",
