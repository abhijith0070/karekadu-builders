"use client";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sparkles, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";

function OrganizationHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 992px)");
  
  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      scale: 0.8,
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
    <section ref={heroRef} className="min-h-screen relative pb-10 pt-4">
      <TimelineContent
        animationNum={11}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="absolute inset-0 bg-[url('/shadow13.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* Updated Hero Section with Left Text and Right Images */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <TimelineContent
            as="article"
            animationNum={1}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="text-neutral-800 space-y-6 relative z-10 text-left"
          >
            <TimelineContent
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-2 items-center mb-4 bg-black text-white w-fit py-1 px-1.5 sm:text-sm text-xs rounded-md cursor-pointer"
            >
              <span className="bg-blue-500 px-1 rounded-sm">NEW</span> Building Excellence, One Project at a Time
            </TimelineContent>
            
            <TimelineContent
              as="h1"
              animationNum={3}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              className="2xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-900 capitalize"
            >
              Designed for Builders
              {!isMobile && <br />}
              <span className="pt-3 inline-block 2xl:text-7xl sm:text-6xl text-4xl">
                <span className="bg-gradient-to-b from-black to-black/40 bg-clip-text text-transparent">
                  Built to{" "}
                </span>
                <TimelineContent
                  as="span"
                  animationNum={4}
                  timelineRef={heroRef}
                  customVariants={scaleVariants}
                  className="text-blue-500 text-shadow capitalize bg-blue-500/20 backdrop-blur-md rounded-xl border-2 border-blue-300 px-2 inline-block"
                >
                  Last
                </TimelineContent>
              </span>
            </TimelineContent>
            
            <TimelineContent
              as="p"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="2xl:text-lg sm:text-base text-sm text-gray-600 max-w-lg"
            >
              From residential homes to commercial complexes, Karekadu Builders delivers quality construction with precision, innovation, and dedication to excellence.
            </TimelineContent>
            
            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              className="flex gap-4 mt-8"
            >
              <button className="text-white bg-gradient-to-t from-blue-500 to-blue-400 shadow-md shadow-blue-500 border border-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all">
                <Sparkles size={20} />
                Start Your Project
              </button>
              <button className="bg-neutral-100 border border-neutral-200 text-black px-6 py-3 rounded-lg flex items-center gap-2 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-neutral-200 transition-all">
                Contact Us
              </button>
            </TimelineContent>
          </TimelineContent>

          {/* Right Side - Images */}
          <TimelineContent
            animationNum={7}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative lg:block hidden"
          >
            <div className="relative h-[500px] w-full">
              {/* Top Image */}
              <TimelineContent
                animationNum={8}
                timelineRef={heroRef}
                customVariants={scaleVariants}
                className="absolute top-0 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <Image
                  src="/hero.jpg"
                  alt="Construction Project 1"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </TimelineContent>

              {/* Middle Image */}
              <TimelineContent
                animationNum={9}
                timelineRef={heroRef}
                customVariants={scaleVariants}
                className="absolute top-32 right-32 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10"
              >
                <Image
                  src="/hero.jpg"
                  alt="Construction Project 2"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </TimelineContent>

              {/* Bottom Image */}
              <TimelineContent
                animationNum={10}
                timelineRef={heroRef}
                customVariants={scaleVariants}
                className="absolute bottom-0 right-8 w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-300"
              >
                <Image
                  src="/hero.jpg"
                  alt="Construction Project 3"
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </TimelineContent>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-40 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </TimelineContent>
        </div>
      </div>

      {/* Video Card Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <TimelineContent
          as="figure"
          animationNum={15}
          timelineRef={heroRef}
          customVariants={scaleVariants}
          className="group p-2 bg-white rounded-lg w-full overflow-hidden"
        >
          <div className="bg-gradient-to-t to-neutral-100 from-neutral-50 rounded-lg p-4 h-80 flex gap-4 relative">
            {/* Video Section - Left Side */}
            <div className="flex-1 relative rounded-lg overflow-hidden bg-black group-hover:scale-105 transition-transform cursor-pointer">
              <video
                ref={videoRef}
                className="w-full h-full object-cover object-center"
                muted
                loop
                playsInline
                poster="/thumbnail.png"
              >
                <source src="/construction-timelapse.mp4" type="video/mp4" />
              </video>
              
              {/* Video Overlay with Play Button */}
              <div 
                className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10"
                onClick={openVideoModal}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <div className="w-0 h-0 border-l-[20px] border-l-blue-500 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                2:34
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="flex-1 flex flex-col justify-center px-4">
              <div className="space-y-4">
                <div>
                  <span className="text-primary font-semibold text-sm">SHOWCASE</span>
                  <h3 className="text-xl font-bold text-black mt-1 leading-tight">
                    Watch Our Construction Process
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  See how we transform empty lots into beautiful homes. From foundation 
                  to finishing touches, witness our{" "}
                  <span className="text-black font-semibold">expert craftsmanship</span>{" "}
                  and attention to detail in this time-lapse showcase.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional construction team</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Quality materials & equipment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>On-time project delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
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
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Full Screen Video */}
              <video
                ref={modalVideoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src="/about.mp4" type="video/mp4" />
              </video>

              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
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
