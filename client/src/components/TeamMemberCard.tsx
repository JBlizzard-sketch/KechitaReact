import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  index: number;
}

export default function TeamMemberCard({ name, role, bio, quote, image, linkedin, twitter, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-team-${index}`}
    >
      <Card className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        <CardContent className="p-6">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
            <img
              src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop`}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg mb-1" data-testid={`text-team-name-${index}`}>{name}</h3>
            <p className="text-sm text-primary font-medium mb-2" data-testid={`text-team-role-${index}`}>{role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3" data-testid={`text-team-bio-${index}`}>{bio}</p>
            <div className="bg-sidebar px-4 py-3 rounded-lg">
              <p className="text-xs italic text-foreground" data-testid={`text-team-quote-${index}`}>"{quote}"</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {linkedin && (
              <a href={linkedin} aria-label={`${name} LinkedIn`} data-testid={`link-team-linkedin-${index}`} className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {twitter && (
              <a href={twitter} aria-label={`${name} Twitter`} data-testid={`link-team-twitter-${index}`} className="p-2 hover-elevate active-elevate-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
