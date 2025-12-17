import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-foreground transition-colors">Jadwal Sholat</a>
          <a href="#" className="text-foreground transition-colors">Kegiatan</a>
          <a href="#" className="text-foreground transition-colors">Donasi</a>
        </div>

        <a href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2">
          <span className="text-xl md:text-2xl font-serif text-foreground">Raudhatul Jannah</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-foreground transition-colors">Tentang Kami</a>
          <a href="#" className="text-foreground transition-colors">Kontak</a>
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
            <a href="#" className="text-foreground py-2">Jadwal Sholat</a>
            <a href="#" className="text-foreground py-2">Kegiatan</a>
            <a href="#" className="text-foreground py-2">Donasi</a>
            <a href="#" className="text-foreground py-2">Tentang Kami</a>
            <a href="#" className="text-foreground py-2">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
