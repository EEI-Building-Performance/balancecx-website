import type { ReactNode } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/* Compact dark hero that echoes the landing page header. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-ink px-6 pb-11 pt-10 lg:px-12 lg:pb-14 lg:pt-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1200px 560px at 78% -10%, rgba(92,232,200,.16), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="max-w-[760px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mint/35 px-[14px] py-[7px]">
            <span className="h-[7px] w-[7px] rounded-full bg-mint" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-mint-200">{eyebrow}</span>
          </div>
          <h1 className="m-0 font-display text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-white lg:text-[44px]">
            {title}
          </h1>
          {lede && (
            <p className="m-0 mt-4 max-w-[640px] text-[16px] leading-[1.55] text-white/70 lg:text-[17px]">{lede}</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

/* ---- Shared content primitives for sub-pages ---- */

export function Check({ size = 17, className = "" }: { size?: number; className?: string }) {
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

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.12em] text-mint-600">{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="m-0 mb-4 font-display text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:text-[26px]">
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4 text-[15.5px] leading-[1.65] text-body">{children}</div>;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-[10px] text-[15px] leading-[1.55] text-ink">
          <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-mint-500" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* Mint text link with a trailing arrow, matching the case-study cards. */
export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-mint-600 no-underline transition-colors hover:text-accent"
    >
      {children}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/* Dark CTA strip, same treatment as the LEED section on the landing page. */
export function CtaBand({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-[14px] bg-ink px-6 py-7 md:flex-row md:items-center lg:gap-8 lg:px-9 lg:py-[34px]">
      <div className="max-w-[720px]">
        <div className="mb-2 font-display text-[20px] font-bold text-white">{title}</div>
        <p className="m-0 text-[14.5px] leading-[1.6] text-white/70">{body}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap rounded-lg bg-mint px-[26px] py-[14px] text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-mint-500"
      >
        {label}
      </a>
    </div>
  );
}
