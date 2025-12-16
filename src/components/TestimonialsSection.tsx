import { Button } from "@/components/ui/button";
import mosque3 from "@/assets/mosque-3.jpeg";

const prayerTimes = [
  { name: "Subuh", time: "04:30" },
  { name: "Dzuhur", time: "12:00" },
  { name: "Ashar", time: "15:15" },
  { name: "Maghrib", time: "18:00" },
  { name: "Isya", time: "19:15" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Jadwal Sholat
            <br />
            Masjid Raudhatul Jannah
          </h2>
          <Button variant="outline" size="sm" className="mt-4">
            Download Jadwal Lengkap
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={mosque3}
              alt="Masjid Raudhatul Jannah"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-3">
              {prayerTimes.map((prayer, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-colors"
                >
                  <p className="text-lg font-serif text-foreground">{prayer.name}</p>
                  <p className="text-2xl font-serif font-medium text-primary">{prayer.time}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Waktu dapat berubah sesuai jadwal resmi Kemenag
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
