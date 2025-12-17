import { Button } from "@/components/ui/button";
import mosqueHero from "@/assets/mosque-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={mosqueHero}
          alt="Masjid Raudhatul Jannah - Taman Nirwana Bekasi"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mosque-dark/60 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-5xl">
          <p className="text-2xl sm:text-3xl md:text-5xl leading-[1.1] text-primary-foreground mb-4 font-sans font-light">
            Shalatlah Sebelum
            <br />
            Di Shalatkan
          </p>
          <p className="text-primary-foreground/80 text-xs sm:text-sm mb-3 max-w-sm">
            Taman Nirwana Bekasi 17115 - Tempat beribadah dan mendekatkan diri kepada Allah SWT
          </p>
          <Button variant="hero" size="default" className="mt-4 bg-background/5 backdrop-blur-sm border border-white/20">
            <p className="font-light text-sm">Lihat Jadwal Sholat</p>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden px-4 pb-4 md:pb-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] text-white whitespace-nowrap leading-none pb-2 md:pb-4 tracking-tight font-sans font-light">
          Raudhatul&reg;Jannah
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
