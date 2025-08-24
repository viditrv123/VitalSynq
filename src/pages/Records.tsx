import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FileText, Search, Calendar, User, Download, Eye, Edit } from "lucide-react";

const medicalRecords = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientId: "P001",
    recordType: "Lab Results",
    doctor: "Dr. Michael Smith",
    date: "2024-01-18",
    diagnosis: "Hypertension",
    status: "Reviewed",
    priority: "Normal",
    fileSize: "2.3 MB",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    patientName: "Michael Brown",
    patientId: "P002",
    recordType: "X-Ray Report",
    doctor: "Dr. Sarah Wilson",
    date: "2024-01-17",
    diagnosis: "Fractured Rib",
    status: "Pending Review",
    priority: "High",
    fileSize: "5.7 MB",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    patientName: "Emily Davis",
    patientId: "P003",
    recordType: "Blood Test",
    doctor: "Dr. Emily Garcia",
    date: "2024-01-16",
    diagnosis: "Normal Range",
    status: "Completed",
    priority: "Normal",
    fileSize: "1.8 MB",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    patientName: "Robert Wilson",
    patientId: "P004",
    recordType: "MRI Scan",
    doctor: "Dr. James Lee",
    date: "2024-01-15",
    diagnosis: "Knee Cartilage Damage",
    status: "Reviewed",
    priority: "Medium",
    fileSize: "12.4 MB",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    patientName: "Lisa Anderson",
    patientId: "P005",
    recordType: "CT Scan",
    doctor: "Dr. Michael Smith",
    date: "2024-01-14",
    diagnosis: "Under Investigation",
    status: "Pending Review",
    priority: "Urgent",
    fileSize: "8.9 MB",
    avatar: "/placeholder.svg"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-medical-success text-white";
    case "Reviewed":
      return "bg-medical-accent text-foreground";
    case "Pending Review":
      return "bg-medical-warning text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Urgent":
      return "bg-medical-emergency text-white";
    case "High":
      return "bg-medical-warning text-white";
    case "Medium":
      return "bg-medical-primary text-white";
    case "Normal":
      return "bg-medical-success text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Records() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          <PageHeader
            title="Medical Records"
            description="View and manage patient medical records"
            action={
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-soft">
                <FileText className="w-4 h-4 mr-2" />
                New Record
              </Button>
            }
          />

          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Search and Filter */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Search Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search by patient name, record type, or diagnosis..."
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Filter by Date</Button>
                    <Button variant="outline">Filter by Type</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Records</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-warning">23</div>
                  <div className="text-sm text-muted-foreground">Pending Review</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-emergency">5</div>
                  <div className="text-sm text-muted-foreground">Urgent</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical-success">892</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </CardContent>
              </Card>
            </div>

            {/* Records List */}
            <div className="space-y-4">
              {medicalRecords.map((record, index) => (
                <Card
                  key={record.id}
                  className="shadow-soft hover:shadow-medical transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Record Info */}
                      <div className="flex-1 space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-primary rounded-lg p-2">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">
                                {record.recordType}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Record ID: #{record.id.toString().padStart(4, '0')}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={getStatusColor(record.status)}>
                              {record.status}
                            </Badge>
                            <Badge className={getPriorityColor(record.priority)}>
                              {record.priority}
                            </Badge>
                          </div>
                        </div>

                        {/* Patient and Doctor Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={record.avatar} alt={record.patientName} />
                              <AvatarFallback className="bg-gradient-secondary text-foreground">
                                {record.patientName.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-medical-primary" />
                                <span className="text-sm text-muted-foreground">Patient</span>
                              </div>
                              <p className="font-medium text-foreground">
                                {record.patientName} ({record.patientId})
                              </p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-medical-primary" />
                              <span className="text-sm text-muted-foreground">
                                {record.date} • {record.doctor}
                              </span>
                            </div>
                            <p className="text-sm">
                              <span className="text-muted-foreground">Diagnosis:</span>{' '}
                              <span className="font-medium text-foreground">{record.diagnosis}</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              File Size: {record.fileSize}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:w-auto">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
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