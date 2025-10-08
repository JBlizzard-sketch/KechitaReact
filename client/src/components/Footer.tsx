import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@assets/../public/logo.png';

export default function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Kechita Capital" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Empowering Kenyan entrepreneurs with fast, collateral-free microloans since 2016.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Your Growth, Our Pride 🇰🇪
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/loans" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-loans">Loan Products</Link></li>
              <li><Link href="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-apply">Apply Now</Link></li>
              <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-impact">Impact Report</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-resources">Smart Hustle Tips</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-team">Our Team</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Contact & Branches</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+254 712 345 000</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@kechita.co.ke</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Moi Avenue, Nairobi CBD</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" data-testid="link-social-facebook" className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" data-testid="link-social-twitter" className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" data-testid="link-social-instagram" className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" data-testid="link-social-linkedin" className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Kechita Capital Investment Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
              <Link href="/contact#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
