import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, Calendar, FileText, AlertTriangle } from "lucide-react";

const actions = [
  {
    title: "Add New Patient",
    description: "Register a new patient",
    icon: UserPlus,
    variant: "default" as const,
    onClick: () => console.log("Add patient")
  },
  {
    title: "Schedule Appointment",
    description: "Book an appointment",
    icon: Calendar,
    variant: "secondary" as const,
    onClick: () => console.log("Schedule appointment")
  },
  {
    title: "Create Record",
    description: "New medical record",
    icon: FileText,
    variant: "outline" as const,
    onClick: () => console.log("Create record")
  },
  {
    title: "Emergency Alert",
    description: "Report emergency case",
    icon: AlertTriangle,
    variant: "destructive" as const,
    onClick: () => console.log("Emergency alert")
  }
];

export function QuickActions() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5 text-medical-primary" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="h-auto p-4 flex flex-col items-start space-y-2 text-left"
            onClick={action.onClick}
          >
            <div className="flex items-center space-x-2 w-full">
              <action.icon className="h-5 w-5" />
              <span className="font-medium">{action.title}</span>
            </div>
            <span className="text-sm opacity-90">{action.description}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}