"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Cog, Home, Laptop, LogOut, Menu, Search, User, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <nav className="flex flex-col gap-4 p-6">
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <Home className="h-6 w-6" />
                <span>MonitorPro</span>
              </Link>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive("/dashboard") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="/dashboard/equipment"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive("/dashboard/equipment") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Laptop className="h-5 w-5" />
                  Equipment
                </Link>
                <Link
                  href="/dashboard/alerts"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive("/dashboard/alerts") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  Alerts
                </Link>
                <Link
                  href="/dashboard/logs"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive("/dashboard/logs") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  Logs
                </Link>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive("/dashboard/settings") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Cog className="h-5 w-5" />
                  Settings
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold md:text-lg">
          <Home className="h-6 w-6" />
          <span>MonitorPro</span>
        </Link>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full md:w-[200px] lg:w-[300px] pl-8" />
        </div>
        <ThemeToggle />
        <Button variant="outline" size="icon" className="ml-auto md:ml-0">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="outline" size="sm" className="hidden md:flex">
          <User className="mr-2 h-4 w-4" />
          Jaskaran Singh
          <span className="sr-only">User menu</span>
        </Button>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
          <nav className="flex flex-col gap-4 p-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive("/dashboard") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/dashboard/equipment"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive("/dashboard/equipment") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
              >
                <Laptop className="h-5 w-5" />
                Equipment
              </Link>
              <Link
                href="/dashboard/alerts"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive("/dashboard/alerts") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
              >
                <Bell className="h-5 w-5" />
                Alerts
              </Link>
              <Link
                href="/dashboard/logs"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive("/dashboard/logs") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
              >
                <FileText className="h-5 w-5" />
                Logs
              </Link>
              <Link
                href="/dashboard/settings"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive("/dashboard/settings") ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
              >
                <Cog className="h-5 w-5" />
                Settings
              </Link>
            </div>
          </nav>
          <div className="mt-auto p-6 border-t">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Jaskaran Singh</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full gap-1">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
        </aside>
        {children}
      </div>
    </div>
  )
}
