import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import AboutSection3 from "@/components/AboutSection3"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigationbar />
      <div className="pt-16">
        <AboutSection3 />
      </div>
      <Footer />
    </div>
  )
}