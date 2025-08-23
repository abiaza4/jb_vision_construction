"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Users,
  ImageIcon,
  FileText,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Upload,
  Save,
} from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("content");
  // Removed unused state isEditing/setIsEditing

  const contentItems = [
    {
      id: 1,
      type: "Hero Section",
      title: "Quality Construction & Road Services",
      content: "We Are Always Ready To Serve You Better...",
      status: "Published",
      lastModified: "2024-01-15",
    },
    {
      id: 2,
      type: "About Section",
      title: "Your Trusted Partner in Construction",
      content: "With over 15 years of experience...",
      status: "Published",
      lastModified: "2024-01-14",
    },
    {
      id: 3,
      type: "Service Item",
      title: "Road Construction",
      content: "Professional road construction and maintenance...",
      status: "Draft",
      lastModified: "2024-01-13",
    },
  ];

  const imageGallery = [
    {
      id: 1,
      name: "hero-construction.jpg",
      category: "Hero",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
    },
    {
      id: 2,
      name: "bridge-project.jpg",
      category: "Projects",
      size: "1.8 MB",
      uploadDate: "2024-01-14",
    },
    {
      id: 3,
      name: "team-photo.jpg",
      category: "Team",
      size: "3.1 MB",
      uploadDate: "2024-01-13",
    },
  ];

  const users = [
    {
      id: 1,
      name: "John Admin",
      email: "admin@jbvision.com",
      role: "Super Admin",
      status: "Active",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Manager",
      email: "sarah@jbvision.com",
      role: "Content Manager",
      status: "Active",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Mike Editor",
      email: "mike@jbvision.com",
      role: "Editor",
      status: "Inactive",
      lastLogin: "2024-01-10",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header currentPage="admin" />

      <div className="container mx-auto px-4 py-8">
        {/* Admin Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Admin Panel</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your website content, users, and settings.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
            {[
              {
                id: "content",
                label: "Content Management",
                icon: <FileText className="h-4 w-4" />,
              },
              {
                id: "images",
                label: "Image Gallery",
                icon: <ImageIcon className="h-4 w-4" />,
              },
              {
                id: "users",
                label: "User Management",
                icon: <Users className="h-4 w-4" />,
              },
              {
                id: "analytics",
                label: "Analytics",
                icon: <BarChart3 className="h-4 w-4" />,
              },
              {
                id: "settings",
                label: "Settings",
                icon: <Settings className="h-4 w-4" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-500 dark:text-gray-300"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Management Tab */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold dark:text-white">
                Content Management
              </h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New Content
              </Button>
            </div>

            <div className="grid gap-6">
              {contentItems.map((item) => (
                <Card
                  key={item.id}
                  className="dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold dark:text-white">
                            {item.title}
                          </h3>
                          <Badge
                            className={
                              item.status === "Published"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {item.type}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.content}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Last modified: {item.lastModified}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Image Gallery, User Management, Analytics, Settings Tabs remain unchanged */}
        {/* ... keep your existing JSX for these tabs as it is ... */}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
