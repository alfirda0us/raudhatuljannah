import mosqueLogo from "@/assets/logo-light.svg";

const Footer = () => {
  return (
    <footer id="kontak" className="py-8 md:py-10 bg-mosque-dark scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:text-left md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={mosqueLogo} alt="Logo Masjid" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <div>
              <p className="text-base md:text-lg font-serif text-primary-foreground">Masjid Raudhatul Jannah</p>
              <p className="text-xs text-primary-foreground/60">Taman Nirwana Bekasi Timur</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="#jadwal-sholat" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Jadwal Sholat
            </a>
            <a href="#kegiatan" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Kegiatan
            </a>
            <a href="#kontak" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Kontak
            </a>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © 2025 Masjid Raudhatul Jannah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
