import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-serif italic text-foreground">
            Forma
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Weight Loss
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mental Health
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Hair Regrowth
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
