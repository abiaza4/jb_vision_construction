"use client";

import { ImageSlider } from "@/components/image-slider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header currentPage="home" />

      {/* Hero Slider */}
      <section className="relative">
        <ImageSlider />
      </section>

      {/* Stats Section */}
      <section className="bg-green-500 py-16 dark:bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Workers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
                About Us
              </Badge>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">
                Your Trusted Partner in
                <span className="text-green-500"> Construction</span>
              </h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                With over 15 years of experience in the construction industry,
                we have established ourselves as a leading provider of quality
                construction and road services. Our commitment to excellence and
                customer satisfaction has made us the preferred choice for
                clients across the region.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Quality construction materials and equipment",
                  "Experienced and certified professionals",
                  "Timely project completion",
                  "24/7 customer support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-green-500 hover:bg-green-600">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative h-96 md:h-[400px] w-full">
              <Image
                src="/stlion.jpg"
                alt="Construction team"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              What We <span className="text-green-500">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              We provide comprehensive construction and infrastructure services
              to meet all your project needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Road Construction",
                description:
                  "Professional road construction and maintenance services with modern equipment and techniques.",
                image: "/alion.jpg",
              },
              {
                title: "Building Construction",
                description:
                  "Complete building construction services from foundation to finishing with quality materials.",
                image: "/alion.jpg",
              },
              {
                title: "Bridge Construction",
                description:
                  "Specialized bridge construction and infrastructure development for transportation networks.",
                image: "/alion.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 dark:text-gray-300">
                      {service.description}
                    </p>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white hover:border-transparent bg-transparent"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-20 bg-black text-white dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your
                <span className="text-green-400"> Project?</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Contact us today for a free consultation and quote. Our team is
                ready to help you bring your construction project to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span>info@jbvision.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>123 Construction Ave, City, State 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg dark:bg-gray-700">
              <h3 className="text-2xl font-semibold mb-6">Get a Quote</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-600"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-600"
                />
                <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-600">
                  <option>Select Service</option>
                  <option>Road Construction</option>
                  <option>Building Construction</option>
                  <option>Bridge Construction</option>
                  <option>Transportation Services</option>
                </select>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-600"
                />
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
