import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface StoryCardProps {
  name: string;
  business: string;
  location: string;
  quote: string;
  growth: string;
  image: string;
  index: number;
  onClick: () => void;
}

export default function StoryCard({ name, business, location, quote, growth, image, index, onClick }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      data-testid={`card-story-${index}`}
    >
      <Card className="overflow-hidden h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={`https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&q=80`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-chart-2 text-white rounded-full p-2">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-1" data-testid={`text-story-name-${index}`}>{name}</h3>
          <p className="text-sm text-muted-foreground mb-1" data-testid={`text-story-business-${index}`}>{business}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
            <MapPin className="h-3 w-3" />
            <span data-testid={`text-story-location-${index}`}>{location}</span>
          </div>
          <p className="text-sm italic text-foreground mb-4 line-clamp-3" data-testid={`text-story-quote-${index}`}>
            "{quote}"
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 text-sm font-semibold text-chart-2">
              <TrendingUp className="h-4 w-4" />
              <span data-testid={`text-story-growth-${index}`}>{growth}</span>
            </div>
          </div>
          <Button onClick={onClick} variant="outline" size="sm" className="w-full group/btn" data-testid={`button-read-story-${index}`}>
            Read Full Story
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
