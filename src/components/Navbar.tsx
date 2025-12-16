import mosqueLogo from "@/assets/mosque-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Jadwal Sholat
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Kegiatan
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Donasi
            </a>
          </div>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img src={mosqueLogo} alt="Logo Masjid Raudhatul Jannah" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-serif text-foreground hidden sm:block">Raudhatul Jannah</span>
        </a>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hidden md:block text-foreground/70 hover:text-foreground transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="hidden md:block text-foreground/70 hover:text-foreground transition-colors">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
