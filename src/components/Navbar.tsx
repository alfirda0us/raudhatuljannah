import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10 text-sm">
          <a href="#jadwal-sholat" className="text-foreground transition-colors hover:text-primary">Jadwal Sholat</a>
          <a href="#kegiatan" className="text-foreground transition-colors hover:text-primary">Kegiatan</a>
          <a href="#galleri" className="text-foreground transition-colors hover:text-primary">Galleri</a>
        </div>

        <a href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2">
          <span className="text-xl md:text-2xl font-serif text-foreground">Raudhatul Jannah</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm">
          <a href="#donasi" className="text-foreground transition-colors hover:text-primary">Donasi</a>
          <a href="#keistimewaan" className="text-foreground transition-colors hover:text-primary">Tentang Kami</a>
          <a href="#kontak" className="text-foreground transition-colors hover:text-primary">Kontak</a>
        </div>

        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#jadwal-sholat" onClick={() => setIsOpen(false)} className="text-foreground py-2 hover:text-primary">Jadwal Sholat</a>
            <a href="#kegiatan" onClick={() => setIsOpen(false)} className="text-foreground py-2 hover:text-primary">Kegiatan</a>
            <a href="#donasi" onClick={() => setIsOpen(false)} className="text-foreground py-2 hover:text-primary">Donasi</a>
            <a href="#tentang" onClick={() => setIsOpen(false)} className="text-foreground py-2 hover:text-primary">Tentang Kami</a>
            <a href="#kontak" onClick={() => setIsOpen(false)} className="text-foreground py-2 hover:text-primary">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
