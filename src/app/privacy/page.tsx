'use client';

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Engineering Economics, Inc. (EEI) Privacy Statement</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground mb-4">
                This privacy statement (&ldquo;statement&rdquo;) will help you understand how EEI (&ldquo;us&rdquo;) (&ldquo;we&rdquo;) (&ldquo;our&rdquo;) uses and protects the data 
                you provide to us when you visit and use eeiengineers.com (&ldquo;website&rdquo;) (&ldquo;service&rdquo;).
              </p>
              <p className="text-muted-foreground mb-4">
                We reserve the right to change this statement at any given time at our discretion. Visit this page frequently for updates 
                to this statement. By using our website, you acknowledge you have read this privacy statement and consent to our data 
                practices and terms and conditions. Please do not use our website if you do not consent to this statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of This Website</h2>
              <p className="text-muted-foreground mb-4">
                You expressly agree that the use of our website is at your own risk. EEI provides our website as a service to the public. 
                EEI is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, 
                or reliance on any information contained within this website.
              </p>
              <p className="text-muted-foreground mb-4">
                While the information contained within this website is periodically updated, no guarantee is given that the information 
                provided on this website is correct, complete, and up to date.
              </p>
              <p className="text-muted-foreground mb-4">
                Although our website may include links providing direct access to other Internet resources, including websites, EEI is not 
                responsible for the accuracy or content of information contained on these sites.
              </p>
              <p className="text-muted-foreground mb-4">
                Links from EEI to third-party sites do not constitute an endorsement by us of the parties or their products and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Data We Collect</h2>
              <p className="text-muted-foreground mb-4">
                You can use our website without providing any personal information. We do not collect personal information such as name, 
                phone number, email address, etc. unless you submit the information during normal website usage. When you visit our website, 
                we may automatically collect the following information for website statistics and activity to improve and maintain the 
                quality of our website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Your IP address</li>
                <li>Browser types</li>
                <li>Domain names</li>
                <li>Referring website addresses</li>
                <li>Data profile regarding your online behavior on our website</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                If you use our Contact Us form, newsletter subscription form, or apply for any jobs on our website, we will collect the 
                contact information and personal details you voluntarily submit to us. We do not sell, rent or lease any collected personal 
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Links to Other Sites</h2>
              <p className="text-muted-foreground mb-4">
                Our website contains links to other websites. If you use these links, you do so at your own risk. Any website you visit 
                through links is outside our service and beyond our control. Linked sites have their own cookies, privacy statements, 
                data collection policies, etc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions regarding our privacy statement, please contact us at{' '}
                <a href="mailto:info@eeiengineers.com" className="text-primary hover:underline">info@eeiengineers.com</a>.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-center">
                ©2025 Engineering Economics, Inc.
              </p>
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