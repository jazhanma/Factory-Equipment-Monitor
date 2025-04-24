"use client";

import { Button } from "@/components/ui/button";
import { exportToCSV, exportToPDF, generateExportFilename } from "@/lib/export-utils";
import { Download } from "lucide-react";

interface Alert {
  id: string;
  type: string;
  message: string;
  severity: string;
  createdAt: string;
}

interface AlertsTableProps {
  alerts: Alert[];
}

export function AlertsTable({ alerts }: AlertsTableProps) {
  const handleExportCSV = () => {
    const filename = generateExportFilename('csv');
    exportToCSV(alerts, filename);
  };

  const handleExportPDF = () => {
    const filename = generateExportFilename('pdf');
    exportToPDF('alerts-table', filename);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleExportCSV}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleExportPDF}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export PDF
        </Button>
      </div>
      <div id="alerts-table" className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Severity</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id} className="border-b">
                <td className="p-4">{alert.type}</td>
                <td className="p-4">{alert.message}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      alert.severity === "warning"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {alert.severity}
                  </span>
                </td>
                <td className="p-4">
                  {new Date(alert.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 