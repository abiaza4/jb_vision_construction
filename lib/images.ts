export interface ImageData {
  id: string
  src: string
  alt: string
  category: "hero" | "project" | "service" | "team" | "blog"
  title?: string
  description?: string
}

// Default images - you can replace these with your actual images
export const defaultImages: ImageData[] = [
  // Hero Images
  {
    id: "hero-1",
    src: "/alion.jpg",
    alt: "Construction Site",
    category: "hero",
    title: "Professional Construction Services",
    description: "Building the future with quality and precision",
  },
  {
    id: "hero-2",
    src: "/alion.jpg",
    alt: "Bridge Construction",
    category: "hero",
    title: "Infrastructure Development",
    description: "Connecting communities through superior engineering",
  },

  // Project Images
  {
    id: "project-1",
    src: "/stlion.jpg",
    alt: "Highway Bridge Project",
    category: "project",
    title: "Metropolitan Highway Bridge",
    description: "A major infrastructure achievement",
  },
  {
    id: "project-2",
    src: "/alion.jpg",
    alt: "Office Complex Project",
    category: "project",
    title: "Corporate Office Complex",
    description: "Modern commercial construction",
  },

  // Service Images
  {
    id: "service-1",
    src: "/alion.jpg",
    alt: "Road Construction Service",
    category: "service",
    title: "Road Construction",
    description: "Professional road building services",
  },
  {
    id: "service-2",
    src: "/alion.jpg",
    alt: "Building Construction Service",
    category: "service",
    title: "Building Construction",
    description: "Complete building solutions",
  },

  // Team Images
  {
    id: "team-1",
    src: "/stlion.jpg",
    alt: "John Smith - CEO",
    category: "team",
    title: "John Smith",
    description: "CEO & Founder",
  },
  {
    id: "team-2",
    src: "/alion.jpg",
    alt: "Sarah Johnson - Project Manager",
    category: "team",
    title: "Sarah Johnson",
    description: "Project Manager",
  },

  // Blog Images
  {
    id: "blog-1",
    src: "/alion.jpg",
    alt: "Construction Safety",
    category: "blog",
    title: "Safety Protocols",
    description: "Essential safety measures for construction sites",
  },
  {
    id: "blog-2",
    src: "/stlion.jpg",
    alt: "Sustainable Building",
    category: "blog",
    title: "Sustainable Materials",
    description: "Eco-friendly construction solutions",
  },
]

// Function to get images by category
export function getImagesByCategory(category: ImageData["category"]): ImageData[] {
  return defaultImages.filter((image) => image.category === category)
}

// Function to get image by ID
export function getImageById(id: string): ImageData | undefined {
  return defaultImages.find((image) => image.id === id)
}

// Function to add new image (for admin use)
export function addImage(imageData: Omit<ImageData, "id">): ImageData {
  const newImage: ImageData = {
    ...imageData,
    id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  }
  defaultImages.push(newImage)
  return newImage
}
