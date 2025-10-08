import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import siteData from '@/content/site.json';

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  loanAmount: z.string().min(1, 'Loan amount required'),
  businessType: z.string().min(1, 'Business type required'),
  loanProduct: z.string().min(1, 'Please select a loan product'),
  referralSource: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function ApplyNowPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      loanAmount: '',
      businessType: '',
      loanProduct: '',
      referralSource: '',
    },
  });

  const onSubmit = (data: ApplicationForm) => {
    console.log('Application submitted:', data);
    setSubmitted(true);
    alert('Asante sana! Tunapiga simu kesho — your growth, our pride! 🇰🇪');
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Apply Now - Kechita Capital | Quick Microloan Application</title>
        <meta name="description" content="Apply for a Kechita microloan in minutes. Fast approval, no collateral needed. M-Pesa enabled for instant disbursement." />
      </Helmet>

      <div className="min-h-screen py-16 md:py-24 bg-sidebar">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 text-center w-full">
              <span className="text-6xl">📝</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-apply-title">Apply for a Loan</h1>
            <p className="text-lg text-muted-foreground text-center mb-6" data-testid="text-apply-subtitle">
              Simple, fast, and secure. Get approved in hours, not days. ⚡
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>5-min application</span>
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                <span>No collateral needed</span>
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                <span>Same-day approval</span>
              </Badge>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Loan Application Form</CardTitle>
                <CardDescription>Fill in your details below to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" data-testid="input-fullname" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number / M-Pesa</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 712 345 678" data-testid="input-phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="loanProduct"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Product</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-loan-product">
                                <SelectValue placeholder="Select a loan product" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {siteData.loanProducts.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="loanAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Amount (KES)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g., 25000" data-testid="input-loan-amount" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Type</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Retail shop, Salon, Boda boda" data-testid="input-business-type" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us? (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Friend, Radio, Social Media, etc." data-testid="input-referral" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full group" size="lg" data-testid="button-submit-application">
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-chart-2/10 border border-chart-2/20 rounded-lg text-center"
                  >
                    <p className="text-chart-2 font-semibold" data-testid="text-success-message">
                      Application received! We'll contact you soon. 🎉
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
