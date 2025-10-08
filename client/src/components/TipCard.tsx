import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, Calculator, Split, Shield, TrendingUp, Handshake, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  calculator: Calculator,
  split: Split,
  shield: Shield,
  'trending-up': TrendingUp,
  handshake: Handshake,
};

interface TipCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function TipCard({ title, description, icon, index }: TipCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[icon] || Calculator;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-tip-${index}`}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left hover-elevate active-elevate-2"
          data-testid={`button-expand-tip-${index}`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-chart-2" />
              </div>
              <CardTitle className="text-base" data-testid={`text-tip-title-${index}`}>{title}</CardTitle>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </CardHeader>
        </button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-tip-description-${index}`}>
                  {description}
                </p>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
