import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import AboutSection3 from "@/components/AboutSection3"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigationbar />
      </div>
      <AboutSection3 />
      <Footer />
    </div>
  )
}