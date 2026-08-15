import { Activity, AlertTriangle, FileHeart, KeyRound, LockKeyhole, ShieldCheck, Stethoscope, Users, UserCog } from "lucide-react";
import DashboardShell from "../components/DashboardShell";
import StatCard from "../components/StatCard";

const items = [
  { label: "Overview", icon: Activity, to: "/admin" },
  { label: "Patients", icon: Users },
  { label: "Doctors", icon: Stethoscope },
  { label: "Access Requests", icon: KeyRound },
  { label: "Medical Records", icon: FileHeart },
  { label: "Audit Logs", icon: ShieldCheck },
];

export default function AdminDashboard() {
  return (
    <DashboardShell sidebarTitle="Administration" items={items} active="Overview" user={{ name: "OneHealth Admin", role: "System Administrator", initials: "AD" }}>
      <div className="mx-auto max-w-7xl">
        <div><p className="text-sm font-semibold text-blue-600">Administration</p><h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">Platform overview</h1><p className="mt-2 text-sm text-slate-500">Monitor users, access activity and platform security.</p></div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={Users} label="Total Patients" value="12,482" detail="+312 this month" />
          <StatCard icon={Stethoscope} label="Registered Doctors" value="846" detail="+24 this month" />
          <StatCard icon={FileHeart} label="Medical Records" value="48,291" detail="Across the platform" />
          <StatCard icon={Activity} label="Active Sessions" value="1,204" detail="Currently online" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-center justify-between"><div><h2 className="font-bold">System activity</h2><p className="text-xs text-slate-400">Latest platform events</p></div><button className="text-sm font-semibold text-blue-600">View logs</button></div>
            <div className="mt-5 space-y-1">
              {[
                ["Patient record accessed", "Dr. Rahul Sharma • OH-7F42-K91X", "2 min ago", "blue"],
                ["New doctor registered", "Dr. Priya Mehta", "18 min ago", "emerald"],
                ["Access request approved", "OH-4A81-P22M", "31 min ago", "emerald"],
                ["Security alert reviewed", "Unusual login attempt", "1 hr ago", "amber"],
              ].map(([title, meta, time, type]) => (
                <div key={title} className="flex items-center gap-4 rounded-xl p-4 hover:bg-slate-50">
                  <span className={`h-2.5 w-2.5 rounded-full ${type === "amber" ? "bg-amber-500" : type === "emerald" ? "bg-emerald-500" : "bg-blue-500"}`} />
                  <div className="flex-1"><p className="text-sm font-semibold">{title}</p><p className="text-xs text-slate-400">{meta}</p></div>
                  <span className="text-xs text-slate-400">{time}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3"><LockKeyhole className="text-blue-600" /><div><h2 className="font-bold">Security</h2><p className="text-xs text-slate-400">Platform health</p></div></div>
            <div className="mt-6 rounded-2xl bg-emerald-50 p-5"><div className="flex items-center gap-3 text-emerald-700"><ShieldCheck /><span className="font-bold">All systems operational</span></div><p className="mt-3 text-xs leading-5 text-emerald-700/70">No critical platform issues detected.</p></div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">Pending access requests</span><b>32</b></div>
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">Security alerts</span><b className="text-amber-600">4</b></div>
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">Failed logins</span><b>17</b></div>
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            [UserCog, "Manage users", "Review and manage patient and doctor accounts."],
            [KeyRound, "Consent activity", "Monitor patient-controlled access requests."],
            [AlertTriangle, "Security alerts", "Review unusual activity and platform alerts."],
          ].map(([Icon, title, text]) => (
            <button key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} /></div>
              <h3 className="mt-5 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </button>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}