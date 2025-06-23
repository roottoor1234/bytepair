"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Zap, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border-orange-500/30">
            <Zap className="w-4 h-4 mr-1" />
            {t.hero.badge}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-green-500 to-orange-400 bg-clip-text text-transparent leading-tight">
            {t.hero.title}
            <br />
            <span className="text-4xl md:text-6xl">{t.hero.subtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-orange hover:opacity-90 text-white px-8 py-6 text-lg border-0"
              onClick={() => scrollToSection('contact')}
            >
              {t.hero.startProject}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-green-500 text-green-400 hover:bg-green-500/10"
              onClick={() => scrollToSection('services')}
            >
              {t.hero.viewServices}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">{t.hero.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-400">{t.hero.stats.support}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400">{t.hero.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}