import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import FilterPanel from "@/components/FilterPanel";
import OpportunityCard from "@/components/OpportunityCard";
import OpportunityModal from "@/components/OpportunityModal";
import FeedbackWidget from "@/components/FeedbackWidget";
import opportunitiesData from "@/data/opportunities.json";
import { Sparkles } from "lucide-react";

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

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedComfortLevels, setSelectedComfortLevels] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const opportunities = opportunitiesData as Opportunity[];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleComfortToggle = (level: string) => {
    setSelectedComfortLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const handleProgramToggle = (program: string) => {
    setSelectedPrograms(prev =>
      prev.includes(program)
        ? prev.filter(p => p !== program)
        : [...prev, program]
    );
  };

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opp => {
      const categoryMatch = selectedCategories.length === 0 ||
        selectedCategories.includes(opp.category);
      const comfortMatch = selectedComfortLevels.length === 0 ||
        selectedComfortLevels.includes(opp.comfort);
      const programMatch = selectedPrograms.length === 0 ||
        selectedPrograms.includes(opp.program);

      return categoryMatch && comfortMatch && programMatch;
    });
  }, [opportunities, selectedCategories, selectedComfortLevels, selectedPrograms]);

  const handleLearnMore = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  const activeFilters = selectedCategories.length + selectedComfortLevels.length + selectedPrograms.length;

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Filter Section */}
        <div className="animate-fade-in">
          <FilterPanel
            selectedCategories={selectedCategories}
            selectedComfortLevels={selectedComfortLevels}
            selectedPrograms={selectedPrograms}
            onCategoryToggle={handleCategoryToggle}
            onComfortToggle={handleComfortToggle}
            onProgramToggle={handleProgramToggle}
          />
        </div>
        
        {/* Results Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                {activeFilters > 0 ? "Filtered " : "All "}
                Opportunities
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Showing {filteredOpportunities.length} of {opportunities.length} opportunities
                {activeFilters > 0 && ` (${activeFilters} ${activeFilters === 1 ? 'filter' : 'filters'} active)`}
              </p>
            </div>
          </div>
          
          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map(opportunity => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  onLearnMore={() => handleLearnMore(opportunity)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <p className="text-muted-foreground mb-2">
                No opportunities match your current filters
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting or clearing some filters
              </p>
            </div>
          )}
        </div>
        
        {/* Feedback Widget */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <FeedbackWidget />
        </div>
        
        {/* Footer Info */}
        <div className="text-center pt-8 pb-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Resilience Compass by The Oasis Partnership
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supporting neurodivergent learners to build skills, purpose, and connection
          </p>
        </div>
      </main>
      
      <OpportunityModal
        opportunity={selectedOpportunity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
