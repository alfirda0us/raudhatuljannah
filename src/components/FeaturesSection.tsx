import { Moon, Book, Users, Heart, Calendar, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Sholat 5 Waktu Berjamaah", icon: Moon },
  { title: "Kajian Rutin Mingguan", icon: Book },
  { title: "TPA untuk Anak-anak", icon: Users },
  { title: "Program Sosial & Zakat", icon: Heart },
  { title: "Kegiatan Ramadhan", icon: Calendar },
  { title: "Fasilitas Modern", icon: Landmark },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground mb-4">
              Pusat Ibadah &
              <br />
              Kegiatan Islami
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Masjid Raudhatul Jannah menyediakan berbagai program kegiatan untuk meningkatkan keimanan dan mempererat ukhuwah islamiyah.
            </p>
            <Button variant="hero" size="sm">
              Lihat Semua Kegiatan
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-xs text-foreground leading-relaxed">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
