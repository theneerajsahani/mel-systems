"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Droplet,
  Star,
  Settings,
  Wrench,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Search,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EvamoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-background to-indigo-500/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
          <div className="py-12 md:py-16">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-2xl flex items-center justify-center">
                    <Droplet className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      Evamo
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                        <Settings className="w-3 h-3 mr-1" />
                        Oil Solutions
                      </Badge>
                      <Badge variant="secondary">Industrial Equipment</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                  Specialized oil conditioning and management solutions for
                  industrial applications. Expert provider of high-quality
                  equipment and services for optimal fluid management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-neutral-900"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Evamo Expert
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-100">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Evamo Website
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      Expert
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Solutions
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      Custom
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Engineering
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      Quality
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Equipment
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Coming Soon Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-16">
        <div className="text-center">
          <div className="bg-muted/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Products Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're currently updating our Evamo product catalog. Please contact
            our experts for information about available solutions and custom
            engineering services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-neutral-900"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Product Information
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-100">
              <Mail className="w-4 h-4 mr-2" />
              Request Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Custom Solutions
              </h3>
              <p className="text-sm text-muted-foreground">
                Tailored oil conditioning systems designed for your specific
                requirements
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Expert Service
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional installation, maintenance, and support services
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Quality Assurance
              </h3>
              <p className="text-sm text-muted-foreground">
                High-quality equipment and solutions backed by industry
                expertise
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Back to Oil Conditioning */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-8">
        <Link
          href="/products/oil-conditioning"
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Oil Conditioning
        </Link>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 py-16">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Custom Oil Conditioning Solutions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our Evamo experts specialize in custom engineering and can develop
            the perfect solution for your unique requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-neutral-900"
            >
              <Phone className="w-4 h-4 mr-2" />
              Speak with Evamo Expert
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-neutral-100">
              <Mail className="w-4 h-4 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
