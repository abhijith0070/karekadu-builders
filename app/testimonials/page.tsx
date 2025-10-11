import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigationbar />
      <div className="pt-16">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  )
}