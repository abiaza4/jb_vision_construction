import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <img
          src="/alion.jpg"
          alt="Blog hero"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-green-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-200">
              Latest news, insights, and updates from the construction industry
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="bg-green-500 hover:bg-green-600"
              >
                All Posts
              </Button>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
              >
                Construction Tips
              </Button>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
              >
                Industry News
              </Button>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
              >
                Project Updates
              </Button>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
              >
                Safety
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              Featured Article
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Latest <span className="text-green-500">Insights</span>
            </h2>
          </div>

          <Card className="overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src="/alion.jpg"
                    alt="Featured article"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-green-500 text-white w-fit mb-4">
                    Industry News
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 dark:text-white">
                    The Future of Construction: Embracing Digital Technology
                  </h3>
                  <p className="text-gray-600 mb-6 dark:text-gray-300">
                    Discover how digital transformation is revolutionizing the
                    construction industry. From BIM technology to AI-powered
                    project management, learn about the tools that are shaping
                    the future of construction.
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>John Smith</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>January 15, 2024</span>
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 w-fit">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Essential Safety Protocols for Construction Sites",
                excerpt:
                  "Learn about the most important safety measures that every construction site should implement to protect workers and ensure project success.",
                category: "Safety",
                author: "Sarah Johnson",
                date: "January 12, 2024",
                readTime: "5 min read",
                image: "/stlion.jpg",
              },
              {
                title: "Sustainable Building Materials: A Complete Guide",
                excerpt:
                  "Explore eco-friendly construction materials that are revolutionizing the industry while reducing environmental impact.",
                category: "Sustainability",
                author: "Mike Davis",
                date: "January 10, 2024",
                readTime: "7 min read",
                image: "/stlion.jpg",
              },
              {
                title: "Project Management Best Practices in Construction",
                excerpt:
                  "Discover proven strategies for managing construction projects efficiently, from planning to completion.",
                category: "Project Management",
                author: "Lisa Brown",
                date: "January 8, 2024",
                readTime: "6 min read",
                image: "/stlion.jpg",
              },
              {
                title: "The Rise of Modular Construction Methods",
                excerpt:
                  "How modular construction is changing the industry with faster build times and improved quality control.",
                category: "Innovation",
                author: "John Smith",
                date: "January 5, 2024",
                readTime: "4 min read",
                image: "/stlion.jpg",
              },
              {
                title: "Understanding Building Codes and Regulations",
                excerpt:
                  "A comprehensive overview of current building codes and how they impact construction projects.",
                category: "Regulations",
                author: "Sarah Johnson",
                date: "January 3, 2024",
                readTime: "8 min read",
                image: "/stlion.jpg",
              },
              {
                title: "Heavy Equipment Maintenance: Tips for Longevity",
                excerpt:
                  "Essential maintenance practices to keep your construction equipment running efficiently and extend its lifespan.",
                category: "Equipment",
                author: "Mike Davis",
                date: "December 30, 2023",
                readTime: "5 min read",
                image: "/stlion.jpg",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/alion.jpg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-green-500 transition-colors dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-500 hover:bg-green-600">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-black text-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated with Our{" "}
            <span className="text-green-500">Newsletter</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest construction industry insights, project updates, and
            company news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-500 hover:bg-green-600 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
