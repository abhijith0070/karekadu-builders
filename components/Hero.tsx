"use client";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";
import TextAnimation from '@/components/uilayouts/scroll-text';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sparkles, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";

function OrganizationHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  
  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Fixed animation variants with proper typing
  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Use bezier curve instead of string
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const scaleVariants: Variants = {
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Use bezier curve instead of string
      },
    }),
    hidden: {
      filter: "blur(10px)",
      scale: 0.95,
      opacity: 0,
    },
  };

  // Alternative simple variants without custom function
  const simpleRevealVariants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const simpleScaleVariants: Variants = {
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hidden: {
      filter: "blur(10px)",
      scale: 0.95,
      opacity: 0,
    },
  };

  // Video modal functions
  const openVideoModal = (): void => {
    setIsVideoModalOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const closeVideoModal = (): void => {
    setIsVideoModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  // Keyboard handling for video modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isVideoModalOpen) {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isVideoModalOpen]);

  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <TimelineContent
        animationNum={11}
        timelineRef={heroRef}
        customVariants={simpleRevealVariants}
        className="absolute inset-0 bg-[url('/shadow13.png')] bg-cover bg-center bg-no-repeat opacity-50"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Top Section - Text and Images */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                <TimelineContent
                  as="article"
                  animationNum={1}
                  timelineRef={heroRef}
                  customVariants={simpleRevealVariants}
                  className="space-y-4 sm:space-y-6 text-center lg:text-left"
                >
                  {/* Badge */}
                  <TimelineContent
                    animationNum={2}
                    timelineRef={heroRef}
                    customVariants={simpleRevealVariants}
                    className="inline-flex gap-2 items-center bg-black text-white w-fit py-2 px-3 text-xs sm:text-sm rounded-md mx-auto lg:mx-0"
                  >
                    <span className="bg-blue-500 px-1.5 py-0.5 rounded-sm text-[10px] sm:text-xs">NEW</span> 
                    <span className="hidden sm:inline">Building Excellence, One Project at a Time</span>
                    <span className="sm:hidden">Excellence in Building</span>
                  </TimelineContent>
                  
                  {/* Main Heading */}
                  <TimelineContent
                    as="h1"
                    animationNum={3}
                    timelineRef={heroRef}
                    customVariants={simpleScaleVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-tight"
                  >
                    <span className="block">Designed for Builders</span>
                    <span className="block mt-2 sm:mt-4">
                      <span className="bg-gradient-to-b from-black to-black/40 bg-clip-text text-transparent">
                        Built to{" "}
                      </span>
                      <TimelineContent
                        as="span"
                        animationNum={4}
                        timelineRef={heroRef}
                        customVariants={simpleScaleVariants}
                        className="text-blue-500 bg-blue-500/20 backdrop-blur-md rounded-xl border-2 border-blue-300 px-2 sm:px-3 py-1 inline-block"
                      >
                        Last
                      </TimelineContent>
                    </span>
                  </TimelineContent>
                  
                  {/* Description */}
                  <TimelineContent
                    as="p"
                    animationNum={5}
                    timelineRef={heroRef}
                    customVariants={simpleRevealVariants}
                    className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                  >
                    From residential homes to commercial complexes, Karekadu Builders delivers quality construction with precision, innovation, and dedication to excellence.
                  </TimelineContent>
                  
                  {/* CTA Buttons */}
                  <TimelineContent
                    as="div"
                    animationNum={6}
                    timelineRef={heroRef}
                    customVariants={simpleScaleVariants}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start"
                  >
                    <button className="w-full sm:w-auto text-white bg-gradient-to-t from-blue-500 to-blue-400 shadow-md shadow-blue-500/25 border border-blue-500 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                      <Sparkles size={18} />
                      Start Your Project
                    </button>
                    <button className="w-full sm:w-auto bg-neutral-100 border border-neutral-200 text-black px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md hover:bg-neutral-200 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                      Contact Us
                    </button>
                  </TimelineContent>
                </TimelineContent>
              </div>

              {/* Right Side - Images (Hidden on mobile) */}
              <div className="order-1 lg:order-2 flex justify-center lg:block">
                <TimelineContent
                  animationNum={7}
                  timelineRef={heroRef}
                  customVariants={simpleScaleVariants}
                  className="relative w-full max-w-md lg:max-w-none"
                >
                  {/* Mobile/Tablet: Single large image */}
                  <div className="block lg:hidden">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/hero.jpg"
                        alt="Karekadu Builders - Premium Construction"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Desktop: Multiple positioned images */}
                  <div className="hidden lg:block relative h-[400px] xl:h-[500px] w-full">
                    {/* Top Image */}
                    <TimelineContent
                      animationNum={8}
                      timelineRef={heroRef}
                      customVariants={simpleScaleVariants}
                      className="absolute top-0 right-0 w-36 h-36 xl:w-48 xl:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300"
                    >
                      <Image
                        src="/hero.jpg"
                        alt="Construction Project 1"
                        fill
                        className="object-cover"
                      />
                    </TimelineContent>

                    {/* Middle Image */}
                    <TimelineContent
                      animationNum={9}
                      timelineRef={heroRef}
                      customVariants={simpleScaleVariants}
                      className="absolute top-24 xl:top-32 right-24 xl:right-32 w-44 h-44 xl:w-56 xl:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10"
                    >
                      <Image
                        src="/hero.jpg"
                        alt="Construction Project 2"
                        fill
                        className="object-cover"
                      />
                    </TimelineContent>

                    {/* Bottom Image */}
                    <TimelineContent
                      animationNum={10}
                      timelineRef={heroRef}
                      customVariants={simpleScaleVariants}
                      className="absolute bottom-0 right-6 xl:right-8 w-40 h-40 xl:w-52 xl:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-300"
                    >
                      <Image
                        src="/hero.jpg"
                        alt="Construction Project 3"
                        fill
                        className="object-cover"
                      />
                    </TimelineContent>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 xl:w-24 xl:h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-8 right-32 xl:right-40 w-24 h-24 xl:w-32 xl:h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                  </div>
                </TimelineContent>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Video Card */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-20">
            <TimelineContent
              as="div"
              animationNum={15}
              timelineRef={heroRef}
              customVariants={simpleScaleVariants}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                  
                  {/* Video Section */}
                  <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden bg-black group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                    <div className="aspect-video">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                        poster="/thumbnail.png"
                      >
                        <source src="/construction-timelapse.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Play Button Overlay */}
                      <div 
                        className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                        onClick={openVideoModal}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                          <div className="w-0 h-0 border-l-[20px] sm:border-l-[24px] border-l-blue-500 border-t-[12px] sm:border-t-[14px] border-t-transparent border-b-[12px] sm:border-b-[14px] border-b-transparent ml-1"></div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        2:34
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                    <TextAnimation
                      text="Let's team up and turn ideas into reality ✨"
                      classname="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900 lowercase"
                      variants={{
                        hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
                        visible: {
                          filter: 'blur(0px)',
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.3 },
                        },
                      }}
                    />
                    
                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Watch our journey from blueprint to completion. Every project tells a story of dedication, precision, and innovation.
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        From groundbreaking to the final touches, we bring visions to life with expertise and attention to detail that makes all the difference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && createPortal(
        <AnimatePresence>
          <motion.div
            key="video-backdrop"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          />
          <motion.div
            key="video-modal"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <video
                ref={modalVideoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src="/about.mp4" type="video/mp4" />
              </video>

              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

export default OrganizationHero;
