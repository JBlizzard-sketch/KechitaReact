import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import StoryCard from '@/components/StoryCard';
import StoryModal from '@/components/StoryModal';
import siteData from '@/content/site.json';

export default function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<typeof siteData.successStories[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Success Stories - Kechita Capital | Real Kenyan Entrepreneurs</title>
        <meta name="description" content="Read inspiring success stories from Kechita borrowers: mama mbogas, boda boda riders, salon owners, and more who transformed their businesses." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-stories-title">Real Stories, Real Success</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-stories-subtitle">
                Meet the entrepreneurs who turned their dreams into thriving businesses with Kechita
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.successStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  name={story.name}
                  business={story.business}
                  location={story.location}
                  quote={story.quote}
                  growth={story.growth}
                  image={story.image}
                  index={index}
                  onClick={() => setSelectedStory(story)}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedStory && (
          <StoryModal
            open={!!selectedStory}
            onOpenChange={(open) => !open && setSelectedStory(null)}
            story={selectedStory}
          />
        )}
      </div>
    </>
  );
}
