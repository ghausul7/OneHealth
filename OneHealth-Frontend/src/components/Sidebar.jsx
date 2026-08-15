import { HeartPulse, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ title, items, active }) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center gap-2.5 border-b border-slate-100 px-6">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white"><HeartPulse size={19} /></span>
        <span className="font-bold text-slate-950">OneHealth</span>
      </div>
      <div className="px-6 py-5">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">{title}</p>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {items.map(({ label, icon: Icon, to }) => (
          <Link key={label} to={to || "#"} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${active === label ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="space-y-1 border-t border-slate-100 p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"><Settings size={18} /> Settings</button>
        <Link to="/" className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"><LogOut size={18} /> Exit demo</Link>
      </div>
    </aside>
  );
}