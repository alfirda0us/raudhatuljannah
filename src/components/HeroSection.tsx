import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroPortrait}
          alt="Serene woman with closed eyes representing wellness and self-care"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] text-foreground mb-4">
            Get clarity on your
            <br />
            <span className="italic">sexual health</span>
          </h1>
          <Button variant="hero" size="default" className="mt-4">
            Find my treatment
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <p className="text-[8vw] md:text-[10vw] font-serif italic text-foreground/10 whitespace-nowrap leading-none pb-4 tracking-tight">
          forma<sup className="text-[3vw]">®</sup>health
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
