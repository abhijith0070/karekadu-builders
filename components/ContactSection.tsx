import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation. Let's discuss how we can bring your construction vision to life.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Type</label>
                  <select className="w-full p-3 border border-border rounded-md bg-input">
                    <option>Select project type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Real Estate</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Office Address</div>
                    <div className="text-muted-foreground">
                      123 Construction Avenue, Building District, City 560001
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone Number</div>
                    <div className="text-muted-foreground">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Address</div>
                    <div className="text-muted-foreground">info@karekadubuilders.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Find Us on Map</h4>
              <div className="bg-primary/10 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map integration</p>
                  <p className="text-sm text-muted-foreground">Google Maps embed would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
