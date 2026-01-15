const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <img
            src="https://oasispartnership.org/wp-content/uploads/2025/10/Screenshot-2025-10-14-at-16.47.59-1.webp"
            alt="Neuro Resilience Logo"
            className="h-32 md:h-48 w-auto object-contain"
          />
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Find practical ways to build skills,<br className="hidden md:block" /> purpose, and connection.
        </h1>

        <p className="text-base md:text-lg text-muted-foreground mb-6">
          A guide to parents, young people, schools and referrers.
        </p>

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
