"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { useLanguage } from "@/hooks/useLanguage";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Home() {
  const { isLoaded } = useLanguage();
  const [underConstruction, setUnderConstruction] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timestamp = Date.now(); // προσθήκη για να σπάει cache
    fetch(
      `https://gist.githubusercontent.com/roottoor1234/82a71fd296aa953fdd17664b84f19639/raw/maintenance.json?nocache=${timestamp}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUnderConstruction(data.underConstruction);
      })
      .catch(() => {
        setUnderConstruction(false);
      });
  }, []);

  if (underConstruction) {
    return <UnderConstruction />;
  }

  // Show loading state until language is loaded
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 flex items-center justify-center mx-auto mb-4">
            <svg
              className="animate-spin h-8 w-8 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
            Bytepair
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <AboutSection scrollToSection={scrollToSection} />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
}
