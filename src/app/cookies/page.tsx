'use client';

import Image from "next/image";
import Link from "next/link";

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: January 1, 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This Cookie Policy explains how BalanceCx ("we," "our," or "us") uses cookies and similar tracking technologies when 
                you visit our website and use our building analytics platform (collectively, our "Services"). This policy describes what 
                these technologies are, why we use them, and your rights to control our use of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used by website 
                owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-muted-foreground mb-4">
                Cookies set by the website owner (in this case, BalanceCx) are called "first-party cookies." Cookies set by parties other 
                than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality 
                to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are strictly necessary to provide you with services available through our Services and to use some of its 
                features, such as access to secure areas. Without these cookies, services you have asked for cannot be provided.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Session management cookies for logged-in users</li>
                  <li>Security cookies for authentication</li>
                  <li>Load balancing cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies collect information about how visitors use our Services, such as which pages visitors go to most often and 
                if they get error messages from web pages. These cookies don't collect information that identifies individual visitors. 
                All information these cookies collect is aggregated and anonymous.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Google Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                  <li>Error tracking cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Functionality Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by 
                third-party providers whose services we have added to our pages.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Language preference cookies</li>
                  <li>User interface customization cookies</li>
                  <li>Remember me cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.4 Targeting/Advertising Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a 
                profile of your interests and show you relevant advertisements on other sites.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Retargeting cookies</li>
                  <li>Social media cookies</li>
                  <li>Marketing campaign tracking cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Authentication:</strong> To identify you when you sign in to our Services</li>
                <li><strong>Security:</strong> To protect your data and prevent fraud</li>
                <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                <li><strong>Analytics:</strong> To understand how our Services are being used and improve them</li>
                <li><strong>Marketing:</strong> To deliver relevant advertisements and measure their effectiveness</li>
                <li><strong>Performance:</strong> To monitor site performance and identify issues</li>
                <li><strong>Features:</strong> To provide enhanced functionality and personalization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Services, 
                deliver advertisements on and through the Services, and so on. These third parties include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Microsoft Clarity:</strong> For user behavior analytics</li>
                <li><strong>LinkedIn Insights:</strong> For professional networking and B2B marketing</li>
                <li><strong>HubSpot:</strong> For marketing automation and customer relationship management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie Duration</h2>
              <p className="text-muted-foreground mb-4">Cookies can be either "session" cookies or "persistent" cookies:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                The specific duration of each cookie we use is detailed in our cookie consent tool, which you can access at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Cookie Choices</h2>
              <p className="text-muted-foreground mb-4">You have several options for managing cookies:</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Cookie Consent Tool</h3>
              <p className="text-muted-foreground mb-4">
                When you first visit our website, you will see a cookie banner that allows you to accept or reject different categories 
                of cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Notify you when you receive a cookie</li>
                <li>Block first-party cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">7.3 Opt-Out Links</h3>
              <p className="text-muted-foreground mb-4">
                You can opt out of certain third-party cookies through the following links:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
                <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" className="text-primary hover:underline">https://optout.networkadvertising.org/</a></li>
                <li>Digital Advertising Alliance: <a href="https://optout.aboutads.info/" className="text-primary hover:underline">https://optout.aboutads.info/</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Do Not Track Signals</h2>
              <p className="text-muted-foreground mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online 
                activity tracked. Currently, there is no universal standard for how websites should respond to DNT signals. Therefore, 
                our Services do not currently respond to DNT signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Please note that if you choose to block or delete cookies, some features of our Services may not work properly or may not 
                be accessible to you. For example:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>You may not be able to log in to your account</li>
                <li>Your preferences may not be saved</li>
                <li>Some interactive features may not function</li>
                <li>You may see less relevant content and advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, 
                or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and 
                updating the "Effective Date" above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about our use of cookies or other tracking technologies, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">BalanceCx</p>
                <p className="text-muted-foreground">Email: privacy@balancecx.com</p>
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