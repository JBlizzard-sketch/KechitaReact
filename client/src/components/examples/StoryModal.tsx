import { useState } from 'react';
import { Button } from '@/components/ui/button';
import StoryModal from '../StoryModal';

export default function StoryModalExample() {
  const [open, setOpen] = useState(false);

  const story = {
    name: "Aisha Wambui",
    business: "Mama Mboga - Gikomba Market",
    location: "Nairobi",
    loanAmount: "KES 15,000",
    quote: "Kechita believed in me when banks wouldn't. Now my vegetables business feeds three families!",
    story: "Aisha started with a small stall in Gikomba Market. With Kechita's BiashaBoost loan, she expanded her inventory and now supplies to local restaurants. Her monthly revenue has tripled in just 6 months.",
    growth: "300% revenue increase",
    image: "story1.jpg"
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">Open Story Modal</Button>
      <StoryModal open={open} onOpenChange={setOpen} story={story} />
    </div>
  );
}
