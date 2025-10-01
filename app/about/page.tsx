import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AboutSection from "@/components/AboutSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}