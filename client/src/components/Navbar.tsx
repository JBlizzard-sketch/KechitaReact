import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/../public/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/loans', label: 'Loan Products' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/impact', label: 'Impact' },
    { path: '/resources', label: 'Resources' },
    { path: '/blog', label: 'Blog' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-lg px-2 -ml-2" data-testid="link-home-logo">
            <img src={logo} alt="Kechita Capital" className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors hover-elevate active-elevate-2 ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/apply">
              <Button data-testid="button-apply-now-nav" variant="default" size="default">
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            data-testid="button-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <button
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg hover-elevate active-elevate-2 ${
                      location === link.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <Link href="/apply">
                <Button 
                  data-testid="button-apply-now-mobile" 
                  onClick={() => setIsOpen(false)} 
                  variant="default" 
                  className="w-full mt-4"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
