import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TipCard from '@/components/TipCard';
import siteData from '@/content/site.json';
import { Calculator } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title>Resources - Kechita Capital | Smart Hustle Tips & Loan Calculator</title>
        <meta name="description" content="Free business resources for Kenyan entrepreneurs. Smart hustle tips, loan calculator, and financial planning guides." />
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
              <div className="inline-block mb-4">
                <span className="text-6xl">💡</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-resources-title">Business Resources</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-resources-subtitle">
                Tools and tips to help your business thrive 🚀
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-4" data-testid="text-tips-title">Smart Hustle Tips</h2>
              <p className="text-lg text-muted-foreground text-center mb-8" data-testid="text-tips-subtitle">
                Click to expand and read more
              </p>
              <div className="space-y-4 max-w-4xl mx-auto">
                {siteData.smartHustleTips.map((tip, index) => (
                  <TipCard
                    key={tip.id}
                    title={tip.title}
                    description={tip.description}
                    icon={tip.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Loan Calculator</CardTitle>
                      <CardDescription>Estimate your monthly repayments</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Loan Amount (KES)</label>
                    <Input type="number" placeholder="e.g., 50000" data-testid="input-calc-amount" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Interest Rate (% per month)</label>
                    <Input type="number" placeholder="e.g., 8" data-testid="input-calc-rate" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Loan Term (months)</label>
                    <Input type="number" placeholder="e.g., 3" data-testid="input-calc-term" />
                  </div>
                  <Button className="w-full" data-testid="button-calculate">Calculate Repayment</Button>
                  <div className="bg-sidebar p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Repayment</p>
                    <p className="text-2xl font-bold text-primary" data-testid="text-calc-result">KES 0</p>
                    <p className="text-xs text-muted-foreground mt-2">This is an estimate. Final terms may vary.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
