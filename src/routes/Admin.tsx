import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  LayoutDashboard,
  FileSearch,
  BriefcaseBusiness,
  HandHeart,
  ChartNoAxesCombined,
  LibraryBig,
  Bell,
  Settings,
  LogOut,
  Shield,
  TriangleAlert,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, XAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getReports, setReports, type CaseStatus, type IncidentType, type ReportRecord } from "@/lib/reporting";

export const Route = createFileRoute("/Admin")({
  component: AdminPortalPage,
});

const ADMIN_AUTH_KEY = "ug_admin_session_v1";

const SIDE_NAV = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Misconduct reports", icon: FileSearch },
  { label: "Investigations", icon: BriefcaseBusiness },
  { label: "Victim support", icon: HandHeart },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Policy resources", icon: LibraryBig },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
] as const;

const STATUS_OPTIONS: CaseStatus[] = [
  "Pending",
  "Under Review",
  "Investigating",
  "Resolved",
  "Escalated",
];

function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [reports, setReportState] = useState<ReportRecord[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CaseStatus | "All">("All");
  const [typeFilter, setTypeFilter] = useState<IncidentType | "All">("All");

  useEffect(() => {
    const session = window.localStorage.getItem(ADMIN_AUTH_KEY);
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    setReportState(getReports().sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1)));
  }, [isAuthenticated]);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setLoginError("Please provide both email and password.");
      return;
    }
    setLoginError("");
    window.localStorage.setItem(ADMIN_AUTH_KEY, "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(ADMIN_AUTH_KEY);
    setIsAuthenticated(false);
    setPassword("");
  };

  const updateStatus = (id: string, nextStatus: CaseStatus) => {
    setReportState((prev) => {
      const updated = prev.map((report) =>
        report.id === id ? { ...report, status: nextStatus } : report,
      );
      setReports(updated);
      return updated;
    });
  };

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const query = search.toLowerCase();
      const matchesQuery =
        !query ||
        report.id.toLowerCase().includes(query) ||
        report.incidentType.toLowerCase().includes(query) ||
        report.assignedInvestigator.toLowerCase().includes(query);
      const matchesStatus = statusFilter === "All" || report.status === statusFilter;
      const matchesType = typeFilter === "All" || report.incidentType === typeFilter;
      return matchesQuery && matchesStatus && matchesType;
    });
  }, [reports, search, statusFilter, typeFilter]);

  const metrics = useMemo(() => {
    const totalReports = reports.length;
    const pendingCases = reports.filter((item) => item.status === "Pending").length;
    const activeInvestigations = reports.filter((item) =>
      ["Under Review", "Investigating"].includes(item.status),
    ).length;
    const resolvedCases = reports.filter((item) => item.status === "Resolved").length;
    const anonymousReports = reports.filter((item) => item.anonymous).length;
    const urgentCases = reports.filter((item) =>
      item.priority === "Urgent" || item.status === "Escalated",
    ).length;

    return {
      totalReports,
      pendingCases,
      activeInvestigations,
      resolvedCases,
      anonymousReports,
      urgentCases,
    };
  }, [reports]);

  const incidentTypeData = useMemo(() => {
    const countMap = new Map<string, number>();
    reports.forEach((report) => {
      countMap.set(report.incidentType, (countMap.get(report.incidentType) ?? 0) + 1);
    });
    return Array.from(countMap.entries()).map(([type, count]) => ({ type, count }));
  }, [reports]);

  const statusData = useMemo(() => {
    return STATUS_OPTIONS.map((status) => ({
      status,
      count: reports.filter((report) => report.status === status).length,
    }));
  }, [reports]);

  const identityData = useMemo(() => {
    const anonymous = reports.filter((report) => report.anonymous).length;
    const identified = reports.length - anonymous;
    return [
      { name: "Anonymous", value: anonymous },
      { name: "Identified", value: identified },
    ];
  }, [reports]);

  const monthlyTrendData = useMemo(() => {
    const trendMap = new Map<string, number>();
    reports.forEach((report) => {
      const month = new Date(report.submittedAt).toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
      });
      trendMap.set(month, (trendMap.get(month) ?? 0) + 1);
    });
    return Array.from(trendMap.entries()).map(([month, count]) => ({ month, count }));
  }, [reports]);

  const resolutionTrendData = useMemo(() => {
    return [
      { label: "Resolved", value: metrics.resolvedCases },
      { label: "Open", value: metrics.totalReports - metrics.resolvedCases },
      { label: "Escalated", value: reports.filter((report) => report.status === "Escalated").length },
    ];
  }, [metrics, reports]);

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-background">
        <div className="grid min-h-screen lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#143D6B] text-primary-foreground px-8 py-12 md:px-12 lg:px-14 lg:py-16">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ffffff,transparent_40%),radial-gradient(circle_at_80%_10%,#ffffff,transparent_35%),radial-gradient(circle_at_70%_80%,#ffffff,transparent_45%)]" />
            <div className="relative h-full flex flex-col">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
                <Shield className="h-4 w-4" />
                University of Ghana
              </div>
              <div className="mt-14 max-w-md">
                <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                  Sexual Harassment &amp; Misconduct Case Portal
                </h1>
                <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                  Oversight of misconduct reports, Anti-Sexual Harassment Committee workflows, investigations
                  and victim-support tracking under the University of Ghana Sexual Harassment and Misconduct Policy.
                </p>
              </div>
              <div className="mt-auto rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-primary-foreground/75">Security Notice</div>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Restricted access. All administrative actions are confidential and institutionally logged.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-12 md:px-10">
            <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl border border-border bg-card p-7 md:p-8 shadow-elegant">
              <h2 className="font-display text-3xl font-semibold tracking-tight">Welcome Back</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in with your institutional account to continue.
              </p>
              <div className="mt-7 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@ug.edu.gh"
                    className="h-11 rounded-xl"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    className="h-11 rounded-xl"
                  />
                </div>
              </div>
              {loginError && <p className="mt-3 text-xs text-destructive">{loginError}</p>}
              <Button type="submit" className="mt-6 h-11 w-full rounded-sm bg-primary hover:bg-primary/90">
                Sign In
              </Button>
              <button type="button" className="mt-4 text-sm text-primary hover:underline">
                Forgot Password
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-secondary/20">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-border bg-card px-4 py-6">
          <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">University of Ghana</div>
            <div className="mt-2 font-display text-xl">SH&amp;M admin</div>
          </div>
          <nav className="mt-6 space-y-1">
            {SIDE_NAV.map((item, index) => (
              <button
                key={item.label}
                className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </aside>

        <main className="px-6 py-7 md:px-8 md:py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight">Misconduct oversight dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Committee intake, investigations, anonymous disclosures and support referrals — at a glance.
              </p>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/25">
              {reports.length} total case records
            </Badge>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Misconduct reports (all)" value={metrics.totalReports} />
            <MetricCard title="Pending intake" value={metrics.pendingCases} />
            <MetricCard title="Active investigations" value={metrics.activeInvestigations} />
            <MetricCard title="Resolved misconduct cases" value={metrics.resolvedCases} />
            <MetricCard title="Anonymous reports" value={metrics.anonymousReports} />
            <MetricCard title="Urgent / escalated" value={metrics.urgentCases} urgent />
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            <ChartCard title="Reports over time">
              <ChartContainer
                className="h-[250px] w-full"
                config={{ count: { label: "Reports", color: "var(--color-primary)" } }}
              >
                <LineChart data={monthlyTrendData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    dataKey="count"
                    type="monotone"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-primary)" }}
                  />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            <ChartCard title="Incident type distribution">
              <ChartContainer
                className="h-[250px] w-full"
                config={{ count: { label: "Cases", color: "var(--color-primary)" } }}
              >
                <BarChart data={incidentTypeData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="type" tickLine={false} axisLine={false} interval={0} tick={{ fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            <ChartCard title="Anonymous vs identified reports">
              <ChartContainer
                className="h-[250px] w-full"
                config={{
                  Anonymous: { label: "Anonymous", color: "#143D6B" },
                  Identified: { label: "Identified", color: "#A04747" },
                }}
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                  <Pie data={identityData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                    {identityData.map((item) => (
                      <Cell key={item.name} fill={item.name === "Anonymous" ? "#143D6B" : "#A04747"} />
                    ))}
                  </Pie>
                  <ChartLegend content={<ChartLegendContent />} />
                </PieChart>
              </ChartContainer>
            </ChartCard>

            <ChartCard title="Resolution overview">
              <ChartContainer
                className="h-[250px] w-full"
                config={{
                  value: { label: "Cases", color: "var(--color-primary)" },
                }}
              >
                <BarChart data={resolutionTrendData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {resolutionTrendData.map((item) => (
                      <Cell
                        key={item.label}
                        fill={
                          item.label === "Resolved"
                            ? "#143D6B"
                            : item.label === "Escalated"
                              ? "#A04747"
                              : "#6B7280"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold tracking-tight">Case management</h2>
              <div className="flex flex-wrap gap-2">
                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search case ID, incident type, assignee"
                  className="h-10 w-[260px]"
                />
                <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as CaseStatus | "All")}>
                  <SelectTrigger className="h-10 w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    {STATUS_OPTIONS.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as IncidentType | "All")}>
                  <SelectTrigger className="h-10 w-[170px]">
                    <SelectValue placeholder="Incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    {[...new Set(reports.map((report) => report.incidentType))].map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report ID</TableHead>
                    <TableHead>Incident</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Identity</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Investigator</TableHead>
                    <TableHead>Evidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell>{report.incidentType}</TableCell>
                      <TableCell>{new Date(report.submittedAt).toLocaleString()}</TableCell>
                      <TableCell>
                        <Select
                          value={report.status}
                          onValueChange={(value) => updateStatus(report.id, value as CaseStatus)}
                        >
                          <SelectTrigger className="h-8 w-[150px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUS_OPTIONS.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {report.anonymous ? "Anonymous" : "Identified"}
                        </Badge>
                      </TableCell>
                      <TableCell>{priorityBadge(report.priority)}</TableCell>
                      <TableCell>{report.assignedInvestigator}</TableCell>
                      <TableCell>{report.evidence.length ? `${report.evidence.length} file(s)` : "None"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {!filteredReports.length && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
                <TriangleAlert className="h-4 w-4" />
                No reports found for current filters.
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

function MetricCard({ title, value, urgent = false }: { title: string; value: number; urgent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
      <div className={`mt-3 text-3xl font-semibold ${urgent ? "text-[#A04747]" : "text-primary"}`}>{value}</div>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function priorityBadge(priority: ReportRecord["priority"]) {
  const cls =
    priority === "Urgent"
      ? "bg-[#A04747]/15 text-[#A04747] border-[#A04747]/30"
      : priority === "High"
        ? "bg-primary/10 text-primary border-primary/25"
        : priority === "Medium"
          ? "bg-gold/15 text-gold-foreground border-gold/25"
          : "bg-secondary text-muted-foreground border-border";
  return <Badge className={cls}>{priority}</Badge>;
}
