import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, Shield, TrendingUp, Users, Sparkles, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import siteData from '@/content/site.json';
import logo from '@assets/../public/logo.png';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Kechita Capital | Empowering Kenyan Entrepreneurs</title>
        <meta name="description" content="Learn about Kechita Capital's 8-year journey empowering Kenyan entrepreneurs with microloans. Certified by CBK, ODPC, FRC, and ISO 27001." />
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
              <img src={logo} alt="Kechita Capital" className="h-20 w-auto mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">Kenya's Hustle in Motion</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-about-subtitle">
                For 8 years, we've been the financial backbone of Kenya's most determined entrepreneurs
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
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block mb-4 text-center w-full">
                <span className="text-6xl">🎯</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="text-mission-title">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12" data-testid="text-mission-content">
                Kechita Capital was born from a simple belief: every Kenyan entrepreneur deserves access to capital, 
                regardless of their background. We saw mama mbogas, boda boda riders, salon owners, and tech innovators 
                being turned away by traditional banks. So we built something different—fast, fair, and fundamentally Kenyan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Award, title: 'Excellence', description: 'Industry-leading approval rates and customer satisfaction' },
                  { icon: Shield, title: 'Trust', description: 'Certified by CBK, ODPC, FRC, and ISO 27001:2013' },
                  { icon: TrendingUp, title: 'Growth', description: 'Helping businesses grow 3-5x in their first year' },
                  { icon: Users, title: 'Community', description: 'Over 50,000 active borrowers across 47 counties' }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    data-testid={`card-value-${index}`}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                            <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cert-title">Our Certifications</h2>
              <p className="text-lg text-muted-foreground" data-testid="text-cert-subtitle">Regulated, certified, and trusted</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-cert-${index}`}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-chart-2" />
                      </div>
                      <h3 className="font-semibold mb-2" data-testid={`text-cert-name-${index}`}>{cert.name}</h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-cert-code-${index}`}>{cert.code}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="text-history-title">Our Journey</h2>
              <div className="space-y-8">
                {[
                  { year: '2016', event: 'Founded with a vision to democratize business financing in Kenya' },
                  { year: '2018', event: 'Expanded to all 47 counties, reaching every corner of Kenya' },
                  { year: '2020', event: 'Launched mobile-first platform for instant loan applications' },
                  { year: '2022', event: 'Achieved ISO 27001 certification for information security' },
                  { year: '2024', event: 'Crossed KES 2.5B in total loans disbursed to entrepreneurs' }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                    data-testid={`card-milestone-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary" data-testid={`text-milestone-year-${index}`}>{milestone.year}</span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <p className="text-lg text-foreground" data-testid={`text-milestone-event-${index}`}>{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
