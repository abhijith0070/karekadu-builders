"use client"

import { useParams, useRouter } from "next/navigation"
import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Home, Layers, Calendar, Building2, DollarSign, LayoutGrid, Tag, Maximize2, Briefcase, Palette } from "lucide-react"
import { Adamina } from "next/font/google"
import Image from "next/image"

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
  overview: string
  units: string
  bedrooms?: string
  builtUpArea?: string
  completionYear?: string
  constructionType?: string
  cost?: string
  floors?: string
  category?: string
  layout?: string
  scope?: string
  style?: string
  progress?: number
  timeLeft?: string
  startDate?: string
  estimated?: string
  completed?: string
  awards?: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: "Shivam",
    location: "Malappuram",
    image: "/c1.jpg",
    type: "completed",
    description: "Luxury residential complex featuring modern amenities and sustainable design principles.",
    overview: "Shivam represents the pinnacle of modern residential architecture in Malappuram. Designed with a focus on sustainable living and contemporary aesthetics, this project seamlessly blends luxury with functionality. Every detail has been carefully considered to create spaces that inspire and endure, from the carefully selected materials to the innovative spatial planning that maximizes natural light and ventilation.",
    units: "120 Units",
    bedrooms: "2-4 BHK",
    builtUpArea: "45,000 sq.ft",
    completionYear: "2024",
    constructionType: "RCC Frame Structure",
    cost: "₹25 Crores",
    floors: "8 Floors",
    category: "Residential",
    layout: "Modern Apartments",
    scope: "Design & Construction",
    style: "Contemporary",
    completed: "2024",
    awards: "Best Residential Project 2024",
    images: [
      "/c1.jpg",
      "/c2.jpg",
      "/c3.jpg",
      "/c4.jpg"
    ]
  },
  {
    id: 2,
    name: "Khayal",
    location: "Kozhikode",
    image: "/o1.jpg",
    type: "ongoing",
    description: "Contemporary mixed-use development with premium retail and residential spaces.",
    overview: "Khayal is envisioned as a landmark mixed-use development that redefines urban living in Kozhikode. This innovative project combines premium retail experiences with luxurious residential spaces, creating a vibrant community hub. The design emphasizes connectivity, sustainability, and modern aesthetics, with state-of-the-art amenities and thoughtfully planned public spaces.",
    units: "85 Units",
    bedrooms: "1-3 BHK",
    builtUpArea: "62,000 sq.ft",
    completionYear: "2025",
    constructionType: "Steel & RCC Composite",
    cost: "₹42 Crores",
    floors: "12 Floors",
    category: "Mixed-Use",
    layout: "Apartments & Retail",
    scope: "Turnkey Project",
    style: "Modern Contemporary",
    progress: 65,
    timeLeft: "8 months",
    images: [
      "/o1.jpg",
      "/o2.jpg",
      "/o3.jpg",
      "/o1.jpg"
    ]
  },
  {
    id: 3,
    name: "Alam",
    location: "Malappuram",
    image: "/shopping-mall-retail-complex-modern-architecture.jpg",
    type: "upcoming",
    description: "Innovative commercial hub designed for the modern business ecosystem.",
    overview: "Alam is set to become the premier commercial destination in Malappuram, designed specifically for the evolving needs of modern businesses. This forward-thinking project features flexible office spaces, cutting-edge technology infrastructure, and amenities that foster collaboration and productivity. The architecture reflects innovation and professionalism, creating an inspiring environment for business success.",
    units: "50,000 sq.ft",
    bedrooms: "N/A",
    builtUpArea: "50,000 sq.ft",
    completionYear: "2026",
    constructionType: "Pre-engineered Steel",
    cost: "₹18 Crores",
    floors: "5 Floors",
    category: "Commercial",
    layout: "Open Office Spaces",
    scope: "Design, Build, Operate",
    style: "Industrial Modern",
    startDate: "Q2 2025",
    estimated: "2026",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "Heritage Heights",
    location: "Thrissur",
    image: "/c11.jpg",
    type: "completed",
    description: "Elegant residential tower combining traditional aesthetics with modern comfort.",
    overview: "Heritage Heights stands as a testament to the harmonious blend of traditional Kerala architecture and modern living standards. This elegant residential tower preserves cultural heritage while incorporating contemporary amenities and design sensibilities. Each residence is thoughtfully designed to provide comfort, privacy, and a connection to the rich architectural legacy of the region.",
    units: "96 Units",
    bedrooms: "2-3 BHK",
    builtUpArea: "38,000 sq.ft",
    completionYear: "2023",
    constructionType: "RCC Frame",
    cost: "₹22 Crores",
    floors: "10 Floors",
    category: "Residential",
    layout: "Traditional Modern",
    scope: "Full Construction",
    style: "Neo-Traditional",
    completed: "2023",
    awards: "Excellence in Design Award",
    images: [
      "/c11.jpg",
      "/c12.jpg",
      "/c13.jpg",
      "/c14.jpg"
    ]
  },
  {
    id: 5,
    name: "Ocean Pearl",
    location: "Kozhikode",
    image: "/o11.jpg",
    type: "ongoing",
    description: "Premium beachfront apartments with world-class amenities and stunning views.",
    overview: "Ocean Pearl offers an exclusive beachfront living experience in Kozhikode, where luxury meets the sea. This premium residential project features apartments with panoramic ocean views, world-class amenities, and designs that maximize the connection to the natural beauty of the coastline. Every aspect is crafted to provide residents with an unparalleled lifestyle.",
    units: "144 Units",
    bedrooms: "3-4 BHK",
    builtUpArea: "72,000 sq.ft",
    completionYear: "2026",
    constructionType: "RCC with Coastal Protection",
    cost: "₹55 Crores",
    floors: "15 Floors",
    category: "Residential - Luxury",
    layout: "Beachfront Apartments",
    scope: "Premium Development",
    style: "Coastal Contemporary",
    progress: 45,
    timeLeft: "14 months",
    images: [
      "/o11.jpg",
      "/o12.jpg",
      "/o13.jpg",
      "/o11.jpg"
    ]
  },
  {
    id: 6,
    name: "Green Valley",
    location: "Kannur",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    type: "upcoming",
    description: "Eco-friendly gated community with sustainable living at its core.",
    overview: "Green Valley is a pioneering eco-friendly gated community that places sustainability at the heart of its design. This visionary project integrates green building practices, renewable energy systems, and extensive landscaping to create a healthy, environmentally responsible living environment. It represents the future of residential development with minimal environmental impact.",
    units: "200 Villas",
    bedrooms: "3-5 BHK",
    builtUpArea: "125,000 sq.ft",
    completionYear: "2027",
    constructionType: "Eco-Friendly Materials",
    cost: "₹80 Crores",
    floors: "2-3 Floors",
    category: "Residential - Villas",
    layout: "Gated Community",
    scope: "Integrated Township",
    style: "Sustainable Modern",
    startDate: "Q3 2025",
    estimated: "2027",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ]
  },
  {
    id: 7,
    name: "Royal Gardens",
    location: "Malappuram",
    image: "/placeholder-70vzb.png",
    type: "completed",
    description: "Luxury villa community with landscaped gardens and premium facilities.",
    overview: "Royal Gardens exemplifies luxury villa living with its meticulously landscaped gardens and premium facilities. This exclusive community offers spacious villas surrounded by lush greenery, providing residents with privacy, tranquility, and resort-style amenities. The project seamlessly integrates nature with sophisticated architecture.",
    units: "75 Villas",
    bedrooms: "4-5 BHK",
    builtUpArea: "95,000 sq.ft",
    completionYear: "2023",
    constructionType: "Premium RCC",
    cost: "₹65 Crores",
    floors: "2-3 Floors",
    category: "Residential - Premium Villas",
    layout: "Luxury Villas",
    scope: "Gated Community",
    style: "Mediterranean Modern",
    completed: "2023",
    awards: "Green Building Certification",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ]
  },
  {
    id: 8,
    name: "Tech Park Plaza",
    location: "Kochi",
    image: "/placeholder-uhota.png",
    type: "ongoing",
    description: "State-of-the-art office complex designed for technology companies.",
    overview: "Tech Park Plaza is a cutting-edge office complex purpose-built for the technology sector. Featuring intelligent building systems, flexible workspaces, and advanced infrastructure, this project creates an optimal environment for innovation and productivity. The design emphasizes collaboration, sustainability, and the latest in workplace technology.",
    units: "300,000 sq.ft",
    bedrooms: "N/A",
    builtUpArea: "300,000 sq.ft",
    completionYear: "2025",
    constructionType: "Smart Building Technology",
    cost: "₹95 Crores",
    floors: "18 Floors",
    category: "Commercial - IT Park",
    layout: "Tech Office Spaces",
    scope: "Smart Building Project",
    style: "Ultra-Modern",
    progress: 80,
    timeLeft: "5 months",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
    ]
  },
  {
    id: 9,
    name: "Skyline Residency",
    location: "Kozhikode",
    image: "/placeholder.jpg",
    type: "upcoming",
    description: "High-rise luxury apartments with panoramic city and sea views.",
    overview: "Skyline Residency will redefine luxury high-rise living in Kozhikode with its breathtaking panoramic views of both the city and the Arabian Sea. This prestigious project combines architectural excellence with premium amenities and smart home technology, offering residents an elevated lifestyle experience in the heart of the city.",
    units: "180 Units",
    bedrooms: "2-4 BHK Penthouses",
    builtUpArea: "85,000 sq.ft",
    completionYear: "2027",
    constructionType: "High-Rise RCC",
    cost: "₹72 Crores",
    floors: "25 Floors",
    category: "Residential - Luxury High-Rise",
    layout: "Sky Apartments",
    scope: "Luxury Development",
    style: "Contemporary Luxury",
    startDate: "Q4 2025",
    estimated: "2027",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80"
    ]
  }
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = Number(params.id)
  
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.push('/portfolio')}
            className="text-primary hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  const projectInfo = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Home, label: "Bedrooms", value: project.bedrooms || "N/A" },
    { icon: Maximize2, label: "Built-Up Area", value: project.builtUpArea || project.units },
    { icon: Calendar, label: "Completion Year", value: project.completionYear || project.estimated || "TBD" },
    { icon: Building2, label: "Construction Type", value: project.constructionType || "Standard" },
    { icon: DollarSign, label: "Project Cost", value: project.cost || "Confidential" },
    { icon: Layers, label: "Floors", value: project.floors || "Multiple" },
    { icon: Tag, label: "Category", value: project.category || "Residential" },
    { icon: LayoutGrid, label: "Layout", value: project.layout || "Custom" },
    { icon: Briefcase, label: "Scope", value: project.scope || "Full Service" },
    { icon: Palette, label: "Style", value: project.style || "Modern" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigationbar />
      
      <div className="pt-24 pb-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/portfolio')}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className={`text-sm font-medium ${adamina.className}`}>Back to Projects</span>
          </motion.button>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            
            {/* Left Column - Project Name & Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Project Name */}
              <div>
                <div className="inline-block mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                    project.type === "completed" 
                      ? "bg-green-500 text-white" 
                      : project.type === "ongoing"
                      ? "bg-orange-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                  {project.name}
                </h1>
                <p className={`text-lg text-gray-600 ${adamina.className}`}>
                  {project.description}
                </p>
              </div>

              {/* Overview Section */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className={`text-base text-gray-700 leading-relaxed ${adamina.className}`}>
                  {project.overview}
                </p>
              </div>

              {/* Awards/Recognition (if completed) */}
              {project.awards && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Recognition</h3>
                  <p className={`text-green-700 ${adamina.className}`}>{project.awards}</p>
                </div>
              )}

              {/* Progress Bar (if ongoing) */}
              {project.progress !== undefined && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-orange-900">Construction Progress</h3>
                    <span className="text-2xl font-bold text-orange-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-3 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="bg-orange-500 h-3 rounded-full"
                    />
                  </div>
                  <p className={`text-sm text-orange-700 ${adamina.className}`}>
                    Estimated completion: {project.timeLeft}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Right Column - Project Information Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Information</h2>
              <div className="space-y-5">
                {projectInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <dt className="text-sm font-bold text-gray-900 mb-1">{info.label}</dt>
                      <dd className={`text-base text-gray-700 ${adamina.className}`}>{info.value}</dd>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                >
                  <Image
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
