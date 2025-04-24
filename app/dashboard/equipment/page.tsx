import { Laptop } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardShell } from "@/components/dashboard-shell"

export default function EquipmentPage() {
  return (
    <DashboardShell
      title="Equipment"
      description="Manage and monitor all your connected equipment."
      icon={<Laptop className="h-6 w-6 text-primary" />}
    >
      <Card>
        <CardHeader>
          <CardTitle>Equipment Inventory</CardTitle>
          <CardDescription>View and manage all your connected devices and infrastructure.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Online" ? "default" : item.status === "Maintenance" ? "outline" : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

const equipment = [
  {
    id: "1",
    name: "Server Rack A",
    type: "Server",
    status: "Online",
    lastUpdated: "2 minutes ago",
  },
  {
    id: "2",
    name: "Network Switch B",
    type: "Network",
    status: "Online",
    lastUpdated: "5 minutes ago",
  },
  {
    id: "3",
    name: "Database Server",
    type: "Server",
    status: "Maintenance",
    lastUpdated: "1 hour ago",
  },
  {
    id: "4",
    name: "Backup System",
    type: "Storage",
    status: "Online",
    lastUpdated: "30 minutes ago",
  },
  {
    id: "5",
    name: "Cloud Instance",
    type: "Virtual",
    status: "Offline",
    lastUpdated: "3 hours ago",
  },
  {
    id: "6",
    name: "Load Balancer",
    type: "Network",
    status: "Online",
    lastUpdated: "10 minutes ago",
  },
  {
    id: "7",
    name: "Firewall",
    type: "Security",
    status: "Online",
    lastUpdated: "15 minutes ago",
  },
]
