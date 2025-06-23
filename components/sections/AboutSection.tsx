"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Award, Zap, Shield, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function AboutSection({ scrollToSection }: AboutSectionProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.about.features.certified.title,
      description: t.about.features.certified.description,
      color: 'orange'
    },
    {
      icon: Zap,
      title: t.about.features.fast.title,
      description: t.about.features.fast.description,
      color: 'green'
    },
    {
      icon: Shield,
      title: t.about.features.security.title,
      description: t.about.features.security.description,
      color: 'orange'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">{t.about.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t.about.description2}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 gradient-orange-subtle rounded-lg border border-orange-500/20">
                <div className="text-2xl font-bold text-orange-500 mb-1">5+</div>
                <div className="text-sm text-gray-400">{t.about.stats.experience}</div>
              </div>
              <div className="text-center p-4 gradient-green-subtle rounded-lg border border-green-500/20">
                <div className="text-2xl font-bold text-green-500 mb-1">500+</div>
                <div className="text-sm text-gray-400">{t.about.stats.clients}</div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')} 
              className="gradient-orange hover:opacity-90 text-white border-0"
            >
              {t.about.workWithUs}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isOrange = feature.color === 'orange';
              
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className={`w-10 h-10 ${
                    isOrange ? 'gradient-orange-subtle' : 'gradient-green-subtle'
                  } rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-5 h-5 ${
                      isOrange ? 'text-orange-500' : 'text-green-500'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}