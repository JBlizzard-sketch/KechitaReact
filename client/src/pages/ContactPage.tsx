import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Mail } from 'lucide-react';
import siteData from '@/content/site.json';

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(5, 'Subject required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Kechita Capital | Get in Touch & Find Our Branches</title>
        <meta name="description" content="Contact Kechita Capital. Find our branches across 47 counties in Kenya. Email, phone, and in-person support available." />
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
                <span className="text-6xl">📞</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">Get in Touch</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
                We're here to help. Reach out anytime. 💬
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" data-testid="input-contact-name" {...field} />
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" data-testid="input-contact-email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" data-testid="input-contact-subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us more..." rows={5} data-testid="input-contact-message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full" data-testid="button-send-message">Send Message</Button>
                      </form>
                    </Form>

                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-chart-2/10 border border-chart-2/20 rounded-lg text-center"
                      >
                        <p className="text-chart-2 font-semibold" data-testid="text-contact-success">Message sent! We'll respond soon.</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-contact-phone">+254 712 345 000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-contact-email-info">info@kechita.co.ke</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Head Office</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-contact-address">Moi Avenue, Nairobi CBD</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Our Branches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {siteData.branches.slice(0, 15).map((branch, index) => (
                        <div key={index} className="p-3 bg-sidebar rounded-lg" data-testid={`card-branch-${index}`}>
                          <p className="font-semibold text-sm" data-testid={`text-branch-name-${index}`}>{branch.name}</p>
                          <p className="text-xs text-muted-foreground" data-testid={`text-branch-location-${index}`}>{branch.location}</p>
                          <p className="text-xs text-muted-foreground" data-testid={`text-branch-phone-${index}`}>{branch.phone}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="legal"
            >
              <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-legal-title">Legal Information</h2>
              <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                <AccordionItem value="privacy" id="privacy">
                  <AccordionTrigger data-testid="button-privacy-toggle">Privacy Policy</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm text-muted-foreground" data-testid="text-privacy-content">
                      <p>Kechita Capital Investment Limited is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
                      <p><strong>Data Collection:</strong> We collect personal information including name, phone number, email, business details, and financial information necessary for loan processing.</p>
                      <p><strong>Data Usage:</strong> Your information is used solely for loan assessment, disbursement, and customer service. We do not sell or share your data with third parties except as required by law.</p>
                      <p><strong>Data Security:</strong> We employ industry-standard encryption and security measures (ISO 27001 certified) to protect your information.</p>
                      <p><strong>Your Rights:</strong> You have the right to access, correct, or request deletion of your personal data. Contact us at privacy@kechita.co.ke</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="terms" id="terms">
                  <AccordionTrigger data-testid="button-terms-toggle">Terms of Service</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm text-muted-foreground" data-testid="text-terms-content">
                      <p><strong>1. Loan Agreement:</strong> By applying for and accepting a Kechita loan, you agree to repay the principal amount plus interest as per the agreed schedule.</p>
                      <p><strong>2. Interest Rates:</strong> Interest rates vary by product (6-10% per month) and are disclosed before loan acceptance. All fees are transparent with no hidden charges.</p>
                      <p><strong>3. Repayment:</strong> Loans must be repaid according to the agreed schedule via M-Pesa or bank transfer. Late payments may incur penalties.</p>
                      <p><strong>4. Eligibility:</strong> Borrowers must be 18+ years old, Kenyan residents, and operating a legitimate business.</p>
                      <p><strong>5. Default:</strong> Failure to repay may result in credit bureau reporting and legal action. We encourage early communication if you face repayment difficulties.</p>
                      <p><strong>6. Regulatory Compliance:</strong> Kechita is licensed by the Central Bank of Kenya (CBK/MFI/2016/089) and complies with all relevant regulations.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
