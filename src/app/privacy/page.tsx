import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Statement — BalanceCx",
  description: "How Engineering Economics, Inc. (EEI) uses and protects the data you provide when you visit and use our website.",
};

const h2 = "m-0 mb-3 font-display text-[22px] font-bold text-ink";
const p = "m-0 mb-4 text-[15.5px] leading-[1.65] text-body";

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <div className="px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[800px]">
          <h1 className="m-0 mb-8 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink lg:text-[38px]">
            Engineering Economics, Inc. (EEI) Privacy Statement
          </h1>

          <section className="mb-10">
            <p className={p}>
              This privacy statement (&ldquo;statement&rdquo;) will help you understand how EEI (&ldquo;us&rdquo;)
              (&ldquo;we&rdquo;) (&ldquo;our&rdquo;) uses and protects the data you provide to us when you visit and use
              eeiengineers.com (&ldquo;website&rdquo;) (&ldquo;service&rdquo;).
            </p>
            <p className={p}>
              We reserve the right to change this statement at any given time at our discretion. Visit this page
              frequently for updates to this statement. By using our website, you acknowledge you have read this privacy
              statement and consent to our data practices and terms and conditions. Please do not use our website if you
              do not consent to this statement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>Use of This Website</h2>
            <p className={p}>
              You expressly agree that the use of our website is at your own risk. EEI provides our website as a service
              to the public. EEI is not responsible for, and expressly disclaims all liability for, damages of any kind
              arising out of use, reference to, or reliance on any information contained within this website.
            </p>
            <p className={p}>
              While the information contained within this website is periodically updated, no guarantee is given that
              the information provided on this website is correct, complete, and up to date.
            </p>
            <p className={p}>
              Although our website may include links providing direct access to other Internet resources, including
              websites, EEI is not responsible for the accuracy or content of information contained on these sites.
            </p>
            <p className={p}>
              Links from EEI to third-party sites do not constitute an endorsement by us of the parties or their products
              and services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>What Data We Collect</h2>
            <p className={p}>
              You can use our website without providing any personal information. We do not collect personal information
              such as name, phone number, email address, etc. unless you submit the information during normal website
              usage. When you visit our website, we may automatically collect the following information for website
              statistics and activity to improve and maintain the quality of our website:
            </p>
            <ul className="mb-4 ml-5 list-disc space-y-2 text-[15.5px] leading-[1.65] text-body">
              <li>Your IP address</li>
              <li>Browser types</li>
              <li>Domain names</li>
              <li>Referring website addresses</li>
              <li>Data profile regarding your online behavior on our website</li>
            </ul>
            <p className={p}>
              If you use our Contact Us form, newsletter subscription form, or apply for any jobs on our website, we will
              collect the contact information and personal details you voluntarily submit to us. We do not sell, rent or
              lease any collected personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>Links to Other Sites</h2>
            <p className={p}>
              Our website contains links to other websites. If you use these links, you do so at your own risk. Any
              website you visit through links is outside our service and beyond our control. Linked sites have their own
              cookies, privacy statements, data collection policies, etc.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={h2}>Contact Information</h2>
            <p className={p}>
              If you have any questions regarding our privacy statement, please contact us at{" "}
              <a href="mailto:info@eeiengineers.com" className="font-medium text-mint-600 hover:underline">
                info@eeiengineers.com
              </a>
              .
            </p>
          </section>

          <p className="m-0 border-t border-line pt-6 text-center text-[14px] text-muted-ink">
            ©2026 Engineering Economics, Inc.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
