'use client';

import Image from "next/image";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="py-6 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/BalanceCx Logo - Black.png"
              alt="BalanceCx Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#highlighted-features" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Features</Link>
            <Link href="/#industries" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Industries</Link>
            <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Case Studies</Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Pricing</Link>
            <a 
              href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Schedule Demo
            </a>
            <a 
              href="https://eei.balancecx.com/#/signIn" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-muted transition-colors text-base"
            >
              Log In
            </a>
          </nav>
        </div>
      </header>

      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Effective Date: January 1, 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                These Terms and Conditions ("Terms") govern your use of the BalanceCx building analytics platform and related services 
                (collectively, the "Services") operated by BalanceCx ("we," "our," or "us"). By accessing or using our Services, you agree 
                to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground mb-4">
                BalanceCx provides a cloud-based building analytics platform that includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Real-time monitoring and analysis of building systems</li>
                <li>Fault detection and diagnostics (FDD)</li>
                <li>Energy optimization and reporting</li>
                <li>Automated commissioning tools</li>
                <li>Predictive maintenance capabilities</li>
                <li>Integration with building automation systems</li>
                <li>Data visualization and reporting dashboards</li>
                <li>Alert and notification systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                To access certain features of the Services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Account Restrictions</h3>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old and have the legal authority to enter into these Terms. You may not use another person's 
                account without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Subscription and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Subscription Plans</h3>
              <p className="text-muted-foreground mb-4">
                We offer various subscription plans for our Services. The specific features, limitations, and pricing for each plan are 
                described on our pricing page and in your subscription agreement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Billing and Payment</h3>
              <p className="text-muted-foreground mb-4">
                By subscribing to our Services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Pay all applicable fees according to your subscription plan</li>
                <li>Provide valid payment information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Pay any applicable taxes</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Renewal and Cancellation</h3>
              <p className="text-muted-foreground mb-4">
                Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time 
                through your account settings or by contacting support. Cancellations take effect at the end of the current billing period.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.4 Refunds</h3>
              <p className="text-muted-foreground mb-4">
                Subscription fees are non-refundable except as required by law or as explicitly stated in your subscription agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Acceptable Use</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Permitted Use</h3>
              <p className="text-muted-foreground mb-4">
                You may use the Services only for lawful purposes and in accordance with these Terms. You agree to use the Services only 
                for your internal business purposes and not to resell or redistribute the Services without our written consent.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Prohibited Use</h3>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Use the Services for any unlawful purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Reverse engineer or decompile the Services</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Impersonate another person or entity</li>
                <li>Collect or harvest user data without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Our Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                The Services and all content, features, and functionality are owned by BalanceCx and are protected by international 
                copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, 
                sell, or lease any part of our Services without our written permission.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Your Data</h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of all data you submit to the Services ("Your Data"). By using the Services, you grant us a 
                worldwide, non-exclusive license to use, store, process, and analyze Your Data solely to provide and improve the Services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Feedback</h3>
              <p className="text-muted-foreground mb-4">
                Any feedback, suggestions, or ideas you provide about the Services become our property and may be used without compensation 
                or attribution to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Privacy and Security</h2>
              <p className="text-muted-foreground mb-4">
                Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                We implement reasonable security measures to protect Your Data, but cannot guarantee absolute security. You are responsible 
                for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Service Level Agreement</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Availability</h3>
              <p className="text-muted-foreground mb-4">
                We strive to maintain 99.9% uptime for the Services, excluding scheduled maintenance and circumstances beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">8.2 Support</h3>
              <p className="text-muted-foreground mb-4">
                Technical support is provided according to your subscription plan. Standard support hours are Monday-Friday, 9 AM to 5 PM 
                EST, excluding holidays.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">8.3 Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                We will provide reasonable advance notice of scheduled maintenance that may affect Service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                The Services may integrate with third-party services and APIs. Your use of these third-party services is governed by their 
                respective terms and conditions. We are not responsible for the availability, accuracy, or reliability of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Service Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING 
                BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">10.2 No Professional Advice</h3>
              <p className="text-muted-foreground mb-4">
                The Services provide data analysis and recommendations but do not constitute professional engineering, architectural, or 
                consulting advice. You should consult with qualified professionals before making decisions based on the Services' output.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BALANCECX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, 
                GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-muted-foreground mb-4">
                IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT PAID BY YOU TO BALANCECX IN THE TWELVE (12) MONTHS PRECEDING 
                THE EVENT GIVING RISE TO THE LIABILITY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless BalanceCx and its officers, directors, employees, agents, and affiliates 
                from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your Data or content submitted through the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Termination</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">13.1 Termination by You</h3>
              <p className="text-muted-foreground mb-4">
                You may terminate your account at any time by following the cancellation process in your account settings or contacting support.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">13.2 Termination by Us</h3>
              <p className="text-muted-foreground mb-4">
                We may suspend or terminate your account immediately if you breach these Terms or engage in conduct that we determine is 
                harmful to the Services, other users, or our business interests.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">13.3 Effect of Termination</h3>
              <p className="text-muted-foreground mb-4">
                Upon termination, your right to use the Services will cease immediately. We may delete Your Data according to our data 
                retention policy, though we may retain certain information as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">14.1 Governing Law</h3>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its 
                conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">14.2 Arbitration</h3>
              <p className="text-muted-foreground mb-4">
                Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the Commercial 
                Arbitration Rules of the American Arbitration Association. The arbitration shall be conducted in Delaware, and judgment 
                on the award may be entered in any court having jurisdiction.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">14.3 Class Action Waiver</h3>
              <p className="text-muted-foreground mb-4">
                You agree to bring any claims against BalanceCx only in your individual capacity and not as a plaintiff or class member 
                in any purported class or representative proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">15.1 Entire Agreement</h3>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and any subscription agreements, constitute the entire agreement between you 
                and BalanceCx regarding the Services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">15.2 Amendments</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the new Terms 
                and updating the "Effective Date." Your continued use of the Services after changes constitutes acceptance.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">15.3 Waiver and Severability</h3>
              <p className="text-muted-foreground mb-4">
                Our failure to enforce any provision of these Terms shall not constitute a waiver. If any provision is found to be 
                unenforceable, the remaining provisions shall continue in full force.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">15.4 Assignment</h3>
              <p className="text-muted-foreground mb-4">
                You may not assign or transfer these Terms without our written consent. We may assign these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">15.5 Force Majeure</h3>
              <p className="text-muted-foreground mb-4">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including 
                but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, or acts of civil or military authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">BalanceCx</p>
                <p className="text-muted-foreground">Email: legal@balancecx.com</p>
                <p className="text-muted-foreground">Phone: 1-800-BALANCE</p>
                <p className="text-muted-foreground">Address: 123 Building Analytics Way, Suite 100, Tech City, TC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/BalanceCx Logo - Black.png"
                alt="BalanceCx Logo"
                width={160}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground max-w-md">
                Analytics platform for building performance optimization, commissioning, and facility operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/#highlighted-features" className="hover:text-card-foreground transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-card-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/#integrations" className="hover:text-card-foreground transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-card-foreground transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-card-foreground transition-colors">Contact</Link></li>
                <li><Link href="/support" className="hover:text-card-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2024 BalanceCx. All rights reserved.</p>
              <div className="flex space-x-6 text-muted-foreground">
                <Link href="/privacy" className="hover:text-card-foreground transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-card-foreground transition-colors">Cookie Policy</Link>
                <Link href="/terms" className="hover:text-card-foreground transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}