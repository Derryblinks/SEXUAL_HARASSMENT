import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Lock, ShieldCheck, Users, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report & Support — Aegis UG" },
      { name: "description", content: "A confidential pathway to report sexual harassment and access support under the UG Gender Policy." },
      { property: "og:title", content: "Report & Support — Aegis UG" },
      { property: "og:description", content: "Confidential reporting and support for the UG community." },
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
  { n: "01", t: "Raise the concern", d: "Speak with an immediate supervisor informally, or go directly to the Equal Opportunities Board (EOB). If a concern raised with a supervisor isn't adequately addressed, you may take it directly to the EOB." },
  { n: "02", t: "Submit your complaint", d: "Submit in writing to the EOB Administrator. If you are unable to write, the Administrator will record and transcribe your complaint with care." },
  { n: "03", t: "Acknowledgement", d: "The Administrator immediately forwards the complaint to the Chair of the EOB.
