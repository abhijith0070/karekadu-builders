import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Client Testimonials</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Karekadu
            Builders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Karekadu Builders exceeded our expectations in every way. Their attention to detail and commitment to
                quality is unmatched. Our new office building is a testament to their expertise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">RS</span>
                </div>
                <div>
                  <div className="font-semibold">Rajesh Sharma</div>
                  <div className="text-sm text-muted-foreground">CEO, Tech Solutions Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "From the initial consultation to project completion, the team was professional, transparent, and
                delivered on time. Our dream home is now a reality thanks to Karekadu Builders."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">PM</span>
                </div>
                <div>
                  <div className="font-semibold">Priya Mehta</div>
                  <div className="text-sm text-muted-foreground">Homeowner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The renovation of our retail space was handled with utmost professionalism. Minimal disruption to our
                business and exceptional results. Highly recommend Karekadu Builders."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">AK</span>
                </div>
                <div>
                  <div className="font-semibold">Amit Kumar</div>
                  <div className="text-sm text-muted-foreground">Retail Business Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
