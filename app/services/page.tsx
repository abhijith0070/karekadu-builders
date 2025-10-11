import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import ServicesSection from "@/components/ServicesSection"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigationbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  )
}