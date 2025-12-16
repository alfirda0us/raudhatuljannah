const Footer = () => {
  return (
    <footer className="py-10 bg-warm-brown">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xl font-serif italic text-cream">Forma</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream/60 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-cream/60 hover:text-cream transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-cream/60 hover:text-cream transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-cream/50">
            © 2024 Forma Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
