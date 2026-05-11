import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
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

export const Route = createFileRoute("/reporting")({
  head: () => ({
    meta: [
      { title: "Report & Support — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Confidential reporting and support under the University of Ghana Sexual Harassment and Misconduct Policy — Anti-Sexual Harassment Committee and CEGENSA." },
    ],
  }),
  component: ReportingPage,
});

const STEPS = [
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
  const [formPhase, setFormPhase] = useState<"input" | "review">("input");

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
    setFormPhase("review");
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    const existing = getReports();
    const report: ReportRecord = {
      id: createReportId(existing),
      incidentType: incidentType as IncidentType,
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
      priority: derivePriority(incidentType as IncidentType, description),
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
      setFormPhase("input");
      resetForm();
    }, 1200);
  };

  return (
    <>
      <PageHero
        eyebrow="Confidential and trauma-informed"
        title={<>You will be <span className="italic" style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>believed</span>, respected and supported.</>}
        description="The reporting process is designed to reduce anxiety. Your rights are protected at every stage. So are those of the respondent."
        bgImage="/src/assets/reporting-hero.png"
      >
        <div className="flex flex-wrap gap-3">
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
          </Button>
        </div>
      </PageHero>

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
                <div className="rounded-sm border border-slate-200 border border-border bg-card p-8 md:p-10 shadow-elegant">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
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
                    <div className="rounded-sm border border-slate-200 border border-border bg-secondary/30 p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Next steps</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Initial triage within institutional timelines (formal investigations target 60 working days unless extended with VC approval).
                      </p>
                    </div>
                    <div className="rounded-sm border border-slate-200 border border-border bg-secondary/30 p-4">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Support now</div>
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
              ) : formPhase === "input" ? (
                <form onSubmit={handleSubmit} className="rounded-sm border border-slate-200 border border-border bg-card p-7 md:p-9 shadow-elegant space-y-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-8 w-8 rounded-full bg-[#1f3a5f] text-white flex items-center justify-center text-xs font-bold">1</div>
                    <div className="h-px flex-1 bg-slate-100" />
                    <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Step 1: Input Details</span>
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-foreground uppercase tracking-wider">Incident Type</label>
                    <p className="mt-1 text-[11px] text-muted-foreground uppercase tracking-wide">
                      Select the category closest to your experience.
                    </p>
                    <Select value={incidentType} onValueChange={(value) => setIncidentType(value as IncidentType)}>
                      <SelectTrigger className="mt-3 h-11 rounded-sm bg-background">
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
                    <label className="text-[13px] font-medium text-foreground uppercase tracking-wider">Incident Description</label>
                    <p className="mt-1 text-[11px] text-muted-foreground uppercase tracking-wide">
                      Share only what you are comfortable sharing. You can include people involved, location and sequence of events.
                    </p>
                    <Textarea
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Describe what happened in your own words..."
                      className="mt-3 min-h-[180px] rounded-sm bg-background leading-relaxed"
                    />
                    <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-wide">
                      <span>Calm tip: short, factual points are enough.</span>
                      <span>{description.length} characters</span>
                    </div>
                    {errors.description && (
                      <p className="mt-2 text-xs text-destructive">{errors.description}</p>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-[13px] font-medium text-foreground uppercase tracking-wider">Incident Date</label>
                      <div className="relative mt-3">
                        <Input
                          type="date"
                          value={incidentDate}
                          onChange={(event) => setIncidentDate(event.target.value)}
                          className="h-11 rounded-sm pr-10 bg-background"
                        />
                        <CalendarDays className="absolute right-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.incidentDate && (
                        <p className="mt-2 text-xs text-destructive">{errors.incidentDate}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-[13px] font-medium text-foreground uppercase tracking-wider">Incident Time (optional)</label>
                      <div className="relative mt-3">
                        <Input
                          type="time"
                          value={incidentTime}
                          onChange={(event) => setIncidentTime(event.target.value)}
                          className="h-11 rounded-sm pr-10 bg-background"
                        />
                        <Clock3 className="absolute right-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-foreground uppercase tracking-wider">Evidence Upload</label>
                    <p className="mt-1 text-[11px] text-muted-foreground uppercase tracking-wide">
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
                      className={`mt-3 block cursor-pointer rounded-sm border border-slate-200 border-2 border-dashed p-7 transition-colors ${
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
                      <div className="mt-4 space-y-3 rounded-sm border border-slate-200 border border-border bg-secondary/20 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-foreground">Upload progress</p>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {uploadSummary}
                          </Badge>
                        </div>
                        {uploads.map((item) => (
                          <div key={item.id} className="rounded-sm border border-border bg-card p-3">
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

                  <div className="rounded-sm border border-slate-200 border border-border bg-secondary/20 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <label htmlFor="anonymous-toggle" className="text-[13px] font-medium text-foreground uppercase tracking-wider">
                          Anonymous Reporting
                        </label>
                        <p className="mt-1 text-[11px] text-muted-foreground uppercase tracking-wide">
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
                    <div className="space-y-4 rounded-sm border border-slate-200 border border-border bg-background/70 p-5">
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
                            className="h-11 rounded-sm bg-background"
                          />
                          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                        </div>
                        <div>
                          <Input
                            placeholder="Student/Staff ID"
                            value={studentOrStaffId}
                            onChange={(event) => setStudentOrStaffId(event.target.value)}
                            className="h-11 rounded-sm bg-background"
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
                            className="h-11 rounded-sm bg-background"
                          />
                          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                        </div>
                        <Input
                          type="tel"
                          placeholder="Phone number (optional)"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="h-11 rounded-sm bg-background"
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="h-12 rounded-sm px-8 bg-[#1f3a5f] hover:bg-[#152a47] text-white w-full sm:w-auto font-bold uppercase tracking-widest text-[12px]"
                  >
                    Review Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="rounded-sm border border-slate-200 border border-border bg-card p-7 md:p-9 shadow-elegant space-y-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</div>
                    <div className="h-px flex-1 bg-emerald-100" />
                    <div className="h-8 w-8 rounded-full bg-[#1f3a5f] text-white flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f3a5f]">Step 2: Review Information</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Incident Category</h4>
                      <p className="text-lg font-semibold text-[#1f3a5f]">{incidentType}</p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Description</h4>
                      <div className="p-5 bg-slate-50 border border-slate-100 rounded-sm text-sm text-slate-600 leading-relaxed italic">
                        "{description}"
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Date</h4>
                        <p className="text-sm font-medium text-slate-700">{incidentDate}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Time</h4>
                        <p className="text-sm font-medium text-slate-700">{incidentTime || "Not specified"}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Anonymous Mode</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={isAnonymous ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-50 text-slate-700 border-slate-200"}>
                          {isAnonymous ? "ON (Identity hidden)" : "OFF (Identity included)"}
                        </Badge>
                      </div>
                    </div>

                    {!isAnonymous && (
                      <div className="p-5 border border-slate-200 rounded-sm bg-slate-50/50">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Your Identity</h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase block">Name</span>
                            <span className="text-sm font-medium">{fullName}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase block">ID</span>
                            <span className="text-sm font-medium">{studentOrStaffId}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[10px] text-slate-400 uppercase block">Email</span>
                            <span className="text-sm font-medium">{email}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {uploads.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Evidence Attached</h4>
                        <div className="flex flex-wrap gap-2">
                          {uploads.map((u) => (
                            <Badge key={u.id} variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                              {u.file.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="h-12 rounded-sm px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest text-[12px] flex-1"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm & Submit Report"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setFormPhase("input")}
                      disabled={isSubmitting}
                      className="h-12 rounded-sm px-8 border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[12px]"
                    >
                      Back to Edit
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 space-y-5">
              <div className="rounded-sm border border-slate-200 border border-border bg-card p-5">
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
              <div className="rounded-sm border border-slate-200 border border-border bg-card p-5">
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

      {/* Steps */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="The pathway" title="Step by step, with care." description="Every report follows a clear, structured process so you always know what comes next." />
          <div className="mt-16 grid lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative h-full rounded-sm border border-slate-200 border border-border bg-card p-6">
                  <div className="font-display text-4xl font-semibold text-gold/80">{s.n}</div>
                  <h4 className="mt-4 font-display text-base font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rights During Inquiry */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3a5f] tracking-tight mb-4">Rights During Inquiry</h2>
            <p className="text-[17px] text-slate-600 max-w-2xl mx-auto">
              Your rights do not end when you submit the form. They are active protections throughout the entire process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-8 hover:border-[#1f3a5f] transition-colors cursor-pointer group">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3 group-hover:text-[#152a47]">Accompaniment</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to bring a support person or advisor to any meeting or hearing.
              </p>
            </div>
            
            <div className="bg-white border border-[#1f3a5f] p-8 shadow-sm">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3">Periodic Updates</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to be informed of the status of the investigation at regular intervals.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 hover:border-[#1f3a5f] transition-colors cursor-pointer group">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3 group-hover:text-[#152a47]">Evidence Submission</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to provide relevant documents, messages, and names of potential witnesses.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 hover:border-[#1f3a5f] transition-colors cursor-pointer group">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3 group-hover:text-[#152a47]">Safe Space</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to meet in locations that are physically and psychologically safe for you.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 hover:border-[#1f3a5f] transition-colors cursor-pointer group">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3 group-hover:text-[#152a47]">No-Contact</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to institutional enforcement of strict no-contact orders with the respondent.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 hover:border-[#1f3a5f] transition-colors cursor-pointer group">
              <h3 className="text-[17px] font-semibold text-[#1f3a5f] mb-3 group-hover:text-[#152a47]">Appeal</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                The right to appeal the final determination if procedural errors occurred or new evidence emerges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What we promise" title="Confidentiality is the foundation." description="The Committee maintains confidentiality of reports and proceedings; parties and representatives are advised that this protects the integrity of investigations." />
          <StaggerGroup className="mt-16 grid sm:grid-cols-3 gap-5">
            {[
              { i: Lock, t: "End-to-end confidentiality", d: "Information is shared only with those directly involved in the proceedings." },
              { i: ShieldCheck, t: "Protection from retaliation", d: "Retaliation is itself a violation of the policy and is treated seriously." },
              { i: AlertTriangle, t: "Malicious complaints", d: "Deliberately malicious allegations may attract formal disciplinary action under University procedures." },
            ].map((c, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full rounded-sm border border-slate-200 border border-border bg-card p-7">
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
          <div className="relative overflow-hidden rounded-sm border border-border bg-primary text-primary-foreground p-10 md:p-14">
            <div className="absolute inset-0 grain opacity-[0.06]" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Ready when you are</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">Take the next step on your own terms.</h3>
                <p className="mt-4 text-primary-foreground/70 max-w-xl">There is no wrong way to begin. A call. An email. A walk-in visit. We will meet you where you are.</p>
              </div>
              <div className="md:col-span-4 flex md:justify-end gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-6 bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link to="/contact">Contact support <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
