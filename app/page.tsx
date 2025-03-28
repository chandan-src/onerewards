"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, Store, Award, BarChart3, QrCode } from "lucide-react"
import Autoplay from 'embla-carousel-autoplay'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo_black.png"
              alt="One Rewards Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
              How It Works
            </Link>

            <Link href="#testimonials" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#download" className=" md:block">
              <Button variant="outline" className="border-[#EC7508] text-[#EC7508] hover:bg-[#EC7508] hover:text-white">
                Start Now
              </Button>
            </Link>
          </div>
         
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#EC7508] to-[#C11805] min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6 text-[#F2F2F2]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
                  Boost Customer Loyalty with One Rewards
                </h1>
                <p className="text-base md:text-lg lg:text-xl opacity-90">
                  The complete loyalty rewards platform that helps retail businesses create, manage, and grow customer
                  loyalty programs that drive repeat business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-white text-[#EC7508] hover:bg-[#F2F2F2] hover:text-[#C11805]">
                    <Link href="#download">
                      Get Started Free
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-white/90 border-2 border-[#EC7508] flex items-center justify-center text-xs font-medium text-[#EC7508]"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm opacity-90">
                    Trusted by <span className="font-medium">100+</span> businesses
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[400px] rounded-3xl">
                  <Image src="/images/mockup.png" alt="One Rewards App" width={600} height={500} className="object-contain w-full h-full" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-[#F2F2F2]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
                Everything You Need to Build Customer Loyalty
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                One Rewards provides all the tools retail businesses need to create, manage, and grow successful loyalty
                programs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {[
                {
                  icon: <Smartphone className="h-10 w-10 text-[#EC7508]" />,
                  title: "Mobile App Integration",
                  description: "Seamlessly integrate with your existing mobile app or use our white-label solution.",
                },
                {
                  icon: <Store className="h-10 w-10 text-[#EC7508]" />,
                  title: "In-Store & Online Rewards",
                  description: "Create unified loyalty experiences across all your sales channels.",
                },
                {
                  icon: <Award className="h-10 w-10 text-[#EC7508]" />,
                  title: "Customizable Rewards",
                  description: "Design rewards that align with your brand and resonate with your customers.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-[#EC7508]" />,
                  title: "Analytics Dashboard",
                  description: "Track program performance and customer engagement with detailed insights.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-[#EC7508]" />,
                  title: "Easy Implementation",
                  description: "Get up and running quickly with our simple setup process and integration options.",
                },
                {
                  icon: <ArrowRight className="h-10 w-10 text-[#EC7508]" />,
                  title: "Customer Segmentation",
                  description: "Target specific customer groups with personalized rewards and incentives.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg md:text-xl font-medium mb-2 text-[#1A1A1A]">{feature.title}</h3>
                    <p className="text-sm md:text-base text-[#1A1A1A]/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-[#EC7508] to-[#C11805] hover:opacity-90 text-white">
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section id="business-types" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
                For All Types of Retail Businesses
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                One Rewards works with a wide range of retail businesses to help them build customer loyalty.
              </p>
            </div>

            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: "trimSnaps",
                  dragFree: false,
                }}
                plugins={[
                  Autoplay({
                    delay: 1000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                    rootNode: (emblaRoot) => emblaRoot.parentElement,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    { icon: "✂️", name: "Salons & Spas" },
                    { icon: "🛒", name: "Grocery Stores" },
                    { icon: "💪", name: "Health & Fitness" },
                    { icon: "🚗", name: "Rent-a-Car" },
                    { icon: "👕", name: "Fashion Retail" },
                    { icon: "🎬", name: "Movie Theaters" },
                    { icon: "✈️", name: "Airlines" },
                    { icon: "🍔", name: "Restaurants" },
                    { icon: "☕", name: "Cafes" },
                    { icon: "📚", name: "Bookstores" },
                    { icon: "🏪", name: "Convenience Stores" },
                    { icon: "💊", name: "Pharmacies" }
                  ].map((business, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow border border-[#EC7508]/10 h-[180px]">
                        <div className="text-4xl mb-4">{business.icon}</div>
                        <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A]">{business.name}</h3>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
                Benefits for Users
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                Discover why thousands of shoppers love using One Rewards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎁",
                  title: "Earn Rewards Everywhere",
                  description: "Collect points and earn rewards at all your favorite stores with a single app."
                },
                {
                  icon: "💰",
                  title: "Save Money",
                  description: "Get exclusive discounts, special offers, and personalized deals based on your shopping habits."
                },
                {
                  icon: "🔔",
                  title: "Instant Notifications",
                  description: "Receive alerts about new rewards, point balances, and nearby participating businesses."
                },
                {
                  icon: "📱",
                  title: "Easy to Use",
                  description: "Simple, intuitive interface makes it easy to track and redeem your rewards."
                },
                {
                  icon: "🔒",
                  title: "Secure & Private",
                  description: "Your data is protected with bank-level security and privacy controls."
                },
                {
                  icon: "🌟",
                  title: "VIP Experiences",
                  description: "Unlock exclusive experiences and premium rewards as you earn more points."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-[#F2F2F2] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-[#1A1A1A]">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-[#1A1A1A]/70">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-[#EC7508] to-[#C11805] hover:opacity-90 text-white">
                Start Earning Rewards
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>



        <section id="how-it-works" className="py-20 bg-[#F2F2F2]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
                How One Rewards Works
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                A simple, effective process to boost customer loyalty and increase repeat business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Set Up Your Program",
                  description: "Customize your loyalty program with rewards, points systems, and branding that matches your business.",
                  icon: <Store className="h-8 w-8 text-white" />
                },
                {
                  step: 2,
                  title: "Customers Join & Earn",
                  description: "Customers download the app, sign up, and start earning points or rewards with every purchase.",
                  icon: <Smartphone className="h-8 w-8 text-white" />
                },
                {
                  step: 3,
                  title: "Grow Your Business",
                  description: "Increase customer retention, boost repeat purchases, and grow your business with loyal customers.",
                  icon: <BarChart3 className="h-8 w-8 text-white" />
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <div className="bg-gradient-to-r from-[#EC7508] to-[#C11805] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-white">Step {step.step}</h3>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#EC7508] font-medium">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-base md:text-lg font-medium mb-3 text-[#1A1A1A]">{step.title}</h4>
                    <p className="text-sm md:text-base text-[#1A1A1A]/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-[#EC7508] to-[#C11805] hover:opacity-90 text-white">
                <Link href="#download">
                  Get Started Today
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
                What Our Users Say
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                Join thousands of happy users who are earning rewards with every purchase
              </p>
            </div>

            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    {
                      quote: "I've earned over $500 in rewards this year alone! One Rewards has completely changed how I shop.",
                      name: "David M.",
                      location: "Chicago, IL",
                      rating: 5
                    },
                    {
                      quote: "I love that I can earn points at so many different stores with just one app. So convenient!",
                      name: "Lisa T.",
                      location: "Austin, TX",
                      rating: 5
                    },
                    {
                      quote: "The personalized offers are amazing. It's like the app knows exactly what I want to buy next.",
                      name: "James K.",
                      location: "Seattle, WA",
                      rating: 5
                    },
                    {
                      quote: "I've discovered so many great local businesses through the app. Highly recommend!",
                      name: "Sophia R.",
                      location: "Miami, FL",
                      rating: 4
                    },
                    {
                      quote: "The birthday rewards are the best! Got a free meal at my favorite restaurant last month.",
                      name: "Marcus J.",
                      location: "Atlanta, GA",
                      rating: 5
                    }
                  ].map((review, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-gradient-to-br from-[#EC7508]/10 to-[#C11805]/10 rounded-xl p-6 shadow-md h-full">
                        <div className="mb-4 text-[#EC7508]">{"★".repeat(review.rating)}</div>
                        <p className="text-base md:text-lg text-[#1A1A1A] mb-6 italic">"{review.quote}"</p>
                        <div>
                          <p className="text-lg md:text-xl font-medium text-[#1A1A1A]">{review.name}</p>
                          <p className="text-sm md:text-base text-[#1A1A1A]/70">{review.location}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-r from-[#EC7508] to-[#C11805] text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
                  Ready to Transform Your Customer Loyalty Program?
                </h2>
                <p className="text-base md:text-lg opacity-90 mb-8">
                  Join thousands of businesses that have increased customer retention and boosted sales with One
                  Rewards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-[#EC7508] hover:bg-[#F2F2F2]">
                    <Link href="#download">
                      Get Started
                    </Link>
                  </Button>

                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "30%", desc: "Average increase in repeat purchases" },
                    { stat: "25%", desc: "Increase in average order value" },
                    { stat: "1,000+", desc: "Businesses using One Rewards" },
                    { stat: "4.8/5", desc: "Average customer satisfaction" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <p className="text-2xl md:text-3xl lg:text-4xl font-medium">{item.stat}</p>
                      <p className="text-sm md:text-base opacity-90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-[#F2F2F2]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">What Our Customers Say</h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                Hear from businesses that have transformed their customer loyalty with One Rewards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "One Rewards helped us increase our repeat customer rate by 40% in just three months. The platform is incredibly easy to use.",
                  name: "Sarah Johnson",
                  role: "Owner, Bloom Boutique",
                },
                {
                  quote:
                    "The analytics dashboard gives us insights we never had before. We can now see exactly what drives our customers to return.",
                  name: "Michael Chen",
                  role: "Marketing Director, Urban Eats",
                },
                {
                  quote:
                    "Implementation was seamless and our customers love the rewards program. It's been a game-changer for our business.",
                  name: "Jessica Williams",
                  role: "CEO, Fitness First",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="mb-4 text-[#EC7508]">{"★".repeat(5)}</div>
                    <p className="text-base md:text-lg text-[#1A1A1A] mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-lg md:text-xl font-medium text-[#1A1A1A]">{testimonial.name}</p>
                      <p className="text-sm md:text-base text-[#1A1A1A]/70">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#F2F2F2]" id="download">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">Download Our Apps</h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">Get started with One Rewards today</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="from-[#EC7508] to-[#C11805] p-6">
                  <div className="flex justify-center">
                    <Image
                      src="/images/logomark.png"
                      alt="One Rewards"
                      width={80}
                      height={80}
                      className="h-auto w-auto"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-black text-center mt-4">One Rewards</h3>
                  <p className="text-sm md:text-base text-black/80 text-center mt-2">For Shoppers & Customers</p>
                </div>
                <div className="p-6 bg-orange-600">
                  <p className="text-base md:text-lg text-[#1A1A1A]/70 mb-6">
                    Earn rewards at all your favorite stores, track your points, and redeem exclusive offers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.mcmr.user&pcampaignid=web_share" className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 hover:bg-black/80">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
                        <path d="M17.5,12.5c0-0.91,0.55-1.73,1.4-2.08c-0.25-0.6-0.63-1.16-1.12-1.63c-0.46-0.46-0.95-0.82-1.45-1.06 c-0.43,0.24-1.07,0.35-1.74,0.35c-0.71,0-1.37-0.11-1.83-0.35c-0.37,0.2-0.76,0.48-1.15,0.86c-0.95,0.91-1.69,2.28-1.69,3.9 c0,1.55,0.66,2.93,1.67,3.9c0.41,0.41,0.82,0.68,1.21,0.85c0.45-0.23,1.1-0.35,1.79-0.35c0.72,0,1.38,0.12,1.81,0.35 c0.5-0.25,0.99-0.6,1.45-1.06c0.47-0.47,0.84-1.03,1.08-1.63C18.05,14.23,17.5,13.41,17.5,12.5z M14.8,7.5 c0.65,0,1.18,0.53,1.18,1.18c0,0.65-0.53,1.18-1.18,1.18c-0.65,0-1.18-0.53-1.18-1.18C13.62,8.03,14.15,7.5,14.8,7.5z" />
                      </svg>
                      Download Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className=" from-[#EC7508] to-[#C11805] p-6">
                  <div className="flex justify-center">
                    <Image
                      src="/images/logomark.png"
                      alt="One Rewards"
                      width={80}
                      height={80}
                      className="h-auto w-auto"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-black text-center mt-4">One Rewards Business</h3>
                  <p className="text-sm md:text-base text-black/80 text-center mt-2">For Retailers & Merchants</p>
                </div>
                <div className="p-6 bg-orange-600">
                  <p className="text-base md:text-lg text-[#1A1A1A]/70 mb-6">
                    Manage your loyalty program, track customer engagement, and grow your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.mcmr.store&pcampaignid=web_share" className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 hover:bg-black/80">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
                        <path d="M17.5,12.5c0-0.91,0.55-1.73,1.4-2.08c-0.25-0.6-0.63-1.16-1.12-1.63c-0.46-0.46-0.95-0.82-1.45-1.06 c-0.43,0.24-1.07,0.35-1.74,0.35c-0.71,0-1.37-0.11-1.83-0.35c-0.37,0.2-0.76,0.48-1.15,0.86c-0.95,0.91-1.69,2.28-1.69,3.9 c0,1.55,0.66,2.93,1.67,3.9c0.41,0.41,0.82,0.68,1.21,0.85c0.45-0.23,1.1-0.35,1.79-0.35c0.72,0,1.38,0.12,1.81,0.35 c0.5-0.25,0.99-0.6,1.45-1.06c0.47-0.47,0.84-1.03,1.08-1.63C18.05,14.23,17.5,13.41,17.5,12.5z M14.8,7.5 c0.65,0,1.18,0.53,1.18,1.18c0,0.65-0.53,1.18-1.18,1.18c-0.65,0-1.18-0.53-1.18-1.18C13.62,8.03,14.15,7.5,14.8,7.5z" />
                      </svg>
                      Download Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="fixed bottom-0 right-0 z-50 mb-5 mr-8 ">
            <HoverCard openDelay={0} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Button size="icon" className=" bg-[#EC7508] hover:bg-[#C11805] text-white shadow-lg">
                  <QrCode className="h-16 w-16" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="end" className="w-fit p-4 bg-white shadow-xl">
                <QrCode className="h-40 w-40 text-black" />
              </HoverCardContent>
            </HoverCard>

          </div>
      <footer className="bg-[#1A1A1A] text-[#F2F2F2] py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/images/logo_white.png"
                alt="One Rewards Logo"
                width={150}
                height={50}
                className="h-auto w-auto mb-4"
              />
              <p className="text-sm text-[#F2F2F2]/70 mb-4">
                The complete loyalty rewards platform for retail businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#F2F2F2] hover:text-[#EC7508]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-[#F2F2F2] hover:text-[#EC7508]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-[#F2F2F2] hover:text-[#EC7508]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-[#F2F2F2] hover:text-[#EC7508]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-[#F2F2F2]/70 hover:text-[#EC7508]">
                    About Us
                  </Link>
                </li>


              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-2">

                <li>
                  <a href="#" className="text-[#F2F2F2]/70 hover:text-[#EC7508]">
                    Help Center
                  </a>
                </li>


              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-[#F2F2F2]/70 hover:text-[#EC7508]">
                    Contact Sales
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#F2F2F2]/70 hover:text-[#EC7508]">
                    Support
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@onerewards.com" className="text-[#F2F2F2]/70 hover:text-[#EC7508]">
                    info@onerewards.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#F2F2F2]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#F2F2F2]/70">
                &copy; {new Date().getFullYear()} One Rewards.All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://sites.google.com/asymmetri.in/mcmr/home" target="_blank" className="text-sm text-[#F2F2F2]/70 hover:text-[#EC7508]">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-[#F2F2F2]/70 hover:text-[#EC7508]">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-[#F2F2F2]/70 hover:text-[#EC7508]">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    </div>
  )
}

