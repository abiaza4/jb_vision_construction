"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const teamMembers = [
    { name: "John Smith", position: "CEO & Founder", image: "/alion.jpg" },
    { name: "Sarah Johnson", position: "Project Manager", image: "/alion.jpg" },
    { name: "Mike Davis", position: "Chief Engineer", image: "/stlion.jpg" },
    { name: "Lisa Brown", position: "Safety Director", image: "/stlion.jpg" },
  ];

  return (
    <div className="min-h-screen transition-colors">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <Image
          src="/alion.jpg"
          alt="About us hero"
          fill
          priority
          className="absolute inset-0 object-cover -z-10"
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              About <span className="text-green-500">Us</span>
            </h1>
            <p className="text-xl text-gray-200">
              Building the future with quality, integrity, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">
                15+ Years of <span className="text-green-500">Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Founded in 2009, JB Vision has grown from a small local
                construction company to a leading provider of comprehensive
                construction and infrastructure services. Our journey began with
                a simple mission: to deliver quality construction projects that
                stand the test of time.
              </p>
              <p className="text-gray-600 mb-8 dark:text-gray-300">
                Over the years, we have successfully completed over 100
                projects, ranging from residential buildings to major
                infrastructure developments. Our commitment to excellence,
                safety, and customer satisfaction has earned us the trust of
                clients across the region.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Expert Team
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96">
              <Image
                src="/alion.jpg"
                alt="Company building"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Meet Our <span className="text-green-500">Experts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Our experienced team of professionals brings decades of combined
              expertise to every project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center overflow-hidden dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-green-500 font-medium">
                      {member.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
