"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AnimatedStatProps {
  title: string
  value: number
  suffix?: string
  prefix?: string
  increment?: [number, number]
  interval?: number
  formatter?: (value: number) => string
  change?: string
}

export function AnimatedStat({
  title,
  value: initialValue,
  suffix = "",
  prefix = "",
  increment = [0, 0],
  interval = 3000,
  formatter = (v) => v.toString(),
  change,
}: AnimatedStatProps) {
  const [value, setValue] = useState(initialValue)
  const [isIncreasing, setIsIncreasing] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (increment[0] === 0 && increment[1] === 0) return

      const randomIncrement = Math.floor(Math.random() * (increment[1] - increment[0] + 1) + increment[0])

      setValue((prev) => prev + randomIncrement)
      setIsIncreasing(true)

      // Reset the animation after a short delay
      setTimeout(() => setIsIncreasing(false), 1000)
    }, interval)

    return () => clearInterval(timer)
  }, [increment, interval])

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`text-2xl font-bold transition-all duration-1000 ${isIncreasing ? "text-green-500 scale-110" : ""}`}
        >
          {prefix}
          {formatter(value)}
          {suffix}
        </div>
        {change && <p className="text-xs text-muted-foreground">{change}</p>}
      </CardContent>
    </Card>
  )
}

export function AnimatedStatsGroup() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <AnimatedStat
        title="Total Equipment"
        value={128}
        increment={[1, 3]}
        interval={5000}
        change="+8 from last month"
      />
      <AnimatedStat title="Active Alerts" value={12} increment={[-1, 2]} interval={8000} change="-3 from yesterday" />
      <AnimatedStat
        title="Uptime"
        value={99.8}
        suffix="%"
        increment={[0.01, 0.05]}
        interval={10000}
        formatter={(v) => v.toFixed(1)}
        change="+0.2% from last week"
      />
      <AnimatedStat
        title="Response Time"
        value={245}
        suffix="ms"
        increment={[-5, 8]}
        interval={6000}
        change="-18ms from last week"
      />
    </div>
  )
}
