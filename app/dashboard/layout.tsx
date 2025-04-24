import type React from "react"
import type { Metadata } from "next"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "MonitorPro | Dashboard",
  description: "Monitor your infrastructure in real-time",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}
