"use client";

import { Badge } from "@/components/ui/badge"
import { Users, Award } from "lucide-react"
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('scroll-animate');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const leftElements = [badgeRef.current, titleRef.current, textRef.current, statsRef.current, teamRef.current];
    leftElements.forEach((el, index) => {
      if (el) {
        el.classList.add('scroll-animate');
        setTimeout(() => observer.observe(el), index * 100);
      }
    });

    // Image with slide-in from right
    if (imageRef.current) {
      imageRef.current.classList.add('scroll-animate');
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-right');
              entry.target.classList.remove('scroll-animate');
            }
          });
        },
        { threshold: 0.1 }
      );
      imageObserver.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={badgeRef} className="scroll-animate">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">About Karekadu Builders</Badge>
            </div>
            <h2 ref={titleRef} className="text-4xl font-bold text-foreground mb-6 text-balance scroll-animate">
              Building Excellence Since Day One
            </h2>
            <p ref={textRef} className="text-muted-foreground text-lg mb-6 leading-relaxed scroll-animate">
              At Karekadu Builders, we believe that every construction project is an opportunity to create something
              extraordinary. With years of experience in residential, commercial, and real estate development, we
              bring unmatched expertise and dedication to every project.
            </p>
            <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-8 scroll-animate">
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
            <div ref={teamRef} className="flex items-center gap-4 scroll-animate">
              <Users className="h-6 w-6 text-secondary" />
              <span className="text-muted-foreground">Expert team of certified professionals</span>
            </div>
          </div>
          <div ref={imageRef} className="relative scroll-animate">
            <img 
              src="/professional-construction-team-at-modern-building-.jpg" 
              alt="Karekadu Builders team" 
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
