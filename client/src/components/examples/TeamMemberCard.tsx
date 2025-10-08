import TeamMemberCard from '../TeamMemberCard';

export default function TeamMemberCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-background">
      <TeamMemberCard
        name="Simon Mutunga"
        role="CEO & Founder"
        bio="15+ years in microfinance, passionate about inclusive financial access for all Kenyans."
        quote="Every entrepreneur deserves a chance to grow, regardless of their start."
        image="team1.jpg"
        linkedin="#"
        twitter="#"
        index={0}
      />
    </div>
  );
}
