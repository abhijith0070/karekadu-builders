import Navigationbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import ContactSection from "@/components/ContactSection"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigationbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}