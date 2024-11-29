/**
 * @fileoverview Home Page Component
 * @author Flore (with guidance from Marco)
 * 
 * Hey Flore! This is our beautiful home page.
 * Remember how we worked on making it welcoming and professional?
 * 
 * Key sections:
 * 1. Hero section with gradient text
 * 2. Call-to-action buttons
 * 3. Features section
 */

import Navbar from "@/components/ui/navbar";
import { Background } from "@/components/ui/background";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, StaggerChildren, ScaleIn } from "@/components/ui/animations";
import { ArrowRight, Bus, Clock, CreditCard, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Beautiful background effect we created */}
      <Background />
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center relative px-6 py-24 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                Book Your Journey with Confidence
              </h1>
            </FadeIn>
            
            <SlideIn direction="up" delay={0.4}>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Experience hassle-free bus ticket booking with our modern platform. 
                Travel smarter, journey better.
              </p>
            </SlideIn>

            <ScaleIn delay={0.6}>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/tickets"
                    className="rounded-xl bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-200 hover:scale-105"
                    >
                  
                    Book Now <ArrowRight className="ml-2 inline-block" />
                
                </Link>
                <Link 
                  href="/about"
                  className="text-sm font-semibold leading-6 hover:text-red-500 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
                Why Choose Our Service?
              </h2>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon={Bus}
                title="Wide Network"
                description="Access to thousands of bus routes across the country"
              />
              <Feature
                icon={Clock}
                title="24/7 Service"
                description="Book your tickets anytime, anywhere with our platform"
              />
              <Feature
                icon={CreditCard}
                title="Secure Payment"
                description="Multiple payment options with enhanced security"
              />
              <Feature
                icon={MapPin}
                title="Live Tracking"
                description="Real-time updates on your bus location"
              />
            </StaggerChildren>
          </div>
        </section>
      </main>
    </div>
  );
}

function Feature({ icon: Icon, title, description }) {
  return (
    <FadeIn className="relative p-8 rounded-2xl bg-background shadow-sm ring-1 ring-muted hover:ring-red-500/20 transition-all duration-200">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-3 rounded-xl bg-red-500/10 text-red-500">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
}
