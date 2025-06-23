"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import { Code2, Menu, X } from "lucide-react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
        <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
          Bytepair
        </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
        <button onClick={() => handleNavClick('services')} className="text-gray-300 hover:text-orange-500 transition-colors">
          {t.nav.services}
        </button>
        <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-orange-500 transition-colors">
          {t.nav.about}
        </button>
        <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-orange-500 transition-colors">
          {t.nav.contact}
        </button>
        <LanguageSelector />
        <Button onClick={() => handleNavClick('contact')} className="gradient-orange hover:opacity-90 text-white border-0">
          {t.nav.getStarted}
        </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 bg-gray-900 rounded-lg">
        <div className="flex flex-col space-y-4 mt-4">
          <button onClick={() => handleNavClick('services')} className="text-left text-gray-300 hover:text-orange-500 transition-colors">
            {t.nav.services}
          </button>
          <button onClick={() => handleNavClick('about')} className="text-left text-gray-300 hover:text-orange-500 transition-colors">
            {t.nav.about}
          </button>
          <button onClick={() => handleNavClick('contact')} className="text-left text-gray-300 hover:text-orange-500 transition-colors">
            {t.nav.contact}
          </button>
          <LanguageSelector />
          <Button onClick={() => handleNavClick('contact')} className="gradient-orange hover:opacity-90 text-white border-0 w-full">
            {t.nav.getStarted}
          </Button>
        </div>
          </div>
        )}
      </div>
    </nav>
  );
}