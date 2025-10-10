"use client";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ReactLenis } from 'lenis/react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Timeline Animation Variants
const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 30,
    opacity: 0,
  },
};

const slideVariants: Variants = {
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    },
  }),
  hidden: {
    filter: "blur(10px)",
    x: -30,
    opacity: 0,
  },
};

const mapVariants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    },
  },
  hidden: {
    filter: "blur(10px)",
    scale: 0.95,
    opacity: 0,
  },
};

// Social Media Links Component
const SocialLinks = ({ timelineRef }: { timelineRef: React.RefObject<HTMLElement> }) => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn, color: 'hover:text-blue-700' },
    { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram, color: 'hover:text-pink-600' }
  ];

  return (
    <TimelineContent
      animationNum={8}
      timelineRef={timelineRef}
      customVariants={slideVariants}
      className="flex gap-6 mt-8"
      as="div"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 ${social.color} transition-colors duration-300 text-2xl`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.name}
          >
            <Icon />
          </motion.a>
        );
      })}
    </TimelineContent>
  );
};

// Map Component (Google Maps Embed)
const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.665479794234!2d72.8570515!3d21.2184067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0bb3b06475%3A0x5c5e1b8c4c6f7b8a!2sManijari%2C%20Navsari%2C%20Gujarat%20396321!5e0!3m2!1sen!2sin!4v1697045234567!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Karekadu Builders Location - Manjari, Navsari, Gujarat"
      />
    </div>
  );
};

export default function ContactSection() {
  const timelineRef = useRef<HTMLElement>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      alert("Thank you! Your message has been sent successfully.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <ReactLenis root>
      <section 
        ref={timelineRef} 
        className="min-h-screen bg-gray-50 py-16 px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <TimelineContent
            animationNum={1}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="text-center mb-16"
            as="div"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-light text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              GET IN <span className="font-normal text-primary">TOUCH</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss your next construction project
            </motion.p>
          </TimelineContent>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Content & Form */}
            <div className="space-y-12">
              
              {/* Hero Text */}
              <TimelineContent
                animationNum={2}
                timelineRef={timelineRef}
                customVariants={slideVariants}
                as="div"
              >
                <h1 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
                  LET'S BUILD YOUR<br />
                  DREAM <span className="text-primary font-semibold">PROJECT</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  If you would like to work with us or just want to get in touch, we'd love to hear from you!
                </p>
              </TimelineContent>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-8">
                
                {/* Address */}
                <TimelineContent
                  animationNum={3}
                  timelineRef={timelineRef}
                  customVariants={slideVariants}
                  as="div"
                >
                  <h3 className="text-gray-800 font-semibold text-lg mb-3">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Karekadu Builders<br />
                    Manjari, Navsari<br />
                    Gujarat 396321
                  </p>
                </TimelineContent>

                {/* Email */}
                <TimelineContent
                  animationNum={4}
                  timelineRef={timelineRef}
                  customVariants={slideVariants}
                  as="div"
                >
                  <h3 className="text-gray-800 font-semibold text-lg mb-3">Email</h3>
                  <a 
                    href="mailto:info@karekadubuilders.com" 
                    className="text-gray-600 text-sm hover:text-primary transition-colors duration-300"
                  >
                    info@karekadubuilders.com
                  </a>
                </TimelineContent>
              </div>

              {/* Phone Number */}
              <TimelineContent
                animationNum={5}
                timelineRef={timelineRef}
                customVariants={slideVariants}
                as="div"
              >
                <motion.a 
                  href="tel:+918848208571"
                  className="inline-flex items-center text-2xl lg:text-3xl font-light text-primary hover:text-primary/80 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  +91 8848208571
                </motion.a>
              </TimelineContent>

              {/* Social Media Links */}
              <SocialLinks timelineRef={timelineRef} />

              {/* Contact Form */}
              <TimelineContent
                animationNum={9}
                timelineRef={timelineRef}
                customVariants={revealVariants}
                className="bg-white  shadow-md p-6 lg:p-8"
                as="div"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-0 py-3 text-gray-800 bg-transparent border-0 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-0 py-3 text-gray-800 bg-transparent border-0 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-0 py-3 text-gray-800 bg-transparent border-0 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <textarea
                      {...register("message")}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-0 py-3 text-gray-800 bg-transparent border-0 border-b border-gray-200 focus:border-primary focus:outline-none resize-none transition-colors duration-300 text-sm"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </TimelineContent>
            </div>

            {/* Right Side - Map */}
            <TimelineContent
              animationNum={6}
              timelineRef={timelineRef}
              customVariants={mapVariants}
              className="lg:sticky lg:top-8"
              as="div"
            >
              <motion.div
                className="h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <GoogleMapEmbed />
              </motion.div>
            </TimelineContent>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
