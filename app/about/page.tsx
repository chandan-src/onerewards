import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative overflow-hidden bg-gradient-to-r from-[#EC7508] to-[#C11805] py-20 md:py-32">
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                    <div className="container relative">
                        <div className="max-w-3xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">About One Rewards</h1>
                            <p className="text-lg md:text-xl opacity-90">
                                Transforming customer loyalty programs for retail businesses worldwide. We're on a mission to help businesses
                                build stronger relationships with their customers through innovative rewards solutions.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container">
                        <div className="">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Our Story</h2>
                                <p className="text-lg text-[#1A1A1A]/70 mb-6">
                                    Founded in 2023, One Rewards emerged from a simple observation: traditional loyalty programs weren't
                                    meeting the needs of modern retail businesses and their customers. We set out to create a solution that
                                    would make loyalty programs more accessible, engaging, and effective.
                                </p>
                                <p className="text-lg text-[#1A1A1A]/70 mb-8">
                                    Today, we're proud to serve thousands of businesses across various industries, helping them build
                                    meaningful relationships with their customers through innovative rewards solutions.
                                </p>
                                <Button className="bg-gradient-to-r from-[#EC7508] to-[#C11805] hover:opacity-90">
                                    Join Our Journey
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#F2F2F2]">
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

             
            </main>
        </div>
    )
} 