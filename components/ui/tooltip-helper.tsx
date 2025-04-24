"use client"

import { useState } from "react"
import { HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const tips = [
  {
    title: "Quick Navigation",
    description: "Click 'Launch Dashboard' to access the full monitoring interface.",
  },
  {
    title: "Dark Mode",
    description: "Toggle between light and dark themes using the sun/moon icon in the header.",
  },
  {
    title: "Real-time Monitoring",
    description: "Dashboard statistics update in real-time to show you the latest system status.",
  },
  {
    title: "Mobile Friendly",
    description: "Access your monitoring dashboard on any device - desktop, tablet, or mobile.",
  },
]

export function TooltipHelper() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length)
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-200 hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        size="icon"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="relative max-w-md w-full p-6 shadow-xl border-2 animate-in fade-in zoom-in duration-300">
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 hover:scale-110 transition-transform duration-200"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{tips[currentTip].title}</h3>
                <p className="text-muted-foreground">{tips[currentTip].description}</p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex space-x-1">
                  {tips.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${index === currentTip ? "bg-primary" : "bg-muted"}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button onClick={prevTip} variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button onClick={nextTip} variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
