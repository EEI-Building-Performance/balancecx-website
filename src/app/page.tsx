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
              Transform reactive operations into proactive intelligence. BalanceCx delivers actionable insights from IoT data, helping commissioning agents, facility managers, and energy teams optimize performance across <span className="text-primary font-semibold">10,000+ buildings</span> worldwide.
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
                Comprehensive analytics solutions for every phase of your building's lifecycle
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
                    Your building's command center. Proactive monitoring and intelligent alerts keep your facility running at peak performance year-round.
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

      {/* Industry Use Cases */}
      <section id="industries" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From healthcare to education, aviation to government facilities - BalanceCx delivers results
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center mb-8">
              <div className="bg-muted/50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Buildings Optimized</div>
              </div>
              <div className="bg-muted/50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">Sq Ft Monitored</div>
              </div>
              <div className="bg-muted/50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="bg-muted/50 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Real-Time Analytics</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Healthcare', 'Education', 'Aviation', 'Government', 'Commercial', 'Industrial', 'Retail', 'Hospitality'].map((industry) => (
              <div key={industry} className="p-6">
                <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="font-semibold text-foreground">{industry}</h3>
              </div>
            ))}
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
                "BalanceCx FDD platform transformed our EV charging infrastructure operations, delivering 30% energy savings through proactive maintenance and real-time equipment monitoring."
              </p>
              <div className="text-sm text-primary font-medium">Nationwide Infrastructure Optimization</div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <h3 className="font-semibold text-card-foreground">Washington & Lee University</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                "Indoor environmental quality improved 40% across campus with BalanceCx actionable intelligence and automated KPI tracking for all building systems."
              </p>
              <div className="text-sm text-secondary font-medium">Campus-Wide Performance Excellence</div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h3 className="font-semibold text-card-foreground">Ohio State Wexner Medical Center</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                "Mission-critical healthcare operations rely on BalanceCx condition-based maintenance and 24/7 equipment reliability monitoring for patient safety."
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
