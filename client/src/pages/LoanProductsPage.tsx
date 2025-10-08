import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import LoanProductCard from '@/components/LoanProductCard';
import siteData from '@/content/site.json';

export default function LoanProductsPage() {
  return (
    <>
      <Helmet>
        <title>Loan Products - Kechita Capital | Microloans for Every Business</title>
        <meta name="description" content="Explore Kechita's 8 microloan products: BiashaBoost, HustleQuick, PesaEase, Mama Mboga Special, Boda Boda Finance, and more. Fast approval, no collateral." />
      </Helmet>

      <div className="min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-loans-title">Loans Tailored for Your Hustle</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-loans-subtitle">
                From mama mbogas to tech startups, we have the right financing solution for every Kenyan entrepreneur
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteData.loanProducts.map((product, index) => (
                <LoanProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  amount={product.amount}
                  term={product.term}
                  rate={product.rate}
                  icon={product.icon}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-loans-cta-title">Ready to Apply?</h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-loans-cta-subtitle">
                Application takes less than 5 minutes. Get approved within hours.
              </p>
              <Link href="/apply">
                <Button size="lg" data-testid="button-apply-loans">Apply Now</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
