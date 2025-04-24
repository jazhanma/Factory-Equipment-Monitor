import { FileText, ArrowDown } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardShell } from "@/components/dashboard-shell"

export default function LogsPage() {
  return (
    <DashboardShell
      title="System Logs"
      description="View and analyze system activity logs."
      icon={<FileText className="h-6 w-6 text-primary" />}
    >
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Activity Logs</CardTitle>
              <CardDescription>Recent system activities and events.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-[180px] md:w-[200px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search logs..." className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[110px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Logs</SelectItem>
                  <SelectItem value="error">Errors</SelectItem>
                  <SelectItem value="warning">Warnings</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <Button variant="ghost" size="sm" className="gap-1 px-2 font-medium">
                    Time
                    <ArrowDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Event</TableHead>
                <TableHead>User</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">{log.time}</TableCell>
                  <TableCell>{log.event}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="font-mono text-xs">{log.ipAddress}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        log.level === "error"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          : log.level === "warning"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : log.level === "info"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}
                    >
                      {log.level}
                    </span>
                  </TableCell>
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

function Search({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

const logs = [
  {
    id: "1",
    time: "2023-04-24 14:32:15",
    event: "User login successful",
    user: "admin@example.com",
    ipAddress: "192.168.1.1",
    level: "info",
  },
  {
    id: "2",
    time: "2023-04-24 14:30:22",
    event: "Failed login attempt",
    user: "unknown",
    ipAddress: "203.0.113.42",
    level: "warning",
  },
  {
    id: "3",
    time: "2023-04-24 14:28:05",
    event: "System update initiated",
    user: "system",
    ipAddress: "127.0.0.1",
    level: "info",
  },
  {
    id: "4",
    time: "2023-04-24 14:15:32",
    event: "Database connection error",
    user: "system",
    ipAddress: "127.0.0.1",
    level: "error",
  },
  {
    id: "5",
    time: "2023-04-24 14:10:15",
    event: "New equipment added",
    user: "jaskaran@example.com",
    ipAddress: "192.168.1.5",
    level: "info",
  },
  {
    id: "6",
    time: "2023-04-24 14:05:42",
    event: "Alert threshold modified",
    user: "jaskaran@example.com",
    ipAddress: "192.168.1.5",
    level: "info",
  },
  {
    id: "7",
    time: "2023-04-24 13:58:11",
    event: "Disk space warning",
    user: "system",
    ipAddress: "127.0.0.1",
    level: "warning",
  },
  {
    id: "8",
    time: "2023-04-24 13:45:30",
    event: "Backup completed successfully",
    user: "system",
    ipAddress: "127.0.0.1",
    level: "success",
  },
]
