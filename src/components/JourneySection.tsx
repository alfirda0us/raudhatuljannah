import qrisWakaf from "@/assets/qris-wakaf.svg";

const JourneySection = () => {
  return (
    <section id="donasi" className="py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-serif text-foreground leading-tight mb-6">
          Mari Bersama Memakmurkan
          <br />
          Masjid Raudhatul Jannah
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Jadilah bagian dari keluarga besar Masjid Raudhatul Jannah. Bersama kita tingkatkan keimanan dan ketaqwaan kepada Allah SWT.
        </p>
      </div>

        <div className="flex justify-center">
          <div className="bg-white md:p-6 max-w-sm bg-card border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors">
            <img
              src={qrisWakaf}
              alt="QRIS Wakaf Masjid Raudhatul Jannah"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-foreground/80 text-sm mt-4">
              Scan dengan aplikasi pembayaran favorit Anda
            </p>
          </div>
        </div>
    </section>
  );
};

export default JourneySection;
