import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Gauge, Linkedin, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { TooltipHelper } from "@/components/ui/tooltip-helper"
import { FeedbackButton } from "@/components/ui/feedback-modal"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PageTransition } from "@/components/ui/page-transition"

export default function LandingPage() {
  return (
    <TooltipProvider>
      <PageTransition>
        <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <Gauge className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                <span className="text-gray-900 dark:text-gray-100">MonitorPro</span>
              </div>
              <nav className="hidden gap-6 md:flex">
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Features
                </Link>
                <Link
                  href="#overview"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Overview
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link href="/auth/signin">
                  <Button
                    size="sm"
                    className="hidden md:flex glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="sm"
                    className="glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Launch Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {/* Hero Section with Clean Background */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-100">
                      Real-time monitoring for your critical infrastructure
                    </h1>
                    <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                      Get instant alerts, detailed analytics, and comprehensive tracking for all your equipment.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="group glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        Launch Dashboard
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/jaskaran-singh-199780222"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="gap-1 glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                        Connect with Jaskaran
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* App Overview */}
            <section id="overview" className="w-full bg-white dark:bg-gray-900 py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <ScrollAnimation>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                        App Overview
                      </h2>
                      <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        MonitorPro provides comprehensive monitoring solutions for businesses of all sizes. Our platform
                        helps you track, analyze, and optimize your equipment performance.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <ScrollAnimation delay={200}>
                    <div className="flex flex-col justify-center space-y-4">
                      <ul className="grid gap-6">
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              Centralized Dashboard
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              View all your critical metrics in one place with our intuitive dashboard interface.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Customizable Alerts</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Set up personalized alerts based on your specific thresholds and requirements.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Detailed Reporting</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Generate comprehensive reports to track performance over time and identify trends.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={400}>
                    <div className="flex flex-col justify-center space-y-4">
                      <ul className="grid gap-6">
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              Real-time Notifications
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Receive instant alerts when critical thresholds are reached or issues are detected.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Mobile Access</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Monitor your infrastructure from anywhere with our responsive mobile interface.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="grid gap-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Secure Architecture</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Rest easy knowing your data is protected with enterprise-grade security measures.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <ScrollAnimation>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                        Key Features
                      </h2>
                      <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our platform offers a comprehensive suite of tools to keep your infrastructure running smoothly.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
                  <ScrollAnimation delay={200}>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3">
                        <Gauge className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Real-time Monitoring</h3>
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Track your equipment performance in real-time with second-by-second updates and insights.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={300}>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3">
                        <BarChart3 className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Advanced Analytics</h3>
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Gain deep insights with our powerful analytics tools that help you make data-driven decisions.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={400}>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3">
                        <Shield className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Proactive Tracking</h3>
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Stay ahead of issues with proactive tracking that identifies potential problems before they
                        occur.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
              <div className="container px-4 md:px-6">
                <ScrollAnimation>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                        Ready to get started?
                      </h2>
                      <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Join thousands of businesses that trust MonitorPro for their monitoring needs.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link href="/dashboard">
                        <Button
                          size="lg"
                          className="group glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          Launch Dashboard
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/jaskaran-singh-199780222"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="glow-button bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          Contact Jaskaran
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </section>

            {/* Zoro Easter Egg */}
            <section className="w-full py-8 md:py-12 bg-gray-50 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-md">
                  <ScrollAnimation>
                    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="relative space-y-4">
                        <p
                          className="text-center font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100"
                          style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
                        >
                          Zorro tried to fix the system... but he got lost in the dashboard.
                        </p>
                        <div className="relative mx-auto overflow-hidden rounded-lg">
                          <Image
                            src="/images/zoro.jpg"
                            width={500}
                            height={500}
                            alt="Zoro from One Piece looking confused against a sunset"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>
          </main>
          <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100">
                <Gauge className="h-5 w-5" />
                <span>MonitorPro</span>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Jaskaran Singh. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <FeedbackButton />
                <Link
                  href="https://www.linkedin.com/in/jaskaran-singh-199780222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform duration-200 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </footer>

          {/* Floating Tooltip Helper */}
          <TooltipHelper />
        </div>
      </PageTransition>
    </TooltipProvider>
  )
}
