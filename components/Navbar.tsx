export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border" style={{ minHeight: '64px' }}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
              <div className="flex flex-col items-center">
                <img src="/logoo.png" alt="Karekadu Builders Logo" className="h-18 w-auto" style={{ maxWidth: '380px' }} />
                <span className="mt-0 text-lg font-bold text-primary">KAREKADU BUILDERS</span>
              </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded text-white">Get Quote</button>
      </div>
    </nav>
  );
}
 