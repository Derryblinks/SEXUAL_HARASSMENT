import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Lock, Clock, ShieldCheck, Users, ArrowRight, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report & Support — Aegis UG" },
      { name: "description", content: "A safe, confidential pathway to report sexual harassment and access support at