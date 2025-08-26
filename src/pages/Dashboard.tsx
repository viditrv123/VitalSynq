import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HospitalSidebar } from "@/components/HospitalSidebar";
import { DashboardStats } from "@/components/DashboardStats";
import { RecentAppointments } from "@/components/RecentAppointments";
import { QuickActions } from "@/components/QuickActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hospital-hero.jpg";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HospitalSidebar />
        <SidebarInset className="flex-1 flex flex-col overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-48 md:h-64 bg-gradient-hero overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
              <div className="text-center text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
                  Hospital Management System
                </h1>
                <p className="text-sm md:text-xl opacity-90 max-w-2xl">
                  Streamline your healthcare operations with our comprehensive
                  management platform
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto animate-fade-in">
            {/* Statistics */}
            <DashboardStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Appointments */}
              <div className="lg:col-span-2">
                <RecentAppointments />
              </div>

              {/* Quick Actions */}
              <div>
                <QuickActions />
              </div>
            </div>

            {/* Additional Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-medical-primary" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Server Status
                      </span>
                      <span className="text-sm text-medical-success font-medium">
                        Online
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Database
                      </span>
                      <span className="text-sm text-medical-success font-medium">
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Backup Status
                      </span>
                      <span className="text-sm text-medical-warning font-medium">
                        Scheduled
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-medical-primary" />
                    <span>Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Patient Satisfaction
                      </span>
                      <span className="text-sm text-medical-success font-medium">
                        94.2%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Average Wait Time
                      </span>
                      <span className="text-sm text-foreground font-medium">
                        12 min
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Bed Occupancy
                      </span>
                      <span className="text-sm text-medical-warning font-medium">
                        78%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
