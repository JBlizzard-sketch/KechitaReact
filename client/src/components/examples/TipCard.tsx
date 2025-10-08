import TipCard from '../TipCard';

export default function TipCardExample() {
  return (
    <div className="space-y-4 p-8 bg-background max-w-2xl">
      <TipCard
        title="Track Every Shilling"
        description="Keep daily records of income and expenses. Use simple notebooks or mobile apps like Excel to track your business cash flow."
        icon="calculator"
        index={0}
      />
      <TipCard
        title="Separate Business & Personal Money"
        description="Open a separate M-Pesa account or bank account for your business. Never mix business funds with household expenses."
        icon="split"
        index={1}
      />
    </div>
  );
}
