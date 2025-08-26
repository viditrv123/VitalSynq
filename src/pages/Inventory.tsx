import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Plus, Search, Package2, AlertTriangle, Filter } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/PageHeader";
import { HospitalSidebar } from "@/components/HospitalSidebar";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  supplier: string;
  lastUpdated: string;
}

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory] = useState<InventoryItem[]>([
    {
      id: "1",
      name: "Surgical Gloves",
      category: "Medical Supplies",
      quantity: 150,
      minStock: 200,
      price: 0.25,
      supplier: "MedSupply Co.",
      lastUpdated: "2025-01-15",
    },
    {
      id: "2",
      name: "Syringes (10ml)",
      category: "Medical Equipment",
      quantity: 500,
      minStock: 100,
      price: 0.75,
      supplier: "Healthcare Plus",
      lastUpdated: "2025-01-14",
    },
    {
      id: "3",
      name: "Blood Pressure Monitor",
      category: "Medical Equipment",
      quantity: 25,
      minStock: 10,
      price: 150.0,
      supplier: "MedTech Solutions",
      lastUpdated: "2025-01-13",
    },
    {
      id: "4",
      name: "Bandages",
      category: "Medical Supplies",
      quantity: 75,
      minStock: 100,
      price: 2.5,
      supplier: "MedSupply Co.",
      lastUpdated: "2025-01-12",
    },
    {
      id: "5",
      name: "Thermometers",
      category: "Medical Equipment",
      quantity: 40,
      minStock: 20,
      price: 25.0,
      supplier: "Healthcare Plus",
      lastUpdated: "2025-01-11",
    },
  ]);

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockItems = inventory.filter(
    (item) => item.quantity <= item.minStock
  );

  const getStockStatus = (item: InventoryItem) => {
    if (item.quantity <= item.minStock) {
      return (
        <Badge variant="destructive" className="flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          Low Stock
        </Badge>
      );
    }
    return (
      <Badge variant="default" className="bg-green-100 text-green-800">
        In Stock
      </Badge>
    );
  };

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
          ></PageHeader>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h1>Inventory Management</h1>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Total Items</CardTitle>
                  <Package2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">{inventory.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Active inventory items
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Low Stock Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl text-yellow-600">
                    {lowStockItems.length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Items need restocking
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Total Value</CardTitle>
                  <Package2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">
                    $
                    {inventory
                      .reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      )
                      .toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Current inventory value
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search inventory items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Table */}
            <Card>
              <CardHeader>
                <CardTitle>Inventory Items</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Last Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{getStockStatus(item)}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>{item.supplier}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
