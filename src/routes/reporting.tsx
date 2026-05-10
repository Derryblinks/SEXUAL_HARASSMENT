import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  Lock,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
  Scale,
  Upload,
  CalendarDays,
  Clock3,
  CheckCircle2,
  FileText,
  Shield,
  UserCircle2,
} from "lucide-react";
=======
import { Phone, Mail, Lock, ShieldCheck, ArrowRight, AlertTriangle, Scale } from "lucide-react";
>>>>>>> cb1628592c231f56f54661977629a3248306c706
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  createReportId,
  derivePriority,
  getReports,
  setReports,
  INCIDENT_TYPE_OPTIONS,
  type IncidentType,
  type ReportRecord,
} from "@/lib/reporting";
=======
>>>>>>> cb1628592c231f56f54661977629a3248306c706

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "Report & Support — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Confidential reporting and support under the University of Ghana Sexual Harassment and Misconduct Policy — Anti-Sexual Harassment Committee and CEGENSA." },
=======
      { title: "Report and Support - Aegis UG" },
      { name: "description", content: "A confidential pathway to report and access support under the UG Gender Policy." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
<<<<<<< HEAD
  { n: "01", t: "Informal options", d: "You may address the behaviour directly, ask a trusted person to intervene confidentially, or request mediation through the Committee if the respondent agrees." },
  { n: "02", t: "Severe misconduct", d: "For extreme cases (e.g. sexual assault), complainants should be counselled to report to the Police and file a formal complaint before the Committee." },
  { n: "03", t: "Formal complaint", d: "Speak to a Committee member, then lodge a written complaint. If you cannot write, the Committee will assist and ensure you understand before you sign or thumbprint." },
  { n: "04", t: "Notice & hearing", d: "The respondent is notified and may file a written response within seven days. An adjudication panel may hear parties, record proceedings, and gather evidence." },
  { n: "05", t: "Findings & appeal", d: "The Committee recommends sanctions where a violation is found. Dissatisfied parties may appeal to the University of Ghana Appeals Board under the Statutes." },
];

type UploadItem = {
  id: string;
  file: File;
  progress: number;
  previewUrl?: string;
};

function ReportingPage() {
  const [incidentType, setIncidentType] = useState<IncidentType | "">("");
  const [description, setDescription] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [fullName, setFullName] = useState("");
  const [studentOrStaffId, setStudentOrStaffId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReport, setSubmittedReport] = useState<ReportRecord | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (window.location.hash === "#report-form") {
      const section = document.getElementById("report-form");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!uploads.length) return;
    const interval = window.setInterval(() => {
      setUploads((prev) =>
        prev.map((item) => {
          if (item.progress >= 100) return item;
          const step = Math.min(100, item.progress + 12);
          return { ...item, progress: step };
        }),
      );
    }, 200);

    return () => window.clearInterval(interval);
  }, [uploads.length]);

  const uploadSummary = useMemo(() => {
    const completed = uploads.filter((u) => u.progress >= 100).length;
    return `${completed}/${uploads.length} files ready`;
  }, [uploads]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const next = Array.from(fileList).map((file, index) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${index}`,
      file,
      progress: 12,
      previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
    }));
    setUploads((prev) => [...prev, ...next]);
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!incidentType) nextErrors.incidentType = "Select an incident type.";
    if (!description.trim() || description.trim().length < 20) {
      nextErrors.description = "Please provide at least 20 characters for context.";
    }
    if (!incidentDate) nextErrors.incidentDate = "Select the date of the incident.";

    if (!isAnonymous) {
      if (!fullName.trim()) nextErrors.fullName = "Full name is required for identified reports.";
      if (!studentOrStaffId.trim()) nextErrors.studentOrStaffId = "Student/Staff ID is required.";
      if (!email.trim()) nextErrors.email = "Email is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setIncidentType("");
    setDescription("");
    setIncidentDate("");
    setIncidentTime("");
    setIsAnonymous(true);
    setFullName("");
    setStudentOrStaffId("");
    setEmail("");
    setPhone("");
    setErrors({});
    setUploads((prev) => {
      prev.forEach((item) => {
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
      });
      return [];
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate() || !incidentType) return;

    setIsSubmitting(true);
    const existing = getReports();
    const report: ReportRecord = {
      id: createReportId(existing),
      incidentType,
      description: description.trim(),
      incidentDate,
      incidentTime: incidentTime || undefined,
      submittedAt: new Date().toISOString(),
      anonymous: isAnonymous,
      identity: isAnonymous
        ? undefined
        : {
            fullName: fullName.trim(),
            studentOrStaffId: studentOrStaffId.trim(),
            email: email.trim(),
            phone: phone.trim(),
          },
      priority: derivePriority(incidentType, description),
      status: "Pending",
      assignedInvestigator: "Unassigned",
      evidence: uploads.map((item) => ({
        name: item.file.name,
        type: item.file.type,
        size: item.file.size,
        previewUrl: item.previewUrl,
      })),
    };

    window.setTimeout(() => {
      setReports([report, ...existing]);
      setSubmittedReport(report);
      setIsSubmitting(false);
      resetForm();
    }, 1200);
  };

=======
  { n: "01", t: "Raise the concern", d: "Speak informally with a supervisor, or go directly to the Equal Opportunities Board (EOB)." },
  { n: "02", t: "Submit your complaint", d: "Submit in writing to the EOB Administrator. If unable to write, the Administrator will record and transcribe it for you." },
  { n: "03", t: "Acknowledgement", d: "The Administrator forwards the complaint to the Chair of the EOB. You are kept informed throughout." },
  { n: "04", t: "Investigation or mediation", d: "A panel reviews evidence; mediation may be offered with the mutual agreement of both parties." },
  { n: "05", t: "Outcome and support", d: "A decision is reached with full confidentiality and protection from retaliation." },
];

function ReportingPage() {
>>>>>>> cb1628592c231f56f54661977629a3248306c706
  return (
    <>
      <PageHero
        eyebrow="Confidential and trauma-informed"
        title={<>You will be <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>believed</span>, respected and supported.</>}
        description="The reporting process is designed to reduce anxiety. Your rights are protected at every stage. So are those of the respondent."
      >
        <div className="flex flex-wrap gap-3">
<<<<<<< HEAD
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7"
          >
            <a href="tel:+233000000000">
              <Phone className="h-4 w-4" />
              Call support now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-7"
          >
            <a href="mailto:eob@ug.edu.gh">
              <Mail className="h-4 w-4" />
              Email the intake desk
            </a>
=======
          <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-7">
            <a href="tel:+233000000000"><Phone className="h-4 w-4" />Call EOB now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-7">
            <a href="mailto:eob@ug.edu.gh"><Mail className="h-4 w-4" />Email confidentially</a>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          </Button>
        </div>
      </PageHero>

<<<<<<< HEAD
      <section id="report-form" className="py-24 md:py-28 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Secure Reporting Form"
            title="Submit your report safely."
            description="Take your time. Your report is handled with care, confidentiality and institutional responsibility."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {submittedReport ? (
                <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Report submitted successfully
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    Thank you for trusting this process.
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Your report reference is{" "}
                    <span className="font-semibold text-foreground">{submittedReport.id}</span>. A trained
                    Anti-Sexual Harassment Committee intake will review this safely and reach out using your
                    selected privacy settings.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Next steps</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Initial triage within institutional timelines (formal investigations target 60 working days unless extended with VC approval).
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Support now</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Call <a href="tel:+233000000000" className="text-primary hover:underline">+233 (0) 000 000 000</a> or email{" "}
                        <a href="mailto:eob@ug.edu.gh" className="text-primary hover:underline">eob@ug.edu.gh</a>.
                      </p>
                    </div>
                  </div>
                  <Button className="mt-8 rounded-sm" onClick={() => setSubmittedReport(null)}>
                    Submit another report
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-elegant space-y-8">
                  <div>
                    <label className="text-sm font-medium text-foreground">Incident Type</label>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Select the category closest to your experience.
                    </p>
                    <Select value={incidentType} onValueChange={(value) => setIncidentType(value as IncidentType)}>
                      <SelectTrigger className="mt-3 h-11 rounded-xl bg-background">
                        <SelectValue placeholder="Choose incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        {INCIDENT_TYPE_OPTIONS.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.incidentType && (
                      <p className="mt-2 text-xs text-destructive">{errors.incidentType}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Incident Description</label>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Share only what you are comfortable sharing. You can include people involved, location and
                      sequence of events.
                    </p>
                    <Textarea
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Describe what happened in your own words..."
                      className="mt-3 min-h-[180px] rounded-xl bg-background leading-relaxed"
                    />
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Calm tip: short, factual points are enough.</span>
                      <span>{description.length} characters</span>
                    </div>
                    {errors.description && (
                      <p className="mt-2 text-xs text-destructive">{errors.description}</p>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Incident Date</label>
                      <div className="relative mt-3">
                        <CalendarDays className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="date"
                          value={incidentDate}
                          onChange={(event) => setIncidentDate(event.target.value)}
                          className="h-11 rounded-xl pl-9 bg-background"
                        />
                      </div>
                      {errors.incidentDate && (
                        <p className="mt-2 text-xs text-destructive">{errors.incidentDate}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Incident Time (optional)</label>
                      <div className="relative mt-3">
                        <Clock3 className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="time"
                          value={incidentTime}
                          onChange={(event) => setIncidentTime(event.target.value)}
                          className="h-11 rounded-xl pl-9 bg-background"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Evidence Upload</label>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Upload images, screenshots or documents to support this report.
                    </p>
                    <label
                      onDragOver={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(event) => {
                        event.preventDefault();
                        setIsDragging(false);
                        handleFiles(event.dataTransfer.files);
                      }}
                      className={`mt-3 block cursor-pointer rounded-2xl border-2 border-dashed p-7 transition-colors ${
                        isDragging ? "border-primary bg-primary/5" : "border-border bg-background/60"
                      }`}
                    >
                      <input
                        type="file"
                        multiple
                        onChange={(event) => handleFiles(event.target.files)}
                        className="hidden"
                        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.mp4,.mp3"
                      />
                      <div className="flex flex-col items-center text-center">
                        <Upload className="h-8 w-8 text-primary" />
                        <p className="mt-3 text-sm font-medium">Drag and drop files here, or click to browse</p>
                        <p className="mt-1 text-xs text-muted-foreground">Supported: PNG, JPG, PDF, DOC, DOCX, MP4, MP3</p>
                      </div>
                    </label>
                    {!!uploads.length && (
                      <div className="mt-4 space-y-3 rounded-2xl border border-border bg-secondary/20 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-foreground">Upload progress</p>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {uploadSummary}
                          </Badge>
                        </div>
                        {uploads.map((item) => (
                          <div key={item.id} className="rounded-xl border border-border bg-card p-3">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 min-w-0">
                                <FileText className="h-4 w-4 text-primary shrink-0" />
                                <span className="truncate text-sm">{item.file.name}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{Math.round(item.progress)}%</span>
                            </div>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-border">
                              <div
                                className="h-full rounded-full bg-primary transition-all"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <label htmlFor="anonymous-toggle" className="text-sm font-medium text-foreground">
                          Anonymous Reporting
                        </label>
                        <p className="mt-1 text-xs text-muted-foreground">
                          You may stay anonymous. If you prefer follow-up contact, switch anonymous mode off.
                        </p>
                      </div>
                      <Switch
                        id="anonymous-toggle"
                        checked={isAnonymous}
                        onCheckedChange={setIsAnonymous}
                        aria-label="Toggle anonymous reporting"
                      />
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-primary">
                      <Shield className="h-3.5 w-3.5" />
                      Privacy is protected under the Sexual Harassment and Misconduct Policy and Committee procedures.
                    </div>
                  </div>

                  {!isAnonymous && (
                    <div className="space-y-4 rounded-2xl border border-border bg-background/70 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <UserCircle2 className="h-4 w-4 text-primary" />
                        Identity Information
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Input
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            className="h-11 rounded-xl bg-background"
                          />
                          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                        </div>
                        <div>
                          <Input
                            placeholder="Student/Staff ID"
                            value={studentOrStaffId}
                            onChange={(event) => setStudentOrStaffId(event.target.value)}
                            className="h-11 rounded-xl bg-background"
                          />
                          {errors.studentOrStaffId && (
                            <p className="mt-1 text-xs text-destructive">{errors.studentOrStaffId}</p>
                          )}
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="h-11 rounded-xl bg-background"
                          />
                          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                        </div>
                        <Input
                          type="tel"
                          placeholder="Phone number (optional)"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="h-11 rounded-xl bg-background"
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-sm px-6 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                  >
                    {isSubmitting ? "Submitting securely..." : "Submit Report Safely"}
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-4 space-y-5">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-gold">Safety notes</div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "This form supports anonymous and identified reporting.",
                    "Only authorized University case personnel can access submissions.",
                    "You may include as much or as little detail as you can manage now.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-gold">Need immediate help?</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For urgent risk to safety, contact Police and reach CEGENSA or the Committee intake for institutional support.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href="tel:+233000000000" className="block text-primary hover:underline">
                    +233 (0) 000 000 000
                  </a>
                  <a href="mailto:eob@ug.edu.gh" className="block text-primary hover:underline">
                    eob@ug.edu.gh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

=======
>>>>>>> cb1628592c231f56f54661977629a3248306c706
      {/* Steps */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="The pathway" title="Step by step, with care." description="Every report follows a clear, structured process so you always know what comes next." />
          <div className="mt-16 grid lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6">
                  <div className="font-display text-4xl font-semibold text-gold/80">{s.n}</div>
                  <h4 className="mt-4 font-display text-base font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="py-28 md:py-36 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
<<<<<<< HEAD
          <SectionHeader eyebrow="Your rights" title={<>Protection on both sides of the process.</>} description="The Sexual Harassment and Misconduct Policy sets out rights for complainants and respondents, including representation and confidentiality." />
=======
          <SectionHeader eyebrow="Your rights" title={<>Protection on both sides of the process.</>} description="The UG Gender Policy enshrines the rights of complainants and respondents." />
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><ShieldCheck className="h-5 w-5" /></div>
                  <h3 className="font-display text-xl font-semibold">Rights of the Complainant</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
<<<<<<< HEAD
                  {["To pursue redress without reprimand, retaliation or discrimination in good faith", "To have retaliation monitored and reported under the same procedures", "To request mediation where appropriate", "To withdraw a complaint in writing with reasons, even during investigation", "To representation by counsel (subject to hearing rules)", "To referral for counselling or psycho-social support when appropriate"].map((r) => (
=======
                  {["To be heard with respect and without judgement", "To confidentiality throughout the process", "To be informed of the progress of your case", "To withdraw a complaint at any stage", "To full protection from retaliation", "To support and counselling services"].map((r) => (
>>>>>>> cb1628592c231f56f54661977629a3248306c706
                    <li key={r} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span className="leading-relaxed">{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><Scale className="h-5 w-5" /></div>
                  <h3 className="font-display text-xl font-semibold">Rights of the Respondent</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
<<<<<<< HEAD
                  {["To be presumed innocent unless and until a final finding of culpability or a stipulated admission", "To be notified and to file a written response within seven days (with assistance if needed)", "To be heard by an adjudication panel and to cross-examine as provided", "To representation by counsel (counsel may not speak for parties during proceedings)", "To have the investigation proceed even if you do not participate", "To confidentiality as advised for all parties"].map((r) => (
=======
                  {["To be presumed innocent until proven otherwise", "To be informed of the complaint made against them", "To respond fully and in writing", "To object to any panel member with stated basis", "To call witnesses and present evidence", "To confidentiality throughout the proceedings"].map((r) => (
>>>>>>> cb1628592c231f56f54661977629a3248306c706
                    <li key={r} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" /><span className="leading-relaxed">{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
<<<<<<< HEAD
          <SectionHeader eyebrow="What we promise" title="Confidentiality is the foundation." description="The Committee maintains confidentiality of reports and proceedings; parties and representatives are advised that this protects the integrity of investigations." />
=======
          <SectionHeader eyebrow="What we promise" title="Confidentiality is the foundation." description="All parties to an investigation are required to maintain confidentiality to protect the integrity of the proceedings." />
>>>>>>> cb1628592c231f56f54661977629a3248306c706
          <StaggerGroup className="mt-16 grid sm:grid-cols-3 gap-5">
            {[
              { i: Lock, t: "End-to-end confidentiality", d: "Information is shared only with those directly involved in the proceedings." },
              { i: ShieldCheck, t: "Protection from retaliation", d: "Retaliation is itself a violation of the policy and is treated seriously." },
<<<<<<< HEAD
              { i: AlertTriangle, t: "Malicious complaints", d: "Deliberately malicious allegations may attract formal disciplinary action under University procedures." },
=======
              { i: AlertTriangle, t: "Bad-faith protection", d: "Knowingly false reports are also a policy violation. Fairness flows both ways." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
            ].map((c, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full rounded-3xl border border-border bg-card p-7">
                  <c.i className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h4 className="mt-5 font-display text-lg font-semibold">{c.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary text-primary-foreground p-10 md:p-14">
            <div className="absolute inset-0 grain opacity-[0.06]" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Ready when you are</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">Take the next step on your own terms.</h3>
                <p className="mt-4 text-primary-foreground/70 max-w-xl">There is no wrong way to begin. A call. An email. A walk-in visit. We will meet you where you are.</p>
              </div>
              <div className="md:col-span-4 flex md:justify-end gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-6 bg-gold text-gold-foreground hover:bg-gold/90">
<<<<<<< HEAD
                  <Link to="/contact">Contact support <ArrowRight className="h-4 w-4" /></Link>
=======
                  <Link to="/contact">Contact EOB <ArrowRight className="h-4 w-4" /></Link>
>>>>>>> cb1628592c231f56f54661977629a3248306c706
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
