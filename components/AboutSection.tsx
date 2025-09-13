import { Badge } from "@/components/ui/badge"
import { Users, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-secondary text-secondary-foreground">About Karekadu Builders</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
              Building Excellence Since Day One
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Karekadu Builders, we believe that every construction project is an opportunity to create something
              extraordinary. With years of experience in residential, commercial, and real estate development, we
              bring unmatched expertise and dedication to every project.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-secondary" />
              <span className="text-muted-foreground">Expert team of certified professionals</span>
            </div>
          </div>
          <div className="relative">
            <img src="/professional-construction-team-at-modern-building-.jpg" alt="Karekadu Builders team" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <Award className="h-8 w-8 mb-2" />
              <div className="font-bold">Award Winning</div>
              <div className="text-sm opacity-90">Construction Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
