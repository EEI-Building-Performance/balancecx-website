'use client';

import Image from "next/image";
import Link from "next/link";

export default function Support() {
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground">
              Resources and assistance to help you get the most from BalanceCx
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="https://eei.balancecx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary transition-colors"
            >
              <div className="text-primary text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Customer Portal</h3>
              <p className="text-muted-foreground mb-4">
                Access your BalanceCx dashboard and analytics
              </p>
              <span className="text-primary font-medium">Login →</span>
            </a>

            <a 
              href="/Analytics Services Overview (2).pdf"
              download
              className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary transition-colors"
            >
              <div className="text-primary text-3xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Download our overview brochure and guides
              </p>
              <span className="text-primary font-medium">Download PDF →</span>
            </a>

            <a 
              href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary transition-colors"
            >
              <div className="text-primary text-3xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Schedule Training</h3>
              <p className="text-muted-foreground mb-4">
                Book a personalized training session
              </p>
              <span className="text-primary font-medium">Book Session →</span>
            </a>
          </div>

          {/* Support Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-card-foreground mb-6">Getting Started</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Initial Setup</h3>
                    <p className="text-muted-foreground">Configure your building systems and connect data sources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Dashboard Overview</h3>
                    <p className="text-muted-foreground">Navigate analytics dashboards and customize views</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">FDD Configuration</h3>
                    <p className="text-muted-foreground">Set up fault detection rules and alert thresholds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Report Generation</h3>
                    <p className="text-muted-foreground">Create and schedule automated performance reports</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-card-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold text-card-foreground cursor-pointer hover:text-primary">
                    How do I connect my BAS to BalanceCx?
                  </summary>
                  <p className="text-muted-foreground mt-2 pl-4">
                    BalanceCx supports multiple connectivity options including EEI Data Gateway, Novant, and direct BAS exports. Contact support for setup assistance.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-card-foreground cursor-pointer hover:text-primary">
                    What building systems can BalanceCx monitor?
                  </summary>
                  <p className="text-muted-foreground mt-2 pl-4">
                    We monitor HVAC, lighting, electrical, plumbing, fire/life safety, access control, and IoT devices across all major BAS platforms.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-card-foreground cursor-pointer hover:text-primary">
                    How quickly can I see results?
                  </summary>
                  <p className="text-muted-foreground mt-2 pl-4">
                    Most clients see actionable insights within 24 hours of data connection. Energy savings and performance improvements typically begin within 30 days.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-card-foreground cursor-pointer hover:text-primary">
                    Is BalanceCx suitable for my building size?
                  </summary>
                  <p className="text-muted-foreground mt-2 pl-4">
                    BalanceCx scales from single buildings to entire portfolios. We serve facilities from 50,000 to millions of square feet.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Need Additional Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you with technical questions, training, and optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Support
              </Link>
              <a 
                href="mailto:support@balancecx.com"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Email: support@balancecx.com
              </a>
            </div>
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
                <li><Link href="/#highlighted-features" className="hover:text-card-foreground transition-colors">Integrations</Link></li>
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
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BalanceCx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}