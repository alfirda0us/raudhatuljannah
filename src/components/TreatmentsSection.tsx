import { Button } from "@/components/ui/button";
import mosque4 from "@/assets/mosque-4.jpeg";
import mosque5 from "@/assets/mosque-5.jpeg";
import mosqueHero from "@/assets/mosque-hero.jpeg";

const TreatmentsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Mari bersama-sama membangun rumah Allah
            </p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground">
              Galeri Pembangunan Masjid Raudhatul Jannah
            </h2>
          </div>
          <div className="flex justify-end">
            <Button variant="hero" size="default">
              Infaq & Donasi
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={mosque4}
              alt="Masjid Raudhatul Jannah - tampak atas"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={mosque5}
              alt="Masjid Raudhatul Jannah - tampak samping"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={mosqueHero}
              alt="Masjid Raudhatul Jannah - tampak depan"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
