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
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] text-primary-foreground mb-4">
            Masjid
            <br />
            <span className="italic">Raudhatul Jannah</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm mb-6 max-w-sm">
            Taman Nirwana Bekasi 17115 - Tempat beribadah dan mendekatkan diri kepada Allah SWT
          </p>
          <Button variant="hero" size="default" className="mt-4">
            Lihat Jadwal Sholat
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <p className="text-[8vw] md:text-[10vw] font-serif italic text-primary-foreground/10 whitespace-nowrap leading-none pb-4 tracking-tight">
          Raudhatul Jannah
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
