import { HeartPulse, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <HeartPulse size={22} />
          </span>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">OneHealth</div>
            <div className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-600">Digital Health</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">



          <a href="#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">How it works</a>
          <a href="#features" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">Features</a>
          <a href="#security" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">Security</a>
          <Link to="/patient" className="text-sm font-semibold text-slate-700 hover:text-blue-600">Demo</Link>
          <Link
              to="/patient/login"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Sign Up / Log in
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a onClick={() => setOpen(false)} href="#how-it-works" className="font-medium text-slate-700">How it works</a>
            <a onClick={() => setOpen(false)} href="#features" className="font-medium text-slate-700">Features</a>
            <a onClick={() => setOpen(false)} href="#security" className="font-medium text-slate-700">Security</a>
            <Link to="/patient" className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white">Open Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}