import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  LayoutDashboard,
  FileSearch,
  BriefcaseBusiness,
  FolderOpen,
  MessageSquare,
  History,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Download,
  Eye,
  EyeOff,
  ChevronLeft
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import ugLogo from "@/assets/ug-logo.jpeg";

export const Route = createFileRoute("/Admin")({
  component: AdminPortalPage,
});

const ADMIN_AUTH_KEY = "ug_admin_session_v2";
type TabId = "dashboard" | "records" | "investigations" | "evidence" | "messages" | "audit" | "team" | "settings";

function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const session = window.localStorage.getItem(ADMIN_AUTH_KEY);
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    window.localStorage.setItem(ADMIN_AUTH_KEY, "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(ADMIN_AUTH_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      <Sidebar collapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header activeTab={activeTab} onLogout={handleLogout} />
        <main className="flex-1 overflow-auto p-8">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "records" && <CaseRecordsView />}
          {activeTab === "investigations" && <InvestigationsView />}
          {activeTab === "evidence" && <EvidenceView />}
          {activeTab === "messages" && <MessagesView />}
          {activeTab === "team" && <TeamView />}
          {activeTab === "settings" && <SettingsView />}
          {activeTab === "audit" && <AuditLogsView />}
        </main>
      </div>
    </div>
  );
}

function Sidebar({ collapsed, onToggle, activeTab, setActiveTab }: { collapsed: boolean; onToggle: () => void; activeTab: TabId; setActiveTab: (t: TabId) => void }) {
  const workspace = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "records", label: "Case records", icon: FileSearch, count: 6 },
    { id: "investigations", label: "Investigations", icon: BriefcaseBusiness },
    { id: "evidence", label: "Evidence center", icon: FolderOpen },
    { id: "messages", label: "Messages", icon: MessageSquare, count: 12 },
  ] as const;

  const oversight = [
    { id: "audit", label: "Audit logs", icon: History },
    { id: "team", label: "Team & roles", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ] as const;

  return (
    <aside className={`flex flex-col border-r border-border bg-white transition-all duration-300 ease-in-out ${collapsed ? "w-[72px]" : "w-[240px]"}`}>
      <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <img src={ugLogo} alt="UG Logo" className="h-8 w-8 object-contain shrink-0" />
          {!collapsed && (
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-semibold text-foreground text-[15px] leading-tight truncate">University of Ghana</span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium leading-tight truncate">SpeakSafe UG Portal</span>
            </div>
          )}
        </div>
        <button onClick={onToggle} className="text-muted-foreground hover:text-foreground shrink-0 ml-1">
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 scrollbar-none">
        {!collapsed && <div className="px-5 mb-2 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">Workspace</div>}
        <nav className="space-y-0.5 px-3">
          {workspace.map((item) => (
            <SidebarItem key={item.id} item={item} active={activeTab === item.id} collapsed={collapsed} onClick={() => setActiveTab(item.id as TabId)} />
          ))}
        </nav>

        <div className="mt-8 mb-2">
          {!collapsed && <div className="px-5 mb-2 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">Oversight</div>}
          <nav className="space-y-0.5 px-3">
            {oversight.map((item) => (
              <SidebarItem key={item.id} item={item} active={activeTab === item.id} collapsed={collapsed} onClick={() => setActiveTab(item.id as TabId)} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ item, active, collapsed, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 transition-colors ${active ? "bg-[#1f3a5f] text-white" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
        }`}
      title={collapsed ? item.label : undefined}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <item.icon className="h-4 w-4 shrink-0" strokeWidth={active ? 2.5 : 2} />
        {!collapsed && <span className="text-[13px] font-medium truncate">{item.label}</span>}
      </div>
      {!collapsed && item.count && (
        <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-sm ${active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
          {item.count}
        </span>
      )}
    </button>
  );
}

function Header({ activeTab, onLogout }: { activeTab: string; onLogout: () => void }) {
  const titleMap: Record<string, string> = {
    dashboard: "Dashboard",
    records: "Case records",
    investigations: "Investigations",
    evidence: "Evidence center",
    messages: "Messages",
    audit: "Audit logs",
    team: "Team & roles",
    settings: "Settings",
  };

  return (
    <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-border bg-white px-8">
      <div className="flex items-center gap-8 w-full max-w-2xl">
        <h1 className="text-xl font-semibold text-[#1f3a5f] w-48 shrink-0">{titleMap[activeTab]}</h1>
        <div className="relative flex-1 hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
          <Input
            placeholder="Search cases..."
            className="h-9 w-full bg-slate-50 border-transparent focus-visible:ring-1 focus-visible:ring-[#1f3a5f] focus-visible:border-transparent pl-9 text-sm rounded-sm placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-slate-600">
          <Bell className="h-5 w-5" strokeWidth={2} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="h-full w-full object-cover" />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[13px] font-semibold text-slate-900 leading-none">Dr. A. Mensah</div>
                <div className="text-[11px] text-slate-500 mt-1.5 leading-none">Super admin - ASHC</div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400 ml-1" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-sm border-slate-200 shadow-xl">
            <DropdownMenuLabel className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-4 py-3">Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuItem className="px-4 py-3 text-[13px] cursor-pointer focus:bg-slate-50">
              <Users className="mr-3 h-4 w-4 text-slate-400" /> Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-3 text-[13px] cursor-pointer focus:bg-slate-50">
              <Bell className="mr-3 h-4 w-4 text-slate-400" /> Preferences
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuItem
              onClick={onLogout}
              className="px-4 py-3 text-[13px] text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-600"
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

// --- Views ---

function DashboardView() {
  const trendData = [
    { name: "Dec", resolved: 8, reports: 12 },
    { name: "Jan", resolved: 12, reports: 18 },
    { name: "Feb", resolved: 16, reports: 22 },
    { name: "Mar", resolved: 22, reports: 26 },
    { name: "Apr", resolved: 24, reports: 31 },
    { name: "May", resolved: 18, reports: 28 },
  ];

  const pieData = [
    { name: 'Sexual harassment', value: 42, color: '#1f3a5f' },
    { name: 'Verbal misconduct', value: 24, color: '#c59d5f' },
    { name: 'Stalking', value: 14, color: '#475569' },
    { name: 'Coercion', value: 12, color: '#94a3b8' },
    { name: 'Other', value: 8, color: '#e2e8f0' },
  ];

  return (
    <div className="space-y-6 max-w-[1200px] animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="OPEN CASES" value="28" subtitle="+3 vs last month" subColor="text-green-600" />
        <MetricCard title="RESOLVED THIS MONTH" value="19" subtitle="+12%" subColor="text-green-600" />
        <MetricCard title="AVG. RESPONSE" value="22h" subtitle="-5h" subColor="text-green-600" />
        <MetricCard title="CRITICAL ALERTS" value="1" subtitle="Requires review" subColor="text-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-sm p-6 shadow-none">
          <h3 className="text-[15px] font-semibold text-[#1f3a5f]">Caseload trend</h3>
          <p className="text-[13px] text-slate-500 mt-1 mb-8">Reports vs resolutions, last 6 months</p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1f3a5f" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#1f3a5f" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c59d5f" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#c59d5f" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dx={-10} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: '12px' }} />
                <Area type="monotone" dataKey="reports" stroke="#1f3a5f" strokeWidth={2} fillOpacity={1} fill="url(#colorReports)" />
                <Area type="monotone" dataKey="resolved" stroke="#c59d5f" strokeWidth={2} fillOpacity={1} fill="url(#colorResolved)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-none flex flex-col">
          <h3 className="text-[15px] font-semibold text-[#1f3a5f]">Case mix</h3>
          <p className="text-[13px] text-slate-500 mt-1 mb-8">By incident type</p>
          <div className="flex-1 flex flex-col items-center justify-between">
            <div className="h-[180px] w-full flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full mt-6 space-y-2.5">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-sm shadow-none mt-6">
        <CaseManagementTable />
      </div>
    </div>
  );
}

function CaseManagementTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const data = [
    { id: "UG-2026-1004", type: "Non-verbal or physical conduct", date: "5/1/2026, 4:24:00 PM", status: "Pending", identity: "Identified", priority: "High", pColor: "text-orange-600 bg-orange-50", lead: "Unassigned", files: "1 file(s)" },
    { id: "UG-2026-1002", type: "Verbal, written or electronic conduct", date: "4/29/2026, 9:40:00 AM", status: "Under Review", identity: "Identified", priority: "High", pColor: "text-orange-600 bg-orange-50", lead: "Committee intake officer", files: "None" },
    { id: "UG-2026-1001", type: "Quid pro quo / conditioning outcomes", date: "4/21/2026, 2:02:00 PM", status: "Investigating", identity: "Anonymous", priority: "Urgent", pColor: "text-red-600 bg-red-50", lead: "Anti-Sexual Harassment Committee", files: "1 file(s)" },
    { id: "UG-2026-1003", type: "Hostile environment", date: "3/11/2026, 10:12:00 AM", status: "Resolved", identity: "Anonymous", priority: "Medium", pColor: "text-slate-600 bg-slate-100", lead: "Anti-Sexual Harassment Committee", files: "1 file(s)" },
    { id: "UG-2026-1005", type: "Sexual assault or abuse", date: "2/19/2026, 8:30:00 AM", status: "Escalated", identity: "Anonymous", priority: "Urgent", pColor: "text-red-600 bg-red-50", lead: "Committee / security liaison", files: "None" },
  ];
  const filtered = data.filter(r => {
    const q = search.toLowerCase();
    const matchSearch = r.id.toLowerCase().includes(q) || r.type.toLowerCase().includes(q) || r.lead.toLowerCase().includes(q);
    const matchStatus = statusFilter === "all" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });
  return (
    <>
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-[15px] font-semibold text-[#1f3a5f]">Case management</h3>
          <p className="text-[13px] text-slate-500 mt-1">Review and assign incoming reports</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search case ID, incident, assignee..." className="h-9 pl-9 w-60 text-[12px] rounded-sm border-slate-200 bg-slate-50" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-9 w-36 text-[12px] border-slate-200 rounded-sm"><SelectValue placeholder="All Statuses" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Under Review">Under Review</SelectItem>
              <SelectItem value="Investigating">Investigating</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
              <SelectItem value="Escalated">Escalated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-100 hover:bg-transparent">
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Report ID</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Incident</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Submitted</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Status</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Identity</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Priority</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest">Investigator</TableHead>
              <TableHead className="text-[11px] font-bold text-slate-400 h-10 px-4 uppercase tracking-widest text-right">Evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row, i) => (
              <TableRow key={i} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                <TableCell className="px-4 py-3 text-[13px] font-semibold text-[#1f3a5f] whitespace-nowrap">{row.id}</TableCell>
                <TableCell className="px-4 py-3 text-[13px] text-slate-600 max-w-[180px]"><span className="truncate block">{row.type}</span></TableCell>
                <TableCell className="px-4 py-3 text-[12px] text-slate-400 whitespace-nowrap">{row.date}</TableCell>
                <TableCell className="px-4 py-3">
                  <Badge variant="outline" className={`text-[10px] font-semibold border rounded-full px-2 ${
                    row.status === "Resolved" ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                    row.status === "Escalated" ? "bg-red-50 text-red-600 border-red-200" :
                    row.status === "Investigating" ? "bg-blue-50 text-blue-600 border-blue-200" :
                    row.status === "Under Review" ? "bg-amber-50 text-amber-600 border-amber-200" :
                    "bg-slate-100 text-slate-600 border-slate-200"
                  }`}>{row.status}</Badge>
                </TableCell>
                <TableCell className="px-4 py-3"><Badge variant="outline" className="text-[10px] font-semibold border-slate-200 text-slate-600">{row.identity}</Badge></TableCell>
                <TableCell className="px-4 py-3"><Badge variant="outline" className={`text-[10px] font-bold border-0 ${row.pColor}`}>{row.priority}</Badge></TableCell>
                <TableCell className="px-4 py-3 text-[12px] text-slate-600">{row.lead}</TableCell>
                <TableCell className="px-4 py-3 text-[12px] text-slate-400 text-right">{row.files}</TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow><TableCell colSpan={8} className="text-center py-10 text-[13px] text-slate-400">No cases match your filters.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function MetricCard({ title, value, subtitle, subColor }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-sm p-5">
      <div className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-3">{title}</div>
      <div className="text-3xl font-semibold text-[#1f3a5f] mb-3">{value}</div>
      <div className={`text-[12px] font-medium ${subColor}`}>{subtitle}</div>
    </div>
  );
}

function InvestigationsView() {
  const columns = [
    {
      title: "INTAKE",
      count: 1,
      bgColor: "bg-amber-50/50",
      borderColor: "border-amber-100",
      cards: [
        { id: "UG-SH-2026-00044", type: "Verbal misconduct", priority: "MEDIUM", priorityColor: "text-amber-600 bg-amber-50", dept: "Registry", lead: "D. Owusu" }
      ]
    },
    {
      title: "UNDER INVESTIGATION",
      count: 2,
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-100",
      cards: [
        { id: "UG-SH-2026-00045", type: "Sexual Harassment", priority: "HIGH", priorityColor: "text-orange-600 bg-orange-50", dept: "Economics", lead: "L. Boateng" },
        { id: "UG-SH-2026-00040", type: "Coercion", priority: "HIGH", priorityColor: "text-orange-600 bg-orange-50", dept: "Computer Science", lead: "L. Boateng" }
      ]
    },
    {
      title: "AWAITING HEARING",
      count: 1,
      bgColor: "bg-fuchsia-50/50",
      borderColor: "border-fuchsia-100",
      cards: [
        { id: "UG-SH-2026-00043", type: "Sexual assault", priority: "CRITICAL", priorityColor: "text-red-600 bg-red-50", dept: "Law School", lead: "K. Asante" }
      ]
    },
    {
      title: "RESOLVED",
      count: 2,
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-100",
      cards: [
        { id: "UG-SH-2026-00042", type: "Stalking", priority: "LOW", priorityColor: "text-slate-500 bg-slate-100", dept: "Sociology", lead: "System" },
        { id: "UG-SH-2026-00041", type: "Harassment", priority: "LOW", priorityColor: "text-slate-500 bg-slate-100", dept: "Finance", lead: "System" }
      ]
    }
  ];

  return (
    <div className="h-full animate-in fade-in duration-500 flex gap-6 overflow-x-auto pb-4">
      {columns.map((col, idx) => (
        <div key={idx} className={`flex-shrink-0 w-[320px] border rounded-sm flex flex-col ${col.bgColor} ${col.borderColor}`}>
          <div className="p-4 flex items-center justify-between border-b border-transparent">
            <h3 className="text-[12px] font-semibold text-slate-700 tracking-wider uppercase">{col.title}</h3>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[12px] font-medium text-slate-500 shadow-none border border-slate-100">{col.count}</span>
          </div>
          <div className="flex-1 p-3 space-y-3">
            {col.cards.map((card, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="bg-white border border-slate-200 rounded-sm p-4 shadow-none hover:border-[#1f3a5f] transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-[11px] font-bold text-[#1f3a5f]">{card.id}</div>
                      <Badge variant="outline" className={`h-4 px-1.5 text-[10px] font-bold border-0 ${card.priorityColor}`}>{card.priority}</Badge>
                    </div>
                    <div className="text-[13px] font-medium text-slate-900 mb-6 leading-tight group-hover:text-[#1f3a5f]">{card.type}</div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">
                          {card.lead.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-[11px] text-slate-500">{card.lead}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{card.dept}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl rounded-sm border-slate-200">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <DialogTitle className="text-xl font-semibold text-[#1f3a5f]">Investigation Brief</DialogTitle>
                      <Badge className="bg-orange-50 text-orange-600 border-0 rounded-full h-5 px-2 text-[10px]">IN PROGRESS</Badge>
                    </div>
                    <DialogDescription>Case ID: {card.id}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Lead Investigator</label>
                        <div className="text-[14px] text-slate-900 font-medium">{card.lead}</div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Priority Level</label>
                        <div className="text-[14px] text-slate-900 font-medium">{card.priority}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-sm border border-slate-100">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Status Update</label>
                      <p className="text-[13px] text-slate-600 leading-relaxed italic">
                        "Gathering witness statements and verifying digital evidence EV-9821. Expected completion: Friday."
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <div className="text-[12px] text-slate-400">Last updated: 2 hours ago</div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="h-9 px-4 text-[12px] font-bold rounded-sm uppercase">History</Button>
                        <Button className="h-9 px-4 text-[12px] font-bold rounded-sm uppercase bg-[#1f3a5f]">Update Status</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AuditLogsView() {
  const logs = [
    { ts: "2026-05-08 14:22", actor: "D. Owusu", role: "INTAKE OFFICER", action: "opened case", target: "UG-SH-2026-00045", ip: "10.0.4.21" },
    { ts: "2026-05-08 13:50", actor: "Coordinator A", role: "INVESTIGATOR", action: "uploaded evidence", target: "EV-9821", ip: "10.0.4.18" },
    { ts: "2026-05-08 11:02", actor: "Dr. A. Mensah", role: "SUPER ADMIN", action: "changed role", target: "user:lia.boateng", ip: "10.0.4.2" },
    { ts: "2026-05-07 17:45", actor: "Legal officer", role: "LEGAL", action: "closed case", target: "UG-SH-2026-00042", ip: "10.0.4.30" },
    { ts: "2026-05-07 09:15", actor: "Counsellor B", role: "COUNSELOR", action: "logged session", target: "UG-SH-2026-00041", ip: "10.0.4.27" },
  ];

  return (
    <div className="max-w-[1200px] animate-in fade-in duration-500 bg-white border border-slate-200 rounded-sm shadow-none">
      <div className="p-6 border-b border-slate-100 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[15px] font-semibold text-[#1f3a5f]">Immutable audit trail</h2>
            <p className="text-[13px] text-slate-500 mt-2">Every privileged action is signed and time-stamped.</p>
          </div>
          <Button variant="outline" size="sm" className="h-8 rounded-sm border-slate-200 text-slate-600 gap-2 font-medium text-[12px]">
            <Download className="h-3.5 w-3.5" /> EXPORT CSV
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px] h-9 text-[12px] border-slate-200 rounded-sm">
              <SelectValue placeholder="Action type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="case">Case Actions</SelectItem>
              <SelectItem value="security">Security</SelectItem>
              <SelectItem value="team">Team Management</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Filter by actor..." className="h-9 w-64 text-[12px] border-slate-200 rounded-sm" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-100 hover:bg-transparent">
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Timestamp</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Actor</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Role</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Action</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Target</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase text-right">IP</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log, i) => (
            <TableRow key={i} className="border-slate-100">
              <TableCell className="px-6 py-4 text-[12px] font-medium text-slate-500">{log.ts}</TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-slate-800">{log.actor}</TableCell>
              <TableCell className="px-6 py-4">
                <span className="text-[10px] font-semibold tracking-wider text-[#c59d5f] uppercase">{log.role}</span>
              </TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-slate-600">{log.action}</TableCell>
              <TableCell className="px-6 py-4 text-[13px] font-medium text-slate-700">{log.target}</TableCell>
              <TableCell className="px-6 py-4 text-[11px] text-slate-400 text-right">{log.ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function CaseRecordsView() {
  const handleExport = (type: string) => {
    alert(`Exporting case records as ${type.toUpperCase()}...`);
  };

  const records = [
    { id: "UG-SH-2026-00045", type: "Sexual Harassment", complainant: "Anonymous", date: "2026-05-08", status: "Active", dept: "Economics", details: "Initial report submitted via secure form. Complainant requested anonymity." },
    { id: "UG-SH-2026-00044", type: "Verbal misconduct", complainant: "L. Quansah", date: "2026-05-07", status: "Intake", dept: "Registry", details: "Verbal altercation reported in the main hall." },
    { id: "UG-SH-2026-00043", type: "Sexual assault", complainant: "Anonymous", date: "2026-05-06", status: "Hearing", dept: "Law School", details: "Critical case moved to hearing stage. Legal team notified." },
    { id: "UG-SH-2026-00042", type: "Stalking", complainant: "J. Mensah", date: "2026-05-05", status: "Resolved", dept: "Sociology", details: "Case closed after mediation and no-contact order." },
  ];

  return (
    <div className="max-w-[1200px] animate-in fade-in duration-500 bg-white border border-slate-200 rounded-sm shadow-none">
      <div className="p-6 border-b border-slate-100 flex items-start justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-[#1f3a5f]">All Case Records</h2>
          <p className="text-[13px] text-slate-500 mt-2">Comprehensive list of all submitted reports and their current status.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => handleExport('pdf')} className="h-8 rounded-sm border-slate-200 text-slate-600 gap-2 font-medium text-[12px]">
            <Download className="h-3.5 w-3.5" /> PDF
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleExport('excel')} className="h-8 rounded-sm border-slate-200 text-slate-600 gap-2 font-medium text-[12px]">
            <Download className="h-3.5 w-3.5" /> EXCEL
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-100 hover:bg-transparent">
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Case ID</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Incident Type</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Complainant</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Date</TableHead>
            <TableHead className="text-[11px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Status</TableHead>
            <TableHead className="h-10 px-6 text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((rec, i) => (
            <TableRow key={i} className="border-slate-100 group">
              <TableCell className="px-6 py-4 text-[13px] font-semibold text-[#1f3a5f]">{rec.id}</TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-slate-600">{rec.type}</TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-slate-600">{rec.complainant}</TableCell>
              <TableCell className="px-6 py-4 text-[12px] text-slate-500">{rec.date}</TableCell>
              <TableCell className="px-6 py-4">
                <Badge variant="outline" className={`rounded-full px-2 py-0 h-5 text-[10px] font-bold uppercase tracking-wide border-0 ${rec.status === 'Resolved' ? 'bg-emerald-50 text-emerald-600' :
                    rec.status === 'Hearing' ? 'bg-fuchsia-50 text-fuchsia-600' :
                      'bg-blue-50 text-blue-600'
                  }`}>
                  {rec.status}
                </Badge>
              </TableCell>
              <TableCell className="px-6 py-4 text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-[12px] font-bold text-slate-400 hover:text-[#1f3a5f] transition-colors uppercase tracking-wider opacity-0 group-hover:opacity-100">
                      View
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl rounded-sm border-slate-200">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <DialogTitle className="text-xl font-semibold text-[#1f3a5f]">{rec.id}</DialogTitle>
                        <Badge className="bg-blue-50 text-blue-600 border-0 rounded-full h-5 px-2 text-[10px]">{rec.status}</Badge>
                      </div>
                      <DialogDescription className="text-slate-500 text-[14px]">
                        Detailed record of the incident reported on {rec.date}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 space-y-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Incident Type</label>
                          <div className="text-[15px] text-slate-900 font-medium">{rec.type}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Complainant</label>
                          <div className="text-[15px] text-slate-900 font-medium">{rec.complainant}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Department</label>
                          <div className="text-[15px] text-slate-900 font-medium">{rec.dept}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Submission Date</label>
                          <div className="text-[15px] text-slate-900 font-medium">{rec.date}</div>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-6">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Case Brief</label>
                        <p className="text-[14px] text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-sm italic border-l-2 border-slate-200">
                          "{rec.details}"
                        </p>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" className="rounded-sm h-10 px-6 text-[12px] font-bold uppercase border-slate-200">Archive</Button>
                        <Button onClick={() => alert('Assigning investigator...')} className="rounded-sm h-10 px-6 text-[12px] font-bold uppercase bg-[#1f3a5f] hover:bg-[#152a47]">Assign Investigator</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function EvidenceView() {
  const handleDownload = (id: string) => {
    alert(`Downloading evidence ${id}...`);
  };

  const handleBulkDownload = () => {
    alert(`Preparing bulk download of all evidence...`);
  };

  const evidence = [
    { id: "EV-9821", caseId: "UG-SH-2026-00045", type: "Image", uploader: "Coordinator A", date: "2026-05-08", size: "2.4 MB" },
    { id: "EV-9820", caseId: "UG-SH-2026-00045", type: "PDF Document", uploader: "D. Owusu", date: "2026-05-08", size: "1.1 MB" },
    { id: "EV-9819", caseId: "UG-SH-2026-00044", type: "Audio", uploader: "System", date: "2026-05-07", size: "4.8 MB" },
  ];

  return (
    <div className="max-w-[1200px] animate-in fade-in duration-500 bg-white border border-slate-200 rounded-sm shadow-none">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-[#1f3a5f]">Evidence Center</h2>
          <p className="text-[13px] text-slate-500 mt-2">Secure repository for all uploaded case evidence.</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleBulkDownload} className="h-8 rounded-sm border-slate-200 text-slate-600 gap-2 font-medium text-[12px]">
          <Download className="h-3.5 w-3.5" /> DOWNLOAD BULK
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-100 hover:bg-transparent">
            <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Evidence ID</TableHead>
            <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Case ID</TableHead>
            <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Type</TableHead>
            <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Uploaded By</TableHead>
            <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Date</TableHead>
            <TableHead className="h-10 px-6 text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {evidence.map((ev, i) => (
            <TableRow key={i} className="border-slate-100 group">
              <TableCell className="px-6 py-4 text-[13px] font-semibold text-slate-800">{ev.id}</TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-[#1f3a5f]">{ev.caseId}</TableCell>
              <TableCell className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4 text-slate-400" />
                  <span className="text-[13px] text-slate-600">{ev.type}</span>
                  <span className="text-[11px] text-slate-400 ml-1">({ev.size})</span>
                </div>
              </TableCell>
              <TableCell className="px-6 py-4 text-[13px] text-slate-600">{ev.uploader}</TableCell>
              <TableCell className="px-6 py-4 text-[12px] text-slate-500">{ev.date}</TableCell>
              <TableCell className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-[#1f3a5f]">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDownload(ev.id)} className="h-8 w-8 p-0 text-slate-400 hover:text-[#1f3a5f]">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function TeamView() {
  const roles = [
    { name: "Super admin", count: 1 },
    { name: "Investigator", count: 1 },
    { name: "Counselor", count: 1 },
    { name: "Legal officer", count: 1 },
    { name: "Auditor", count: 1 },
    { name: "Intake officer", count: 1 },
  ];

  const members = [
    { name: "Dr. A. Mensah", role: "SUPER ADMIN", email: "a.mensah@ug.edu.gh", status: "ACTIVE" },
    { name: "Lia Boateng", role: "INVESTIGATOR", email: "l.boateng@ug.edu.gh", status: "ACTIVE" },
    { name: "Counsellor B. Adei", role: "COUNSELOR", email: "b.adei@ug.edu.gh", status: "ACTIVE" },
    { name: "K. Asante", role: "LEGAL OFFICER", email: "k.asante@ug.edu.gh", status: "ACTIVE" },
    { name: "M. Quaye", role: "AUDITOR", email: "m.quaye@ug.edu.gh", status: "INVITED" },
    { name: "D. Owusu", role: "INTAKE OFFICER", email: "d.owusu@ug.edu.gh", status: "ACTIVE" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-[1200px]">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {roles.map((r, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-sm p-4 hover:border-[#1f3a5f] transition-colors cursor-pointer">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Role</div>
            <div className="text-[14px] font-semibold text-[#1f3a5f] truncate">{r.name}</div>
            <div className="text-[11px] text-slate-500 mt-2">{r.count} member(s)</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-sm shadow-none">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-[#1f3a5f]">Team members</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#1f3a5f] hover:bg-[#152a47] text-[12px] h-9 px-4 font-bold rounded-sm uppercase tracking-wider">+ Invite</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md rounded-sm border-slate-200">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-[#1f3a5f]">Invite Team Member</DialogTitle>
                <DialogDescription>Send an invitation to join the ASHC Portal.</DialogDescription>
              </DialogHeader>
              <form className="mt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="invite-email" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Email Address</Label>
                  <Input id="invite-email" placeholder="colleague@ug.edu.gh" className="h-11 rounded-sm border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invite-role" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Assign Role</Label>
                  <Select>
                    <SelectTrigger className="h-11 rounded-sm border-slate-200">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(r => <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <Button variant="outline" className="h-11 px-6 rounded-sm text-[12px] font-bold uppercase border-slate-200">Cancel</Button>
                  <Button className="h-11 px-6 rounded-sm text-[12px] font-bold uppercase bg-[#1f3a5f]">Send Invitation</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-100 bg-slate-50/50">
              <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Member</TableHead>
              <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Role</TableHead>
              <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Email</TableHead>
              <TableHead className="text-[10px] font-semibold tracking-wider text-slate-400 h-10 px-6 uppercase">Status</TableHead>
              <TableHead className="h-10 px-6 text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m, i) => (
              <TableRow key={i} className="border-slate-100">
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">
                      {m.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[13px] font-medium text-slate-800">{m.name}</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 text-[10px] font-semibold text-[#c59d5f] uppercase tracking-wider">{m.role}</TableCell>
                <TableCell className="px-6 py-4 text-[13px] text-slate-500">{m.email}</TableCell>
                <TableCell className="px-6 py-4">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 h-5 text-[9px] font-bold uppercase tracking-wide border-0 ${m.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                    {m.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <Users className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 rounded-sm">
                      <DropdownMenuItem className="text-[12px] font-medium">Edit Role</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] font-medium text-red-600">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function SettingsView() {
  const [activeMenu, setActiveMenu] = useState("General");
  const menuItems = ["General", "Security", "Notifications", "Templates", "Roles & Permissions"];

  return (
    <div className="bg-white border border-slate-200 rounded-sm shadow-none max-w-[1000px] animate-in fade-in duration-500 flex min-h-[600px]">
      <div className="w-64 border-r border-slate-100 py-6">
        <div className="px-6 mb-4 text-[10px] font-semibold tracking-widest text-slate-400 uppercase">Settings Menu</div>
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`w-full text-left px-4 py-2.5 rounded-sm text-[13px] font-medium transition-colors ${activeMenu === item ? "bg-[#1f3a5f] text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-10">
        <h2 className="text-xl font-semibold text-[#1f3a5f] mb-8">{activeMenu} Settings</h2>

        {activeMenu === "General" && (
          <div className="max-w-xl space-y-8">
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Institution Name</label>
              <Input defaultValue="University of Ghana" className="h-11 border-slate-200 rounded-sm focus-visible:ring-1 focus-visible:ring-[#1f3a5f]" />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Support Email</label>
              <Input defaultValue="support@ug.edu.gh" className="h-11 border-slate-200 rounded-sm focus-visible:ring-1 focus-visible:ring-[#1f3a5f]" />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Timezone</label>
              <Select defaultValue="GMT">
                <SelectTrigger className="h-11 border-slate-200 rounded-sm focus:ring-1 focus:ring-[#1f3a5f]">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GMT">GMT (Accra)</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="EST">EST</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">Maintenance Mode</div>
                  <div className="text-[12px] text-slate-500">Temporarily disable public reporting form</div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">Anonymous Reporting</div>
                  <div className="text-[12px] text-slate-500">Allow users to submit without identity</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-[#1f3a5f] hover:bg-[#152a47] text-[13px] font-bold h-11 px-8 rounded-sm uppercase tracking-wider">Save Changes</Button>
            </div>
          </div>
        )}

        {activeMenu !== "General" && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 italic">
            <Settings className="h-12 w-12 mb-4 opacity-20" />
            <p>{activeMenu} settings coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
function MessagesView() {
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  const chats = [
    { id: 0, user: "Anonymous-942", lastMsg: "When will the next hearing take place?", time: "12m ago", unread: true },
    { id: 1, user: "L. Boateng", lastMsg: "Evidence EV-9821 has been verified.", time: "2h ago", unread: false },
    { id: 2, user: "Anonymous-811", lastMsg: "I want to add a witness to my case.", time: "1d ago", unread: false },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-sm shadow-none h-[calc(100vh-200px)] animate-in fade-in duration-500 flex overflow-hidden">
      {/* List */}
      <div className="w-80 border-r border-slate-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-slate-50 flex gap-2">
          <Input placeholder="Search messages..." className="h-9 bg-slate-50 border-transparent rounded-sm text-sm flex-1" />
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="h-9 w-9 bg-[#1f3a5f] hover:bg-[#152a47] rounded-sm shrink-0">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md rounded-sm border-slate-200">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-[#1f3a5f]">New Message</DialogTitle>
                <DialogDescription>Initiate a confidential conversation.</DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Recipient Case ID</Label>
                  <Input placeholder="UG-SH-2026-XXXX" className="h-11 rounded-sm border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Subject</Label>
                  <Input placeholder="Hearing schedule, Evidence request, etc." className="h-11 rounded-sm border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Initial Message</Label>
                  <Textarea placeholder="Type your message here..." className="min-h-[120px] rounded-sm border-slate-200" />
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <Button variant="outline" className="h-11 px-6 rounded-sm text-[12px] font-bold uppercase border-slate-200">Cancel</Button>
                  <Button className="h-11 px-6 rounded-sm text-[12px] font-bold uppercase bg-[#1f3a5f]">Send Message</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full text-left p-5 border-b border-slate-50 transition-colors ${selectedChat === chat.id ? "bg-slate-50" : "hover:bg-slate-50/50"
                }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-[13px] font-semibold ${chat.unread ? "text-[#1f3a5f]" : "text-slate-700"}`}>
                  {chat.user}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-tighter">{chat.time}</span>
              </div>
              <p className="text-[12px] text-slate-500 truncate">{chat.lastMsg}</p>
              {chat.unread && <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c59d5f]"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {selectedChat !== null ? (
          <>
            <div className="h-[64px] border-b border-slate-100 bg-white flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                  {chats[selectedChat].user.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-[14px] font-semibold text-slate-800">{chats[selectedChat].user}</div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 text-slate-400 text-[11px] font-bold uppercase tracking-wider">Archive</Button>
                <Button variant="ghost" size="sm" className="h-8 text-slate-400 text-[11px] font-bold uppercase tracking-wider">Report</Button>
              </div>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-slate-50/10">
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1 border border-slate-100 rounded-sm">Today</span>
              </div>
              <div className="flex flex-col gap-2 max-w-[70%]">
                <div className="bg-white border border-slate-200 p-4 rounded-sm shadow-none">
                  <p className="text-[13px] text-slate-700 leading-relaxed">
                    Hello, I'm checking on the status of my case UG-SH-2026-00045. When will the next hearing take place?
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 ml-1">12:30 PM</span>
              </div>
              <div className="flex flex-col gap-2 max-w-[70%] self-end items-end">
                <div className="bg-[#1f3a5f] p-4 rounded-sm shadow-none">
                  <p className="text-[13px] text-white leading-relaxed">
                    Hello. We are currently reviewing the evidence provided. A hearing date will be scheduled and communicated to you within 3 working days.
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 mr-1">12:45 PM</span>
              </div>
            </div>
            <div className="p-4 bg-white border-t border-slate-100 flex gap-3 shrink-0">
              <Input placeholder="Type a message..." className="flex-1 border-transparent bg-slate-50 focus-visible:ring-0 rounded-sm text-sm" />
              <Button onClick={() => alert('Message sent successfully!')} className="bg-[#1f3a5f] hover:bg-[#152a47] rounded-sm px-6 text-[12px] font-bold">SEND</Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-400">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}


function LoginView({ onLogin }: { onLogin: (e: FormEvent) => void }) {
  const [activeTab, setActiveTab] = useState<"staff" | "admin">("staff");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left Form Side */}
      <div className="flex flex-col px-8 py-10 md:px-16 lg:px-24">
        <div className="mb-20">
          <img src={ugLogo} alt="UG Logo" className="h-10 w-auto object-contain" />
        </div>

        <div className="w-full max-w-[400px]">
          <h1 className="text-4xl font-semibold text-[#1f3a5f] tracking-tight mb-2">Log In</h1>
          <p className="text-[14px] text-slate-500 mb-10">Select your role and enter your credentials to continue.</p>

          <div className="flex border-b border-slate-200 mb-8">
            <button
              className={`flex-1 pb-3 text-[12px] font-bold tracking-widest uppercase transition-colors ${activeTab === 'staff' ? 'text-[#1f3a5f] border-b-2 border-[#1f3a5f]' : 'text-slate-400'}`}
              onClick={() => setActiveTab("staff")}
              type="button"
            >
              Staff
            </button>
            <button
              className={`flex-1 pb-3 text-[12px] font-bold tracking-widest uppercase transition-colors ${activeTab === 'admin' ? 'text-[#1f3a5f] border-b-2 border-[#1f3a5f]' : 'text-slate-400'}`}
              onClick={() => setActiveTab("admin")}
              type="button"
            >
              Admin
            </button>
          </div>

          <form onSubmit={onLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-slate-600 uppercase">Email Address</label>
              <Input
                type="email"
                defaultValue="staff@ug.edu.gh"
                className="h-12 rounded-sm border-slate-200 bg-white text-[15px] focus-visible:ring-1 focus-visible:ring-[#1f3a5f]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-slate-600 uppercase">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  defaultValue="password"
                  className="h-12 rounded-sm border-slate-200 bg-white text-[15px] focus-visible:ring-1 focus-visible:ring-[#1f3a5f] pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded-sm border-slate-300 text-[#1f3a5f] focus:ring-[#1f3a5f]" />
                <span className="text-[13px] text-slate-600 font-medium">Remember me</span>
              </label>
              <a href="#" className="text-[13px] font-bold text-[#1f3a5f] hover:underline">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full h-12 rounded-sm bg-[#1f3a5f] hover:bg-[#152a47] text-[13px] font-bold tracking-widest uppercase mt-4">
              LOG IN AS {activeTab.toUpperCase()}
            </Button>
          </form>

          <div className="mt-8 text-center text-[13px] text-slate-600">
            Don't have an account? <a href="#" className="font-bold text-[#1f3a5f] hover:underline">Request Access</a>
          </div>
        </div>
      </div>

      {/* Right Solid Side */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-[#1f3a5f] p-16">
        <div className="max-w-[420px] ml-[-100px]">
          <p className="text-white text-lg leading-relaxed text-pretty font-light mb-8">
            The SpeakSafe UG portal provides secure, confidential access to case management, reporting, and resources for the University of Ghana community.
          </p>
          <div className="h-1 w-12 bg-[#c59d5f]"></div>
        </div>
      </div>
    </div>
  );
}
