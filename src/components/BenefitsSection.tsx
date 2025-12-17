import mosque2 from "@/assets/mosque-2.jpeg";
import { Users, Book, Heart, Home } from "lucide-react";

const stats = [
  { value: "5x", label: "Sholat Berjamaah Setiap Hari", icon: Users, bg: "bg-tan" },
  { value: "10+", label: "Kajian Rutin Per Bulan", icon: Book, bg: "bg-cream-dark" },
  { value: "500+", label: "Jamaah Aktif", icon: Heart, bg: "bg-secondary" },
  { value: "2024", label: "Tahun Pembangunan", icon: Home, bg: "bg-accent" },
];

const BenefitsSection = () => {
  return (
    <section id="keistimewaan" className="bg-mosque-dark">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <img
              src={mosque2}
              alt="Masjid Raudhatul Jannah tampak malam hari"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight text-primary-foreground">
                Keistimewaan
                <br />
                Masjid Kami
              </h2>
            </div>
          </div>
          
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-primary-foreground/70 text-sm mb-8 max-w-sm leading-relaxed">
              Masjid Raudhatul Jannah hadir sebagai pusat ibadah dan kegiatan islami untuk masyarakat Taman Nirwana dan sekitarnya.
            </p>
            
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bg} text-foreground rounded-lg p-4 flex items-center justify-between`}
                >
                  <div>
                    <p className="text-2xl font-serif font-medium">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
