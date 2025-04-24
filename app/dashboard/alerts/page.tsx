import { Bell, AlertTriangle, Info, CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardShell } from "@/components/dashboard-shell"

export default function AlertsPage() {
  return (
    <DashboardShell
      title="Alerts"
      description="View and manage system alerts and notifications."
      icon={<Bell className="h-6 w-6 text-primary" />}
    >
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Alerts</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="warnings">Warnings</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-4 space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
        <TabsContent value="critical" className="mt-4 space-y-4">
          {alerts
            .filter((alert) => alert.severity === "critical")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>
        <TabsContent value="warnings" className="mt-4 space-y-4">
          {alerts
            .filter((alert) => alert.severity === "warning")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>
        <TabsContent value="info" className="mt-4 space-y-4">
          {alerts
            .filter((alert) => alert.severity === "info")
            .map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

function AlertCard({ alert }) {
  const getIcon = (severity) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getIcon(alert.severity)}
            <CardTitle className="text-base">{alert.title}</CardTitle>
          </div>
          <span className="text-xs text-muted-foreground">{alert.time}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{alert.description}</CardDescription>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs font-medium">{alert.source}</span>
        </div>
      </CardContent>
    </Card>
  )
}

const alerts = [
  {
    id: "1",
    title: "High CPU Usage Detected",
    description: "Server Rack A is experiencing unusually high CPU usage (95%) for the past 15 minutes.",
    severity: "critical",
    source: "Server Rack A",
    time: "10 minutes ago",
  },
  {
    id: "2",
    title: "Network Bandwidth Warning",
    description: "Network Switch B is approaching bandwidth capacity (85% utilization).",
    severity: "warning",
    source: "Network Switch B",
    time: "25 minutes ago",
  },
  {
    id: "3",
    title: "Database Backup Completed",
    description: "Weekly database backup completed successfully. 1.2TB of data backed up.",
    severity: "info",
    source: "Database Server",
    time: "1 hour ago",
  },
  {
    id: "4",
    title: "Storage Space Warning",
    description: "Backup System is at 85% capacity. Consider expanding storage or archiving old backups.",
    severity: "warning",
    source: "Backup System",
    time: "2 hours ago",
  },
  {
    id: "5",
    title: "Cloud Instance Connectivity Lost",
    description: "Connection to Cloud Instance has been lost. Automatic recovery has been initiated.",
    severity: "critical",
    source: "Cloud Instance",
    time: "3 hours ago",
  },
  {
    id: "6",
    title: "System Update Available",
    description: "A new system update (v2.3.4) is available for installation.",
    severity: "info",
    source: "System",
    time: "5 hours ago",
  },
]
