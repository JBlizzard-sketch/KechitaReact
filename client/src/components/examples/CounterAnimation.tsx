import CounterAnimation from '../CounterAnimation';

export default function CounterAnimationExample() {
  return (
    <div className="p-8 space-y-4 bg-background">
      <div className="text-4xl font-bold">
        <CounterAnimation end={52000} suffix="+" testId="counter-borrowers" />
      </div>
      <div className="text-4xl font-bold">
        <CounterAnimation end={2500} suffix="M+" prefix="KES " testId="counter-disbursed" />
      </div>
      <div className="text-4xl font-bold">
        <CounterAnimation end={96} suffix="%" testId="counter-rate" />
      </div>
    </div>
  );
}
