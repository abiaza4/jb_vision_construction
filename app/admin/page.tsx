"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Users, ImageIcon, FileText, BarChart3, Plus, Edit, Trash2, Upload, Save } from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("content")
  const [isEditing, setIsEditing] = useState(false)

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
  ]

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
  ]

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
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header currentPage="admin" />

      <div className="container mx-auto px-4 py-8">
        {/* Admin Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Admin Panel</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your website content, users, and settings.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: "content", label: "Content Management", icon: <FileText className="h-4 w-4" /> },
              { id: "images", label: "Image Gallery", icon: <ImageIcon className="h-4 w-4" /> },
              { id: "users", label: "User Management", icon: <Users className="h-4 w-4" /> },
              { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
              { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
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
              <h2 className="text-2xl font-bold dark:text-white">Content Management</h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New Content
              </Button>
            </div>

            <div className="grid gap-6">
              {contentItems.map((item) => (
                <Card key={item.id} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                          <Badge className={item.status === "Published" ? "bg-green-500" : "bg-yellow-500"}>
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.type}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                        <p className="text-xs text-gray-400 mt-2">Last modified: {item.lastModified}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 bg-transparent">
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

        {/* Image Gallery Tab */}
        {activeTab === "images" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold dark:text-white">Image Gallery</h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <Upload className="h-4 w-4 mr-2" />
                Upload Images
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((image) => (
                <Card key={image.id} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold dark:text-white">{image.name}</h3>
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{image.category}</span>
                        <span>{image.size}</span>
                      </div>
                      <p className="text-xs text-gray-400">Uploaded: {image.uploadDate}</p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 bg-transparent">
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

        {/* User Management Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold dark:text-white">User Management</h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New User
              </Button>
            </div>

            <div className="grid gap-4">
              {users.map((user) => (
                <Card key={user.id} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold dark:text-white">{user.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{user.role}</Badge>
                            <Badge className={user.status === "Active" ? "bg-green-500" : "bg-gray-500"}>
                              {user.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last login: {user.lastLogin}</p>
                        <div className="flex gap-2 mt-2">
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Website Analytics</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Visitors", value: "12,543", change: "+15%", color: "text-blue-500" },
                { title: "Page Views", value: "45,231", change: "+8%", color: "text-green-500" },
                { title: "Contact Forms", value: "234", change: "+22%", color: "text-purple-500" },
                { title: "Quote Requests", value: "89", change: "+12%", color: "text-orange-500" },
              ].map((stat, index) => (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</h3>
                    <p className="text-2xl font-bold dark:text-white">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Direct</span>
                      <span className="font-semibold dark:text-white">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Search Engines</span>
                      <span className="font-semibold dark:text-white">32%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Social Media</span>
                      <span className="font-semibold dark:text-white">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Referrals</span>
                      <span className="font-semibold dark:text-white">8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Popular Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Home</span>
                      <span className="font-semibold dark:text-white">2,543 views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Services</span>
                      <span className="font-semibold dark:text-white">1,892 views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">Projects</span>
                      <span className="font-semibold dark:text-white">1,456 views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="dark:text-gray-300">About</span>
                      <span className="font-semibold dark:text-white">987 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Website Settings</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Site Title</label>
                    <Input defaultValue="JB Vision - Construction Company" className="dark:bg-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Site Description</label>
                    <Textarea
                      defaultValue="Professional construction and infrastructure solutions with over 15 years of experience."
                      className="dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Contact Email</label>
                    <Input defaultValue="info@jbvision.com" className="dark:bg-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Phone Number</label>
                    <Input defaultValue="+1 (555) 123-4567" className="dark:bg-gray-700" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">SEO Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Meta Keywords</label>
                    <Input defaultValue="construction, building, infrastructure, roads" className="dark:bg-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Google Analytics ID</label>
                    <Input placeholder="GA-XXXXXXXXX-X" className="dark:bg-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-300">Facebook Pixel ID</label>
                    <Input placeholder="Enter Facebook Pixel ID" className="dark:bg-gray-700" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button className="bg-green-500 hover:bg-green-600">
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
