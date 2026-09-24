"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BOOKING_URL, LOGIN_URL, WHITE_LOGO } from "@/lib/links";

const NAV_ITEMS = [
  { href: "/#features", label: "Features" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/#case-studies", label: "Case Studies" },
];

const navLink = "text-white/70 transition-colors hover:text-white no-underline";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink-border bg-ink/95 px-5 py-[14px] backdrop-blur-[8px] lg:px-12 lg:py-[18px]">
        <div className="flex items-center gap-12">
          <Link href="/" aria-label="BalanceCx home" className="flex items-center">
            <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="h-[24px] w-auto lg:h-[32px]" priority />
          </Link>
          <div className="hidden items-center gap-[30px] text-[14px] font-medium lg:flex">
            {NAV_ITEMS.map((it) => (
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

      {menuOpen && (
        <div className="lightbox-fade fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-[18px] lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Link href="/" aria-label="BalanceCx home" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="h-[24px] w-auto" />
            </Link>
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
            {NAV_ITEMS.map((it) => (
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
    </>
  );
}
