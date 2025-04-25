"use client"
import Lenis from 'lenis'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, Store, Award, BarChart3, QrCode } from "lucide-react"
import Autoplay from 'embla-carousel-autoplay'
import { useState, useRef, useEffect } from "react"
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
import Spline from "@splinetool/react-spline"
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { RetroGrid } from '@/components/magicui/retro-grid'

export default function LandingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const slideIn = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])


  return (
    <div className="flex min-h-screen flex-col scroll-smooth" id="header">
      <Navbar></Navbar>
      <main className="flex-1">
        <Hero></Hero>
        <AboutPage></AboutPage>

        <Customers></Customers>
        <Benefitusers></Benefitusers>




        <EarnRewards></EarnRewards>
        {/* <CustomerLoyalty></CustomerLoyalty> */}
        <section id="business" className="py-10 bg-white">
          <div className="container">
            <div className="flex justify-center items-center mt-10">
              <Image src="/images/full_business.png" className=" mb-10" alt="About" width={500} height={500} />
            </div>
            <br />

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-square max-w-[800px]">
                  <Image
                    src="/images/main4.png"
                    alt="One Rewards App"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-[#1A1A1A]">
                  Start Your Business Journey with One Rewards
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-[#1A1A1A]/70">
                  Launch your business with a powerful loyalty program that helps you attract and retain customers from day one. Our platform provides everything you need to build lasting customer relationships and drive sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-[#EC7508] to-[#C11805] text-white hover:opacity-90">
                    <Link href="#download">
                      Start Your Business
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* <ListedItems></ListedItems> */}


        {/* <Howitworks></Howitworks>
        <FadeContent></FadeContent> */}

        {/* <section id="testimonials" className="pb-20 bg-[#F2F2F2]">
          <div className="container py-20">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">What Our Customers Say</h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
                Hear from businesses that have transformed their customer loyalty with One Rewards.
              </p>
            </motion.div>
            <div className="md:hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: "trimSnaps",
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
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                      <Card className="border-none shadow-md bg-white">
                        <CardContent className="p-6">
                          <div className="mb-4 text-[#EC7508]">{"★".repeat(5)}</div>
                          <p className="text-base md:text-lg text-[#1A1A1A] mb-6 italic">"{testimonial.quote}"</p>
                          <div>
                            <p className="text-lg md:text-xl font-medium text-[#1A1A1A]">{testimonial.name}</p>
                            <p className="text-sm md:text-base text-[#1A1A1A]/70">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

              </Carousel>
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-8">
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
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6">
                      <div className="mb-4 text-[#EC7508]">{"★".repeat(5)}</div>
                      <p className="text-base md:text-lg text-[#1A1A1A] mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="text-lg md:text-xl font-medium text-[#1A1A1A]">{testimonial.name}</p>
                        <p className="text-sm md:text-base text-[#1A1A1A]/70">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}


        {/* <section className="py-20 bg-gradient-to-r from-[#EC7508] to-[#C11805] text-white">
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
        </section> */}


        <section id="testimonials" className="py-20 bg-white">
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
                  containScroll: "trimSnaps",
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
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 h-full border border-[#EC7508]/20 hover:border-[#EC7508]/40">
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

              </Carousel>
            </div>
          </div>
        </section>

        <Download></Download>
      </main>
      <Qr></Qr>
      <Footer></Footer>

    </div>
  )
}

function Howitworks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-[#F2F2F2]">
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
            <motion.div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0, filter: "blur(10px)", }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              style={{ y: index * 2 }}
            >
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
            </motion.div>
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
  )
}

function Qr() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
    }

    // Check initially
    checkMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const QrContent = () => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-center justify-center space-y-6"
    >
      <div className="space-y-2 flex flex-col justify-center items-center">
        <Image
          src="/images/Business.png"
          alt="QR Code"
          width={160}
          height={160}
          className="rounded-lg"
          priority
        />
        <Image
          src="/images/mini_business.png"
          alt="QR Code"
          width={50}
          height={160}
          className="rounded-lg"
        />
      </div>
      <div className="h-[2px] w-full bg-[#EC7508]"></div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <Image
          src="/images/OneRewards.png"
          alt="QR Code"
          width={160}
          height={160}
          className="rounded-lg"
          priority
        />
        <Image
          src="/images/mini_user.png"
          alt="QR Code"
          width={50}
          height={160}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  )

  return (
    <div className="fixed bottom-0 right-0 z-50 mb-5 mr-8 md:mb-5 md:mr-8 sm:mb-4 sm:mr-4 hidden md:block">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-black/30 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {isMobile ? (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="icon"
                className="relative bg-[#EC7508] hover:bg-[#C11805] text-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <QrCode className="h-16 w-16" />
                </motion.div>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white p-6">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-semibold mb-4">Scan QR Code</DialogTitle>
              </DialogHeader>
              <QrContent />
            </DialogContent>
          </Dialog>
        ) : (
          <HoverCard openDelay={0} closeDelay={200}>
            <HoverCardTrigger asChild>
              <Button
                size="icon"
                className="relative bg-[#EC7508] hover:bg-[#C11805] text-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <QrCode className="h-16 w-16" />
                </motion.div>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              align="end"
              className="w-fit p-4 bg-white shadow-[0_0_15px_rgba(236,117,8,0.2)] relative overflow-hidden"
              sideOffset={5}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#EC7508]/20 via-transparent to-[#EC7508]/20"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <QrContent />
            </HoverCardContent>
          </HoverCard>
        )}
      </motion.div>
    </div>
  )
}


function Footer() {
  return (
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

  )
}

function Download() {
  return (
    <section className="py-16 bg-[#F2F2F2]" id="download">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-3">Download Our Apps</h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">Get started with One Rewards today</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="bg-orange-500 p-5 h-[200px]">
              <div className="flex justify-center">
                <Image
                  src="/images/mini_user.png"
                  className='rounded-lg'
                  alt="One Rewards"
                  width={100}
                  height={40}

                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white text-center mt-3">One Rewards</h3>
              <p className="text-sm text-white/90 text-center mt-1">For Shoppers & Customers</p>

            </div>
            <div className="p-5">
              <p className="text-sm md:text-base text-[#1A1A1A]/70 mb-4 text-center">
                Earn rewards at all your favorite stores, track your points, and redeem exclusive offers.
              </p>
              <div className="flex flex-row gap-3 justify-between">

                <div className="flex justify-center items-center">
                  <Image
                    src="/images/OneRewards.png"
                    alt="One Rewards"
                    width={100}
                    height={40}
                  />
                </div>

                <div className='flex flex-col gap-3'>
                  <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.mcmr.user&pcampaignid=web_share" className="inline-flex items-center justify-center bg-black/90 text-white rounded-lg px-4 py-2">
                    <Image src="/images/android.png" alt="Google Play" width={130} height={130} />
                  </Link>
                  <Link target="_blank" href="https://apps.apple.com/in/app/one-rewards-app/id6737114628" className="inline-flex items-center justify-center bg-black/90 text-white rounded-lg px-4 py-2">
                    <Image src="/images/ios.png" alt="App Store" width={130} height={130} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="bg-red-600 p-5 h-[200px]">
              <div className="flex justify-center">
                <Image
                  src="/images/mini_business.png"
                  className='rounded-lg'
                  alt="One Rewards"
                  width={100}
                  height={40}

                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white text-center mt-3">One Rewards Business</h3>
              <p className="text-sm text-white/90 text-center mt-1">For Retailers & Merchants</p>
            </div>
            <div className="p-5">
              <p className="text-sm md:text-base text-[#1A1A1A]/70 mb-4 text-center">
                Manage your loyalty program, track customer engagement, and grow your business.
              </p>

              <div className="flex flex-row gap-3 justify-between">
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/Business.png"
                    alt="One Rewards"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.mcmr.store&pcampaignid=web_share" className="inline-flex items-center justify-center bg-black/90 text-white rounded-lg px-4 py-2">
                    <Image src="/images/android.png" alt="Google Play" width={130} height={130} />
                  </Link>
                  <Link target="_blank" href="https://apps.apple.com/in/app/one-rewards-business/id6737472554" className="inline-flex items-center justify-center bg-black/90 text-white rounded-lg px-4 py-2">
                    <Image src="/images/ios.png" alt="App Store" width={120} height={120} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}



function ListedItems() {
  const items = [
    { icon: "✂️", name: "Salons & Spas", url: "/images/cards/salon.jpg" },
    { icon: "🛒", name: "Grocery Stores", url: "/images/cards/grocery.jpg" },
    { icon: "💪", name: "Health & Fitness", url: "/images/cards/health.jpg" },
    { icon: "🚗", name: "Rent-a-Car", url: "/images/cards/cars.jpg" },
    { icon: "👕", name: "Fashion Retail", url: "/images/cards/fashion.jpg" },
    { icon: "🎬", name: "Movie Theaters", url: "/images/cards/theatre.jpg" },
    { icon: "✈️", name: "Airlines", url: "/images/cards/flights.jpg" },
    { icon: "🍔", name: "Restaurants", url: "/images/cards/restaurants.jpg" },
    { icon: "☕", name: "Cafes", url: "/images/cards/cafe.jpg" },
    { icon: "📚", name: "Bookstores", url: "/images/cards/bookstore.jpg" },
    { icon: "🏪", name: "Convenience Stores", url: "/images/cards/convenience.jpg" },
    { icon: "💊", name: "Pharmacies", url: "/images/cards/pharmacy.jpg" }
  ]

  return (
    <section id="business-types" className="relative py-10">
      <div className="container">
        <div className="pt-10">
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
              }}
              plugins={[
                Autoplay({
                  delay: 2000, // Increased delay for smoother transitions
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                  rootNode: (emblaRoot) => emblaRoot.parentElement,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="md:-ml-4">
                {items.map((item, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full p-2 sm:p-3 md:p-4 rounded-xl shadow-md bg-white/95 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col items-center w-full h-full">
                        <div className="relative w-full h-[200px] sm:h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.url}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 flex items-center justify-center w-full mt-4 px-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A1A1A] hover:text-[#EC7508] transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const latestref = useRef(0);
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (y: number) => {
    if (Math.abs(y - latestref.current) > 50) {
      setIsOpen(y - latestref.current > 0);
      latestref.current = y;
    }
  })

  return (
    <motion.header
      animate={isOpen ? "hidden" : "visible"}
      whileHover="visible"
      variants={{
        hidden: { y: "-90%" },
        visible: { y: "0%" }
      }}
      transition={{ duration: 0.5 }}

      className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="#header">
            <Image
              src="/images/logo_black.png"
              alt="One Rewards Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
            About Us
          </Link>

          <Link href="#benefits" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
            Benefits
          </Link>
          <Link href="#business" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
            Business
          </Link>
          <Link href="#testimonials" className="text-[#1A1A1A] hover:text-[#EC7508] font-medium transition-colors">
            Testimonials
          </Link>


        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className=" md:block">
            <Button variant="outline" className="border-[#EC7508] text-[#EC7508] hover:bg-[#EC7508] hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </motion.header>

  )
}

function Customers() {
  return (
    <section id="customers" className="relative min-h-screen flex flex-col mb-10 items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center relative">
        <Image src="/images/logo_black.png" className="mt-20 mb-20" alt="About" width={500} height={500} />
      </div>

      <div className="absolute inset-0">
        <RetroGrid
          angle={45}
          cellSize={40}
          opacity={0.5}
          speed={4}
          lightLineColor="rgba(236, 117, 8, 0.6)"
          darkLineColor="rgba(193, 24, 5, 0.6)"
        />
      </div>
      <div className="container relative">
        {/* Left floating coins */}

        <div className="text-center max-w-4xl mx-auto space-y-20">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Use Our App Daily & Earn Endless Rewards
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[#1A1A1A]/70 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "Join thousands of happy customers who are earning rewards with every purchase. Start your rewards journey today!"
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-gradient-to-r from-[#EC7508] to-[#C11805] text-white hover:opacity-90">
              <Link href="#download">
                Start Earning Now
              </Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


function Hero() {
  return (
    <section className="relative top-0 inset-0 overflow-hidden bg-gradient-to-r from-[#EC7508] to-[#C11805] min-h-screen  flex items-center">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div className="container mt-10 relative flex flex-col md:flex-row items-center gap-8 py-12 md:py-0 ">
        <motion.div
          className="relative md:w-1/2 aspect-square max-w-[800px] flex justify-center flex-row  md:flex-col items-center mx-auto w-full"
          initial={{ opacity: 0, x: 300, filter: "blur(10px), scale(2)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px), scale(1)" }}
          exit={{ opacity: 0, y: -200, filter: "blur(10px), scale(2)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div >
            <Image
              src="/images/leftmock.png"
              alt="One Rewards App"
              width={280}
              height={300}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex justify-center items-center ">
              <Image src="/images/logo_black.png" className="bg-white rounded-md p-2" alt="About" width={100} height={100} />
            </div>
          </div>
          <div className="md:hidden">
            <Image
              src="/images/rightmock.png"
              alt="One Rewards App"
              width={280}
              height={300}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw object-cover"
            />
            <div className="flex justify-center items-center ">
              <Image src="/images/full_business.png" className="bg-white rounded-md p-2" alt="About" width={120} height={100} />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-3 text-[#F2F2F2] md:w-1/2 md:pt-10 pt-0 px-4 flex flex-col justify-center items-center text-center md:px-0 md:pt-0"
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -200, filter: "blur(10px)", scale: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: false }}
        >
          <motion.div className="relative block overflow-hidden"
            // initial={"hidden" + { opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            initial="hidden"
            whileHover="hover"
          >
            <div>
              {("OneRewards").split("").map((char, index) => {
                return (
                  <motion.span className="inline-block text-4xl text-white md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] "
                    variants={{
                      hidden: { y: 0 },
                      hover: { y: "-100%" },
                      view: { y: "-100%" }
                    }}
                    transition={{ delay: index * 0.1 }}
                    key={index}>{char}</motion.span>
                )
              })}
            </div>
            <div className="absolute inset-0">
              {("OneRewards").split("").map((char, index) => {
                return (
                  <motion.span className="inline-block text-4xl text-white md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] "
                    variants={{
                      hidden: { y: "100%" },
                      hover: { y: 0 },
                      view: { y: 0 }
                    }}
                    transition={{ delay: index * 0.1 }}
                    key={index}>{char}</motion.span>
                )
              })}
            </div>
          </motion.div>
          <h1 className="text-1xl text-white md:text-3xl lg:text-4xl flex justify-center items-center font-medium text-[#1A1A1A]">
            For Endless Rewards
          </h1>

          <div className="sm:flex-row gap-4 pt-4 text-center">
            <Button size="lg" className="bg-white text-[#EC7508] hover:bg-[#F2F2F2] hover:text-[#C11805]">
              <Link href="#download">
                Get Started
              </Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative md:w-1/2 aspect-square max-w-[800px] hidden md:flex justify-center flex-col items-center mx-auto w-full"
          initial={{ opacity: 0, x: -300, filter: "blur(10px), scale(2)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px), scale(1)" }}
          exit={{ opacity: 0, y: -200, filter: "blur(10px), scale(2)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src="/images/rightmock.png"
            alt="One Rewards App"
            width={280}
            height={300}
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw object-cover"
          />
          <div className="flex justify-center items-center ">
            <Image src="/images/full_business.png" className="bg-white rounded-md p-2" alt="About" width={120} height={100} />
          </div>
        </motion.div>
      </div>
    </section>


  )
}


function EarnRewards() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 7]);
  return (
    <div>
      <div className="h-[200vh] relative">

        <div className="sticky top-0 h-screen flex items-center justify-center">
          <Image
            src="/images/bgrewards.webp"
            alt="Rewards Background"
            width={100}
            height={100}
            className="w-full h-full object-cover brightness-75"
          />
          <h1 className="absolute z-20 text-3xl font-bold backdrop-blur-sm bg-white/10 px-8 py-4 rounded-xl border border-white/20 shadow-xl text-white/70 tracking-wide text-center">Make Every Purchase Count</h1>
        </div>
        <div ref={ref} className="absolute top-0 left-0 w-full h-full z-10">
          <div className="bg-[#F2F2F2] w-screen h-screen z-10 flex items-center justify-center">
            <motion.h1
              className="text-[20vw] font-black uppercase leading-none text-center"
              style={{

                background: `url('/images/bgrewards.webp') center center / cover no-repeat fixed`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              ONE REWARDS
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}


function FadeContent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 7]);
  return (
    <div>
      <div className="h-[100vh] relative flex items-center mx-auto">
        <div ref={ref} className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
          <div className="bg-black w-screen h-screen z-10 flex items-center justify-center">
            <motion.h1
              className="text-[60px] md:text-[130px] font-black uppercase leading-none text-center"
              style={{
                background: `url('/images/fade.png') center center / cover no-repeat fixed`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              <span className="block">TURNING</span>
              <span className="block">TRANSACTIONS</span>
              <span className="block">INTO</span>
              <span className="block">TREASURES</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}




function AboutPage() {
  return (
    <>
      <section id="about" className="relative overflow-hidden bg-white  py-20 md:py-32">
        <div className="absolute inset-0  opacity-10"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center text-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About One Rewards</h1>
            <p className="text-lg md:text-xl opacity-90">
              Transforming customer loyalty programs for retail businesses worldwide. We're on a mission to help businesses
              build stronger relationships with their customers through innovative rewards solutions.
            </p>
          </div>
        </div>
      </section>
      <div className='px-10 bg-gradient-to-r from-[#EC7508] to-[#C11805] text-white py-20'>
        <h2 className="text-3xl md:text-4xl font-bold  mb-6">Our Story</h2>
        <p className="text-lg text-white/90 mb-6">
          Founded in 2023, One Rewards emerged from a simple observation: traditional loyalty programs weren't
          meeting the needs of modern retail businesses and their customers. We set out to create a solution that
          would make loyalty programs more accessible, engaging, and effective.
        </p>
        <p className="text-lg text-white/90 mb-8">
          Today, we're proud to serve thousands of businesses across various industries, helping them build
          meaningful relationships with their customers through innovative rewards solutions.
        </p>
        <Button className="bg-white text-[#EC7508] hover:bg-[#F2F2F2] hover:text-[#C11805]">
          Join Our Journey
        </Button>
      </div>
      <section id="mission" className="py-20 bg-[#F2F2F2]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Mission</h2>
            <p className="text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
              To empower retail businesses with innovative loyalty solutions that drive customer engagement and business
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in customer loyalty programs.",
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We're committed to helping you achieve your business goals.",
              },
              {
                title: "Integrity",
                description: "We operate with transparency and honesty in all our business dealings.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{value.title}</h3>
                  <p className="text-[#1A1A1A]/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>

  )
}



function Benefitusers() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5 font-medium text-[#1A1A1A] ">
            Benefits for Users
          </h2>
          {/* <div className="flex justify-center hidden md:flex items-center">
            <div className="relative w-[600px] flex justify-center items-center h-[500px] object-cover">
              <div className="absolute inset-0 z-10">
                <Spline
                  scene="https://prod.spline.design/RfgUeOZDKQxvZk5V/scene.splinecode"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[180px] h-[70px] bg-white z-20"></div>
            </div>
          </div> */}
          <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Discover why thousands of shoppers love using One Rewards
          </p>
        </div>

        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <div className="bg-[#F2F2F2] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg md:text-xl font-medium mb-2 text-[#1A1A1A]">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-[#1A1A1A]/70">{benefit.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>


          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Link href="#download">
              Start Earning Rewards
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


function CustomerLoyalty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const slideIn = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <section id="features" className="relative py-20 bg-[#F2F2F2]" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-4">
            Everything You Need to Build Customer Loyalty
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/70 max-w-3xl mx-auto">
            One Rewards provides all the tools retail businesses need to create, manage, and grow successful loyalty
            programs.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
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
            <motion.div
              key={index}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 100, filter: "blur(100px), scale(2)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px), scale(1)" }}
              exit={{ opacity: 0, y: -100, filter: "blur(10px), scale(2)" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: false }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-[#1A1A1A]">{feature.title}</h3>
                  <p className="text-sm md:text-base text-[#1A1A1A]/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-gradient-to-r from-[#EC7508] to-[#C11805] hover:opacity-90 text-white">
            <Link href="#download">
              Explore Now
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}