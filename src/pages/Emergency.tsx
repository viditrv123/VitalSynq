import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertTriangle, Clock, Activity, Phone, Ambulance, Heart, Thermometer } from "lucide-react";

const emergencyCases = [
  {
    id: 1,
    patient: "John Miller",
    age: 45,
    condition: "Chest Pain",
    severity: "Critical",
    arrivalTime: "2 mins ago",
    vitals: {
      heartRate: 120,
      bloodPressure: "180/110",
      temperature: "98.6°F",
      oxygen: "92%"
    },
    assignedDoctor: "Dr. Lisa Anderson",
    status: "In Treatment",
    roomNumber: "ER-01",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    patient: "Maria Rodriguez",
    age: 32,
    condition: "Severe Allergic Reaction",
    severity: "High",
    arrivalTime: "8 mins ago",
    vitals: {
      heartRate: 110,
      bloodPressure: "90/60",
      temperature: "99.2°F",
      oxygen: "89%"
    },
    assignedDoctor: "Dr. Michael Smith",
    status: "Stabilizing",
    roomNumber: "ER-03",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    patient: "David Kim",
    age: 28,
    condition: "Motorcycle Accident",
    severity: "Critical",
    arrivalTime: "15 mins ago",
    vitals: {
      heartRate: 95,
      bloodPressure: "110/70",
      temperature: "97.8°F",
      oxygen: "95%"
    },
    assignedDoctor: "Dr. James Lee",
    status: "Surgery Prep",
    roomNumber: "ER-02",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    patient: "Emma Thompson",
    age: 67,
    condition: "Stroke Symptoms",
    severity: "Critical",
    arrivalTime: "22 mins ago",
    vitals: {
      heartRate: 88,
      bloodPressure: "160/95",
      temperature: "98.1°F",
      oxygen: "94%"
    },
    assignedDoctor: "Dr. Sarah Wilson",
    status: "CT Scan",
    roomNumber: "ER-04",
    avatar: "/placeholder.svg"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-medical-emergency text-white animate-pulse";
    case "High":
      return "bg-medical-warning text-white";
    case "Medium":
      return "bg-medical-primary text-white";
    case "Low":
      return "bg-medical-success text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Treatment":
      return "bg-medical-warning text-white";
    case "Stabilizing":
      return "bg-medical-primary text-white";
    case "Surgery Prep":
      return "bg-medical-emergency text-white";
    case "CT Scan":
      return "bg-medical-accent text-foreground";
    case "Discharged":
      return "bg-medical-success text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Emergency() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Emergency Department"
            description="Monitor and manage emergency cases"
            action={
              <div className="flex gap-2">
                <Button variant="outline" className="text-medical-emergency border-medical-emergency">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Code Blue
                </Button>
                <Button className="bg-medical-emergency hover:bg-medical-emergency/90 text-white shadow-soft">
                  <Ambulance className="w-4 h-4 mr-2" />
                  Incoming Ambulance
                </Button>
              </div>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Emergency Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="shadow-soft border-l-4 border-l-medical-emergency">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-emergency">4</div>
                  <div className="text-sm text-muted-foreground">Critical Cases</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-l-4 border-l-medical-warning">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-warning">8</div>
                  <div className="text-sm text-muted-foreground">High Priority</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-l-4 border-l-medical-primary">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-primary">12</div>
                  <div className="text-sm text-muted-foreground">Total Active</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-l-4 border-l-medical-success">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-success">3</div>
                  <div className="text-sm text-muted-foreground">Available Beds</div>
                </CardContent>
              </Card>
            </div>

            {/* Active Emergency Cases */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-medical-emergency" />
                  <span>Active Emergency Cases</span>
                  <Badge className="bg-medical-emergency text-white animate-pulse">LIVE</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyCases.map((case_, index) => (
                  <Card
                    key={case_.id}
                    className="shadow-soft hover:shadow-medical transition-all duration-300 border-l-4 border-l-medical-emergency animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        {/* Patient Info */}
                        <div className="flex-1 space-y-4">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={case_.avatar} alt={case_.patient} />
                                <AvatarFallback className="bg-gradient-primary text-white">
                                  {case_.patient.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-foreground">
                                  {case_.patient}, {case_.age}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  Room: {case_.roomNumber} • {case_.assignedDoctor}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge className={getSeverityColor(case_.severity)}>
                                {case_.severity}
                              </Badge>
                              <Badge className={getStatusColor(case_.status)}>
                                {case_.status}
                              </Badge>
                            </div>
                          </div>

                          {/* Condition and Time */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-center space-x-2">
                              <Activity className="w-4 h-4 text-medical-emergency" />
                              <span className="font-medium text-foreground">{case_.condition}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-medical-primary" />
                              <span className="text-sm text-muted-foreground">
                                Arrived: {case_.arrivalTime}
                              </span>
                            </div>
                          </div>

                          {/* Vitals */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-muted/30 rounded-lg">
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 mb-1">
                                <Heart className="w-4 h-4 text-medical-emergency" />
                                <span className="text-sm font-medium">HR</span>
                              </div>
                              <div className="text-lg font-bold text-foreground">
                                {case_.vitals.heartRate}
                              </div>
                              <div className="text-xs text-muted-foreground">bpm</div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 mb-1">
                                <Activity className="w-4 h-4 text-medical-primary" />
                                <span className="text-sm font-medium">BP</span>
                              </div>
                              <div className="text-lg font-bold text-foreground">
                                {case_.vitals.bloodPressure}
                              </div>
                              <div className="text-xs text-muted-foreground">mmHg</div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 mb-1">
                                <Thermometer className="w-4 h-4 text-medical-warning" />
                                <span className="text-sm font-medium">Temp</span>
                              </div>
                              <div className="text-lg font-bold text-foreground">
                                {case_.vitals.temperature}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 mb-1">
                                <Activity className="w-4 h-4 text-medical-success" />
                                <span className="text-sm font-medium">O2</span>
                              </div>
                              <div className="text-lg font-bold text-foreground">
                                {case_.vitals.oxygen}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 sm:w-auto">
                          <Button size="sm" className="bg-medical-emergency hover:bg-medical-emergency/90">
                            Update Status
                          </Button>
                          <Button size="sm" variant="outline">
                            View Chart
                          </Button>
                          <Button size="sm" variant="outline">
                            Call Doctor
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}