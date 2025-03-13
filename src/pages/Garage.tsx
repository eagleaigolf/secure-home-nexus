import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Wrench, Key, Plus } from "lucide-react";

const Garage: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Garage</title>
      </Helmet>
      
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Your Garage</h1>
            <p className="text-muted-foreground mt-1">Manage your vehicles and automotive services</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Powered by</span>
            <div className="ml-2 font-bold text-blue-600">AutoNation</div>
          </div>
        </div>

        <Tabs defaultValue="vehicles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="vehicles">
              <Car className="h-4 w-4 mr-2" />
              Vehicles
            </TabsTrigger>
            <TabsTrigger value="services">
              <Wrench className="h-4 w-4 mr-2" />
              Services
            </TabsTrigger>
            <TabsTrigger value="keys">
              <Key className="h-4 w-4 mr-2" />
              Keys & Access
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="vehicles" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Existing Vehicle */}
              <Card className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="mb-4 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                  <Car className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <h3 className="font-semibold text-lg">2019 Honda Civic</h3>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Service:</span>
                    <span>Oil Change (2 months ago)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mileage:</span>
                    <span>42,350 miles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Protection:</span>
                    <span className="flex items-center text-emerald-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 mr-1.5"></div>
                      Protected
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">Details</Button>
                  <Button variant="default" size="sm" className="w-full bg-homebase hover:bg-homebase-dark">Service</Button>
                </div>
              </Card>
              
              {/* Add New Vehicle Card */}
              <Card className="p-6 border border-dashed border-border flex flex-col items-center justify-center text-center hover:bg-secondary/50 hover:border-homebase/30 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-homebase/10 rounded-full flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-homebase" />
                </div>
                <h3 className="font-semibold text-lg">Add Vehicle</h3>
                <p className="text-muted-foreground text-sm mt-2">Register a new vehicle to your garage</p>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Upcoming Services</h3>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md flex justify-between items-center">
                  <div>
                    <div className="font-medium">Oil Change</div>
                    <div className="text-sm text-muted-foreground">2019 Honda Civic • Due in 2 weeks</div>
                  </div>
                  <Button variant="outline" size="sm">Schedule</Button>
                </div>
                <div className="p-4 border border-border rounded-md flex justify-between items-center">
                  <div>
                    <div className="font-medium">Tire Rotation</div>
                    <div className="text-sm text-muted-foreground">2019 Honda Civic • Due in 1 month</div>
                  </div>
                  <Button variant="outline" size="sm">Schedule</Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Service History</h3>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md">
                  <div className="font-medium">Oil Change & Filter</div>
                  <div className="text-sm text-muted-foreground">2019 Honda Civic • Completed on May 15, 2023</div>
                  <div className="mt-2 text-xs flex items-center text-emerald-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mr-1.5"></div>
                    Covered by Protection Plan
                  </div>
                </div>
                <div className="p-4 border border-border rounded-md">
                  <div className="font-medium">Brake Pad Replacement</div>
                  <div className="text-sm text-muted-foreground">2019 Honda Civic • Completed on Feb 3, 2023</div>
                  <div className="mt-2 text-xs flex items-center text-emerald-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mr-1.5"></div>
                    Covered by Protection Plan
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="keys" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Digital Keys</h3>
              <p className="text-muted-foreground mb-4">Manage digital access to your vehicles</p>
              
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-homebase/10 rounded-full flex items-center justify-center mr-3">
                      <Key className="h-5 w-5 text-homebase" />
                    </div>
                    <div>
                      <div className="font-medium">Primary Key</div>
                      <div className="text-sm text-muted-foreground">2019 Honda Civic</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="p-4 border border-dashed border-border rounded-md flex justify-center items-center text-center hover:bg-secondary/50 cursor-pointer py-8">
                  <div>
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="font-medium">Add New Digital Key</div>
                    <div className="text-sm text-muted-foreground mt-1">Connect a compatible vehicle</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Garage;
