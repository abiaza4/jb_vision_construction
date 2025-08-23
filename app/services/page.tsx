import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen ">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <img
          src="/stlion.jpg"
          alt="Services hero"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive construction and infrastructure solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              What We Do
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Complete Construction{" "}
              <span className="text-green-500">Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              From planning to completion, we provide end-to-end construction
              services with the highest quality standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {[
              {
                title: "Road Construction",
                description:
                  "Professional road construction and maintenance services using modern equipment and proven techniques. We handle everything from highway construction to local road improvements.",
                features: [
                  "Highway Construction",
                  "Local Road Development",
                  "Road Maintenance",
                  "Asphalt Paving",
                  "Traffic Management",
                ],
                image: "/stlion.jpg",
              },
              {
                title: "Building Construction",
                description:
                  "Complete building construction services from foundation to finishing. We specialize in commercial, residential, and industrial construction projects.",
                features: [
                  "Commercial Buildings",
                  "Residential Complexes",
                  "Industrial Facilities",
                  "Renovation Projects",
                  "Interior Finishing",
                ],
                image: "/stlion.jpg",
              },
              {
                title: "Bridge Construction",
                description:
                  "Specialized bridge construction and infrastructure development for transportation networks. Our expertise includes both new construction and rehabilitation projects.",
                features: [
                  "Highway Bridges",
                  "Pedestrian Bridges",
                  "Railway Bridges",
                  "Bridge Rehabilitation",
                  "Structural Engineering",
                ],
                image: "/alion.jpg",
              },
              {
                title: "Transportation Services",
                description:
                  "Reliable transportation services for construction materials and equipment delivery. We ensure timely and safe delivery to all project sites.",
                features: [
                  "Material Transportation",
                  "Equipment Delivery",
                  "Heavy Haul Services",
                  "Logistics Management",
                  "Fleet Management",
                ],
                image: "/alion.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image || "/alion.jpg"}
                    alt={service.title}
                    className="rounded-lg object-cover w-full h-80"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-green-500 hover:bg-green-600">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Additional <span className="text-green-500">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              We offer a comprehensive range of specialized services to meet all
              your construction needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heavy Equipment Rental",
                description:
                  "Modern heavy equipment rental and operation services for large-scale construction projects.",
                icon: "/stlion.jpg",
              },
              {
                title: "Project Management",
                description:
                  "Complete project management services ensuring timely and budget-friendly project completion.",
                icon: "/stlion.jpg",
              },
              {
                title: "Site Preparation",
                description:
                  "Professional site preparation services including excavation, grading, and utility installation.",
                icon: "/alion.jpg",
              },
              {
                title: "Concrete Services",
                description:
                  "Comprehensive concrete services from mixing to finishing for all types of construction projects.",
                icon: "/stlion.jpg",
              },
              {
                title: "Demolition Services",
                description:
                  "Safe and efficient demolition services for residential, commercial, and industrial structures.",
                icon: "/alion.jpg",
              },
              {
                title: "Emergency Repairs",
                description:
                  "24/7 emergency repair services for critical infrastructure and construction emergencies.",
                icon: "/alion.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img
                      src={service.icon || "/alion.jpg"}
                      alt={service.title}
                      className="mx-auto w-20 h-20"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 dark:text-gray-300">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Our <span className="text-green-500">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              We follow a systematic approach to ensure every project is
              completed successfully
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Initial consultation to understand your project requirements and goals.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed project planning including design, timeline, and resource allocation.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Professional execution of the project with regular progress monitoring.",
              },
              {
                step: "04",
                title: "Completion",
                description:
                  "Final inspection, quality assurance, and project handover to the client.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-green-500">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your
            construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +1 (555) 123-4567
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
