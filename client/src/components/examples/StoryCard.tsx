import { useState } from 'react';
import StoryCard from '../StoryCard';

export default function StoryCardExample() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-background">
      <StoryCard
        name="Aisha Wambui"
        business="Mama Mboga - Gikomba Market"
        location="Nairobi"
        quote="Kechita believed in me when banks wouldn't. Now my vegetables business feeds three families!"
        growth="300% revenue increase"
        image="story1.jpg"
        index={0}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && <div className="col-span-full text-center text-sm text-muted-foreground">Story clicked!</div>}
    </div>
  );
}
