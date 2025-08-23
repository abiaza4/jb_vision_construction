"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
    <div className="min-h-screen ">
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black/70 to-black/50">
        <img
          src="/alion.jpg"
          alt="Contact hero"
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
              We're Here to <span className="text-green-500">Help</span>
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
                    <div className="text-green-500">{contact.icon}</div>
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
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg dark:bg-green-900 dark:border-green-600 dark:text-green-300">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="road-construction">Road Construction</option>
                    <option value="building-construction">
                      Building Construction
                    </option>
                    <option value="bridge-construction">
                      Bridge Construction
                    </option>
                    <option value="transportation">
                      Transportation Services
                    </option>
                    <option value="equipment-rental">Equipment Rental</option>
                    <option value="project-management">
                      Project Management
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                  >
                    Project Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-100k">Under $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m-5m">$1,000,000 - $5,000,000</option>
                    <option value="over-5m">Over $5,000,000</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                Visit Our Office
              </h3>
              <p className="text-gray-600 mb-8 dark:text-gray-300">
                Stop by our office to discuss your project in person. Our team
                is ready to help you bring your construction vision to life.
              </p>

              {/* Real Google Map */}
              <div className="h-80 rounded-lg mb-8 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.463087275142!2d31.5824737!3d4.8512215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712939b3f3ed1d1%3A0x78d6f61d97cf03cf!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2srw!4v1692457640000!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Office Hours */}
              <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-4 dark:text-white">
                    Office Hours
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">
                        Monday - Friday
                      </span>
                      <span className="font-medium dark:text-gray-200">
                        8:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Saturday</span>
                      <span className="font-medium dark:text-gray-200">
                        9:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">Sunday</span>
                      <span className="font-medium dark:text-gray-200">
                        Closed
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg dark:bg-green-900/20">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>Emergency Services:</strong> Available 24/7 for
                      urgent construction and infrastructure repairs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Find answers to common questions about our construction services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I get a quote for my construction project?",
                answer:
                  "You can request a quote by filling out our contact form, calling us directly, or visiting our office. We'll schedule a consultation to discuss your project requirements and provide a detailed estimate.",
              },
              {
                question: "What types of construction projects do you handle?",
                answer:
                  "We handle a wide range of projects including road construction, building construction, bridge construction, residential complexes, commercial buildings, and infrastructure development.",
              },
              {
                question: "How long does a typical construction project take?",
                answer:
                  "Project timelines vary depending on the scope and complexity. Small projects may take a few weeks, while large infrastructure projects can take several months to years. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Yes, we are fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverage to protect our clients and workers.",
              },
              {
                question: "Do you provide emergency construction services?",
                answer:
                  "Yes, we offer 24/7 emergency services for urgent construction and infrastructure repairs. Contact us immediately for emergency situations.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold mb-3 dark:text-white">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
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
            Don't wait any longer. Contact us today and let's discuss how we can
            bring your construction project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +2119222222
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
