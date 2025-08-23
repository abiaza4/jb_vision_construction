"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SliderImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const sliderImages: SliderImage[] = [
  {
    src: "/map-removebg-preview.png",
    alt: "Highway Construction",
    title: "Highway Construction Excellence",
    description:
      "Building the roads that connect communities and drive progress forward.",
  },
  {
    src: "/final_copy-removebg-preview.png",
    alt: "Bridge Engineering",
    title: "Advanced Bridge Engineering",
    description:
      "Creating lasting infrastructure that stands the test of time.",
  },
  {
    src: "/alion.jpg",
    alt: "Commercial Buildings",
    title: "Commercial Construction",
    description:
      "Transforming visions into reality with precision and quality.",
  },
  {
    src: "/stlion.jpg",
    alt: "Residential Projects",
    title: "Residential Development",
    description: "Building homes and communities where families thrive.",
  },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/alion.jpg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-5xl font-bold mb-4">{image.title}</h2>
              <p className="text-xl mb-8">{image.description}</p>
              <Button className="bg-green-500 hover:bg-green-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={goToNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-green-500" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
