import { motion } from 'framer-motion';
import { Users, Banknote, Heart, Map, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  banknote: Banknote,
  heart: Heart,
  map: Map,
};

interface MetricCardProps {
  value: string;
  label: string;
  icon: string;
  index: number;
}

export default function MetricCard({ value, label, icon, index }: MetricCardProps) {
  const Icon = iconMap[icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid={`text-metric-value-${index}`}>
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground" data-testid={`text-metric-label-${index}`}>
        {label}
      </div>
    </motion.div>
  );
}
