export const REPORT_STORAGE_KEY = "ug_sextortion_reports_v2";

/** Aligned with the University of Ghana Sexual Harassment and Misconduct Policy (2017). */
export const INCIDENT_TYPE_OPTIONS: IncidentType[] = [
  "Sexual harassment",
  "Quid pro quo / conditioning outcomes",
  "Hostile environment",
  "Verbal, written or electronic conduct",
  "Non-verbal or physical conduct",
  "Sexual assault or abuse",
  "Stalking / sexual intimidation",
  "Sexually exploitative or degrading behaviour",
  "Retaliation",
  "Other",
];

export type IncidentType =
  | "Sexual harassment"
  | "Quid pro quo / conditioning outcomes"
  | "Hostile environment"
  | "Verbal, written or electronic conduct"
  | "Non-verbal or physical conduct"
  | "Sexual assault or abuse"
  | "Stalking / sexual intimidation"
  | "Sexually exploitative or degrading behaviour"
  | "Retaliation"
  | "Other";

export type CaseStatus =
  | "Pending"
  | "Under Review"
  | "Investigating"
  | "Resolved"
  | "Escalated";

export type PriorityLevel = "Low" | "Medium" | "High" | "Urgent";

export type IdentityPayload = {
  fullName: string;
  studentOrStaffId: string;
  email: string;
  phone?: string;
};

export type EvidenceItem = {
  name: string;
  type: string;
  size: number;
  previewUrl?: string;
};

export type ReportRecord = {
  id: string;
  incidentType: IncidentType;
  description: string;
  incidentDate: string;
  incidentTime?: string;
  submittedAt: string;
  anonymous: boolean;
  identity?: IdentityPayload;
  priority: PriorityLevel;
  status: CaseStatus;
  assignedInvestigator: string;
  evidence: EvidenceItem[];
};

const SAMPLE_REPORTS: ReportRecord[] = [
  {
    id: "UG-2026-1001",
    incidentType: "Quid pro quo / conditioning outcomes",
    description: "Complainant reported unwelcome conduct linked to academic evaluation.",
    incidentDate: "2026-04-21",
    incidentTime: "13:30",
    submittedAt: "2026-04-21T14:02:00.000Z",
    anonymous: true,
    priority: "Urgent",
    status: "Investigating",
    assignedInvestigator: "Anti-Sexual Harassment Committee",
    evidence: [{ name: "screenshots.pdf", type: "application/pdf", size: 248024 }],
  },
  {
    id: "UG-2026-1002",
    incidentType: "Verbal, written or electronic conduct",
    description: "Repeated unwelcome electronic messages of a sexual nature.",
    incidentDate: "2026-04-28",
    submittedAt: "2026-04-29T09:40:00.000Z",
    anonymous: false,
    identity: {
      fullName: "Confidential Reporter",
      studentOrStaffId: "ST102987",
      email: "reporter@ug.edu.gh",
      phone: "",
    },
    priority: "High",
    status: "Under Review",
    assignedInvestigator: "Committee intake officer",
    evidence: [],
  },
  {
    id: "UG-2026-1003",
    incidentType: "Hostile environment",
    description: "Persistent unwelcome conduct affecting study environment.",
    incidentDate: "2026-03-10",
    submittedAt: "2026-03-11T10:12:00.000Z",
    anonymous: true,
    priority: "Medium",
    status: "Resolved",
    assignedInvestigator: "Anti-Sexual Harassment Committee",
    evidence: [{ name: "audio-note.m4a", type: "audio/mp4", size: 1024031 }],
  },
  {
    id: "UG-2026-1004",
    incidentType: "Non-verbal or physical conduct",
    description: "Unwelcome physical contact reported on campus.",
    incidentDate: "2026-05-01",
    submittedAt: "2026-05-01T16:24:00.000Z",
    anonymous: false,
    identity: {
      fullName: "Confidential Reporter",
      studentOrStaffId: "SF2284",
      email: "staff.member@ug.edu.gh",
      phone: "",
    },
    priority: "High",
    status: "Pending",
    assignedInvestigator: "Unassigned",
    evidence: [{ name: "incident-photo.jpg", type: "image/jpeg", size: 420913 }],
  },
  {
    id: "UG-2026-1005",
    incidentType: "Sexual assault or abuse",
    description: "Report of non-consensual sexual contact; complainant advised of police option.",
    incidentDate: "2026-02-18",
    submittedAt: "2026-02-19T08:30:00.000Z",
    anonymous: true,
    priority: "Urgent",
    status: "Escalated",
    assignedInvestigator: "Committee / security liaison",
    evidence: [],
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

function parseStoredReports(raw: string | null): ReportRecord[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as ReportRecord[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function getReports(): ReportRecord[] {
  if (!isBrowser()) return SAMPLE_REPORTS;
  const stored = parseStoredReports(window.localStorage.getItem(REPORT_STORAGE_KEY));
  if (stored.length) return stored;
  window.localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(SAMPLE_REPORTS));
  return SAMPLE_REPORTS;
}

export function setReports(reports: ReportRecord[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(reports));
}

export function derivePriority(incidentType: IncidentType, description: string): PriorityLevel {
  const text = description.toLowerCase();
  const urgentSignals = ["rape", "assault", "weapon", "stalk", "threat", "blackmail", "coerc"];
  if (
    incidentType === "Sexual assault or abuse" ||
    incidentType === "Stalking / sexual intimidation" ||
    incidentType === "Sexually exploitative or degrading behaviour"
  ) {
    return "Urgent";
  }
  if (urgentSignals.some((signal) => text.includes(signal))) return "Urgent";
  if (
    incidentType === "Quid pro quo / conditioning outcomes" ||
    incidentType === "Hostile environment" ||
    incidentType === "Retaliation"
  ) {
    return "High";
  }
  if (
    incidentType === "Non-verbal or physical conduct" ||
    incidentType === "Sexual harassment" ||
    incidentType === "Verbal, written or electronic conduct"
  ) {
    return "High";
  }
  if (incidentType === "Other") return "Medium";
  return "Low";
}

export function createReportId(existingReports: ReportRecord[]) {
  const base = 1000 + existingReports.length + 1;
  return `UG-${new Date().getFullYear()}-${base}`;
}
