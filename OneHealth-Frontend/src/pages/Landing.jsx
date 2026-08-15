import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FileHeart,
  FileText,
  HeartPulse,
  KeyRound,
  LockKeyhole,
  QrCode,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


/* =====================================================
   FEATURES
===================================================== */

const features = [
  {
    icon: FileHeart,
    title: "Unified Medical Records",
    text: "Keep reports, prescriptions, consultations and medical history connected in one secure profile.",
  },

  {
    icon: ShieldCheck,
    title: "Consent-Based Access",
    text: "Doctors can request access, but your medical records remain under your control.",
  },

  {
    icon: QrCode,
    title: "OneHealth ID",
    text: "One unique health identity makes it easier for authorized doctors to find your record.",
  },

  {
    icon: Sparkles,
    title: "AI Health Summary",
    text: "Get simple summaries from complex medical reports to support better conversations.",
  },
];


/* =====================================================
   WORKFLOW
===================================================== */

const workflow = [
  {
    number: "01",
    title: "Create your OneHealth ID",
    text: "Every patient receives a unique digital health identity.",
    icon: UserRound,
  },

  {
    number: "02",
    title: "Store your medical records",
    text: "Keep reports, prescriptions and medical history organized in one place.",
    icon: FileHeart,
  },

  {
    number: "03",
    title: "Approve doctor access",
    text: "A doctor requests access. You decide whether to approve or reject.",
    icon: KeyRound,
  },
];


/* =====================================================
   LANDING
===================================================== */

export default function Landing() {

  const navigate = useNavigate();


  /* =================================================
     OPEN LOGIN
  ================================================= */

  const openLogin = () => {
    navigate("/patient/login");
  };


  return (

      <div className="overflow-hidden bg-[#f8fbff]">

        {/* =================================================
                NAVBAR
            ================================================= */}

        <Navbar />


        {/* =================================================
                HERO
            ================================================= */}

        <section className="relative min-h-screen pt-28 lg:pt-32">

          {/* Background */}

          <div className="hero-orb hero-orb-one" />

          <div className="hero-orb hero-orb-two" />

          <div className="hero-grid absolute inset-0 opacity-60" />


          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-28">


            {/* =================================================
                        LEFT SIDE
                    ================================================= */}

            <div className="animate-slide-up">


              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur">

                            <span className="relative flex h-2 w-2">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />

                            </span>

                The smarter way to manage your health

              </div>


              {/* Heading */}

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[74px]">

                Your health.

                <span className="onehealth-gradient-text mt-2 block">

                                One secure identity.

                            </span>

              </h1>


              {/* Description */}

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">

                OneHealth connects your medical records into one secure
                digital identity — while giving you control over who
                can access them.

              </p>


              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-3">


                {/* GET STARTED */}

                <button
                    type="button"
                    onClick={openLogin}
                    className="
                                    onehealth-button
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-white
                                "
                >

                  Get Started

                  <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>


                {/* HOW IT WORKS */}

                <a
                    href="#how-it-works"
                    className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white/80
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-slate-700
                                    shadow-sm
                                    backdrop-blur
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-200
                                    hover:bg-blue-50
                                "
                >

                  See how it works

                  <ChevronRight size={16} />

                </a>

              </div>


              {/* Trust points */}

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">

                <div className="flex items-center gap-2 text-sm text-slate-500">

                  <CheckCircle2
                      size={17}
                      className="text-emerald-500"
                  />

                  Patient-controlled access

                </div>


                <div className="flex items-center gap-2 text-sm text-slate-500">

                  <CheckCircle2
                      size={17}
                      className="text-emerald-500"
                  />

                  Secure digital records

                </div>

              </div>

            </div>


            {/* =================================================
                        RIGHT HERO VISUAL
                    ================================================= */}

            <div className="relative mx-auto h-[620px] w-full max-w-[560px]">

              {/* Background Glow */}

              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/15 blur-3xl" />


              {/* Decorative rings */}

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70" />

              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/60" />


              {/* MAIN PATIENT CARD */}

              <div className="absolute left-[80%] top-[70%] z-20 w-[92%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-[0_35px_100px_rgba(15,23,42,0.16)] backdrop-blur-xl">


                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                  <div className="flex items-center gap-3">

                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">

                      <UserRound size={20} />

                    </div>

                    <div>

                      <p className="text-sm font-bold text-slate-900">
                        Patient Health Profile
                      </p>

                      <p className="font-mono text-[11px] text-slate-400">
                        OH-7F42-K91X
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">

                    <ShieldCheck size={13} />

                    Protected

                  </div>

                </div>


                {/* Stats */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50">

                    <FileHeart
                        size={20}
                        className="text-blue-600"
                    />

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      12
                    </p>

                    <p className="text-xs text-slate-500">
                      Medical reports
                    </p>

                  </div>


                  <div className="rounded-2xl bg-slate-50 p-4 transition hover:bg-cyan-50">

                    <Activity
                        size={20}
                        className="text-cyan-600"
                    />

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      92
                    </p>

                    <p className="text-xs text-slate-500">
                      Health score
                    </p>

                  </div>

                </div>


                {/* Consent */}

                <div className="mt-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-3.5">

                  <div className="flex items-start gap-3">

                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">

                      <LockKeyhole size={18} />

                    </div>

                    <div>

                      <p className="text-sm font-bold text-slate-800">
                        Doctor access requires consent
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        You decide when your medical record is shared.
                      </p>

                    </div>

                  </div>

                </div>


                {/* Recent Activity */}

                <div className="mt-4">

                  <div className="mb-2.5 flex items-center justify-between">

                    <p className="text-xs font-bold text-slate-700">
                      Recent activity
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Today
                    </p>

                  </div>


                  <div className="space-y-2">


                    {/* Activity 1 */}

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5">

                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">

                        <FileText size={15} />

                      </div>

                      <div className="flex-1">

                        <p className="text-xs font-semibold text-slate-700">
                          Blood report uploaded
                        </p>

                        <p className="text-[10px] text-slate-400">
                          14 Aug 2026
                        </p>

                      </div>

                      <Check
                          size={15}
                          className="text-emerald-500"
                      />

                    </div>


                    {/* Activity 2 */}

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5">

                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-purple-100 text-purple-600">

                        <Sparkles size={15} />

                      </div>

                      <div className="flex-1">

                        <p className="text-xs font-semibold text-slate-700">
                          AI health summary generated
                        </p>

                        <p className="text-[10px] text-slate-400">
                          12 Aug 2026
                        </p>

                      </div>

                      <Check
                          size={15}
                          className="text-emerald-500"
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* DOCTOR REQUEST */}

              <div className="absolute left-[-25%] top-[170px] z-30 hidden animate-float-slow rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">

                <div className="flex items-center gap-3">

                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">

                    <Stethoscope size={19} />

                  </div>

                  <div>

                    <p className="text-[10px] text-slate-400">
                      Access request
                    </p>

                    <p className="text-sm font-bold text-slate-800">
                      Dr. Sharma
                    </p>

                    <p className="text-[10px] text-amber-500">
                      Waiting for consent
                    </p>

                  </div>

                </div>

              </div>


              {/* SECURITY CARD */}

              <div className="absolute bottom-[105px] right-0 z-30 hidden animate-float-delayed rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">

                <div className="flex items-center gap-3">

                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">

                    <ShieldCheck size={19} />

                  </div>

                  <div>

                    <p className="text-[10px] text-slate-400">
                      Security
                    </p>

                    <p className="text-sm font-bold text-slate-800">
                      Consent protected
                    </p>

                    <p className="text-[10px] text-emerald-600">
                      Access controlled
                    </p>

                  </div>

                </div>

              </div>


              {/* Decorative Nodes */}

              <div className="absolute right-8 top-16 h-3 w-3 animate-pulse rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

              <div className="absolute bottom-24 left-12 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            </div>

          </div>

        </section>


        {/* =====================================================
                TRUST STRIP
            ===================================================== */}

        <section className="border-y border-slate-200 bg-white">

          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">

            {[
              ["01", "Unique health identity"],
              ["02", "Consent-based sharing"],
              ["03", "Centralized records"],
              ["04", "Complete access history"],
            ].map(([number, text]) => (

                <div
                    key={number}
                    className="px-5 py-7 text-center transition hover:bg-blue-50/40"
                >

                  <p className="text-xs font-black text-blue-600">
                    {number}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {text}
                  </p>

                </div>

            ))}

          </div>

        </section>


        {/* =====================================================
                HOW IT WORKS
            ===================================================== */}

        <section
            id="how-it-works"
            className="relative bg-white py-24 lg:py-32"
        >

          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">
                How OneHealth works
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">

                Healthcare connected around{" "}

                <span className="onehealth-gradient-text">
                                you.
                            </span>

              </h2>

              <p className="mt-5 leading-7 text-slate-500">

                OneHealth creates a simple bridge between patients
                and doctors without removing the patient's control
                over their information.

              </p>

            </div>


            <div className="relative mt-16 grid gap-6 md:grid-cols-3">

              <div className="absolute left-[17%] right-[17%] top-[57px] hidden h-px bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-200 md:block" />


              {workflow.map(
                  ({
                     number,
                     title,
                     text,
                     icon: Icon,
                   }) => (

                      <div
                          key={number}
                          className="
                                        group
                                        relative
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-7
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-blue-200
                                        hover:bg-white
                                        hover:shadow-2xl
                                        hover:shadow-blue-900/5
                                    "
                      >

                        <div className="
                                        relative
                                        z-10
                                        grid
                                        h-14
                                        w-14
                                        place-items-center
                                        rounded-2xl
                                        bg-white
                                        text-blue-600
                                        shadow-md
                                        ring-1
                                        ring-slate-100
                                        transition
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                    ">

                          <Icon size={23} />

                        </div>

                        <p className="mt-7 text-xs font-black tracking-widest text-blue-600">
                          {number}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-slate-950">
                          {title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-500">
                          {text}
                        </p>

                      </div>

                  )
              )}

            </div>


            {/* Consent flow */}

            <div className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-6 sm:p-8">

              <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-600">
                    The key difference
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-950">
                    A doctor can request access. Only you can approve it.
                  </h3>

                </div>


                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 sm:text-sm">

                                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                    Doctor
                                </span>

                  <ArrowRight
                      size={16}
                      className="text-blue-500"
                  />

                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg shadow-blue-600/20">
                                    Patient consent
                                </span>

                  <ArrowRight
                      size={16}
                      className="text-blue-500"
                  />

                  <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                    Record access
                                </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
                FEATURES
            ===================================================== */}

        <section
            id="features"
            className="bg-[#f8fbff] py-24 lg:py-32"
        >

          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div className="max-w-2xl">

                <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">
                  One platform
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Everything important about your health.
                </h2>

                <p className="mt-5 leading-7 text-slate-500">
                  Designed to make medical information easier to
                  organize, understand and share securely.
                </p>

              </div>


              <button
                  type="button"
                  onClick={openLogin}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600"
              >

                Explore the patient portal

                <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                />

              </button>

            </div>


            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {features.map(
                  ({
                     icon: Icon,
                     title,
                     text,
                   }) => (

                      <div
                          key={title}
                          className="
                                        group
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-7
                                        shadow-sm
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-blue-200
                                        hover:shadow-2xl
                                        hover:shadow-blue-900/5
                                    "
                      >

                        <div className="
                                        grid
                                        h-14
                                        w-14
                                        place-items-center
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-blue-50
                                        to-cyan-50
                                        text-blue-600
                                        transition
                                        duration-500
                                        group-hover:rotate-3
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                    ">

                          <Icon size={22} />

                        </div>


                        <h3 className="mt-7 text-lg font-bold text-slate-950">
                          {title}
                        </h3>


                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {text}
                        </p>


                        <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 transition duration-300 group-hover:opacity-100">

                          Learn more

                          <ArrowRight size={13} />

                        </div>

                      </div>

                  )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
                SECURITY
            ===================================================== */}

        <section
            id="security"
            className="relative overflow-hidden bg-[#020617] py-24 text-white lg:py-32"
        >

          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />


          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">


            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-blue-300">

                <LockKeyhole size={14} />

                Privacy by design

              </div>


              <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">

                Your medical record should stay under{" "}

                <span className="onehealth-gradient-text">
                                your control.
                            </span>

              </h2>


              <p className="mt-6 max-w-xl leading-8 text-slate-400">

                OneHealth is designed around patient consent. A
                doctor may find your profile, but protected medical
                information remains inaccessible until you approve
                the request.

              </p>


              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Consent-based sharing",
                  "Controlled access",
                  "Access history",
                  "Unique health identity",
                ].map((item) => (

                    <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-300"
                    >

                      <CheckCircle2
                          size={16}
                          className="text-blue-400"
                      />

                      {item}

                    </div>

                ))}

              </div>

            </div>


            {/* Security flow */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="mb-7 flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">
                    Access activity
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    Patient consent flow
                  </p>

                </div>

                <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-400">
                  Secure
                </div>

              </div>


              {[
                {
                  icon: Stethoscope,
                  title: "Doctor requests access",
                  text: "Dr. Rahul Sharma • General Physician",
                  status: "Request",
                },

                {
                  icon: UserRound,
                  title: "Patient reviews request",
                  text: "Purpose: Medical consultation",
                  status: "Review",
                },

                {
                  icon: CheckCircle2,
                  title: "Patient approves",
                  text: "Consent granted for authorized records",
                  status: "Approved",
                },

                {
                  icon: FileHeart,
                  title: "Medical record becomes available",
                  text: "Access is logged for transparency",
                  status: "Protected",
                },

              ].map(
                  ({
                     icon: Icon,
                     title,
                     text,
                     status,
                   }, index) => (

                      <div
                          key={title}
                          className="relative flex gap-4 border-b border-white/10 py-5 last:border-0"
                      >

                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-blue-400">

                          <Icon size={18} />

                        </div>


                        <div className="flex-1">

                          <div className="flex flex-wrap items-center justify-between gap-2">

                            <p className="text-sm font-bold text-slate-200">
                              {title}
                            </p>

                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                                {status}
                                            </span>

                          </div>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {text}
                          </p>

                        </div>


                        {index < 3 && (

                            <div className="absolute bottom-[-1px] left-5 h-2 w-px bg-blue-500/30" />

                        )}

                      </div>

                  )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
                DEMO CTA
            ===================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 py-20 text-white lg:py-24">

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />


          <div className="relative mx-auto max-w-4xl px-5 text-center">

            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/15">

              <HeartPulse size={28} />

            </div>


            <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
              Experience OneHealth.
            </h2>


            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">

              Explore the complete frontend prototype built around
              patients, doctors and secure consent-based healthcare access.

            </p>


            <div className="mt-9 flex flex-wrap justify-center gap-3">


              {/* PATIENT PORTAL */}

              <button
                  type="button"
                  onClick={openLogin}
                  className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1"
              >

                Patient Portal

              </button>


              {/* DOCTOR */}

              <Link
                  to="/doctor"
                  className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >

                Doctor Dashboard

              </Link>


              {/* ADMIN */}

              <Link
                  to="/admin"
                  className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >

                Admin Dashboard

              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
                FOOTER
            ===================================================== */}

        <Footer />

      </div>
  );
}