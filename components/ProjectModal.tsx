"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Award, Clock, CheckCircle, TrendingUp, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  description: string
  image: string
  location: string
  // Ongoing project fields
  progress?: number
  timeLeft?: string
  units: string
  // Upcoming project fields
  startDate?: string
  estimated?: string
  // Completed project fields
  completed?: string
  awards?: string
}

type ProjectModalProps = {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  // Generate multiple images for carousel (using the same image with different filters for demo)
  const projectImages = [
    project.image,
    project.image,
    project.image,
    project.image,
    project.image
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const getProjectType = () => {
    if (project.progress !== undefined) return 'ongoing'
    if (project.startDate) return 'upcoming'
    return 'completed'
  }

  const projectType = getProjectType()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full shadow-lg"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="h-full flex flex-col">
              {/* Image Carousel */}
              <div className="relative h-1/2 lg:h-3/5 bg-gray-100">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  {projectType === 'ongoing' && (
                    <Badge className="bg-orange-500 text-white">
                      {project.progress}% Complete
                    </Badge>
                  )}
                  {projectType === 'upcoming' && (
                    <Badge className="bg-blue-500 text-white">
                      Starting {project.startDate}
                    </Badge>
                  )}
                  {projectType === 'completed' && (
                    <Badge className="bg-green-500 text-white">
                      Completed {project.completed}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                  {/* Project Title and Type Badge */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      {projectType === 'ongoing' && (
                        <Badge className="bg-orange-100 text-orange-800">Ongoing Project</Badge>
                      )}
                      {projectType === 'upcoming' && (
                        <Badge className="bg-blue-100 text-blue-800">Upcoming Project</Badge>
                      )}
                      {projectType === 'completed' && (
                        <Badge className="bg-green-100 text-green-800">Completed Project</Badge>
                      )}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="font-medium">Location:</span>
                        <span>{project.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-medium">Scale:</span>
                        <span>{project.units}</span>
                      </div>

                      {projectType === 'ongoing' && project.timeLeft && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Time Remaining:</span>
                          <span>{project.timeLeft}</span>
                        </div>
                      )}

                      {projectType === 'upcoming' && project.estimated && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">Estimated Completion:</span>
                          <span>{project.estimated}</span>
                        </div>
                      )}

                      {projectType === 'completed' && project.completed && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">Completed:</span>
                          <span>{project.completed}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {projectType === 'ongoing' && project.progress !== undefined && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">Progress</span>
                            <span className="text-orange-600 font-semibold">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="bg-orange-500 h-3 rounded-full"
                            />
                          </div>
                        </div>
                      )}

                      {projectType === 'completed' && project.awards && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-medium">Recognition:</span>
                          <span className="text-green-600 font-semibold">{project.awards}</span>
                        </div>
                      )}

                      {projectType === 'upcoming' && (
                        <div className="flex items-center gap-3 text-blue-600">
                          <Star className="h-5 w-5" />
                          <span className="font-medium">Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Features/Highlights */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Sustainable Design</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Smart Technology Integration</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Premium Materials</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Modern Amenities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}