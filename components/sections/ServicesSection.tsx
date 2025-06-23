"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Code2, 
  Wrench, 
  Monitor, 
  Smartphone, 
  Shield, 
  Users,
  CheckCircle
} from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t.services.software.title,
      description: t.services.software.description,
      features: t.services.software.features,
      color: 'orange'
    },
    {
      icon: Monitor,
      title: t.services.pcRepair.title,
      description: t.services.pcRepair.description,
      features: t.services.pcRepair.features,
      color: 'green'
    },
    {
      icon: Smartphone,
      title: t.services.mobileRepair.title,
      description: t.services.mobileRepair.description,
      features: t.services.mobileRepair.features,
      color: 'orange'
    },
    {
      icon: Shield,
      title: t.services.network.title,
      description: t.services.network.description,
      features: t.services.network.features,
      color: 'green'
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      features: t.services.maintenance.features,
      color: 'orange'
    },
    {
      icon: Users,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      features: t.services.consulting.features,
      color: 'green'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">{t.services.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.services.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isOrange = service.color === 'orange';
            
            return (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                  isOrange ? 'border-l-orange-500' : 'border-l-green-500'
                } bg-gray-800/50 border-gray-700`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${
                    isOrange ? 'gradient-orange-subtle' : 'gradient-green-subtle'
                  } rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${
                      isOrange ? 'text-orange-500' : 'text-green-500'
                    }`} />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}