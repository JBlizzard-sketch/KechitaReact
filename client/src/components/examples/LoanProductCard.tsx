import LoanProductCard from '../LoanProductCard';

export default function LoanProductCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-background">
      <LoanProductCard
        name="BiashaBoost"
        description="Quick loans for retail businesses and market vendors"
        amount="KES 5,000 - 50,000"
        term="1-3 months"
        rate="From 8% per month"
        icon="store"
        index={0}
      />
      <LoanProductCard
        name="HustleQuick"
        description="Fast cash for urgent business needs"
        amount="KES 2,000 - 20,000"
        term="2 weeks - 1 month"
        rate="From 10% per month"
        icon="zap"
        index={1}
      />
    </div>
  );
}
