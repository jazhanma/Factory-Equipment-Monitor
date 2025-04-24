import type React from "react"
import type { Metadata } from "next"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "MonitorPro | Authentication",
  description: "Sign in to your MonitorPro account",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}
