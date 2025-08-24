import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, User, UserCheck, Plus, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const appointments = [
  {
    id: 1,
    patient: "Sarah Johnson",
    doctor: "Dr. Michael Smith",
    department: "Cardiology",
    date: "2024-01-20",
    time: "09:00 AM",
    duration: "30 min",
    status: "confirmed",
    type: "Follow-up",
    patientAvatar: "/placeholder.svg",
    doctorAvatar: "/placeholder.svg"
  },
  {
    id: 2,
    patient: "Michael Brown",
    doctor: "Dr. Sarah Wilson",
    department: "Neurology",
    date: "2024-01-20",
    time: "10:30 AM",
    duration: "45 min",
    status: "pending",
    type: "Consultation",
    patientAvatar: "/placeholder.svg",
    doctorAvatar: "/placeholder.svg"
  },
  {
    id: 3,
    patient: "Emily Davis",
    doctor: "Dr. Emily Garcia",
    department: "Pediatrics",
    date: "2024-01-20",
    time: "02:15 PM",
    duration: "30 min",
    status: "confirmed",
    type: "Routine Checkup",
    patientAvatar: "/placeholder.svg",
    doctorAvatar: "/placeholder.svg"
  },
  {
    id: 4,
    patient: "Robert Wilson",
    doctor: "Dr. James Lee",
    department: "Orthopedics",
    date: "2024-01-20",
    time: "03:45 PM",
    duration: "60 min",
    status: "completed",
    type: "Surgery Consultation",
    patientAvatar: "/placeholder.svg",
    doctorAvatar: "/placeholder.svg"
  }
];

const upcomingAppointments = appointments.filter(apt => apt.status !== "completed");
const todayAppointments = appointments.filter(apt => apt.date === "2024-01-20");

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-medical-success text-white";
    case "pending":
      return "bg-medical-warning text-white";
    case "completed":
      return "bg-medical-accent text-foreground";
    case "cancelled":
      return "bg-medical-emergency text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const AppointmentCard = ({ appointment, index }: { appointment: any; index: number }) => (
  <Card
    className="shadow-soft hover:shadow-medical transition-all duration-300 hover:scale-[1.01] animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardContent className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Main Info */}
        <div className="flex-1 space-y-4">
          {/* Time and Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-medical-primary" />
              <span className="font-semibold text-foreground">
                {appointment.time} • {appointment.duration}
              </span>
            </div>
            <Badge className={getStatusColor(appointment.status)}>
              {appointment.status}
            </Badge>
          </div>

          {/* Patient and Doctor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={appointment.patientAvatar} alt={appointment.patient} />
                <AvatarFallback className="bg-gradient-secondary text-foreground">
                  {appointment.patient.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-medical-primary" />
                  <span className="text-sm text-muted-foreground">Patient</span>
                </div>
                <p className="font-medium text-foreground">{appointment.patient}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={appointment.doctorAvatar} alt={appointment.doctor} />
                <AvatarFallback className="bg-gradient-primary text-white">
                  {appointment.doctor.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-4 h-4 text-medical-primary" />
                  <span className="text-sm text-muted-foreground">Doctor</span>
                </div>
                <p className="font-medium text-foreground">{appointment.doctor}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
            <span>Department: <strong className="text-foreground">{appointment.department}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span>Type: <strong className="text-foreground">{appointment.type}</strong></span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:w-auto">
          <Button size="sm" variant="outline">
            View Details
          </Button>
          <Button size="sm" variant="outline">
            Reschedule
          </Button>
          {appointment.status === "pending" && (
            <Button size="sm" className="bg-medical-success hover:bg-medical-success/90">
              Confirm
            </Button>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Appointments() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Appointment Management"
            description="Schedule and manage patient appointments"
            action={
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-soft">
                  <Plus className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </div>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-primary">156</div>
                  <div className="text-sm text-muted-foreground">Today's Total</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-success">98</div>
                  <div className="text-sm text-muted-foreground">Confirmed</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-warning">32</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-emergency">8</div>
                  <div className="text-sm text-muted-foreground">Cancelled</div>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Tabs */}
            <Tabs defaultValue="today" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Today's Appointments
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>January 20, 2024</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {todayAppointments.map((appointment, index) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Upcoming Appointments
                </h3>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="all" className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  All Appointments
                </h3>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}