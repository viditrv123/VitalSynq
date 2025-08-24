import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Stethoscope, Users, Bed, Plus, Phone, MapPin } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    head: "Dr. Michael Smith",
    doctors: 8,
    nurses: 12,
    beds: 24,
    occupancy: 85,
    patients: 156,
    phone: "+1 (555) 101-2001",
    location: "Building A, Floor 3",
    status: "Active",
    emergencyLevel: "Normal"
  },
  {
    id: 2,
    name: "Neurology",
    head: "Dr. Sarah Wilson", 
    doctors: 6,
    nurses: 10,
    beds: 18,
    occupancy: 72,
    patients: 89,
    phone: "+1 (555) 101-2002",
    location: "Building B, Floor 4",
    status: "Active",
    emergencyLevel: "Normal"
  },
  {
    id: 3,
    name: "Pediatrics",
    head: "Dr. Emily Garcia",
    doctors: 12,
    nurses: 18,
    beds: 32,
    occupancy: 91,
    patients: 234,
    phone: "+1 (555) 101-2003",
    location: "Building C, Floor 2",
    status: "Active",
    emergencyLevel: "High"
  },
  {
    id: 4,
    name: "Orthopedics",
    head: "Dr. James Lee",
    doctors: 5,
    nurses: 8,
    beds: 16,
    occupancy: 68,
    patients: 67,
    phone: "+1 (555) 101-2004",
    location: "Building A, Floor 2",
    status: "Active",
    emergencyLevel: "Normal"
  },
  {
    id: 5,
    name: "Emergency",
    head: "Dr. Lisa Anderson",
    doctors: 15,
    nurses: 25,
    beds: 20,
    occupancy: 95,
    patients: 312,
    phone: "+1 (555) 101-9999",
    location: "Building A, Ground Floor",
    status: "Critical",
    emergencyLevel: "Critical"
  },
  {
    id: 6,
    name: "Radiology",
    head: "Dr. Robert Chen",
    doctors: 4,
    nurses: 6,
    beds: 8,
    occupancy: 45,
    patients: 78,
    phone: "+1 (555) 101-2006",
    location: "Building B, Basement",
    status: "Active",
    emergencyLevel: "Normal"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-medical-success text-white";
    case "Critical":
      return "bg-medical-emergency text-white";
    case "Maintenance":
      return "bg-medical-warning text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getEmergencyColor = (level: string) => {
  switch (level) {
    case "Critical":
      return "bg-medical-emergency text-white";
    case "High":
      return "bg-medical-warning text-white";
    case "Normal":
      return "bg-medical-success text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getOccupancyColor = (occupancy: number) => {
  if (occupancy >= 90) return "bg-medical-emergency";
  if (occupancy >= 75) return "bg-medical-warning";
  return "bg-medical-success";
};

export default function Departments() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Department Management"
            description="Manage hospital departments and resources"
            action={
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-soft">
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-primary">12</div>
                  <div className="text-sm text-muted-foreground">Total Departments</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-success">58</div>
                  <div className="text-sm text-muted-foreground">Total Doctors</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-warning">118</div>
                  <div className="text-sm text-muted-foreground">Available Beds</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-emergency">82%</div>
                  <div className="text-sm text-muted-foreground">Avg Occupancy</div>
                </CardContent>
              </Card>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card
                  key={dept.id}
                  className="shadow-soft hover:shadow-medical transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-primary rounded-lg p-2">
                          <Stethoscope className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{dept.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Head: {dept.head}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={getStatusColor(dept.status)}>
                          {dept.status}
                        </Badge>
                        <Badge className={getEmergencyColor(dept.emergencyLevel)} variant="outline">
                          {dept.emergencyLevel}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Staff and Resources */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-medical-primary" />
                        <span>{dept.doctors} Doctors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-medical-secondary" />
                        <span>{dept.nurses} Nurses</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bed className="w-4 h-4 text-medical-accent" />
                        <span>{dept.beds} Beds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-medical-success" />
                        <span>{dept.patients} Patients</span>
                      </div>
                    </div>

                    {/* Occupancy */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bed Occupancy</span>
                        <span className="font-medium">{dept.occupancy}%</span>
                      </div>
                      <Progress 
                        value={dept.occupancy} 
                        className={`h-2 ${getOccupancyColor(dept.occupancy)}`}
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-medical-primary" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-medical-primary" />
                        <span>{dept.location}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Manage
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