import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroPortrait}
          alt="Serene woman with closed eyes representing wellness and self-care"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-foreground mb-6 opacity-0 animate-fade-in">
            Get clarity on your
            <br />
            <span className="italic">sexual health</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Personalized treatments delivered discreetly to your door.
          </p>
          <Button variant="hero" size="lg" className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Find my treatment
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <p className="text-8xl md:text-9xl font-serif italic text-foreground/10 whitespace-nowrap">
          forma<sup className="text-4xl">®</sup>health
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
