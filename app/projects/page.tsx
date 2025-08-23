import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, DollarSign, Clock } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen ">
      <Header currentPage="projects" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <img
          src="/stlion.jpg"
          alt="Projects hero"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-green-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-200">
              Showcasing our expertise through successful project completions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="default"
              className="bg-green-500 hover:bg-green-600"
            >
              All Projects
            </Button>
            <Button
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
            >
              Road Construction
            </Button>
            <Button
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
            >
              Building Construction
            </Button>
            <Button
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
            >
              Bridge Construction
            </Button>
            <Button
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
            >
              Infrastructure
            </Button>
            <Button
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
            >
              Residential
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              Featured Projects
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Our Latest <span className="text-green-500">Achievements</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Take a look at some of our most recent and notable project
              completions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {[
              {
                title: "Metropolitan Highway Bridge",
                category: "Infrastructure",
                location: "Downtown Metro Area",
                duration: "18 months",
                budget: "$2.5M",
                completion: "2024",
                description:
                  "A major infrastructure project involving the construction of a 500-meter highway bridge connecting two major districts. The project included advanced engineering solutions and sustainable construction practices.",
                image: "final_copy-removebg-preview.png",
                features: [
                  "Advanced Engineering",
                  "Sustainable Materials",
                  "Traffic Management",
                  "Safety Protocols",
                ],
              },
              {
                title: "Corporate Office Complex",
                category: "Commercial",
                location: "Business District",
                duration: "24 months",
                budget: "$4.2M",
                completion: "2023",
                description:
                  "A state-of-the-art 15-story corporate office complex featuring modern architecture, energy-efficient systems, and premium finishing throughout all floors.",
                image: "/alion.jpg",
                features: [
                  "LEED Certified",
                  "Smart Building Systems",
                  "Premium Finishes",
                  "Parking Facility",
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800"
              >
                <img
                  src={project.image || "/stlion.jpg"}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-green-500 text-white">
                      {project.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      {project.completion}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {project.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {project.budget}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Completed {project.completion}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 dark:text-white">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="dark:bg-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-green-500 hover:bg-green-600">
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Project <span className="text-green-500">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Browse through our comprehensive portfolio of completed projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Complex Phase 1",
                category: "Residential",
                image: "/final_copy-removebg-preview.png",
              },
              {
                title: "Industrial Warehouse Facility",
                category: "Industrial",
                image: "/alion.jpg",
              },
              {
                title: "City Center Shopping Mall",
                category: "Commercial",
                image: "/stlion.jpg",
              },
              {
                title: "Airport Terminal Extension",
                category: "Infrastructure",
                image: "/alion.jpg",
              },
              {
                title: "University Campus Building",
                category: "Educational",
                image: "/final_copy-removebg-preview.png",
              },
              {
                title: "Healthcare Center",
                category: "Healthcare",
                image: "/stlion.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-green-500 mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-green-500 hover:bg-green-600">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-black text-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Project <span className="text-green-500">Statistics</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">
                $50M+
              </div>
              <div className="text-lg">Total Project Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
