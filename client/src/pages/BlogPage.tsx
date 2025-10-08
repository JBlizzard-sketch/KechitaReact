import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import siteData from '@/content/site.json';
import blogImage from '@assets/stock_images/kenyan_mobile_money__7d0a7d24.jpg';

export default function BlogPage() {
  const { blogPost } = siteData;

  return (
    <>
      <Helmet>
        <title>Blog - Kechita Capital | Financial Tips for Kenyan Entrepreneurs</title>
        <meta name="description" content={blogPost.excerpt} />
      </Helmet>

      <div className="min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-br from-chart-2 to-chart-2/80 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-blog-title">Kechita Blog</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-blog-subtitle">
                Insights, tips, and stories from the world of Kenyan entrepreneurship
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={blogImage}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span data-testid="text-blog-date">{blogPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span data-testid="text-blog-author">{blogPost.author}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4" data-testid="text-blog-post-title">{blogPost.title}</h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 italic" data-testid="text-blog-excerpt">
                    {blogPost.excerpt}
                  </p>

                  <div className="prose prose-lg max-w-none">
                    {blogPost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-foreground leading-relaxed" data-testid={`text-blog-paragraph-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground" data-testid="text-blog-more">More articles coming soon...</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
