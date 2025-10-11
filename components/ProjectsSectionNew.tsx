"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { Adamina } from "next/font/google"

const adamina = Adamina({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type Project = {
  id: number
  name: string
  location: string
  image: string
  type: "ongoing" | "completed" | "upcoming"
  description: string
}

export default function ProjectsSection() {
  const router = useRouter()

  const featuredProjects: Project[] = [
    {
      id: 1,
      name: "Shivam",
      location: "Malappuram",
      image: "/c1.jpg",
      type: "completed",
      description: "Luxury residential complex featuring modern amenities and sustainable design principles."
    },
    {
      id: 2,
      name: "Khayal",
      location: "Kozhikode",
      image: "/o1.jpg",
      type: "ongoing",
      description: "Contemporary mixed-use development with premium retail and residential spaces."
    },
    {
      id: 3,
      name: "Alam",
      location: "Malappuram",
      image: "/shopping-mall-retail-complex-modern-architecture.jpg",
      type: "upcoming",
      description: "Innovative commercial hub designed for the modern business ecosystem."
    }
  ]

  const navigateToProject = (projectId: number) => {
    router.push(`/portfolio/${projectId}`)
  }

  const navigateToPortfolio = () => {
    router.push('/portfolio')
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h2>
            <p className={`text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${adamina.className}`}>
              Discover some of our signature developments shaping skylines and communities across Kerala
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={navigateToPortfolio}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
