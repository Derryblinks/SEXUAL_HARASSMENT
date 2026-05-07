import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Lock, ShieldCheck, Users, ArrowRight, AlertTriangle, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report & Support - Aegis UG" },
      { name: "description", content: "A confidential pathway to report sexual harassment and access support under the UG Gender Policy." },
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
  { n: "01", t: "Raise the concern", d: "Speak informally with a supervisor, or go directly to the Equal Opportunities Board (EOB)." },
  { n: "02", t: "Submit your complaint", d: "Submit in writing to the EOB Administrator. If you cannot write, the Administrator will record and transcribe it." },
  { n: "03", t: "Acknowledgement", d: "The Administrator forwards the complaint to the Chair of the EOB.