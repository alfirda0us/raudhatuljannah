import { Button } from "@/components/ui/button";
import mosque4 from "@/assets/mosque-4.webp";
import mosque5 from "@/assets/mosque-5.webp";
import mosqueHero from "@/assets/mosque-1.webp";

const TreatmentsSection = () => {
  return (
    <section id="galleri" className="py-12 md:py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 md:mb-12">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Mari bersama-sama membangun rumah Allah
            </p>
            <h2 className="text-2xl md:text-4xl font-serif leading-tight text-foreground">
              Galeri Pembangunan Masjid Raudhatul Jannah
            </h2>
          </div>
          <div className="flex sm:justify-end">
            <Button variant="hero" size="default">
              <a href="#donasi" className="text-foreground transition-colors hover:text-primary">Infaq & Donasi</a>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[3/4]">
            <img
              src={mosque4}
              alt="Masjid Raudhatul Jannah - tampak atas"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[3/4]">
            <img
              src={mosque5}
              alt="Masjid Raudhatul Jannah - tampak samping"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] sm:col-span-2 md:col-span-1">
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
