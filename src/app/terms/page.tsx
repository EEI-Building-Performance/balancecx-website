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
          <h1 className="text-4xl font-bold text-foreground mb-4">BalanceCx – Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Effective Date: September 16, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground mb-4">
                Welcome to BalanceCx, a product of Engineering Economics, Inc. (EEI). By accessing or using our website, platform, and related services (collectively, the &ldquo;Services&rdquo;), you agree to these Terms &amp; Conditions (&ldquo;Terms&rdquo;). Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Use of Services</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>You must be at least 18 years old and authorized to act on behalf of your organization.</li>
                <li>You agree to use the Services only for lawful purposes and in accordance with these Terms.</li>
                <li>You may not attempt to disrupt, reverse engineer, or gain unauthorized access to our systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Accounts and Security</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You agree to notify us immediately if you suspect any unauthorized use of your account.</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms or compromise security.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>All content, software, analytics, designs, and trademarks provided through the Services are the property of BalanceCx or our licensors.</li>
                <li>You are granted a limited, non-exclusive, non-transferable license to use the Services for your organization&rsquo;s internal purposes.</li>
                <li>You may not copy, modify, or distribute our intellectual property without prior written consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data and Privacy</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Our collection and use of personal information is described in our <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Policy</Link>.</li>
                <li>By using the Services, you consent to those practices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Service Availability</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>We strive to keep our Services available and reliable, but we do not guarantee uninterrupted access.</li>
                <li>We may modify, suspend, or discontinue parts of the Services at any time without notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimers and Limitation of Liability</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, express or implied.</li>
                <li>To the maximum extent permitted by law, BalanceCx is not liable for indirect, incidental, or consequential damages arising from your use of the Services.</li>
                <li>Our total liability for any claim will not exceed the amount paid by you (if any) for access to the Services in the twelve months prior to the claim.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground mb-4">These Terms are governed by the laws of the State of Colorado, without regard to conflict of laws principles.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>We may update these Terms from time to time. When we do, we will post the revised version with an updated effective date.</li>
                <li>Your continued use of the Services after changes take effect constitutes your acceptance of the updated Terms.</li>
              </ul>
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