import { Building2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="text-2xl font-bold">Karekadu Builders</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building dreams with precision, trust, and excellence. Your vision, our expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Real Estate Development</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Us</li>
              <li>Our Portfolio</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+91 98765 43210</li>
              <li>info@karekadubuilders.com</li>
              <li>123 Construction Avenue</li>
              <li>Building District, City 560001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Karekadu Builders. All rights reserved. Every Break Needs a Restart.</p>
        </div>
      </div>
    </footer>
  );
}
