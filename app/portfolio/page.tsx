"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { Adamina } from "next/font/google"

const adamina = Adamina({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type ProjectType = "all" | "ongoing" | "completed" | "upcoming"

type Project = {
  id: number
  name: string
  location: string
  image: string
  type: "ongoing" | "completed" | "upcoming"
  description: string
  units: string
  progress?: number
  timeLeft?: string
  startDate?: string
  estimated?: string
  completed?: string
  awards?: string
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all")
  const router = useRouter()

  const projects: Project[] = [
    {
      id: 1,
      name: "Shivam",
      location: "Malappuram",
      image: "/c1.jpg",
      type: "completed",
      description: "Luxury residential complex featuring modern amenities and sustainable design principles.",
      units: "120 Units",
      completed: "2024",
      awards: "Best Residential Project 2024"
    },
    {
      id: 2,
      name: "Khayal",
      location: "Kozhikode",
      image: "/o1.jpg",
      type: "ongoing",
      description: "Contemporary mixed-use development with premium retail and residential spaces.",
      units: "85 Units",
      progress: 65,
      timeLeft: "8 months"
    },
    {
      id: 3,
      name: "Alam",
      location: "Malappuram",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      type: "upcoming",
      description: "Innovative commercial hub designed for the modern business ecosystem.",
      units: "50,000 sq.ft",
      startDate: "Q2 2025",
      estimated: "2026"
    },
    {
      id: 4,
      name: "Heritage Heights",
      location: "Thrissur",
      image: "/c11.jpg",
      type: "completed",
      description: "Elegant residential tower combining traditional aesthetics with modern comfort.",
      units: "96 Units",
      completed: "2023",
      awards: "Excellence in Design Award"
    },
    {
      id: 5,
      name: "Ocean Pearl",
      location: "Kozhikode",
      image: "/o11.jpg",
      type: "ongoing",
      description: "Premium beachfront apartments with world-class amenities and stunning views.",
      units: "144 Units",
      progress: 45,
      timeLeft: "14 months"
    },
    {
      id: 6,
      name: "Green Valley",
      location: "Kannur",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      type: "upcoming",
      description: "Eco-friendly gated community with sustainable living at its core.",
      units: "200 Villas",
      startDate: "Q3 2025",
      estimated: "2027"
    },
    {
      id: 7,
      name: "Royal Gardens",
      location: "Malappuram",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      type: "completed",
      description: "Luxury villa community with landscaped gardens and premium facilities.",
      units: "75 Villas",
      completed: "2023",
      awards: "Green Building Certification"
    },
    {
      id: 8,
      name: "Tech Park Plaza",
      location: "Kochi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      type: "ongoing",
      description: "State-of-the-art office complex designed for technology companies.",
      units: "300,000 sq.ft",
      progress: 80,
      timeLeft: "5 months"
    },
    {
      id: 9,
      name: "Skyline Residency",
      location: "Kozhikode",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      type: "upcoming",
      description: "High-rise luxury apartments with panoramic city and sea views.",
      units: "180 Units",
      startDate: "Q4 2025",
      estimated: "2027"
    }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  const navigateToProject = (projectId: number) => {
    router.push(`/portfolio/${projectId}`)
  }

  const filterButtons: { label: string; value: ProjectType }[] = [
    { label: "Show All", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
    { label: "Upcoming", value: "upcoming" }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F8FA" }}>
      <Navigationbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Projects
            </h1>
            <p className={`text-base md:text-lg text-gray-600 leading-relaxed ${adamina.className}`}>
              Explore our collection of exceptional projects that define modern living and architectural excellence
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === button.value
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                {button.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigateToProject(project.id)}
                  className="group bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.type === "completed" 
                          ? "bg-green-500 text-white" 
                          : project.type === "ongoing"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5">
                    <h3 
                      className={`text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight ${adamina.className}`}
                    >
                      {project.name}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-gray-600 mb-3 text-sm ${adamina.className}`}>
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>

                    <p className={`text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed ${adamina.className}`}>
                      {project.description}
                    </p>

                    {/* Read More Link */}
                    <div className={`flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300 ${adamina.className}`}>
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className={`text-gray-500 text-base ${adamina.className}`}>
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
