"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

export default function ProjectsSection() {
  const featuredProjects = [
    { 
      id: 1, 
      title: "Grand Plaza Complex", 
      image: "/professional-construction-team-at-modern-building-.jpg",
      description: "Mixed-use development with retail, office, and residential spaces in the heart of the city.",
      location: "City Center",
      status: "Completed 2024",
      units: "500+ Units",
      category: "Mixed Use"
    },
    { 
      id: 2, 
      title: "Skyline Residential Tower", 
      image: "/modern-construction-site-with-high-rise-buildings.jpg",
      description: "40-story luxury residential tower with premium amenities and smart home technology.",
      location: "Downtown District",
      status: "Starting Q1 2025",
      units: "200 Units",
      category: "Residential"
    },
    { 
      id: 3, 
      title: "Innovation Hub", 
      image: "/shopping-mall-retail-complex-modern-architecture.jpg",
      description: "State-of-the-art technology center fostering startup culture and innovation.",
      location: "Innovation District",
      status: "Completed 2023",
      units: "100+ Startups",
      category: "Commercial"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover some of our signature developments shaping skylines and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    project.status.includes('Completed') ? 'bg-green-500' : 
                    project.status.includes('Starting') ? 'bg-blue-500' : 'bg-orange-500'
                  } text-white`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{project.units}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.status.replace('Starting ', '').replace('Completed ', '')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}