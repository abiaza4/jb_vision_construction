"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We will get back to you within 24 hours."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <Image
          src="/alion.jpg"
          alt="Contact hero"
          fill
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Contact <span className="text-green-500">Us</span>
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch for your next construction project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4 dark:bg-green-900 dark:text-green-300">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              We&apos;re Here to <span className="text-green-500">Help</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Ready to start your construction project? Contact us today for a
              free consultation and detailed quote.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8 text-green-500" />,
                title: "Phone",
                info: "+25079444444",
                subInfo: "Mon-Fri 8AM-6PM",
              },
              {
                icon: <Mail className="h-8 w-8 text-green-500" />,
                title: "Email",
                info: "info@jbvision.com",
                subInfo: "24/7 Support",
              },
              {
                icon: <MapPin className="h-8 w-8 text-green-500" />,
                title: "Address",
                info: "123 Rock City",
                subInfo: "City, State 12345",
              },
              {
                icon: <Clock className="h-8 w-8 text-green-500" />,
                title: "Business Hours",
                info: "Mon-Fri: 8AM-6PM",
                subInfo: "Sat: 9AM-4PM",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="text-center p-6 dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent className="p-0">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-green-900">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {contact.title}
                  </h3>
                  <p className="text-gray-800 font-medium dark:text-gray-200">
                    {contact.info}
                  </p>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {contact.subInfo}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8 dark:text-gray-300">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg dark:bg-green-900 dark:border-green-600 dark:text-green-300">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  placeholder="Service Required"
                  className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Budget"
                  className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.463087275142!2d31.5824737!3d4.8512215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712939b3f3ed1d1%3A0x78d6f61d97cf03cf!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2srw!4v1692457640000!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
