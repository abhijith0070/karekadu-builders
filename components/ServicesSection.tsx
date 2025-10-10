"use client";
import { OrbitingCircles } from "@/components/ui/orbit-circle";
import { Ripple } from "@/components/ui/ripple";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { TrendingUp, Hammer, Building2, Wrench, HardHat, Ruler } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const ServicesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

  const percentageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 2.4,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      transition: {
        delay: 3.2 + i * 0.3,
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1] as any,
      },
    }),
  };

  return (
    <section className="max-w-7xl mx-auto p-4" ref={featuresRef}>
      <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
        <TimelineContent
          as="h1"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="md:text-5xl sm:text-4xl text-3xl font-medium"
        >
          Our Construction Services
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
        >
          From residential homes to commercial complexes, we deliver quality construction with precision, innovation, and dedication to excellence across all project types.
        </TimelineContent>
      </article>
      <div className="sm:grid sm:grid-cols-12 gap-4 sm:space-y-0 space-y-4">
        {/* Our Expertise */}
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-6 flex flex-col items-center justify-center overflow-hidden relative w-full border border-neutral-200 bg-gradient-to-b from-neutral-100 rounded-lg h-[450px]"
        >
          <motion.div
            className="h-20 w-20 font-semibold bg-primary/10 rounded-full shadow-[inset_3px_4px_5px_0px_rgba(68,73,127,0.3),inset_-2px_-2px_5px_0px_rgba(255,255,255,0.5)] grid place-items-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Building2 className="w-10 h-10 text-primary" />
          </motion.div>

          <OrbitingCircles iconSize={80}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-primary shadow-lg shadow-primary/50 grid place-items-center"
            >
              <Hammer className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-secondary shadow-lg shadow-secondary/50 grid place-items-center"
            >
              <HardHat className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-orange-500 shadow-lg shadow-orange-400 grid place-items-center"
            >
              <Wrench className="w-6 h-6 text-white" />
            </motion.div>
          </OrbitingCircles>

          <OrbitingCircles iconSize={80} radius={100} reverse speed={2}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-blue-600 shadow-lg shadow-blue-500 grid place-items-center"
            >
              <Building2 className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 shadow-lg shadow-indigo-500 grid place-items-center"
            >
              <Ruler className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-400 grid place-items-center"
            >
              <HardHat className="w-6 h-6 text-white" />
            </motion.div>
          </OrbitingCircles>

          <OrbitingCircles iconSize={80} radius={220} reverse speed={1}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-teal-600 shadow-lg shadow-teal-500 grid place-items-center"
            >
              <Hammer className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-yellow-500 shadow-lg shadow-yellow-400 grid place-items-center"
            >
              <Wrench className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-red-600 shadow-lg shadow-red-500 grid place-items-center"
            >
              <Building2 className="w-6 h-6 text-white" />
            </motion.div>
          </OrbitingCircles>

          <article className="absolute right-0 bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent p-6 pt-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Comprehensive Services
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              From residential construction to commercial projects, we provide end-to-end solutions with expert craftsmanship and modern techniques.
            </p>
          </article>
        </TimelineContent>

        {/* Project Success Rate */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-6 border border-neutral-200 rounded-lg p-4 group flex flex-col justify-between gap-5"
        >
          <article>
            <motion.h1
              className="lg:text-4xl text-3xl font-semibold"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Project Success Rate
            </motion.h1>
            <motion.p
              className="lg:text-sm text-xs text-gray-600"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              Our commitment to quality and timely delivery ensures exceptional results. Track our performance metrics and client satisfaction rates.
            </motion.p>
          </article>

          <motion.div
            className="bg-neutral-100 rounded-md w-full h-80 mx-auto overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <motion.div
              className="flex justify-between p-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              <h1 className="text-2xl capitalize font-medium">Completion Rate</h1>
              <div className="text-end">
                <motion.span
                  className="text-xl font-semibold flex gap-2 items-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.6, duration: 0.4, type: "spring" }}
                >
                  98%{" "}
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: -90, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                  >
                    <TrendingUp
                      className="fill-green-500 stroke-green-500"
                      size={20}
                    />
                  </motion.div>
                </motion.span>
                <span className="text-xl block">On-Time</span>
              </div>
            </motion.div>

            <div className="relative w-[32rem] h-[32rem] mx-auto grid place-content-center">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full [background:conic-gradient(#44497f_0_85%,#10b981_0_98%,#e5e5e5_0_2%)]"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 3.0, duration: 1.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-0 w-full h-full rounded-full [background:radial-gradient(#0f172a_0_1px,#0000_1px)_50%_50%/6px_6px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              />
              <motion.div
                className="h-72 w-72 rounded-full bg-neutral-100 relative z-10 flex justify-center items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
              >
                <motion.span
                  className="text-8xl font-semibold -translate-y-10 text-primary"
                  initial={{ y: 0 }}
                  animate={{ y: -40 }}
                  transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
                >
                  98%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </TimelineContent>

        {/* Service Distribution */}
        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-7 relative border border-neutral-200 p-4 rounded-xl overflow-hidden"
        >
          <article className="w-full bg-gradient-to-t font-helvetica from-white via-white to-transparent">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Service Distribution
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Our diverse portfolio spans across multiple construction sectors, showcasing our expertise in residential, commercial, industrial, and renovation projects.
            </p>
          </article>
          <div className="relative space-y-4 pt-6">
            {[
              {
                width: "85%",
                color: "#44497f",
                borderColor: "border-primary",
                percentage: "45%",
                platform: "Residential",
              },
              {
                width: "65%",
                color: "#10b981",
                borderColor: "border-secondary",
                percentage: "30%",
                platform: "Commercial",
              },
              {
                width: "45%",
                color: "#f97316",
                borderColor: "border-orange-500",
                percentage: "15%",
                platform: "Industrial",
              },
              {
                width: "35%",
                color: "#3b82f6",
                borderColor: "border-blue-500",
                percentage: "10%",
                platform: "Renovation",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.8 + i * 0.2, duration: 0.5 }}
              >
                <motion.div
                  className={`border-r-8 ${item.borderColor} h-16`}
                  style={{
                    width: item.width,
                    background: `repeating-linear-gradient(-45deg, transparent 0 8.5px, ${item.color} 9px 10px) 0 0/calc(100% - 6px) 100% no-repeat`,
                  }}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
                <motion.p
                  className="text-xl flex flex-col justify-end text-end pl-10"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.4 + i * 0.2, duration: 0.4 }}
                >
                  <span className="font-semibold">{item.percentage}</span>
                  <span className="text-gray-600">{item.platform}</span>
                </motion.p>
              </motion.div>
            ))}
          </div>
        </TimelineContent>

        {/* Quality Assurance */}
        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-5 relative rounded-xl overflow-hidden border border-neutral-200"
        >
          <div className="relative h-[450px] w-full grid place-content-center">
            <motion.div
              className="w-24 h-24 bg-primary/10 rounded-2xl shadow-xl grid place-items-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 2.6,
                duration: 1.0,
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              <HardHat className="w-12 h-12 text-primary" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.6 }}
            >
              <Ripple />
            </motion.div>
          </div>
          <article className="absolute right-0 top-0 left-0 w-full bg-gradient-to-b from-white via-white to-transparent p-6 pb-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Quality Assurance
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Every project undergoes rigorous quality checks and safety protocols. Our certified team ensures compliance with industry standards and building codes.
            </p>
          </article>
        </TimelineContent>
      </div>
    </section>
  );
};

export default ServicesSection;