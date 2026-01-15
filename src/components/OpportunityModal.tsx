import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Opportunity {
  id: number;
  title: string;
  summary: string;
  description: string;
  category: string;
  comfort: string;
  program: string;
  location: string;
  schedule: string;
  image: string;
}

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  isOpen: boolean;
  onClose: () => void;
}

const getComfortColor = (comfort: string) => {
  switch (comfort) {
    case "Low":
      return "bg-green-100 text-green-800 border-green-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "High":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const OpportunityModal = ({ opportunity, isOpen, onClose }: OpportunityModalProps) => {
  if (!opportunity) return null;

  const handleInterested = () => {
    // Track interest - this would connect to backend/analytics
    console.log("User interested in:", opportunity.id);
    
    toast({
      title: "Interest recorded!",
      description: "We'll be in touch soon with next steps.",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary">{opportunity.program}</Badge>
            <Badge 
              variant="outline" 
              className={`${getComfortColor(opportunity.comfort)}`}
            >
              {opportunity.comfort} Comfort
            </Badge>
          </div>
          
          <DialogTitle className="text-2xl mb-2">{opportunity.title}</DialogTitle>
          
          <DialogDescription className="text-base">
            {opportunity.summary}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {opportunity.image && opportunity.image.startsWith('http') ? (
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-xl flex items-center justify-center">
              <span className="text-sm text-muted-foreground">{opportunity.category} Opportunity</span>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">About This Opportunity</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {opportunity.description}
            </p>
          </div>
          
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-foreground">Location</span>
                <p className="text-muted-foreground">{opportunity.location}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-foreground">Schedule</span>
                <p className="text-muted-foreground">{opportunity.schedule}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleInterested}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              size="lg"
            >
              <Heart className="w-4 h-4" />
              I'm Interested
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium"
              size="lg"
            >
              <a
                href="https://oasispartnership.org/getintouch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Us Your Details
              </a>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">
            Share your details and we'll be in touch
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityModal;
