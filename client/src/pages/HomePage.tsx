import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import MetricCard from '@/components/MetricCard';
import { Zap, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';
import siteData from '@/content/site.json';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Kechita Capital - Microloans for Kenyan Entrepreneurs</title>
        <meta name="description" content="Fast, collateral-free microloans for Kenyan entrepreneurs. Empowering dreams with silky loans across 47 counties. Apply today!" />
        <meta property="og:title" content="Kechita Capital - Microloans for Kenyan Entrepreneurs" />
        <meta property="og:description" content="Fast, collateral-free microloans for Kenyan entrepreneurs. Empowering dreams with silky loans across 47 counties." />
      </Helmet>

      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=1920&h=1080&fit=crop&q=80" 
            alt="Kenyan market vendors" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">🇰🇪 Empowering 50,000+ Kenyan Entrepreneurs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight" data-testid="text-hero-title">
              {siteData.hero.tagline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              {siteData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 border-2 border-white group" data-testid="button-hero-apply">
                  {siteData.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/loans">
                <Button size="lg" variant="outline" className="border-2 border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20" data-testid="button-hero-products">
                  {siteData.hero.cta2}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">📊</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-impact-title">Our Impact Across Kenya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-impact-subtitle">
              Real numbers, real change. See how we're empowering Kenyan entrepreneurs. 🇰🇪
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.metrics.map((metric, index) => (
              <MetricCard
                key={index}
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sidebar">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">⚡</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">Why Choose Kechita?</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-features-subtitle">Kenya's Hustle in Motion 🚀</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', description: 'Approval in hours, not days. Get cash when you need it most.' },
              { icon: Shield, title: 'No Collateral', description: 'Your hustle is your guarantee. No property or guarantors needed.' },
              { icon: Clock, title: 'Flexible Terms', description: 'Repayment schedules that match your business cash flow.' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
                data-testid={`card-feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">🎯</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
              Join 50,000+ entrepreneurs who trust Kechita for their business financing needs. 💪
            </p>
            <Link href="/apply">
              <Button size="lg" className="group" data-testid="button-cta-apply">
                Apply for a Loan Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
