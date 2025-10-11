"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Users, Award, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&auto=format&fit=crop&q=80",
  ];

  const teamMembers = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      title: 'Adrian Paul',
      description: 'COO & Co-Founder',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      title: 'Flualy Cual',
      description: 'Founder & CEO',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
      title: 'Naymur Rahman',
      description: 'CTO & Co-Founder',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative bg-white overflow-hidden" ref={heroRef}>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[85vh] flex items-center">
        {/* Background Image Carousel with Overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={backgroundImages[currentImageIndex]}
                alt={`Architecture ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Company Name */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Karekadu Builders
              </h1>
              <div className="h-1.5 w-24 bg-blue-500 rounded-full" />
            </motion.div>

            {/* Tagline */}
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-semibold text-blue-400 mb-8"
            >
              Designing Dreams. Building Legacies.
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl"
            >
              Karekadu Builders blends modern engineering with traditional values to craft timeless spaces that inspire living. From residential villas to commercial landmarks, we build with precision, passion, and purpose.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => router.push('/portfolio')}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80"
                alt="Construction Excellence"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Excellence Since 2008
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience, Karekadu Builders has established itself as a trusted name in construction excellence. We specialize in creating architectural masterpieces that combine aesthetic beauty with structural integrity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our commitment to quality, innovation, and client satisfaction has made us the preferred choice for residential villas, commercial complexes, and landmark projects across the region.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {[
                  "Premium Quality Construction",
                  "Timely Project Delivery",
                  "Sustainable Building Practices",
                  "Expert Engineering Team"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our Team
            </h2>
          </motion.div>

          {/* Team Accordion */}
          <div className='group flex max-md:flex-col justify-center gap-2 w-full mx-auto'>
            {teamMembers.map((item, i) => {
              return (
                <article 
                  key={item.id}
                  className='group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-blue-300'
                >
                  <div
                    className='absolute inset-0 text-white z-10 p-3 flex flex-col justify-end'
                  >
                    <h3 className='text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
                      {item.title}
                    </h3>
                    <span className='text-3xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
                      {item.description}
                    </span>
                  </div>
                  <Image
                    className='object-cover h-72 md:h-[420px] w-full'
                    src={item.url}
                    width={960}
                    height={480}
                    alt={item.title}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

