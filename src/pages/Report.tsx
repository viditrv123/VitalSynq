import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FileText,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  Plus,
  Filter,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample data for charts
  const monthlyRevenue = [
    { month: "Jan", revenue: 95000, patients: 180 },
    { month: "Feb", revenue: 108000, patients: 220 },
    { month: "Mar", revenue: 125000, patients: 250 },
    { month: "Apr", revenue: 112000, patients: 210 },
    { month: "May", revenue: 118000, patients: 235 },
    { month: "Jun", revenue: 135000, patients: 270 },
  ];

  const departmentData = [
    { name: "Emergency", value: 35, color: "#0088FE" },
    { name: "Surgery", value: 25, color: "#00C49F" },
    { name: "Cardiology", value: 20, color: "#FFBB28" },
    { name: "Pediatrics", value: 15, color: "#FF8042" },
    { name: "Others", value: 5, color: "#8884D8" },
  ];

  const reportTypes = [
    {
      id: "financial",
      title: "Financial Report",
      description: "Revenue, expenses, and financial analytics",
      icon: DollarSign,
      lastGenerated: "2025-01-15",
    },
    {
      id: "patient",
      title: "Patient Analytics",
      description: "Patient demographics and visit statistics",
      icon: Users,
      lastGenerated: "2025-01-14",
    },
    {
      id: "operational",
      title: "Operational Report",
      description: "Staff performance and resource utilization",
      icon: TrendingUp,
      lastGenerated: "2025-01-13",
    },
  ];

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
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h1>Reports & Analytics</h1>
              <div className="flex items-center gap-3">
                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Last Week</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">$693,000</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Patient Visits</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">1,365</div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">
                    Avg. Revenue per Patient
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">$508</div>
                  <p className="text-xs text-muted-foreground">
                    +3% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">
                    Patient Satisfaction
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">94.2%</div>
                  <p className="text-xs text-muted-foreground">
                    +1.5% from last period
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue & Patient Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyRevenue}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar
                        yAxisId="left"
                        dataKey="revenue"
                        fill="#3b82f6"
                        name="Revenue ($)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="patients"
                        stroke="#10b981"
                        strokeWidth={2}
                        name="Patients"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Patient Distribution by Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Available Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {reportTypes.map((report) => {
                    const Icon = report.icon;
                    return (
                      <Card key={report.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <Icon className="h-8 w-8 text-blue-600" />
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Generate
                            </Button>
                          </div>
                          <h3 className="font-medium mb-2">{report.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {report.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            Last generated: {report.lastGenerated}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
