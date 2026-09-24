import Image from "next/image";
import Link from "next/link";
import { EEI_LOGO, WHITE_LOGO } from "@/lib/links";

const footerLink = "text-white/70 transition-colors hover:text-white no-underline";

export default function SiteFooter() {
  return (
    <footer className="bg-ink-900 px-6 pb-8 pt-10 lg:px-12 lg:pt-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-ink-border pb-8 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10 md:pb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="BalanceCx home" className="inline-block">
              <Image src={WHITE_LOGO} alt="BalanceCx" width={558} height={100} className="mb-[18px] h-[18px] w-auto" />
            </Link>
            <p className="m-0 max-w-[340px] text-[14px] leading-[1.6] text-white/55">
              Analytics platform for building performance optimization, commissioning, and facility operations.
            </p>
          </div>
          <div>
            <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Product</div>
            <div className="flex flex-col gap-[11px] text-[14px]">
              <a href="/#features" className={footerLink}>Features</a>
              <a href="/#integrations" className={footerLink}>Integrations</a>
              <a href="/#case-studies" className={footerLink}>Case Studies</a>
            </div>
          </div>
          <div>
            <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Company</div>
            <div className="flex flex-col gap-[11px] text-[14px]">
              <Link href="/about" className={footerLink}>About</Link>
              <Link href="/contact" className={footerLink}>Contact</Link>
              <Link href="/support" className={footerLink}>Support</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[13px] text-white/40">© 2026 BalanceCx. All rights reserved.</span>
            <Link href="/privacy" className="text-[13px] text-white/55 no-underline transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/cookies" className="text-[13px] text-white/55 no-underline transition-colors hover:text-white">Cookie Policy</Link>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-[12px] text-white/40">A product of</span>
            <Image src={EEI_LOGO} alt="EEI" width={98} height={104} className="h-[22px] w-auto opacity-60 [filter:brightness(0)_invert(1)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
