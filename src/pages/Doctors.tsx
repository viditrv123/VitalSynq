import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { UserPlus, Search, Phone, Mail, Star, Clock, Users } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Michael Smith",
    specialization: "Cardiology",
    experience: "15 years",
    phone: "+1 (555) 111-2222",
    email: "dr.smith@hospital.com",
    rating: 4.9,
    patients: 247,
    status: "Available",
    nextAvailable: "Today 2:30 PM",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dr. Sarah Wilson",
    specialization: "Neurology",
    experience: "12 years",
    phone: "+1 (555) 333-4444",
    email: "dr.wilson@hospital.com",
    rating: 4.8,
    patients: 189,
    status: "In Surgery",
    nextAvailable: "Tomorrow 9:00 AM",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Emily Garcia",
    specialization: "Pediatrics",
    experience: "8 years",
    phone: "+1 (555) 555-6666",
    email: "dr.garcia@hospital.com",
    rating: 4.9,
    patients: 156,
    status: "Available",
    nextAvailable: "Today 4:00 PM",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Dr. James Lee",
    specialization: "Orthopedics",
    experience: "20 years",
    phone: "+1 (555) 777-8888",
    email: "dr.lee@hospital.com",
    rating: 4.7,
    patients: 298,
    status: "On Leave",
    nextAvailable: "Next Week",
    avatar: "/placeholder.svg"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Available":
      return "bg-medical-success text-white";
    case "In Surgery":
      return "bg-medical-warning text-white";
    case "On Leave":
      return "bg-medical-emergency text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Doctors() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Doctor Management"
            description="Manage medical staff and their schedules"
            action={
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-soft">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Doctor
              </Button>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Search and Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <Card className="lg:col-span-2 shadow-soft">
                <CardHeader>
                  <CardTitle>Search Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search by name or specialization..."
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-medical-primary">89</div>
                    <div className="text-sm text-muted-foreground">Total Doctors</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-medical-success">67</div>
                    <div className="text-sm text-muted-foreground">Available Now</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Doctor Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <Card
                  key={doctor.id}
                  className="shadow-soft hover:shadow-medical transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    {/* Doctor Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={doctor.avatar} alt={doctor.name} />
                        <AvatarFallback className="bg-gradient-primary text-white text-lg">
                          {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-medical-primary font-medium">
                          {doctor.specialization}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {doctor.experience} experience
                        </p>
                      </div>
                      <Badge className={getStatusColor(doctor.status)}>
                        {doctor.status}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{doctor.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="w-4 h-4 text-medical-primary" />
                          <span className="font-semibold">{doctor.patients}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Patients</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center space-x-1">
                          <Clock className="w-4 h-4 text-medical-success" />
                          <span className="text-xs font-medium">Available</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{doctor.nextAvailable}</div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-medical-primary" />
                        <span className="truncate">{doctor.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-medical-primary" />
                        <span className="truncate">{doctor.email}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" className="flex-1">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}