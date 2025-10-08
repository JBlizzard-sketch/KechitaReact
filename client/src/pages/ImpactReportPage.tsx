import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CounterAnimation from '@/components/CounterAnimation';
import siteData from '@/content/site.json';

export default function ImpactReportPage() {
  const { impactData } = siteData;

  const monthlyData = [
    { month: 'Jan', loans: 420 },
    { month: 'Feb', loans: 580 },
    { month: 'Mar', loans: 650 },
    { month: 'Apr', loans: 720 },
    { month: 'May', loans: 800 },
    { month: 'Jun', loans: 890 },
  ];

  const genderData = [
    { name: 'Women', value: impactData.womenBorrowers, color: 'hsl(var(--chart-2))' },
    { name: 'Men', value: 100 - impactData.womenBorrowers, color: 'hsl(var(--chart-1))' },
  ];

  return (
    <>
      <Helmet>
        <title>Impact Report - Kechita Capital | Our Social Impact in Kenya</title>
        <meta name="description" content="See Kechita's impact: 50,000+ borrowers, KES 2.5B+ disbursed, 47 counties served, 96% repayment rate. Real data, real change." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-impact-title">Our Impact Report</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-impact-subtitle">
                Transparent data on how we're transforming lives across Kenya
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Total Borrowers', value: impactData.totalBorrowers, suffix: '+', testId: 'counter-borrowers' },
                { label: 'Loans Disbursed', value: impactData.totalDisbursed / 1000000, suffix: 'M+', prefix: 'KES ', testId: 'counter-disbursed' },
                { label: 'Counties Served', value: impactData.countiesServed, suffix: '', testId: 'counter-counties' },
                { label: 'Jobs Created', value: impactData.jobsCreated, suffix: '+', testId: 'counter-jobs' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-stat-${index}`}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        <CounterAnimation
                          end={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          testId={stat.testId}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Loan Growth (2024)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="loans" fill="hsl(var(--chart-1))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Borrower Demographics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={genderData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {genderData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Retention Rate', value: impactData.retentionRate, suffix: '%' },
                { label: 'Repayment Rate', value: impactData.repaymentRate, suffix: '%' },
                { label: 'Women Borrowers', value: impactData.womenBorrowers, suffix: '%' },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-metric-${index}`}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl font-bold text-chart-2 mb-2">
                        <CounterAnimation end={metric.value} suffix={metric.suffix} testId={`counter-metric-${index}`} />
                      </div>
                      <p className="text-sm text-muted-foreground" data-testid={`text-metric-label-${index}`}>{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
