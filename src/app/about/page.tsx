'use client';

import Image from "next/image";
import Link from "next/link";

export default function About() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">About BalanceCx</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                BalanceCx is revolutionizing building performance optimization through cutting-edge analytics and fault detection diagnostics. 
                We empower facility managers, engineers, and building owners with actionable intelligence to transform reactive maintenance 
                into proactive operations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground mb-6">
                Our cloud-based platform continuously monitors building systems, equipment, and IoT devices to identify optimization 
                opportunities, predict failures, and ensure peak performance. From new construction commissioning to ongoing facility 
                operations, BalanceCx provides the tools you need for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Real-time Fault Detection and Diagnostics (FDD)</li>
                <li>Automated Building Commissioning (MBCx)</li>
                <li>Predictive and Condition-Based Maintenance</li>
                <li>Energy Optimization and Sustainability Reporting</li>
                <li>Indoor Environmental Quality Management</li>
                <li>Equipment Reliability Monitoring</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Industries We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">Healthcare</h3>
                  <p className="text-muted-foreground">Critical environments requiring 24/7 reliability and compliance</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">Higher Education</h3>
                  <p className="text-muted-foreground">Campus-wide optimization for sustainability and comfort</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">Commercial Real Estate</h3>
                  <p className="text-muted-foreground">Maximizing tenant satisfaction and operational efficiency</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">Mission Critical</h3>
                  <p className="text-muted-foreground">Data centers and facilities requiring maximum uptime</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose BalanceCx</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Proven Results</h3>
                    <p className="text-muted-foreground">Average 30% reduction in energy costs and 40% decrease in equipment downtime</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Easy Integration</h3>
                    <p className="text-muted-foreground">Works with your existing BAS, IoT devices, and building systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">AI-Ready Platform</h3>
                    <p className="text-muted-foreground">Structured data optimized for next-generation analytics and automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Support</h3>
                    <p className="text-muted-foreground">Dedicated team of building performance engineers and data scientists</p>
                  </div>
                </div>
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