'use client';

import Image from "next/image";
import { useState, type ReactNode } from 'react';

/* ---- Real destinations (preserved from the previous site) ---- */
const BOOKING_URL =
  "https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true";
const LOGIN_URL = "https://eei.balancecx.com/#/signIn";
const CASE_PASCO =
  "https://eeibuildingperformance.com/case-study/campus-performance-improvements-at-pasco-school-district/";
const CASE_OSU =
  "https://eeibuildingperformance.com/case-study/delivering-analytics-for-new-construction-at-the-ohio-stateuniversity-wexner-medical-center/";

const WHITE_LOGO = "/balancecx-logo-white-trim.png";
const AFT_IMG = "/BalanceCx AFT Image.png";
const NETWORK_IMG = "/bacnet-network.png";
const COPILOT_IMG = "/engineer-copilot.png";

/* ============================ helpers ============================ */

function Check({ size = 17, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16A88A"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CheckItem({ bold, children }: { bold: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-[10px] text-[13.5px] leading-[1.5] text-ink">
      <Check className="mt-px shrink-0" />
      <span>
        <strong className="font-semibold">{bold}</strong> — {children}
      </span>
    </div>
  );
}

function FeatureCheck({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-[10px]">
      <Check className="shrink-0" />
      {children}
    </div>
  );
}

function FeatureMeta({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-[18px] flex items-center gap-[14px]">
      <span className="font-display text-[18px] font-extrabold text-mint-600">{num}</span>
      <span className="h-px w-7 bg-[#C9CDD3]" />
      <span className="font-mono text-[12px] font-semibold tracking-[0.04em] text-muted-ink">{label}</span>
    </div>
  );
}

function LeedPath({ path, label, pts }: { path: string; label: string; pts: string }) {
  return (
    <div className="text-[13.5px] leading-[1.6] text-body">
      <span className="font-semibold text-ink">{path}</span> — {label}{" "}
      <span className="font-medium text-mint-600">({pts})</span>
    </div>
  );
}

type UseCaseItem = { bold: string; rest: string };

function UseCaseCard({
  icon,
  title,
  stat,
  statLabel,
  description,
  items,
}: {
  icon: ReactNode;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  items: UseCaseItem[];
}) {
  return (
    <div className="group flex flex-col rounded-[14px] border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)] lg:p-7">
      <div className="mb-4 flex items-start justify-between gap-3 lg:gap-4">
        <div className="flex min-w-0 items-center gap-3 lg:gap-[13px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-ink lg:h-[46px] lg:w-[46px] lg:rounded-[11px]">
            {icon}
          </div>
          <h3 className="m-0 font-display text-[18px] font-bold leading-[1.2] text-ink lg:text-[20px]">{title}</h3>
        </div>
        <div className="shrink-0 text-right">
          <div className="whitespace-nowrap font-display text-[24px] font-extrabold leading-none tracking-[-0.02em] text-mint-600 lg:text-[29px]">
            {stat}
          </div>
          <div className="mt-1 text-[11px] leading-[1.3] text-muted-ink">{statLabel}</div>
        </div>
      </div>
      <p className="m-0 mb-5 text-[14.5px] leading-[1.6] text-body">{description}</p>
      <div className="mt-auto flex flex-col gap-3 border-t border-line-soft pt-[18px]">
        {items.map((it) => (
          <CheckItem key={it.bold} bold={it.bold}>
            {it.rest}
          </CheckItem>
        ))}
      </div>
    </div>
  );
}

function IndustryTile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-[12px] border border-ink-border bg-white/[0.03] p-4 sm:flex-col sm:gap-[13px] sm:rounded-[14px] sm:px-2 sm:py-6">
      {children}
      <span className="text-[13px] font-medium text-white sm:text-center sm:text-[12.5px]">{label}</span>
    </div>
  );
}

function IndustrySvg({ d }: { d: string }) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5CE8C8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink-border bg-ink-panel px-4 py-[11px]">
      <span className="h-[10px] w-[10px] rounded-full bg-fail" />
      <span className="h-[10px] w-[10px] rounded-full bg-warn" />
      <span className="h-[10px] w-[10px] rounded-full bg-pass" />
      <span className="ml-3 font-mono text-[11.5px] text-white/45">{url}</span>
    </div>
  );
}

function BrowserFrame({
  url,
  src,
  alt,
  width,
  height,
  onClick,
}: {
  url?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className="group relative cursor-zoom-in overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_24px_60px_rgba(20,24,28,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
    >
      {url && <BrowserChrome url={url} />}
      <Image src={src} alt={alt} width={width} height={height} className="block h-auto w-full" />
      <div
        className={`pointer-events-none absolute right-[14px] ${
          url ? "top-[50px]" : "bottom-[14px]"
        } flex items-center gap-[6px] rounded-lg border border-white/[0.14] bg-ink/[0.86] px-3 py-[7px] text-[12px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        Click to enlarge
      </div>
    </div>
  );
}

/* ============================ data ============================ */

const USE_CASES: {
  icon: ReactNode;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  items: UseCaseItem[];
}[] = [
  {
    icon: (
      <svg width={23} height={23} viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h6" />
      </svg>
    ),
    title: "New Construction",
    stat: "100%",
    statLabel: "Equipment tested",
    description:
      "The only analytics platform purpose-built for the construction process — validate every system before handover and accelerate project delivery.",
    items: [
      { bold: "100% Digital Testing", rest: "validate every piece of equipment, not just samples" },
      { bold: "Warranty Protection", rest: "reduce callbacks by catching issues before handover" },
      { bold: "Seamless Integration", rest: "works with CxAlloy, Smartsheet, and project tools" },
    ],
  },
  {
    icon: (
      <svg width={23} height={23} viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Portfolio Deployments",
    stat: "10x",
    statLabel: "Faster rollout",
    description:
      "Enterprise-wide analytics rollout with streamlined implementation. Get organizations running on FDD quickly and consistently across every building.",
    items: [
      { bold: "EEI Data Gateway", rest: "secure IoT data collection to the cloud" },
      { bold: "Software Gateway", rest: "software-only deployment on enterprise VMs" },
      { bold: "Single Sign-On", rest: "SSO for enterprise customer user management" },
    ],
  },
  {
    icon: (
      <svg width={23} height={23} viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Monitoring-Based Commissioning",
    stat: "30%",
    statLabel: "Energy savings",
    description:
      "Transform existing building performance without disruption — immediate insights and continuous optimization from the data you already have.",
    items: [
      { bold: "Non-Invasive Analysis", rest: "no destructive testing or system downtime" },
      { bold: "FDD Library", rest: "proven fault detection algorithms refined since 2015" },
      { bold: "M&V Platform", rest: "validate and track performance improvements" },
    ],
  },
  {
    icon: (
      <svg width={23} height={23} viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Facility Operations",
    stat: "2–3 yr",
    statLabel: "Typical ROI",
    description:
      "Long-term monitoring for proactive maintenance and cost savings — catch faults before they escalate across the full service life.",
    items: [
      { bold: "24/7 Monitoring", rest: "continuous fault detection across all equipment" },
      { bold: "Prioritized Faults", rest: "ranked by cost and duration so teams fix what matters" },
      { bold: "Energy Tracking", rest: "quantify conservation opportunities and verify savings" },
    ],
  },
];

const INDUSTRIES: { label: string; d: string }[] = [
  { label: "Healthcare", d: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.5 12h3l1.5-3 3 6 1.5-3h4"/>' },
  { label: "Education", d: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/>' },
  { label: "Aviation", d: '<path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l4.6 3.6L6 16l-2-.5a1 1 0 0 0-.8 1.7L6 20l2.8 2.8a1 1 0 0 0 1.7-.8L10 20l3.5-2.5 3.6 4.6a1 1 0 0 0 1.7-.9Z"/>' },
  { label: "Government", d: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/>' },
  { label: "Commercial", d: '<path d="M3 21V7l9-4 9 4v14M3 21h18M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/>' },
  { label: "Industrial", d: '<path d="M2 20h20M4 20V8l6-3v15M10 20V5l8 4v11M14 12h.01M14 16h.01M7 12h.01M7 16h.01"/>' },
  { label: "Retail", d: '<path d="M3 9 5 3h14l2 6M3 9v11h18V9M3 9h18M8 13h8"/>' },
  { label: "Mission Critical", d: '<path d="M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h6M12 17h6"/>' },
];

/* ============================ page ============================ */

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; w: number; h: number; alt: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = "text-white/70 transition-colors hover:text-white no-underline";
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#integrations", label: "Integrations" },
    { href: "#case-studies", label: "Case Studies" },
  ];

  return (
    <div className="bg-white font-sans text-ink antialiased">
      {/* ===================== NAV ===================== */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink-border bg-ink/95 px-5 py-[14px] backdrop-blur-[8px] lg:px-12 lg:py-[18px]">
        <div className="flex items-center gap-12">
          <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="h-[24px] w-auto lg:h-[32px]" priority />
          <div className="hidden items-center gap-[30px] text-[14px] font-medium lg:flex">
            {navItems.map((it) => (
              <a key={it.href} href={it.href} className={navLink}>{it.label}</a>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className={`text-[14px] font-medium ${navLink}`}>Log In</a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-mint px-5 py-[11px] text-[14px] font-semibold text-ink no-underline transition-colors hover:bg-mint-500"
          >
            Schedule Demo
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center transition-transform active:scale-95 lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* ===================== MOBILE MENU OVERLAY ===================== */}
      {menuOpen && (
        <div className="lightbox-fade fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-[18px] lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="h-[24px] w-auto" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center transition-transform active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-[6px]">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-border py-3 font-display text-[28px] font-bold text-white no-underline"
              >
                {it.label}
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] border border-white/20 py-[14px] text-center text-[15px] font-semibold text-white no-underline"
            >
              Log In
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] bg-mint py-[14px] text-center text-[15px] font-semibold text-ink no-underline"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      )}

      {/* ===================== HERO ===================== */}
      <header className="relative overflow-hidden bg-ink px-6 pb-11 pt-10 lg:px-12 lg:pb-[34px] lg:pt-[30px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1200px 560px at 78% -10%, rgba(92,232,200,.16), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] lg:text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mint/35 px-[14px] py-[7px] lg:mb-4">
              <span className="h-[7px] w-[7px] rounded-full bg-mint" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-mint-200">
                Building Performance Analytics Platform
              </span>
            </div>
            <h1 className="m-0 mb-3 font-display text-[33px] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
              Analytics for every phase of your <span className="text-mint">building&apos;s lifecycle</span>
            </h1>
            <p className="mb-6 max-w-[640px] text-[16px] leading-[1.5] text-white/70 lg:mx-auto lg:mb-[22px]">
              From new construction to daily operations — one platform to validate, monitor, and optimize every system.
            </p>
            <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center lg:justify-center lg:gap-[14px]">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-mint px-6 py-[14px] text-center text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-mint-500 lg:py-3"
              >
                Schedule a Demo
              </a>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-7 py-[14px] text-center text-[15px] font-semibold text-white no-underline transition-colors hover:border-white/50 hover:bg-white/5 lg:py-[15px]"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== USE CASES ===================== */}
      <section id="use-cases" className="border-b border-line bg-surface-2 px-6 lg:px-12 pb-12 pt-9">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[22px] flex items-baseline gap-[14px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-mint-600">Use Cases</span>
            <span className="text-[14px] text-muted-ink">One platform across the building lifecycle</span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {USE_CASES.map((c) => (
              <UseCaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section id="industries" className="bg-ink px-6 py-10 lg:px-12 lg:py-[76px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-mint lg:mb-9">
            Purpose-built for every facility type
          </div>
          <div className="grid grid-cols-2 gap-[14px] sm:grid-cols-4 lg:grid-cols-8">
            {INDUSTRIES.map((it) => (
              <IndustryTile key={it.label} label={it.label}>
                <IndustrySvg d={it.d} />
              </IndustryTile>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HIGHLIGHTED FEATURES ===================== */}
      <section id="features" className="bg-white px-6 py-11 lg:px-12 lg:pb-[92px] lg:pt-[88px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-6 max-w-[680px] text-center lg:mb-6">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-mint-600 lg:mb-[14px]">
              Inside the Platform
            </div>
            <h2 className="m-0 mb-3 font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink lg:mb-4 lg:text-[42px] lg:leading-[1.12] lg:tracking-[-0.025em]">
              Capabilities that set BalanceCx apart
            </h2>
            <p className="m-0 text-[14.5px] leading-[1.55] text-body lg:text-[17px] lg:leading-[1.6]">
              A closer look at the functionality teams actually use day to day — from AI-ready data to design-aware
              testing and live network visibility.
            </p>
          </div>
          <div className="mb-2 hidden h-px bg-line lg:block" />

          {/* FEATURE 01 — Engineer Copilot */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-line-soft py-10 lg:gap-14 lg:py-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <FeatureMeta num="01" label="AI FAULT ANALYSIS" />
              <h3 className="m-0 mb-3 font-display text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:mb-4 lg:text-[30px] lg:leading-[1.18]">
                Engineer Copilot
              </h3>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.6] text-body lg:mb-[22px] lg:text-[16px]">
                An AI assistant that reads each fault&apos;s full context, explains the likely root causes ranked by
                probability, and turns every recommendation into an actionable task, so your team spends time fixing,
                not diagnosing.
              </p>
              <div className="flex flex-col gap-[10px] text-[14px] text-body lg:gap-3">
                <FeatureCheck>Plain-language diagnosis for every fault</FeatureCheck>
                <FeatureCheck>Root causes ranked by likelihood</FeatureCheck>
                <FeatureCheck>One-click task creation</FeatureCheck>
              </div>
            </div>

            {/* Copilot screenshot */}
            <BrowserFrame
              src={COPILOT_IMG}
              alt="Engineer Copilot — AI fault analysis & resolution"
              width={872}
              height={1127}
              onClick={() =>
                setLightbox({ src: COPILOT_IMG, w: 872, h: 1127, alt: "Engineer Copilot — AI fault analysis & resolution" })
              }
            />
          </div>

          {/* FEATURE 02 — Automated Functional Testing */}
          <div className="grid grid-cols-1 items-center gap-6 border-b border-line-soft py-10 lg:gap-14 lg:py-16 lg:grid-cols-[1.05fr_1fr]">
            <div className="order-2 lg:order-1">
              <BrowserFrame
                url="eei.balancecx.com / functional-testing / setup"
                src={AFT_IMG}
                alt="BalanceCx Test Results heat map"
                width={1916}
                height={1000}
                onClick={() => setLightbox({ src: AFT_IMG, w: 1916, h: 1000, alt: "BalanceCx Test Results heat map" })}
              />
            </div>
            <div className="order-1 lg:order-2">
              <FeatureMeta num="02" label="AUTOMATED FUNCTIONAL TESTING" />
              <h3 className="m-0 mb-3 font-display text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:mb-4 lg:text-[30px] lg:leading-[1.18]">
                Controls installation &amp; retrofit scope validation
              </h3>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.6] text-body lg:mb-[22px] lg:text-[16px]">
                BalanceCx Automated Functional Testing incorporates actual design documents and submittals, validating
                to your specific project. We verify the exact points list and sequence of operations expected, not
                generic analytics vendor preferences or FDD algorithms.
              </p>
              <div className="hidden flex-col gap-3 text-[14px] text-body lg:flex">
                <FeatureCheck>Tests every device against its design intent</FeatureCheck>
                <FeatureCheck>Real-time controls readiness visibility</FeatureCheck>
                <FeatureCheck>Pass/fail results documented for handover</FeatureCheck>
              </div>
            </div>
          </div>

          {/* FEATURE 03 — EEI Data Gateway */}
          <div className="grid grid-cols-1 items-center gap-6 pb-4 pt-10 lg:gap-14 lg:pt-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <FeatureMeta num="03" label="EEI DATA GATEWAY" />
              <h3 className="m-0 mb-3 font-display text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:mb-4 lg:text-[30px] lg:leading-[1.18]">
                Your view into your network
              </h3>
              <p className="m-0 mb-4 text-[14.5px] leading-[1.6] text-body lg:mb-[22px] lg:text-[16px]">
                The EEI Data Gateway brings an unmatched view into your controls system network performance and
                BACnet/Modbus device performance. Instantly troubleshoot slow controls networks with one platform,
                replacing multiple vendor tools.
              </p>
              <div className="hidden flex-col gap-3 text-[14px] text-body lg:flex">
                <FeatureCheck>Live device health across the whole network</FeatureCheck>
                <FeatureCheck>BACnet &amp; Modbus performance in one view</FeatureCheck>
                <FeatureCheck>Pinpoint slow or offline controllers fast</FeatureCheck>
              </div>
            </div>
            <BrowserFrame
              url="eei.balancecx.com / data-gateway / devices"
              src={NETWORK_IMG}
              alt="BalanceCx BACnet device network"
              width={1962}
              height={655}
              onClick={() => setLightbox({ src: NETWORK_IMG, w: 1962, h: 655, alt: "BalanceCx BACnet device network" })}
            />
          </div>
        </div>
      </section>

      {/* ===================== INTEGRATIONS ===================== */}
      <section id="integrations" className="bg-ink px-6 py-11 lg:px-12 lg:py-[84px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-7 max-w-[680px] text-center lg:mb-[52px]">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-mint lg:mb-[14px]">Integrations</div>
            <h2 className="m-0 mb-3 font-display text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-white lg:mb-4 lg:text-[38px] lg:leading-[1.15] lg:tracking-[-0.022em]">
              One platform, every protocol
            </h2>
            <p className="m-0 text-[14px] leading-[1.55] text-white/65 lg:text-[17px] lg:leading-[1.6]">
              BalanceCx ingests data from any device, unifies it through the EEI Data Gateway, and makes it ready for
              reporting, standards compliance, and AI — replacing a stack of disconnected vendor tools.
            </p>
          </div>

          {/* network diagram */}
          <div className="flex flex-col items-center rounded-[18px] border border-ink-border bg-ink-panel p-5 lg:px-10 lg:py-11">
            {/* TOP — platform */}
            <div
              className="relative w-full rounded-[18px] border border-mint/45 p-5 shadow-[0_0_0_4px_rgba(92,232,200,0.05),0_22px_50px_rgba(0,0,0,0.45)] lg:px-[30px] lg:pb-[26px] lg:pt-[30px]"
              style={{ background: "linear-gradient(180deg, rgba(92,232,200,.09), rgba(92,232,200,.02))" }}
            >
              <div className="mb-[18px] flex items-center gap-3 border-b border-mint/[0.18] pb-4 lg:mb-6 lg:gap-4 lg:pb-[22px]">
                <div className="hidden h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[12px] bg-mint/[0.14] lg:flex">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" />
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center lg:mb-[6px]">
                    <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="h-[24px] w-auto lg:h-[30px]" />
                  </div>
                  <div className="hidden max-w-[680px] text-[13px] leading-[1.55] text-white/[0.72] lg:block">
                    One platform normalizes, stores, and analyzes every point.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-4 lg:gap-[14px]">
                <div className="rounded-[12px] border border-white/[0.09] bg-white/[0.04] p-[14px] lg:p-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="mb-[14px]">
                    <path d="M3 12h4l3 8 4-16 3 8h4" />
                  </svg>
                  <div className="mb-[7px] font-display text-[14.5px] font-semibold text-white">Analytics &amp; Dashboards</div>
                  <div className="text-[12px] leading-[1.55] text-white/60">
                    Charting, fault logs, and energy tracking in real time across every building.
                  </div>
                </div>
                <div className="rounded-[12px] border border-white/[0.09] bg-white/[0.04] p-[14px] lg:p-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="mb-[14px]">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div className="mb-[7px] font-display text-[14.5px] font-semibold text-white">Fault Detection</div>
                  <div className="text-[12px] leading-[1.55] text-white/60">
                    100% equipment FDD, prioritized by cost and duration.
                  </div>
                </div>
                <div className="rounded-[12px] border border-white/[0.09] bg-white/[0.04] p-[14px] lg:p-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="mb-[14px]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h4" />
                  </svg>
                  <div className="mb-[7px] font-display text-[14.5px] font-semibold text-white">Reporting &amp; Standards</div>
                  <div className="text-[12px] leading-[1.55] text-white/60">
                    LEED v5 docs, Energy Star Portfolio Manager, and Word / Excel exports.
                  </div>
                </div>
                <div className="rounded-[12px] border border-mint/30 bg-mint/[0.07] p-[14px] lg:p-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="mb-[14px]">
                    <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15l-1.9-4.1L5.5 9l4.6-1.4z" />
                    <path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
                  </svg>
                  <div className="mb-[7px] font-display text-[14.5px] font-semibold text-white">AI &amp; LLMs</div>
                  <div className="text-[12px] leading-[1.55] text-white/[0.72]">
                    Structured, labeled data you can query in plain language via{" "}
                    <span className="font-semibold text-white">ChatGPT</span>.
                  </div>
                </div>
              </div>
            </div>

            {/* connector up */}
            <div className="my-3 flex flex-col items-center">
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" stroke="#5CE8C8" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 8l6-6 6 6" />
              </svg>
              <span className="h-[22px] w-px bg-mint/40" />
            </div>

            {/* MIDDLE — gateway */}
            <div className="flex items-center gap-4 rounded-[14px] border border-ink-border-2 bg-ink px-[26px] py-[18px]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-mint/10">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="8" rx="2" />
                  <rect x="2" y="13" width="20" height="8" rx="2" />
                  <path d="M6 7h.01M6 17h.01" />
                </svg>
              </div>
              <div className="text-left">
                <div className="mb-1 flex items-center gap-[10px]">
                  <span className="font-display text-[17px] font-bold text-white">EEI Data Gateway</span>
                </div>
                <div className="max-w-[520px] text-[12.5px] leading-[1.55] text-white/[0.62]">
                  Securely collects device data on the local network and normalizes it in the cloud — hardware or
                  software-only.
                </div>
              </div>
            </div>

            {/* gateway → devices connector: chevron on mobile, fan-in on desktop */}
            <div className="my-3 flex flex-col items-center lg:hidden">
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" stroke="#5CE8C8" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 8l6-6 6 6" />
              </svg>
              <span className="h-[22px] w-px bg-mint/40" />
            </div>
            <svg viewBox="0 0 720 46" preserveAspectRatio="none" className="my-[6px] hidden h-[46px] w-full max-w-[760px] lg:block">
              <path d="M40 46 C40 24 360 24 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <path d="M170 46 C170 26 360 26 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <path d="M300 46 C300 30 360 30 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <path d="M420 46 C420 30 360 30 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <path d="M550 46 C550 26 360 26 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <path d="M680 46 C680 24 360 24 360 4" fill="none" stroke="rgba(92,232,200,.35)" strokeWidth="1.2" />
              <circle cx="360" cy="4" r="3" fill="#5CE8C8" />
            </svg>

            {/* BOTTOM — protocols */}
            <div className="w-full text-center">
              <div className="mx-auto mb-[14px] flex max-w-[900px] flex-wrap justify-center gap-2">
                {["BACnet", "Modbus", "MQTT", "SQL", "Haystack API", "OPC UA"].map((p) => (
                  <span
                    key={p}
                    className="flex items-center gap-[7px] whitespace-nowrap rounded-lg border border-ink-border bg-white/5 px-[14px] py-[9px] font-mono text-[12px] text-white"
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                    {p}
                  </span>
                ))}
                <span className="flex items-center gap-[7px] whitespace-nowrap rounded-lg border border-ink-border bg-white/5 px-[14px] py-[9px] font-mono text-[12px] text-white/[0.78]">
                  <span className="h-[6px] w-[6px] rounded-full bg-mint/60" />
                  Monnit wireless sensors
                </span>
              </div>
              <div className="font-mono text-[11px] font-semibold tracking-[0.06em] text-white/45">
                DEVICE PROTOCOLS &amp; SENSORS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEED v5 ===================== */}
      <section className="border-t border-line bg-white px-6 py-11 lg:px-12 lg:py-[84px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 max-w-[720px] lg:mb-11">
            <div className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.12em] text-mint-600">LEED v5 Points</div>
            <h2 className="m-0 mb-3 font-display text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-ink lg:mb-4 lg:text-[38px] lg:leading-[1.15] lg:tracking-[-0.022em]">
              The easy button to LEED v5 Energy &amp; Atmosphere credits
            </h2>
            <p className="m-0 text-[14.5px] leading-[1.55] text-body lg:text-[17px] lg:leading-[1.6]">
              In one package, BalanceCx provides both an Energy Information System (EIS) and an Enhanced Monitoring Based
              Commissioning (MBCx) software tool.
            </p>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* BD&C */}
            <div className="rounded-[14px] border border-line bg-white p-5 lg:p-7">
              <div className="mb-[18px] border-b border-line-soft pb-[14px] font-display text-[18px] font-bold text-ink">
                LEED BD&amp;C <span className="text-[14px] font-medium text-muted-ink">— Building Design &amp; Construction</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-[14px]">
                  <span className="h-fit whitespace-nowrap rounded-md bg-[#E5F1FA] px-[9px] py-1 font-mono text-[12px] font-semibold text-eei-blue">EAp4</span>
                  <div className="text-[14px] leading-[1.5] text-ink">Energy Metering and Reporting</div>
                </div>
                <div className="flex gap-[14px]">
                  <span className="h-fit whitespace-nowrap rounded-md bg-[#E5F1FA] px-[9px] py-1 font-mono text-[12px] font-semibold text-eei-blue">EAc5</span>
                  <div className="text-[14px] leading-[1.5] text-ink">
                    Enhanced Commissioning
                    <div className="mb-[10px] mt-2 text-[12.5px] leading-[1.5] text-muted-ink">
                      Option 2 — Monitoring Based Commissioning (MBCx)
                    </div>
                    <div className="flex flex-col gap-2">
                      <LeedPath path="Path 1" label="Basic Software" pts="1 point" />
                      <LeedPath path="Path 2" label="Enhanced Software" pts="2 points" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* O&M */}
            <div className="rounded-[14px] border border-line bg-white p-5 lg:p-7">
              <div className="mb-[18px] border-b border-line-soft pb-[14px] font-display text-[18px] font-bold text-ink">
                LEED O&amp;M <span className="text-[14px] font-medium text-muted-ink">— Operations &amp; Maintenance</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-[14px]">
                  <span className="h-fit whitespace-nowrap rounded-md bg-[#E5F1FA] px-[9px] py-1 font-mono text-[12px] font-semibold text-eei-blue">EAp2</span>
                  <div className="text-[14px] leading-[1.5] text-ink">Energy Monitoring and Reporting</div>
                </div>
                <div className="flex gap-[14px]">
                  <span className="h-fit whitespace-nowrap rounded-md bg-[#E5F1FA] px-[9px] py-1 font-mono text-[12px] font-semibold text-eei-blue">EAc7</span>
                  <div className="text-[14px] leading-[1.5] text-ink">
                    Commissioning
                    <div className="mb-[10px] mt-2 text-[12.5px] leading-[1.5] text-muted-ink">
                      Option 2 — Monitoring Based Commissioning
                    </div>
                    <div className="flex flex-col gap-2">
                      <LeedPath path="Path 1" label="Basic MBCx" pts="1 point" />
                      <LeedPath path="Path 2" label="Enhanced MBCx" pts="3 points" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-[14px] bg-ink px-6 py-7 md:flex-row md:items-center lg:gap-8 lg:px-9 lg:py-[34px]">
            <div className="max-w-[720px]">
              <div className="mb-2 font-display text-[20px] font-bold text-white">
                Your easy button for Energy Metering &amp; Reporting
              </div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-white/70">
                BalanceCx connects to building metering devices and Energy Star Portfolio Manager for seamless setup and
                data exchange and generates all the documentation needed for upload to LEED Online.
              </p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-lg bg-mint px-[26px] py-[14px] text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-mint-500"
            >
              Make it Easy →
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDIES ===================== */}
      <section id="case-studies" className="bg-ink px-6 py-11 lg:px-12 lg:py-[84px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-6 lg:mb-11 lg:gap-8">
            <div className="max-w-[640px]">
              <div className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.12em] text-mint">
                Proven Results &amp; Recognition
              </div>
              <h2 className="m-0 font-display text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-white lg:text-[38px] lg:leading-[1.15] lg:tracking-[-0.022em]">
                Trusted by industry leaders for mission-critical operations
              </h2>
            </div>
            <a
              href="/BalanceCx Analytics.pdf"
              download
              className="whitespace-nowrap rounded-lg border border-white/20 bg-transparent px-[22px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Download Overview PDF →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Pasco */}
            <a
              href={CASE_PASCO}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[14px] border border-line bg-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)]"
            >
              <div className="flex items-center justify-between gap-4 bg-ink px-5 py-[18px] lg:px-7 lg:py-6">
                <div>
                  <div className="mb-3 inline-flex rounded-md bg-mint/[0.12] px-[10px] py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.08em] text-mint">
                    Education
                  </div>
                  <div className="font-display text-[18px] font-bold text-white lg:text-[21px]">Pasco School District</div>
                </div>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="hidden shrink-0 opacity-[0.55] lg:block">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>
              <div className="px-5 py-5 lg:px-7 lg:py-[26px]">
                <div className="mb-3 font-display text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-ink">
                  Met Washington Clean Buildings standards with automated FDD
                </div>
                <p className="mb-[22px] text-[14px] leading-[1.6] text-body">
                  Consolidated building data, automated fault detection, and prioritized maintenance — improving energy
                  efficiency across the district.
                </p>
                <span className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-mint-600">
                  Read the case study
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A88A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
            {/* OSU */}
            <a
              href={CASE_OSU}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[14px] border border-line bg-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)]"
            >
              <div className="flex items-center justify-between gap-4 bg-ink px-5 py-[18px] lg:px-7 lg:py-6">
                <div>
                  <div className="mb-3 inline-flex rounded-md bg-mint/[0.12] px-[10px] py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.08em] text-mint">
                    Healthcare
                  </div>
                  <div className="font-display text-[18px] font-bold text-white lg:text-[21px]">Ohio State Wexner Medical Center</div>
                </div>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5CE8C8" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="hidden shrink-0 opacity-[0.55] lg:block">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.5 12h3l1.5-3 3 6 1.5-3h4" />
                </svg>
              </div>
              <div className="px-5 py-5 lg:px-7 lg:py-[26px]">
                <div className="mb-3 font-display text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-ink">
                  Real-time validation across new construction
                </div>
                <p className="mb-[22px] text-[14px] leading-[1.6] text-body">
                  EEI automated setpoint and sequence validation during construction — improving commissioning quality,
                  saving labor, and delivering a higher-performing hospital.
                </p>
                <span className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-mint-600">
                  Read the case study
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A88A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section id="demo" className="relative overflow-hidden bg-white px-6 py-12 lg:px-12 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 460px at 50% 120%, rgba(92,232,200,.12), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[760px] text-center">
          <h2 className="m-0 mb-[14px] font-display text-[30px] font-extrabold leading-[1.12] tracking-[-0.025em] text-ink lg:mb-[18px] lg:text-[46px] lg:leading-[1.1]">
            Transform reactive into<br className="hidden lg:block" /> <span className="text-mint-600">proactive operations</span>
          </h2>
          <p className="m-0 mb-6 text-[15px] leading-[1.55] text-body lg:mb-8 lg:text-[18px]">
            Join the hundreds of buildings using BalanceCx analytics for actionable intelligence and equipment
            reliability.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-mint px-[34px] py-4 text-[16px] font-semibold text-ink no-underline transition-colors hover:bg-mint-500"
          >
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-ink-900 px-6 pb-8 pt-10 lg:px-12 lg:pt-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-ink-border pb-8 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10 md:pb-10">
            <div className="col-span-2 md:col-span-1">
              <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="mb-[18px] h-[18px] w-auto" />
              <p className="m-0 max-w-[340px] text-[14px] leading-[1.6] text-white/55">
                Analytics platform for building performance optimization, commissioning, and facility operations.
              </p>
            </div>
            <div>
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Product</div>
              <div className="flex flex-col gap-[11px] text-[14px]">
                <a href="#features" className={navLink}>Features</a>
                <a href="#integrations" className={navLink}>Integrations</a>
                <a href="#case-studies" className={navLink}>Case Studies</a>
              </div>
            </div>
            <div>
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Company</div>
              <div className="flex flex-col gap-[11px] text-[14px]">
                <a href="/about" className={navLink}>About</a>
                <a href="/contact" className={navLink}>Contact</a>
                <a href="/support" className={navLink}>Support</a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6">
            <div className="flex items-center gap-4">
              <span className="text-[13px] text-white/40">© 2026 BalanceCx. All rights reserved.</span>
              <a href="/privacy" className="text-[13px] text-white/55 no-underline transition-colors hover:text-white">Privacy Policy</a>
              <a href="/cookies" className="text-[13px] text-white/55 no-underline transition-colors hover:text-white">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] text-white/40">A product of</span>
              <Image src="/eei-logo.png" alt="EEI" width={98} height={104} className="h-[22px] w-auto opacity-60 [filter:brightness(0)_invert(1)]" />
            </div>
          </div>
        </div>
      </footer>

      {/* ===================== LIGHTBOX ===================== */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") setLightbox(null);
          }}
          className="lightbox-fade fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-[rgba(8,11,14,0.92)] p-12"
        >
          <div className="absolute right-7 top-6 flex items-center gap-2 text-[13px] font-semibold text-white/70">
            Close
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </div>
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            width={lightbox.w}
            height={lightbox.h}
            className="h-auto max-h-[88vh] w-auto max-w-[88vw] rounded-[10px] border border-ink-border object-contain shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </div>
  );
}
