import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

interface Opportunity {
  id: number;
  title: string;
  summary: string;
  category: string;
  comfort: string;
  program: string;
  location: string;
  schedule: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  onLearnMore: () => void;
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

const OpportunityCard = ({ opportunity, onLearnMore }: OpportunityCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <Badge variant="secondary" className="text-xs">
          {opportunity.program}
        </Badge>
        <Badge 
          variant="outline" 
          className={`text-xs ${getComfortColor(opportunity.comfort)}`}
        >
          {opportunity.comfort} Comfort
        </Badge>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {opportunity.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {opportunity.summary}
      </p>
      
      <div className="space-y-2 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{opportunity.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{opportunity.schedule}</span>
        </div>
      </div>
      
      <Button 
        onClick={onLearnMore}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        Learn More
      </Button>
    </div>
  );
};

export default OpportunityCard;
