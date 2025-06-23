"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">{t.testimonials.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "{review.text}"
              </p>
              <div className="font-semibold text-white">{review.name}</div>
              <div className="text-sm text-gray-400">{review.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}