import mosqueLogo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-10 bg-mosque-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={mosqueLogo} alt="Logo Masjid" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-lg font-serif text-primary-foreground">Masjid Raudhatul Jannah</p>
              <p className="text-xs text-primary-foreground/60">Taman Nirwana Bekasi 17115</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Jadwal Sholat
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Kegiatan
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Kontak
            </a>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © 2024 Masjid Raudhatul Jannah. Barakallah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
