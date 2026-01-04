import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import mosque3 from "@/assets/mosque-3.webp";

interface PrayerTime {
  id: string;
  lokasi: string;
  daerah: string;
  jadwal: {
    tanggal: string;
    imsak: string;
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
    date: string;
  };
}

const TestimonialsSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["prayerTimes", "1612"], // Bekasi
    queryFn: async () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();

      const response = await fetch(
        `https://api.myquran.com/v2/sholat/jadwal/1612/${year}/${month}/${date}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch prayer times");
      }

      const result = await response.json();
      return result.data as PrayerTime;
    },
  });

  const prayerTimes = data?.jadwal;

  const prayerSchedule = [
    { name: "Subuh", time: prayerTimes?.subuh || "04:30" },
    { name: "Dzuhur", time: prayerTimes?.dzuhur || "12:00" },
    { name: "Ashar", time: prayerTimes?.ashar || "15:15" },
    { name: "Maghrib", time: prayerTimes?.maghrib || "18:00" },
    { name: "Isya", time: prayerTimes?.isya || "19:15" },
  ];

  return (
    <section id="jadwal-sholat" className="py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Jadwal Sholat
            <br />
            Masjid Raudhatul Jannah
          </h2>
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
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-red-600">
                <p>Gagal memuat jadwal shalat</p>
                <p className="text-sm">Silakan coba lagi nanti</p>
              </div>
            ) : (
              <div className="space-y-3">
                {prayerSchedule.map((prayer, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-colors"
                  >
                    <p className="text-lg font-serif text-foreground">{prayer.name}</p>
                    <p className="text-2xl font-serif font-medium text-primary">{prayer.time}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Waktu berdasarkan jadwal resmi Kemenag untuk Bekasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
