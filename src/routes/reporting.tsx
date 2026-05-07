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
      { name: "description", content: "A confidential pathway to report sexual