import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, Search } from "lucide-react";
import { Input } from "./ui/input";

const appointments = [
  {
    id: 1,
    patient: "Sarah Johnson",
    doctor: "Dr. Smith",
    time: "09:00 AM",
    department: "Cardiology",
    status: "confirmed",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    patient: "Michael Brown",
    doctor: "Dr. Wilson",
    time: "10:30 AM",
    department: "Neurology",
    status: "pending",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    patient: "Emily Davis",
    doctor: "Dr. Garcia",
    time: "02:15 PM",
    department: "Pediatrics",
    status: "confirmed",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    patient: "Robert Wilson",
    doctor: "Dr. Lee",
    time: "03:45 PM",
    department: "Orthopedics",
    status: "completed",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    patient: "Sarah Johnson",
    doctor: "Dr. Smith",
    time: "09:00 AM",
    department: "Cardiology",
    status: "confirmed",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    patient: "Michael Brown",
    doctor: "Dr. Wilson",
    time: "10:30 AM",
    department: "Neurology",
    status: "pending",
    avatar: "/placeholder.svg",
  },
  {
    id: 7,
    patient: "Emily Davis",
    doctor: "Dr. Garcia",
    time: "02:15 PM",
    department: "Pediatrics",
    status: "confirmed",
    avatar: "/placeholder.svg",
  },
  {
    id: 8,
    patient: "Robert Wilson",
    doctor: "Dr. Lee",
    time: "03:45 PM",
    department: "Orthopedics",
    status: "completed",
    avatar: "/placeholder.svg",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-medical-success text-white";
    case "pending":
      return "bg-medical-warning text-white";
    case "completed":
      return "bg-medical-accent text-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export function RecentAppointments() {
  return (
    <Card className="shadow-soft">
      <CardHeader className="flex-row justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-medical-primary" />
          <span>Today's Appointments</span>
        </CardTitle>
        <div className="flex flex-row items-center gap-3">
          <Input className="max-w-96" placeholder="Search..." />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 h-52 overflow-y-auto">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={appointment.avatar}
                  alt={appointment.patient}
                />
                <AvatarFallback className="bg-gradient-primary text-white">
                  {appointment.patient
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">
                  {appointment.patient}
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{appointment.doctor}</span>
                  <span>•</span>
                  <MapPin className="h-3 w-3" />
                  <span>{appointment.department}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-foreground">
                {appointment.time}
              </span>
              <Badge className={getStatusColor(appointment.status)}>
                {appointment.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
