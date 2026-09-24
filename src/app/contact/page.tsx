import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageShell, { ArrowLink, PageHero } from "@/components/PageShell";
import { BOOKING_URL, CONTACT_EMAIL, LOGIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact — BalanceCx",
  description: "Get in touch with the BalanceCx team at EEI. Email us, book a demo, or reach your support representative.",
};

function Icon({ d }: { d: string }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5CE8C8"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

function ContactCard({
  icon,
  title,
  children,
  action,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  action: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[14px] border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,24,28,0.10)] lg:p-7">
      <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-ink">{icon}</div>
      <h2 className="m-0 mb-2 font-display text-[19px] font-bold leading-[1.2] text-ink">{title}</h2>
      <p className="m-0 mb-5 text-[14.5px] leading-[1.6] text-body">{children}</p>
      <div className="mt-auto border-t border-line-soft pt-4">{action}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Ready to transform your <span className="text-mint">building operations?</span>
          </>
        }
        lede="Get in touch with our team. We typically respond within one business day."
      />

      <section className="px-6 py-11 lg:px-12 lg:py-[72px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-3">
          <ContactCard
            icon={<Icon d='<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>' />}
            title="Email"
            action={<ArrowLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</ArrowLink>}
          >
            Questions about the platform, pricing, or a specific project. Send us a note and we&apos;ll follow up.
          </ContactCard>

          <ContactCard
            icon={<Icon d='<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>' />}
            title="Schedule a Demo"
            action={
              <ArrowLink href={BOOKING_URL} external>
                Book a demo
              </ArrowLink>
            }
          >
            See BalanceCx in action with a personalized walkthrough from an EEI building performance engineer.
          </ContactCard>

          <ContactCard
            icon={<Icon d='<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>' />}
            title="Support"
            action={
              <ArrowLink href={LOGIN_URL} external>
                Log in for documentation
              </ArrowLink>
            }
          >
            Existing customers can review the documentation when logged in, contact their EEI Building Performance
            representative, or book a meeting with us using the demo link.
          </ContactCard>
        </div>
      </section>
    </PageShell>
  );
}
