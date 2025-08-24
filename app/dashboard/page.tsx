"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Users,
  Building,
  DollarSign,
  Clock,
  Settings,
} from "lucide-react";

// Reusable components
const StatCard = ({ title, value, change, icon, color }: any) => (
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {title}
          </p>
          <p className="text-2xl font-bold dark:text-white">{value}</p>
          <p className={`text-sm ${color}`}>{change} from last month</p>
        </div>
        <div className={`${color}`}>{icon}</div>
      </div>
    </CardContent>
  </Card>
);

const ProjectCard = ({ project }: any) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      case "Planning":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deadline: {project.deadline}
            </p>
          </div>
          <Badge className={`${getStatusColor(project.status)} text-white`}>
            {project.status}
          </Badge>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="dark:text-gray-300">Progress</span>
            <span className="dark:text-gray-300">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-500">
            {project.budget}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamMemberCard = ({ member }: any) => (
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardContent className="p-6 text-center">
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="h-8 w-8 text-green-500" />
      </div>
      <h3 className="font-semibold dark:text-white">{member.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
      <div className="mt-3">
        <Badge
          className={
            member.status === "Active" ? "bg-green-500" : "bg-yellow-500"
          }
        >
          {member.status}
        </Badge>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {member.projects} active projects
      </p>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Projects",
      value: "124",
      change: "+12%",
      icon: <Building className="h-6 w-6" />,
      color: "text-blue-500",
    },
    {
      title: "Active Projects",
      value: "18",
      change: "+3",
      icon: <Clock className="h-6 w-6" />,
      color: "text-green-500",
    },
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+18%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-500",
    },
    {
      title: "Team Members",
      value: "52",
      change: "+5",
      icon: <Users className="h-6 w-6" />,
      color: "text-purple-500",
    },
  ];

  const recentProjects = [
    {
      name: "Highway Bridge Construction",
      status: "In Progress",
      progress: 75,
      deadline: "2024-06-15",
      budget: "$850,000",
    },
    {
      name: "Commercial Office Complex",
      status: "Completed",
      progress: 100,
      deadline: "2024-03-20",
      budget: "$1,200,000",
    },
    {
      name: "Residential Development",
      status: "Planning",
      progress: 25,
      deadline: "2024-08-30",
      budget: "$650,000",
    },
    {
      name: "Industrial Warehouse",
      status: "In Progress",
      progress: 60,
      deadline: "2024-05-10",
      budget: "$420,000",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Project Manager",
      status: "Active",
      projects: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Site Engineer",
      status: "Active",
      projects: 3,
    },
    {
      name: "Mike Davis",
      role: "Safety Officer",
      status: "Active",
      projects: 8,
    },
    { name: "Lisa Brown", role: "Architect", status: "On Leave", projects: 2 },
    { name: "Tom Wilson", role: "Foreman", status: "Active", projects: 4 },
    {
      name: "Emma Davis",
      role: "Quality Inspector",
      status: "Active",
      projects: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header currentPage="dashboard" />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back! Here&apos;s what&apos;s happening with your projects.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: "overview", label: "Overview" },
              { id: "projects", label: "Projects" },
              { id: "team", label: "Team" },
              { id: "reports", label: "Reports" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-500 dark:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Revenue Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">
                        Chart visualization would go here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentProjects.slice(0, 4).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold dark:text-white">
                All Projects
              </h2>
              <Button className="bg-green-500 hover:bg-green-600">
                Add New Project
              </Button>
            </div>
            <div className="grid gap-6">
              {recentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold dark:text-white">
                Team Members
              </h2>
              <Button className="bg-green-500 hover:bg-green-600">
                Add Team Member
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
              Reports & Analytics
            </h2>
            {/* Project Performance & Financial Summary cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* ... same as before ... */}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
