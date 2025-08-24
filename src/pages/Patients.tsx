import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { UserPlus, Search, Phone, Mail, MapPin, Calendar } from "lucide-react";

const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    phone: "+1 (555) 123-4567",
    email: "sarah.j@email.com",
    address: "123 Main St, New York",
    lastVisit: "2024-01-15",
    condition: "Hypertension",
    status: "Active",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Michael Brown",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 987-6543",
    email: "m.brown@email.com",
    address: "456 Oak Ave, Brooklyn",
    lastVisit: "2024-01-12",
    condition: "Diabetes",
    status: "Active",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Emily Davis",
    age: 28,
    gender: "Female",
    phone: "+1 (555) 456-7890",
    email: "emily.d@email.com",
    address: "789 Pine St, Queens",
    lastVisit: "2024-01-08",
    condition: "Routine Checkup",
    status: "Discharged",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Robert Wilson",
    age: 52,
    gender: "Male",
    phone: "+1 (555) 321-0987",
    email: "r.wilson@email.com",
    address: "321 Elm St, Manhattan",
    lastVisit: "2024-01-10",
    condition: "Orthopedic Surgery",
    status: "In Treatment",
    avatar: "/placeholder.svg"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-medical-success text-white";
    case "In Treatment":
      return "bg-medical-warning text-white";
    case "Discharged":
      return "bg-medical-accent text-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Patients() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Patient Management"
            description="Manage patient records and information"
            action={
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-soft">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Patient
              </Button>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Search and Filters */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Search Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search patients by name, phone, or condition..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="sm:w-auto">
                    Advanced Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Patient List */}
            <div className="grid gap-4">
              {patients.map((patient, index) => (
                <Card
                  key={patient.id}
                  className="shadow-soft hover:shadow-medical transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Patient Info */}
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={patient.avatar} alt={patient.name} />
                          <AvatarFallback className="bg-gradient-primary text-white">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground truncate">
                            {patient.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {patient.age} years • {patient.gender}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Condition: {patient.condition}
                          </p>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-medical-primary" />
                          <span className="truncate">{patient.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-medical-primary" />
                          <span className="truncate">{patient.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-medical-primary" />
                          <span>Last: {patient.lastVisit}</span>
                        </div>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex items-center justify-between lg:flex-col lg:items-end gap-2">
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Address (mobile only) */}
                    <div className="mt-4 pt-4 border-t lg:hidden">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-medical-primary" />
                        <span>{patient.address}</span>
                      </div>
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