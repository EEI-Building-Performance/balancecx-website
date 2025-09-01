'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % 3);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            src="/BalanceCx Logo - Black.png"
            alt="BalanceCx Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Features</a>
            <a href="#industries" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Industries</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Case Studies</a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Pricing</a>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-0 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Data Tools for Building Champions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BalanceCx analytics makes it easier than ever for building champions to diagnose issues on HVAC, Electrical, Metering, and Lighting equipment and OT networks.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="features" className="relative bg-muted/30">
        {/* Persistent Use Case Tabs */}
        <div className="py-6 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Use Cases
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analytics solutions for every phase of your building&apos;s lifecycle
              </p>
            </div>
            
            {/* Use Case Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => setActiveUseCase(0)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  activeUseCase === 0
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="text-left">
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    New Construction
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Purpose-built analytics for construction commissioning with 100% system validation
                  </p>
                </div>
              </button>
              
              <button
                onClick={() => setActiveUseCase(1)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  activeUseCase === 1
                    ? 'border-secondary bg-secondary/10'
                    : 'border-border bg-card hover:border-secondary/50'
                }`}
              >
                <div className="text-left">
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Monitoring Based Commissioning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Non-invasive performance optimization for existing buildings
                  </p>
                </div>
              </button>
              
              <button
                onClick={() => setActiveUseCase(2)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  activeUseCase === 2
                    ? 'border-accent bg-accent/10'
                    : 'border-border bg-card hover:border-accent/50'
                }`}
              >
                <div className="text-left">
                  <h3 className="font-semibold text-base text-card-foreground mb-1">
                    Facility Operations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Long-term monitoring for proactive maintenance and cost savings
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Detailed Use Case Carousel */}
        <div className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 min-h-[600px]">
            {/* New Construction */}
            <div className={`absolute inset-0 px-6 lg:px-8 py-10 transition-opacity duration-700 ${
              activeUseCase === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    New Construction Project Analytics
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    The only analytics platform purpose-built for the construction process. Accelerate project delivery and ensure quality from day one.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">100% Digital Testing:</strong> Validate every piece of equipment, not just samples</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Controls Readiness:</strong> Real-time visibility into device status and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Warranty Protection:</strong> Reduce callbacks by catching issues before handover</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Seamless Integration:</strong> Works with CxAlloy, Smartsheet, and project tools</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">AFT Testing</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">LEED Compliance</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">First Year Support</span>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4">100%</div>
                    <p className="text-xl text-foreground font-semibold mb-2">System Coverage</p>
                    <p className="text-muted-foreground">Unlike traditional sampling, test every single piece of equipment</p>
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-foreground">75%</div>
                          <div className="text-sm text-muted-foreground">Faster Issue Resolution</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">50%</div>
                          <div className="text-sm text-muted-foreground">Reduced Callbacks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Monitoring Based Commissioning */}
            <div className={`absolute inset-0 px-6 lg:px-8 py-10 transition-opacity duration-700 ${
              activeUseCase === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-secondary rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Monitoring Based Commissioning
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Transform existing building performance without disruption. Our MBCx platform delivers immediate insights and continuous optimization.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Non-Invasive Analysis:</strong> No destructive testing or system downtime required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">FDD Library:</strong> Proven fault detection algorithms refined since 2015</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Energy Savings:</strong> Identify and quantify conservation opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">M&V Platform:</strong> Validate and track performance improvements</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">Energy Analytics</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">FDD</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">Retro-Cx</span>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-secondary mb-4">30%</div>
                    <p className="text-xl text-foreground font-semibold mb-2">Average Energy Savings</p>
                    <p className="text-muted-foreground">Typical reduction in energy consumption through optimization</p>
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-foreground">24/7</div>
                          <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">2-3 yr</div>
                          <div className="text-sm text-muted-foreground">Typical ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Facility Operations */}
            <div className={`absolute inset-0 px-6 lg:px-8 py-10 transition-opacity duration-700 ${
              activeUseCase === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Facility Operations Platform
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Your building&apos;s command center. Proactive monitoring and intelligent alerts keep your facility running at peak performance year-round.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Predictive Maintenance:</strong> Catch issues before they become failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Weekly Reports:</strong> Automated summaries keep teams informed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Performance Tracking:</strong> Monitor KPIs and efficiency trends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3">✓</span>
                      <span className="text-muted-foreground"><strong className="text-foreground">Cost Prevention:</strong> Avoid expensive emergency repairs</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">24/7 Monitoring</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">Alert Management</span>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">Reporting</span>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent mb-4">40%</div>
                    <p className="text-xl text-foreground font-semibold mb-2">Reduction in Downtime</p>
                    <p className="text-muted-foreground">Average decrease in equipment failures and system outages</p>
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-foreground">60%</div>
                          <div className="text-sm text-muted-foreground">Faster Response Time</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">25%</div>
                          <div className="text-sm text-muted-foreground">Lower O&M Costs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeUseCase === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Highlighted Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unique capabilities that set BalanceCx apart from traditional analytics platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Conduit Feature */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="mb-6">
                {/* Placeholder for image - replace with actual image when available */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">AI Connector</p>
                  </div>
                </div>
                {/* When image is available, use:
                <Image
                  src="/balanceCx_aiConnector.png"
                  alt="BalanceCx AI Connector"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                */}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Your Building&apos;s AI Conduit
              </h3>
              <p className="text-muted-foreground">
                BalanceCx captures and structures your building&apos;s data so it is easiest to understand when sent to AI tools. Transform raw building data into AI-ready insights for next-generation analytics and automation.
              </p>
            </div>
            
            {/* Controls Validation Feature */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">Scope Validation</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Controls Installation & Retrofit Scope Validation
              </h3>
              <p className="text-muted-foreground">
                BalanceCx Automated Functional Testing incorporates actual design documents and submittals, validating to your specific project. We verify the exact points list and sequence of operations expected, not generic analytics vendor preferences or FDD algorithms.
              </p>
            </div>
            
            {/* Network View Feature */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">Network Analytics</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Your View Into Your Network
              </h3>
              <p className="text-muted-foreground">
                The EEI Data Gateway brings users an unmatched view into their controls system network performance and BACnet/Modbus device performance. Instantly troubleshoot slow controls networks with one platform, replacing multiple vendor tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section id="industries" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From healthcare to education, aviation to government facilities - BalanceCx delivers results
            </p>
          </div>
          
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {/* Healthcare */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2l2-9 2 13 2-6h2m2 0h2l2-5 2 12 2-7h2" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Healthcare</h3>
            </div>
            
            {/* Education */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Education</h3>
            </div>
            
            {/* Aviation */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16l-4-4V7a2 2 0 00-2-2H9a2 2 0 00-2 2v5l-4 4m14 0v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m14 0H7" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Aviation</h3>
            </div>
            
            {/* Government */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Government</h3>
            </div>
            
            {/* Commercial */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Commercial</h3>
            </div>
            
            {/* Industrial */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Industrial</h3>
            </div>
            
            {/* Retail */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Retail</h3>
            </div>
            
            {/* Mission Critical */}
            <div className="p-2">
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground">Mission Critical</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proven Results & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Award-winning platform trusted by industry leaders for mission-critical facility operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="font-semibold text-card-foreground">United States Postal Service</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;BalanceCx FDD platform transformed our EV charging infrastructure operations, delivering 30% energy savings through proactive maintenance and real-time equipment monitoring.&rdquo;
              </p>
              <div className="text-sm text-primary font-medium">Nationwide Infrastructure Optimization</div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <h3 className="font-semibold text-card-foreground">Washington & Lee University</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;Indoor environmental quality improved 40% across campus with BalanceCx actionable intelligence and automated KPI tracking for all building systems.&rdquo;
              </p>
              <div className="text-sm text-secondary font-medium">Campus-Wide Performance Excellence</div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h3 className="font-semibold text-card-foreground">Ohio State Wexner Medical Center</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;Mission-critical healthcare operations rely on BalanceCx condition-based maintenance and 24/7 equipment reliability monitoring for patient safety.&rdquo;
              </p>
              <div className="text-sm text-accent font-medium">Healthcare Facility Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 mint-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Reactive to Proactive Operations
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 10,000+ buildings worldwide using BalanceCx FDD platform for actionable intelligence and equipment reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

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
                Cloud-based analytics platform for building performance optimization, commissioning, and facility operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-card-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-card-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">Support</a></li>
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
