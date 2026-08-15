import {
  Activity,
  Bell,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  FileHeart,
  FileText,
  HeartPulse,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Menu,
  QrCode,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   DEFAULT PATIENT DATA
   ---------------------------------------------------------
   This is temporary frontend data.

   Later, Spring Boot will return this object after Google
   authentication.

   For a NEW patient, these values are zero/empty.
========================================================= */

const defaultPatient = {
  id: null,
  name: "New Patient",
  email: "",
  profileImage: null,
  oneHealthId: "Generating...",
  stats: {
    medicalRecords: 0,
    recordsThisMonth: 0,
    appointments: 0,
    accessRequests: 0,
    healthScore: 0,
  },
  accessRequest: null,
  records: [],
};

/* =========================================================
   MENU ITEMS
========================================================= */

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Medical Records",
    icon: FileText,
  },
  {
    name: "Prescriptions",
    icon: ClipboardList,
  },
  {
    name: "Appointments",
    icon: CalendarDays,
  },
  {
    name: "Consent & Access",
    icon: KeyRound,
  },
  {
    name: "AI Health Summary",
    icon: HeartPulse,
  },
];

/* =========================================================
   PATIENT DASHBOARD
========================================================= */

export default function PatientDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  /*
   * Temporary patient state.
   *
   * Later:
   *
   * GET /api/patient/me
   *
   * will populate this state from Spring Boot.
   */
  const [patient] = useState(defaultPatient);

  /* =======================================================
     LOADING STATE
     -------------------------------------------------------
     We will use this when connecting the API.
  ======================================================= */

  const loading = false;

  /* =======================================================
     LOGOUT
     -------------------------------------------------------
     Later this will:
     1. Remove JWT
     2. Clear authentication state
     3. Navigate to /login
  ======================================================= */

  const handleLogout = () => {
    console.log("Logout clicked");

    // Later:
    // localStorage.removeItem("token");
    // navigate("/login");
  };

  /* =======================================================
     PATIENT HELPERS
  ======================================================= */

  const patientName = patient?.name || "New Patient";

  const patientId = patient?.oneHealthId || "Not assigned";

  const initials = getInitials(patientName);

  const stats = patient?.stats || {
    medicalRecords: 0,
    recordsThisMonth: 0,
    appointments: 0,
    accessRequests: 0,
    healthScore: 0,
  };

  const records = patient?.records || [];

  const accessRequest = patient?.accessRequest || null;

  /* =======================================================
     LOADING SCREEN
  ======================================================= */

  if (loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f6f9fc]">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 animate-pulse place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
              <HeartPulse size={26} />
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              Loading your health dashboard...
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-[#f6f9fc] text-slate-900">
        {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

        {sidebarOpen && (
            <div
                className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
                onClick={() => setSidebarOpen(false)}
            />
        )}

        {/* =====================================================
          SIDEBAR
      ====================================================== */}

        <aside
            className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* =================================================
            LOGO
        ================================================== */}

          <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
            <div className="flex items-center gap-3">
              {/* Logo icon */}

              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                <HeartPulse size={22} />
              </div>

              <div>
                {/* Brand */}

                <p className="text-lg font-black tracking-tight text-slate-900">
                  One
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Health
                </span>
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Patient Portal
                </p>
              </div>
            </div>

            {/* Mobile close */}

            <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
            NAVIGATION
        ================================================== */}

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
              Main Menu
            </p>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;

                const active = activeMenu === item.name;

                return (
                    <button
                        key={item.name}
                        onClick={() => {
                          setActiveMenu(item.name);
                          setSidebarOpen(false);
                        }}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition duration-300 ${
                            active
                                ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 shadow-sm"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                    >
                      <Icon
                          size={18}
                          className={
                            active
                                ? "text-blue-600"
                                : "text-slate-400 group-hover:text-slate-600"
                          }
                      />

                      {item.name}

                      {/* Only show request badge when requests exist */}

                      {item.name === "Consent & Access" &&
                          stats.accessRequests > 0 && (
                              <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-100 px-1.5 text-[10px] font-bold text-amber-700">
                        {stats.accessRequests}
                      </span>
                          )}
                    </button>
                );
              })}
            </nav>

            <div className="my-7 h-px bg-slate-100" />

            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
              Account
            </p>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
              <Settings size={18} />
              Settings
            </button>
          </div>

          {/* =================================================
            PATIENT PROFILE
        ================================================== */}

          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              {/* Initials */}

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-sm font-bold text-blue-700">
                {initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">
                  {patientName}
                </p>

                <p className="truncate text-[11px] text-slate-400">
                  Patient ID: {patientId}
                </p>
              </div>

              <button
                  onClick={handleLogout}
                  className="text-slate-400 transition hover:text-red-500"
                  title="Logout"
              >
                <LogOut size={17} />
              </button>
            </div>
          </div>
        </aside>

        {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

        <main className="min-h-screen lg:pl-[270px]">
          {/* ===================================================
            TOP BAR
        ==================================================== */}

          <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-xl lg:px-8">
            <div className="flex items-center gap-3">
              {/* Mobile menu */}

              <button
                  onClick={() => setSidebarOpen(true)}
                  className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              {/* Search */}

              <div className="relative hidden sm:block">
                <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    placeholder="Search medical records..."
                    className="w-[270px] rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            {/* =================================================
              USER AREA
          ================================================== */}

            <div className="flex items-center gap-3">
              {/* Notification */}

              <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600">
                <Bell size={19} />

                {stats.accessRequests > 0 && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
                )}
              </button>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              {/* User */}

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-xs font-bold text-blue-700">
                  {initials}
                </div>

                <div className="hidden sm:block">
                  <p className="text-xs font-bold">{patientName}</p>

                  <p className="text-[10px] text-slate-400">Patient</p>
                </div>
              </div>
            </div>
          </header>

          {/* ===================================================
            DASHBOARD CONTENT
        ==================================================== */}

          <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
            {/* =================================================
              WELCOME
          ================================================== */}

            <div className="mb-8">
              <p className="text-sm font-medium text-slate-400">
                {formatToday()}
              </p>

              <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
                Good morning, {getFirstName(patientName)} 👋
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Here's your health overview and recent activity.
              </p>
            </div>

            {/* =================================================
              STAT CARDS
          ================================================== */}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                  icon={FileHeart}
                  label="Medical Records"
                  value={stats.medicalRecords}
                  detail={
                    stats.recordsThisMonth > 0
                        ? `${stats.recordsThisMonth} added this month`
                        : "No records added yet"
                  }
                  iconBg="bg-gradient-to-br from-blue-50 to-cyan-50"
                  iconColor="text-blue-600"
              />

              <StatCard
                  icon={CalendarDays}
                  label="Appointments"
                  value={formatStatNumber(stats.appointments)}
                  detail={
                    stats.appointments > 0
                        ? "Upcoming this month"
                        : "No upcoming appointments"
                  }
                  iconBg="bg-gradient-to-br from-purple-50 to-blue-50"
                  iconColor="text-purple-600"
              />

              <StatCard
                  icon={KeyRound}
                  label="Access Requests"
                  value={formatStatNumber(stats.accessRequests)}
                  detail={
                    stats.accessRequests > 0
                        ? "Requires your consent"
                        : "No pending requests"
                  }
                  iconBg="bg-gradient-to-br from-amber-50 to-orange-50"
                  iconColor="text-amber-600"
                  alert={stats.accessRequests > 0}
              />

              <StatCard
                  icon={HeartPulse}
                  label="Health Score"
                  value={stats.healthScore}
                  detail={
                    stats.healthScore > 0
                        ? "Based on available data"
                        : "Available after health data"
                  }
                  iconBg="bg-gradient-to-br from-blue-50 to-cyan-50"
                  iconColor="text-blue-600"
              />
            </div>

            {/* =================================================
              ID + ACCESS REQUEST
          ================================================== */}

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* =================================================
                ONEHEALTH ID
            ================================================== */}

              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-7 text-white shadow-xl shadow-blue-600/20">
                {/* Background glow */}

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-100">
                        Your digital health identity
                      </p>

                      <h2 className="mt-2 text-2xl font-black">
                        OneHealth ID
                      </h2>
                    </div>

                    <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
                      <ShieldCheck size={22} />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs text-blue-100">
                        Unique Patient Identifier
                      </p>

                      <p className="mt-2 break-all font-mono text-2xl font-bold tracking-[.15em]">
                        {patientId}
                      </p>

                      <p className="mt-3 max-w-md text-xs leading-5 text-blue-100">
                        Share this ID with an authorized doctor to request
                        access to your records.
                      </p>
                    </div>

                    {/* QR */}

                    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-white p-2 shadow-lg">
                      <QrCode size={60} className="text-slate-900" />
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                ACCESS REQUEST
            ================================================== */}

              <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">
                      Requires attention
                    </p>

                    <h2 className="mt-1 text-xl font-black">
                      Access Request
                    </h2>
                  </div>

                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600">
                    <KeyRound size={19} />
                  </div>
                </div>

                {/* =================================================
                  NO REQUEST
              ================================================== */}

                {!accessRequest ? (
                    <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white text-slate-300 shadow-sm">
                        <ShieldCheck size={22} />
                      </div>

                      <p className="mt-3 text-sm font-bold text-slate-700">
                        No pending requests
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Doctor access requests will appear here when someone
                        requests permission to view your records.
                      </p>
                    </div>
                ) : (
                    /* =================================================
                       REQUEST EXISTS
                    ================================================== */

                    <div className="mt-6 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/80 to-orange-50/50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">
                          <Stethoscope size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-bold">
                            {accessRequest.doctorName}
                          </p>

                          <p className="text-xs text-slate-500">
                            {accessRequest.specialization}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-xs leading-5 text-slate-500">
                        This doctor is requesting access to your medical records
                        for a consultation.
                      </p>

                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-600">
                          Review Request
                        </button>

                        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50">
                          Deny
                        </button>
                      </div>
                    </div>
                )}
              </section>
            </div>

            {/* =================================================
              RECORDS + QUICK ACTIONS
          ================================================== */}

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* =================================================
                MEDICAL RECORDS
            ================================================== */}

              <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                  <div>
                    <h2 className="font-black text-slate-900">
                      Recent Medical Records
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      Your latest uploaded health documents
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-xs font-bold text-blue-600 transition hover:text-cyan-600">
                    View all
                    <ChevronRight size={14} />
                  </button>
                </div>

                {/* =================================================
                  NO RECORDS
              ================================================== */}

                {records.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-400">
                        <FileText size={24} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-slate-700">
                        No medical records yet
                      </p>

                      <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-400">
                        Your medical reports, prescriptions, and other health
                        documents will appear here after they are uploaded.
                      </p>

                      <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5">
                        <Upload size={15} />
                        Upload Medical Report
                      </button>
                    </div>
                ) : (
                    /* =================================================
                       RECORD LIST
                    ================================================== */

                    <div className="divide-y divide-slate-100">
                      {records.map((record, index) => {
                        const Icon = getRecordIcon(record.type, index);

                        return (
                            <div
                                key={record.id || record.title || index}
                                className="group flex items-center gap-4 px-6 py-5 transition duration-300 hover:bg-gradient-to-r hover:from-blue-50/40 hover:to-cyan-50/30"
                            >
                              {/* Icon */}

                              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                                <Icon size={19} />
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-bold text-slate-800">
                                  {record.title}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {record.type} • {record.doctor}
                                </p>
                              </div>

                              <div className="hidden text-right sm:block">
                                <p className="text-xs font-semibold text-slate-600">
                                  {record.date}
                                </p>

                                <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                            <ShieldCheck size={11} />
                            Secure
                          </span>
                              </div>

                              <button className="rounded-lg p-2 text-slate-300 transition hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600">
                                <ChevronRight size={17} />
                              </button>
                            </div>
                        );
                      })}
                    </div>
                )}
              </section>

              {/* =================================================
                QUICK ACTIONS
            ================================================== */}

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-black text-slate-900">Quick Actions</h2>

                <p className="mt-1 text-xs text-slate-400">
                  Common things you can do
                </p>

                <div className="mt-5 grid gap-3">
                  <QuickAction
                      icon={Upload}
                      title="Upload Medical Report"
                      text="Add a new document"
                  />

                  <QuickAction
                      icon={QrCode}
                      title="Share OneHealth ID"
                      text="Show your QR identity"
                  />

                  <QuickAction
                      icon={HeartPulse}
                      title="View AI Summary"
                      text="Understand your reports"
                  />

                  <QuickAction
                      icon={CalendarDays}
                      title="Book Appointment"
                      text="Find a healthcare provider"
                  />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
                    icon: Icon,
                    label,
                    value,
                    detail,
                    iconBg,
                    iconColor,
                    alert,
                  }) {
  return (
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
        <div className="flex items-start justify-between">
          <div
              className={`grid h-11 w-11 place-items-center rounded-xl ${iconBg} ${iconColor} transition duration-300 group-hover:scale-105`}
          >
            <Icon size={20} />
          </div>

          {alert && (
              <span className="rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-2 py-1 text-[9px] font-bold text-amber-600">
            Action needed
          </span>
          )}
        </div>

        <p className="mt-5 text-xs font-semibold text-slate-400">{label}</p>

        <p className="mt-1 text-3xl font-black tracking-tight">{value}</p>

        <p className="mt-1 text-[11px] text-slate-400">{detail}</p>
      </div>
  );
}

/* =========================================================
   QUICK ACTION
========================================================= */

function QuickAction({
                       icon: Icon,
                       title,
                       text,
                     }) {
  return (
      <button className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50">
        {/* Icon */}

        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 shadow-sm transition duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
          <Icon size={18} />
        </div>

        <div className="flex-1">
          <p className="text-xs font-bold text-slate-800">{title}</p>

          <p className="mt-0.5 text-[10px] text-slate-400">{text}</p>
        </div>

        <ChevronRight
            size={15}
            className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
        />
      </button>
  );
}

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

/*
 * Get patient initials.
 *
 * "Ghausul Azam" → "GA"
 * "Rahul" → "R"
 * "New Patient" → "NP"
 */
function getInitials(name) {
  if (!name) {
    return "NP";
  }

  return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
}

/*
 * Get first name.
 *
 * "Ghausul Azam" → "Ghausul"
 */
function getFirstName(name) {
  if (!name) {
    return "there";
  }

  return name.trim().split(/\s+/)[0];
}

/*
 * Format current date.
 *
 * Example:
 * Saturday, 15 August 2026
 */
function formatToday() {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

/*
 * Keep appointment/request numbers visually consistent.
 *
 * 0 → "00"
 * 2 → "02"
 * 12 → "12"
 */
function formatStatNumber(value) {
  const number = Number(value || 0);

  return number.toString().padStart(2, "0");
}

/*
 * Select an icon for medical records.
 *
 * Later the backend can simply send:
 *
 * type: "Blood Report"
 * type: "Radiology"
 * type: "Prescription"
 */
function getRecordIcon(type, index) {
  const recordType = String(type || "").toLowerCase();

  if (recordType.includes("blood")) {
    return Activity;
  }

  if (
      recordType.includes("x-ray") ||
      recordType.includes("radiology") ||
      recordType.includes("scan")
  ) {
    return FileHeart;
  }

  if (recordType.includes("prescription")) {
    return ClipboardList;
  }

  return index % 2 === 0 ? FileText : FileHeart;
}