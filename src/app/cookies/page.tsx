import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy — BalanceCx",
  description: "BalanceCx uses a single, strictly necessary session cookie. Learn what it does and how to manage it.",
};

const h2 = "m-0 mb-3 font-display text-[22px] font-bold text-ink";
const p = "m-0 text-[15.5px] leading-[1.65] text-body";

export default function CookiePolicy() {
  return (
    <PageShell>
      <div className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[800px]">
          <h1 className="m-0 mb-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[38px]">
            Cookie Policy
          </h1>
          <p className="m-0 mb-8 text-[14px] text-muted-ink">Effective Date: September 16, 2025</p>

          <section className="mb-10">
            <h2 className={h2}>1. Summary</h2>
            <p className={p}>
              BalanceCx uses a single, strictly necessary session cookie to keep you logged in and help secure your
              account. We do not use analytics, advertising, or other non-essential cookies on the homepage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>2. What Is a Cookie?</h2>
            <p className={p}>
              A cookie is a small text file stored in your browser. Necessary cookies support core site functions such as
              authentication and security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>3. Cookies We Use</h2>
            <div className="rounded-[10px] bg-surface-2 p-4">
              <p className="m-0 text-[14px] text-body">
                <strong className="text-ink">Essential Session Cookie</strong> (first-party)
              </p>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-[14px] leading-[1.6] text-body">
                <li><strong className="text-ink">Purpose:</strong> Maintain your login session and protect against unauthorized access.</li>
                <li><strong className="text-ink">Data:</strong> Session identifier (e.g., a token or key). No cross-site tracking.</li>
                <li><strong className="text-ink">Duration:</strong> Lasts for your session (or short-lived as required for security).</li>
                <li><strong className="text-ink">Sharing:</strong> Not shared with third parties.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className={h2}>4. Your Choices</h2>
            <p className={p}>
              You can block or delete cookies in your browser settings. Blocking the essential session cookie may prevent
              you from signing in or accessing secure areas of the site.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Updates</h2>
            <p className={p}>
              We may update this page as our practices or requirements change. The effective date will reflect the latest
              version.
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
