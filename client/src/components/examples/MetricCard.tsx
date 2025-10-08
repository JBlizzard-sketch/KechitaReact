import MetricCard from '../MetricCard';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-background">
      <MetricCard value="50,000+" label="Active Borrowers" icon="users" index={0} />
      <MetricCard value="KES 2.5B+" label="Loans Disbursed" icon="banknote" index={1} />
      <MetricCard value="69%" label="Women Borrowers" icon="heart" index={2} />
      <MetricCard value="47" label="Counties Served" icon="map" index={3} />
    </div>
  );
}
