"use client";

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Building2, Wrench } from "lucide-react"
import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('scroll-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Title animation
    if (titleRef.current) {
      titleRef.current.classList.add('scroll-animate');
      observer.observe(titleRef.current);
    }

    // Cards staggered animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        setTimeout(() => {
          const cardObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setTimeout(() => {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.classList.remove('scroll-animate');
                  }, index * 150);
                }
              });
            },
            { threshold: 0.1 }
          );
          cardObserver.observe(card);
        }, 100);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 scroll-animate">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Services</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From residential homes to commercial complexes, we deliver exceptional results across all construction
            sectors.
          </p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="service-card group hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-500 border-0 bg-card scroll-animate">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Residential</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Custom homes, apartments, and residential complexes built with attention to detail and modern design
                principles.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="service-card group hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-500 border-0 bg-card scroll-animate">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Commercial</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic
                appeal.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="service-card group hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-500 border-0 bg-card scroll-animate">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Real Estate</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Large-scale real estate development projects from planning to completion with investment-grade
                quality.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="service-card group hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-500 border-0 bg-card scroll-animate">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Renovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Complete renovation and remodeling services to transform existing spaces into modern, functional
                environments.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
