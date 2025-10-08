import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import TeamMemberCard from '@/components/TeamMemberCard';
import siteData from '@/content/site.json';

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team - Kechita Capital | Leadership Committed to Your Success</title>
        <meta name="description" content="Meet the Kechita team: experienced leaders in microfinance, technology, and community development dedicated to empowering Kenyan entrepreneurs." />
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
                <span className="text-6xl">👥</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-team-title">Meet Our Team</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-team-subtitle">
                Passionate leaders dedicated to empowering Kenya's entrepreneurs 🇰🇪
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteData.team.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  quote={member.quote}
                  image={member.image}
                  linkedin={member.linkedin}
                  twitter={member.twitter}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
