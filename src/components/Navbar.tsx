import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Weight Loss
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Mental Health
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Hair Regrowth
            </a>
          </div>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif italic text-foreground">
          Forma
        </a>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hidden md:block text-foreground/70 hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#" className="hidden md:block text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-foreground/70" />
            <span className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
