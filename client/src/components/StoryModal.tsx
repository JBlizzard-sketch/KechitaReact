import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MapPin, TrendingUp, Banknote } from 'lucide-react';

interface StoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  story: {
    name: string;
    business: string;
    location: string;
    loanAmount: string;
    quote: string;
    story: string;
    growth: string;
    image: string;
  };
}

export default function StoryModal({ open, onOpenChange, story }: StoryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-story">
        <DialogHeader>
          <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
            <img
              src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop`}
              alt={story.name}
              className="w-full h-full object-cover"
            />
          </div>
          <DialogTitle className="text-2xl" data-testid="text-modal-story-name">{story.name}</DialogTitle>
          <DialogDescription className="space-y-2">
            <p className="text-base font-medium text-foreground" data-testid="text-modal-story-business">{story.business}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span data-testid="text-modal-story-location">{story.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Banknote className="h-4 w-4 text-primary" />
                <span data-testid="text-modal-story-amount">{story.loanAmount} loan</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-chart-2" />
                <span className="font-semibold text-chart-2" data-testid="text-modal-story-growth">{story.growth}</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="bg-sidebar p-4 rounded-xl border border-sidebar-border">
            <p className="italic text-foreground" data-testid="text-modal-story-quote">"{story.quote}"</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Their Story</h4>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-story-content">{story.story}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
