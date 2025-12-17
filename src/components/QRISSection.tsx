import qrisWakaf from "@/assets/qris-wakaf.jpeg";

const QRISSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs text-muted-foreground mb-4">
            Scan QRIS untuk berdonasi
          </p>
          <h2 className="text-2xl md:text-4xl font-serif leading-tight text-foreground">
            Wakaf Masjid Raudhatul Jannah
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-sm">
            <img
              src={qrisWakaf}
              alt="QRIS Wakaf Masjid Raudhatul Jannah"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-muted-foreground text-sm mt-4">
              Scan dengan aplikasi pembayaran favorit Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRISSection;
