import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

interface FilterPanelProps {
  selectedCategories: string[];
  selectedComfortLevels: string[];
  onCategoryToggle: (category: string) => void;
  onComfortToggle: (level: string) => void;
}

const categories = [
  "Creative",
  "Skills",
  "Tech",
  "Outdoors",
  "Social",
  "Reflective",
  "Innovation"
];

const comfortLevels = ["Low", "Medium", "High"];

const FilterPanel = ({
  selectedCategories,
  selectedComfortLevels,
  onCategoryToggle,
  onComfortToggle
}: FilterPanelProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Filter Opportunities</h2>
      </div>
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Interest Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => onCategoryToggle(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Comfort Levels */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Comfort Level
          </h3>
          <div className="flex flex-wrap gap-2">
            {comfortLevels.map((level) => (
              <Badge
                key={level}
                variant={selectedComfortLevels.includes(level) ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => onComfortToggle(level)}
              >
                {level}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Low = minimal social demands • Medium = some interaction • High = active collaboration
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
