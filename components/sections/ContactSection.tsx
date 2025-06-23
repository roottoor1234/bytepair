"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">{t.contact.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.contact.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 gradient-orange-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-white">{t.contact.phone.title}</h3>
                <p className="text-gray-300">{t.contact.phone.number}</p>
                <p className="text-sm text-gray-400">{t.contact.phone.hours}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 gradient-green-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-white">{t.contact.email.title}</h3>
                <p className="text-gray-300">{t.contact.email.address}</p>
                <p className="text-sm text-gray-400">{t.contact.email.response}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 gradient-orange-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-white">{t.contact.office.title}</h3>
                <p className="text-gray-300">{t.contact.office.address1}</p>
                <p className="text-gray-300">{t.contact.office.address2}</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold mb-4 text-white">{t.contact.followUs}</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">{t.contact.form.title}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">{t.contact.form.service}</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
                  {t.contact.form.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">{t.contact.form.message}</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              
              <Button className="w-full gradient-orange hover:opacity-90 text-white border-0">
                {t.contact.form.send}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}