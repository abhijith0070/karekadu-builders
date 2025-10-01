import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ServicesSection from "@/components/ServicesSection"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  )
}