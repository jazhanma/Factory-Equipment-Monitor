import type { ReactNode } from "react"

import { DashboardLayout } from "@/components/dashboard-layout"

interface DashboardShellProps {
  children: ReactNode
  title: string
  description: string
  icon?: ReactNode
}

export function DashboardShell({ children, title, description, icon }: DashboardShellProps) {
  return (
    <DashboardLayout>
      <div className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {icon}
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </DashboardLayout>
  )
}
