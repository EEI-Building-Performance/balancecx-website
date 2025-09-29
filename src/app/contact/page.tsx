import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your building operations? Get in touch with our team.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Information - Centered */}
            <div className="w-full max-w-xl">
              <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-6">Get in touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                    <a href="mailto:btalbot@eeibuildingperformance.com" className="text-primary hover:text-primary/80">
                      btalbot@eeibuildingperformance.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Schedule a Demo</h3>
                    <p className="text-muted-foreground mb-2">
                      See BalanceCx in action with a personalized demo
                    </p>
                    <a 
                      href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80"
                    >
                      Book a demo →
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Support</h3>
                    <p className="text-muted-foreground">
                      For existing customers needing assistance you can review the documentation when logged in, contact your EEI Building Performance representative, or use the schedule a demo button to schedule a meeting with us.
                    </p>
                  </div>
                </div>
              </div>
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
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2024 BalanceCx. All rights reserved.</p>
              <div className="flex space-x-6 text-muted-foreground">
                <Link href="/privacy" className="hover:text-card-foreground transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-card-foreground transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}