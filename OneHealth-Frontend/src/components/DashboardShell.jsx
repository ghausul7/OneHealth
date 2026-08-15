import { Bell, Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function DashboardShell({ sidebarTitle, items, active, children, user }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <Sidebar title={sidebarTitle} items={items} active={active} />
        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/85 px-5 backdrop-blur-xl lg:px-8">
            <button className="rounded-lg p-2 text-slate-600 lg:hidden"><Menu /></button>
            <div className="ml-auto flex items-center gap-4">
              <button className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 hover:bg-slate-50">
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
              </button>
              <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{user?.initials || "OH"}</div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">{user?.name || "OneHealth User"}</p>
                  <p className="text-xs text-slate-500">{user?.role || "Demo Account"}</p>
                </div>
              </div>
            </div>
          </header>
          <div className="p-5 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}