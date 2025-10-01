"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial animations
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-fade-in-up');
        titleRef.current.classList.remove('scroll-animate');
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in-up');
        subtitleRef.current.classList.remove('scroll-animate');
      }
    }, 600);

    const timer3 = setTimeout(() => {
      if (buttonsRef.current) {
        buttonsRef.current.classList.add('animate-fade-in-up');
        buttonsRef.current.classList.remove('scroll-animate');
      }
    }, 900);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[url('/modern-construction-site-with-high-rise-buildings.jpg')] bg-cover bg-center opacity-20 parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundPosition: `center ${scrollY * 0.3}px`
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance scroll-animate"
        >
          Every Break Needs a Restart
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/90 mb-8 text-pretty scroll-animate"
        >
          Building dreams with precision, trust, and excellence. Your vision, our expertise.
        </p>
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate"
        >
          <button className="bg-secondary hover:bg-secondary/90 hover:scale-105 text-secondary-foreground px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            Start Your Project
          </button>
          <Link href="/projects">
            <button className="border border-white text-white hover:bg-white hover:text-primary hover:scale-105 bg-transparent px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
