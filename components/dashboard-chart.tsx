"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card } from "@/components/ui/card"

// Generate random data for the chart
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      cpu: Math.floor(Math.random() * 30) + 50,
      memory: Math.floor(Math.random() * 20) + 60,
      network: Math.floor(Math.random() * 40) + 30,
    })
  }

  return data
}

export function DashboardChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2 shadow-lg border">
                  <p className="font-medium">{label}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      CPU: {payload[0].value}%
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Memory: {payload[1].value}%
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Network: {payload[2].value}%
                    </p>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="cpu"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="memory"
          stroke="hsl(var(--blue-500))"
          fill="hsl(var(--blue-500))"
          fillOpacity={0.1}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="network"
          stroke="hsl(var(--green-500))"
          fill="hsl(var(--green-500))"
          fillOpacity={0.1}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
