import { Home } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardShell } from "@/components/dashboard-shell"
import { AnimatedStatsGroup } from "@/components/animated-stats"
import { TooltipHelper } from "@/components/ui/tooltip-helper"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AlertsTable } from "@/components/alerts-table"

export default function DashboardPage() {
  return (
    <TooltipProvider>
      <DashboardShell
        title="Dashboard"
        description="Monitor your equipment and system status"
        icon={<Home className="h-6 w-6 text-primary" />}
      >
        <div className="grid gap-6">
          <AnimatedStatsGroup />
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>System performance metrics for the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <DashboardChart />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Latest alerts from your monitored equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsTable alerts={alerts} />
            </CardContent>
          </Card>
        </div>

        {/* Floating Tooltip Helper */}
        <TooltipHelper />
      </DashboardShell>
    </TooltipProvider>
  )
}

const alerts = [
  {
    id: "1",
    type: "Temperature",
    message: "High temperature detected in Server Rack A",
    severity: "critical",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    type: "Bandwidth",
    message: "Network Switch B approaching capacity",
    severity: "warning",
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    type: "CPU Usage",
    message: "Database Server CPU usage normal",
    severity: "info",
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    type: "Storage",
    message: "Backup System storage warning",
    severity: "warning",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "5",
    type: "Connectivity",
    message: "Cloud Instance connection lost",
    severity: "critical",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
]
