import { HeartPulse, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white"><HeartPulse size={19} /></span>
              <span className="text-lg font-bold text-slate-950">OneHealth</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              A consent-based digital health record platform designed to make medical information secure, accessible and connected.
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm text-slate-500">
            <ShieldCheck className="mt-0.5 text-blue-600" size={18} />
            Your records. Your consent. Your control.
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-400">
          © 2026 OneHealth. Academic project prototype.
        </div>
      </div>
    </footer>
  );
}