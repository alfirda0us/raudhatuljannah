const Footer = () => {
  return (
    <footer className="py-12 bg-warm-brown text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-3xl font-serif italic">Forma</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Forma Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
