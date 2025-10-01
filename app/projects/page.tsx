import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  const ongoingProjects = [
    {
      id: 1,
      title: "Heritage Mall Renovation",
      description: "Complete modernization of historic shopping center while preserving architectural heritage.",
      image: "/placeholder-bywl2.png",
      location: "Heritage District",
      progress: 70,
      timeLeft: "6 months",
      units: "Mixed Use"
    },
    {
      id: 2,
      title: "Ocean View Apartments",
      description: "Luxury beachfront residential complex with panoramic ocean views and premium amenities.",
      image: "/placeholder-47e94.png",
      location: "Coastal Area", 
      progress: 45,
      timeLeft: "12 months",
      units: "150 Units"
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      description: "25-story modern office tower with cutting-edge technology and sustainable features.",
      image: "/placeholder-5tdrq.png",
      location: "Business District",
      progress: 85,
      timeLeft: "3 months",
      units: "Office Tower"
    }
  ];

  const upcomingProjects = [
    {
      id: 4,
      title: "Skyline Residential Tower",
      description: "40-story luxury residential tower with premium amenities and smart home technology.",
      image: "/placeholder-70vzb.png",
      location: "Downtown District",
      startDate: "Q1 2025",
      units: "200 Units",
      estimated: "2027"
    },
    {
      id: 5,
      title: "Green Tech Campus",
      description: "Sustainable office campus with renewable energy systems and green building certification.",
      image: "/shopping-mall-retail-complex-modern-architecture.jpg",
      location: "Tech Park Zone",
      startDate: "Q2 2025",
      units: "5000 Workers",
      estimated: "2026"
    },
    {
      id: 6,
      title: "Metro Station Complex",
      description: "Integrated transport hub with retail spaces and pedestrian connectivity.",
      image: "/placeholder-uhota.png",
      location: "City Center",
      startDate: "Q3 2025",
      units: "Mixed Use",
      estimated: "2026"
    }
  ];

  const completedProjects = [
    {
      id: 7,
      title: "Grand Plaza Complex",
      description: "Mixed-use development with retail, office, and residential spaces in the heart of the city.",
      image: "/professional-construction-team-at-modern-building-.jpg",
      location: "City Center",
      completed: "2024",
      units: "500+ Units",
      awards: "Excellence in Design"
    },
    {
      id: 8,
      title: "Innovation Hub",
      description: "State-of-the-art technology center fostering startup culture and innovation.",
      image: "/shopping-mall-retail-complex-modern-architecture.jpg",
      location: "Innovation District",
      completed: "2023",
      units: "100+ Startups",
      awards: "Green Building Award"
    },
    {
      id: 9,
      title: "Riverside Gardens",
      description: "Luxury residential community with landscaped gardens and waterfront views.",
      image: "/modern-construction-site-with-high-rise-buildings.jpg",
      location: "Riverside",
      completed: "2023",
      units: "150 Homes",
      awards: "Community Excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/80 to-white">
          <div className="absolute inset-0 bg-[url('/modern-construction-site-with-high-rise-buildings.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our journey through various construction phases - from planning to completion
            </p>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section id="ongoing" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800">Ongoing Projects</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">Currently Under Construction</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Projects in active construction phase, bringing our designs to life with precision and quality.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{project.progress}% Complete</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{project.timeLeft} left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`bg-orange-500 h-2 rounded-full transition-all duration-1000`} style={{width: `${project.progress}%`}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.units}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section id="upcoming" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Upcoming Projects</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">Future Developments</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Exciting projects in the planning and design phase, coming soon to transform communities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">Starting {project.startDate}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Est. {project.estimated}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.units}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section id="completed" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800">Completed Projects</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">Successfully Delivered</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our proudest achievements - completed projects that showcase our expertise and commitment to excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white">Completed {project.completed}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Delivered {project.completed}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.units}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>{project.awards}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}