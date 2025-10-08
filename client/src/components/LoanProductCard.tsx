import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Store, Zap, Wallet, Leaf, Bike, Scissors, Smartphone, UsersRound, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  store: Store,
  zap: Zap,
  wallet: Wallet,
  leaf: Leaf,
  bike: Bike,
  scissors: Scissors,
  smartphone: Smartphone,
  'users-round': UsersRound,
};

interface LoanProductCardProps {
  name: string;
  description: string;
  amount: string;
  term: string;
  rate: string;
  icon: string;
  index: number;
}

export default function LoanProductCard({ name, description, amount, term, rate, icon, index }: LoanProductCardProps) {
  const Icon = iconMap[icon] || Wallet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      data-testid={`card-loan-${index}`}
    >
      <Card className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl" data-testid={`text-loan-name-${index}`}>{name}</CardTitle>
          <CardDescription data-testid={`text-loan-description-${index}`}>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Amount:</span>
            <span className="font-semibold" data-testid={`text-loan-amount-${index}`}>{amount}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Term:</span>
            <span className="font-semibold" data-testid={`text-loan-term-${index}`}>{term}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Rate:</span>
            <span className="font-semibold text-primary" data-testid={`text-loan-rate-${index}`}>{rate}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
