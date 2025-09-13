import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Portfolio</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Showcasing Our Finest Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Explore our portfolio of completed projects that demonstrate our commitment to quality and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/placeholder-70vzb.png"
                alt="Luxury Residential Complex"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Luxury Residential Complex</h3>
              <p className="text-muted-foreground text-sm">
                50-unit premium residential development with modern amenities
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/placeholder-uhota.png"
                alt="Corporate Office Tower"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Corporate Office Tower</h3>
              <p className="text-muted-foreground text-sm">
                15-story commercial building with sustainable design features
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/placeholder-bywl2.png"
                alt="Modern Family Home"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Modern Family Home</h3>
              <p className="text-muted-foreground text-sm">
                Custom-designed 4-bedroom home with smart home integration
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/shopping-mall-retail-complex-modern-architecture.jpg"
                alt="Retail Shopping Complex"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Retail Shopping Complex</h3>
              <p className="text-muted-foreground text-sm">
                Multi-level shopping center with entertainment and dining areas
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/placeholder-47e94.png"
                alt="Industrial Warehouse"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Industrial Warehouse</h3>
              <p className="text-muted-foreground text-sm">
                State-of-the-art logistics facility with automated systems
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src="/placeholder-5tdrq.png"
                alt="Hotel Renovation Project"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Hotel Renovation Project</h3>
              <p className="text-muted-foreground text-sm">
                Complete renovation of 200-room luxury hotel with modern amenities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
