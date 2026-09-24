import type { Metadata } from "next";
import PageShell, { BulletList, Check, CtaBand, Eyebrow, PageHero, Prose, SectionTitle } from "@/components/PageShell";
import { BOOKING_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About — BalanceCx",
  description:
    "BalanceCx is EEI's building performance analytics platform: fault detection, automated functional testing, and AI-ready data across the building lifecycle.",
};

const WHY = [
  {
    title: "Proven Results",
    body: "Average 30% reduction in energy costs and 40% decrease in equipment downtime.",
  },
  {
    title: "Easy Integration",
    body: "Works with your existing BAS, IoT devices, and building systems.",
  },
  {
    title: "AI-Ready Platform",
    body: "Structured data optimized for next-generation analytics and automation.",
  },
  {
    title: "Expert Support",
    body: "Dedicated team of building performance engineers and data scientists.",
  },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About BalanceCx"
        title={
          <>
            Turning reactive maintenance into <span className="text-mint">proactive operations</span>
          </>
        }
        lede="Built by EEI's building performance engineers, BalanceCx gives owners, engineers, and facility teams actionable intelligence across the entire lifecycle of a building."
      />

      <section className="px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <SectionTitle>Actionable intelligence for every building</SectionTitle>
            <Prose>
              <p className="m-0">
                BalanceCx is revolutionizing building performance optimization through cutting-edge analytics and
                fault detection diagnostics. We empower facility managers, engineers, and building owners with
                actionable intelligence to transform reactive maintenance into proactive operations.
              </p>
            </Prose>
          </div>
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <SectionTitle>One platform, the full service life</SectionTitle>
            <Prose>
              <p className="m-0">
                Our platform continuously monitors building systems, equipment, and IoT devices to identify
                optimization opportunities, predict failures, and ensure peak performance. From new construction
                commissioning to ongoing facility operations, BalanceCx provides the tools you need for:
              </p>
            </Prose>
            <div className="mt-5">
              <BulletList
                items={[
                  "Real-time Fault Detection and Diagnostics (FDD)",
                  "Automated Building Commissioning (MBCx)",
                  "Predictive and Condition-Based Maintenance",
                  "Energy Optimization and Sustainability Reporting",
                  "Indoor Environmental Quality Management",
                  "Equipment Reliability Monitoring",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface-2 px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-7 max-w-[640px] lg:mb-9">
            <Eyebrow>Why BalanceCx</Eyebrow>
            <SectionTitle>Why teams choose BalanceCx</SectionTitle>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="flex items-start gap-4 rounded-[14px] border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)] lg:p-6"
              >
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-mint-100">
                  <Check size={18} />
                </div>
                <div>
                  <h3 className="m-0 mb-[6px] font-display text-[17px] font-bold leading-[1.25] text-ink">{w.title}</h3>
                  <p className="m-0 text-[14.5px] leading-[1.6] text-body">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <CtaBand
            title="See BalanceCx on your buildings"
            body="Walk through the platform with an EEI engineer and see how it fits your projects, portfolio, or operations."
            href={BOOKING_URL}
            label="Schedule a Demo →"
          />
        </div>
      </section>
    </PageShell>
  );
}
