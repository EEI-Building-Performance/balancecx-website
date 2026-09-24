import type { Metadata } from "next";
import PageShell, { Eyebrow, PageHero, SectionTitle } from "@/components/PageShell";
import { BOOKING_URL, LOGIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Support — BalanceCx",
  description: "Resources, documentation, training, and answers to common questions about the BalanceCx platform.",
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I connect my BAS to BalanceCx?",
    a: "BalanceCx supports multiple connectivity options including EEI Data Gateway, Novant, and direct BAS exports. Contact support for setup assistance.",
  },
  {
    q: "What building systems can BalanceCx monitor?",
    a: "We monitor HVAC, lighting, electrical, plumbing, fire/life safety, access control, and IoT devices across all major BAS platforms.",
  },
  {
    q: "How quickly can I see results?",
    a: "Most clients see actionable insights within 24 hours of data connection. Energy savings and performance improvements typically begin within 30 days.",
  },
  {
    q: "Is BalanceCx suitable for my building size?",
    a: "BalanceCx scales from single buildings to entire portfolios. We serve facilities from 50,000 to millions of square feet.",
  },
  {
    q: "Can BalanceCx work offline?",
    a: "Yes, BalanceCx has a fully functional offline version that can operate independently without internet connectivity, ensuring continuous monitoring and analytics.",
  },
  {
    q: "What types of reports can I generate?",
    a: "Generate energy consumption reports, FDD summaries, equipment performance analytics, comfort analysis, maintenance logs, and custom reports tailored to your needs.",
  },
  {
    q: "How does BalanceCx help with energy savings?",
    a: "Our platform identifies inefficiencies, recommends optimization strategies, and tracks improvements. Most clients achieve 15-30% energy cost reduction within the first year.",
  },
  {
    q: "What support is available during implementation?",
    a: "We provide dedicated implementation support including system configuration, data mapping, training sessions, and ongoing technical assistance from our engineering team.",
  },
  {
    q: "Can I integrate BalanceCx with my existing work order system?",
    a: "Yes, BalanceCx offers API integrations with popular CMMS and work order systems, enabling automated ticket creation and bidirectional data synchronization.",
  },
];

function QuickAction({
  href,
  icon,
  title,
  body,
  cta,
}: {
  href: string;
  icon: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-[14px] border border-line bg-white p-5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)] lg:p-6"
    >
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-ink">
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5CE8C8"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <div className="min-w-0">
        <h3 className="m-0 mb-1 font-display text-[18px] font-bold leading-[1.25] text-ink">{title}</h3>
        <p className="m-0 mb-3 text-[14.5px] leading-[1.6] text-body">{body}</p>
        <span className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-mint-600">
          {cta}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function Support() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Support Center"
        title={
          <>
            Get the most from <span className="text-mint">BalanceCx</span>
          </>
        }
        lede="Documentation, training, and answers to the questions we hear most from owners, engineers, and facility teams."
      />

      <section className="px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <QuickAction
              href={LOGIN_URL}
              icon='<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>'
              title="Documentation"
              body="Log in to the platform and open the Documentation link from the main menu."
              cta="Log In"
            />
            <QuickAction
              href={BOOKING_URL}
              icon='<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'
              title="Schedule Training"
              body="Book a personalized training session with an EEI building performance engineer."
              cta="Book Session"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface-2 px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <SectionTitle>Frequently asked questions</SectionTitle>
              <p className="m-0 text-[14.5px] leading-[1.6] text-body">
                Can&apos;t find what you need? Reach out through the{" "}
                <a href="/contact" className="font-semibold text-mint-600 no-underline hover:text-accent">
                  contact page
                </a>
                .
              </p>
            </div>
            <div className="overflow-hidden rounded-[14px] border border-line bg-white">
              {FAQ.map((f) => (
                <details key={f.q} className="group border-b border-line-soft last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-[18px] text-[15px] font-semibold leading-[1.4] text-ink transition-colors hover:bg-surface-2 [&::-webkit-details-marker]:hidden lg:px-6">
                    {f.q}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16A88A"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="m-0 px-5 pb-5 text-[14.5px] leading-[1.65] text-body lg:px-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
