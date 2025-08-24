import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-medical-primary"
  },
  {
    title: "Active Doctors",
    value: "89",
    change: "+2.3%",
    icon: UserCheck,
    color: "text-medical-success"
  },
  {
    title: "Appointments Today",
    value: "156",
    change: "+8.1%",
    icon: Calendar,
    color: "text-medical-warning"
  },
  {
    title: "Emergency Cases",
    value: "12",
    change: "-5.2%",
    icon: Activity,
    color: "text-medical-emergency"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-soft hover:shadow-medical transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className={`text-xs mt-1 ${
              stat.change.startsWith('+') ? 'text-medical-success' : 'text-medical-emergency'
            }`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}