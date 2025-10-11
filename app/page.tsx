import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ProjectsSection from "@/components/ProjectsSectionNew"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Faqs2 from "@/components/FaqSection"
import WorkSection from "@/components/WorkSection"
import Navigationbar from "@/components/Navigation"
import { Building2, Home, Building, Wrench, MapPin, Phone, Mail, Star, Users, Award, Clock } from "lucide-react"

export default function KarekaduBuilders() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
    {/* <Navbar /> */}
    <Navigationbar />
    <Hero />

  <AboutSection />
  <ServicesSection />
  <WorkSection />
  <ProjectsSection />
  <TestimonialsSection />
  <Faqs2 />
  <ContactSection />
  <Footer />
    </div>
  )
}
