import { Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-accent/20 p-4 rounded-full">
            <Compass className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Find practical ways to build skills,<br className="hidden md:block" /> purpose, and connection.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Use the Resilience Compass to explore your opportunities with Neuro Resilience.
        </p>
        
        <div className="inline-flex items-center gap-2 text-sm text-secondary bg-card px-4 py-2 rounded-full border border-border">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span>All opportunities designed for neurodivergent learners</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
