import { Activity, FileHeart, FileText, KeyRound, Search, Stethoscope, Users, Clock3, CheckCircle2 } from "lucide-react";
import DashboardShell from "../components/DashboardShell";
import StatCard from "../components/StatCard";

const items = [
  { label: "Overview", icon: Activity, to: "/doctor" },
  { label: "My Patients", icon: Users },
  { label: "Patient Search", icon: Search },
  { label: "Medical Records", icon: FileHeart },
  { label: "Access Requests", icon: KeyRound },
  { label: "Reports", icon: FileText },
];

export default function DoctorDashboard() {
  return (
    <DashboardShell sidebarTitle="Doctor Portal" items={items} active="Overview" user={{ name: "Dr. Rahul Sharma", role: "General Physician", initials: "RS" }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold text-blue-600">Doctor Portal</p><h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">Good morning, Dr. Sharma</h1><p className="mt-2 text-sm text-slate-500">Find and manage patient records with consent.</p></div>
          <div className="rounded-xl bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />Online</div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={Users} label="My Patients" value="128" detail="+8 this month" />
          <StatCard icon={FileHeart} label="Records Accessed" value="64" detail="This month" />
          <StatCard icon={KeyRound} label="Pending Requests" value="05" detail="Awaiting consent" />
          <StatCard icon={Clock3} label="Today's Visits" value="09" detail="2 remaining" />
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><Search size={20} /></div><div><h2 className="font-bold">Find a patient</h2><p className="text-xs text-slate-400">Search using their unique OneHealth ID</p></div></div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input placeholder="Enter OneHealth ID e.g. OH-7F42-K91X" className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Search Patient</button>
          </div>
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_.8fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between"><div><h2 className="font-bold">Recent patients</h2><p className="text-xs text-slate-400">Patients with authorized access</p></div><button className="text-sm font-semibold text-blue-600">View all</button></div>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
              {["Ghausul Azam", "Anas Khan", "Bilal Ahmad", "Vijay Kumar"].map((name, i) => (
                <div key={name} className="flex items-center gap-3 border-b border-slate-100 px-4 py-4 last:border-0">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">{name.split(" ").map(x => x[0]).join("")}</div>
                  <div className="flex-1"><p className="text-sm font-semibold">{name}</p><p className="text-xs text-slate-400">OH-{["7F42-K91X","4A81-P22M","9C20-D17Q","5B73-R41L"][i]}</p></div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">Authorized</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-bold">Access requests</h2>
            <p className="mt-1 text-xs text-slate-400">Requests sent to patients</p>
            <div className="mt-5 space-y-3">
              {["OH-7F42-K91X", "OH-4A81-P22M", "OH-9C20-D17Q"].map((id, i) => (
                <div key={id} className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold">{id}</span>{i === 0 ? <Clock3 size={16} className="text-amber-500" /> : <CheckCircle2 size={16} className="text-emerald-500" />}</div>
                  <p className="mt-2 text-xs text-slate-500">{i === 0 ? "Waiting for patient consent" : "Access granted"}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}