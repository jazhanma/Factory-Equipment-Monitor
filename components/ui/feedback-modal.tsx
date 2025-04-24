"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Feedback submitted:", { feedback, email })
    setSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setIsOpen(false)
      setFeedback("")
      setEmail("")
    }, 3000)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="gap-2 hover:scale-105 transition-transform duration-200 hover:shadow-md"
      >
        <MessageSquare className="h-4 w-4" />
        Feedback
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

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Thank You!</h3>
                <p className="text-muted-foreground">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Share Your Feedback</h3>
                  <p className="text-muted-foreground">Help us improve MonitorPro with your suggestions.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us what you think..."
                    className="min-h-[100px]"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform duration-200 hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                >
                  Submit Feedback
                </Button>
              </form>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
