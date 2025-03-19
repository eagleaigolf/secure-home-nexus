
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeatureFlags, Feature } from '@/contexts/FeatureFlagContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Shield, Zap, RefreshCw, ArrowLeft, Settings, Edit } from 'lucide-react';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { 
    viewMode, 
    setViewMode, 
    isFeatureEnabled, 
    toggleFeature, 
    enabledFeatures,
    features,
    updateFeatureDefaults,
    resetToDefaults
  } = useFeatureFlags();

  const [activeTab, setActiveTab] = useState<string>("feature-toggles");

  // Determine if we're in a custom configuration
  const isCustomConfig = () => {
    const currentDefaultFeatures = viewMode === 'mvp' 
      ? features.filter(f => f.defaultInMVP).map(f => f.id)
      : features.filter(f => f.defaultInFull).map(f => f.id);
    
    // Check if enabled features don't match the defaults for current mode
    return (
      enabledFeatures.length !== currentDefaultFeatures.length ||
      !enabledFeatures.every(f => currentDefaultFeatures.includes(f))
    );
  };

  return (
    <div className="min-h-screen">
      {/* Admin Header - Clearly separated from the main app */}
      <div className="bg-slate-900 text-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <span className="font-semibold text-lg">PROTOTYPE ADMIN CONTROLS</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-white hover:bg-slate-700 border-white"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Return to HOMEBASE
          </Button>
        </div>
      </div>
      
      {/* Prototype Controls Banner */}
      <div className="bg-yellow-200 border-b border-yellow-300 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-yellow-800">Prototype View Mode</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-yellow-300">
                <span className={`font-medium ${viewMode === 'mvp' ? 'text-blue-600' : 'text-gray-500'}`}>MVP</span>
                <Switch 
                  id="prototype-mode-switch"
                  checked={viewMode === 'full'}
                  onCheckedChange={(checked) => setViewMode(checked ? 'full' : 'mvp')}
                  className="data-[state=checked]:bg-purple-600"
                />
                <span className={`font-medium ${viewMode === 'full' ? 'text-purple-600' : 'text-gray-500'}`}>Full Vision</span>
                {isCustomConfig() && <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">Custom</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Feature Flag Administration</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="feature-toggles">Feature Toggles</TabsTrigger>
            <TabsTrigger value="feature-management">Feature Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="feature-toggles">
            <Card className="p-6 mb-8">
              <div className="mb-4 flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={resetToDefaults}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset to {viewMode === 'mvp' ? 'MVP' : 'Full Vision'} Defaults
                </Button>
              </div>

              <Separator className="my-4" />

              <h3 className="text-lg font-semibold mb-4">Toggle Individual Features</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Enable or disable specific features regardless of the current view mode.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <h3 className="text-lg font-medium">MVP Features</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Core features included in the MVP.
                  </p>
                  <ul className="space-y-3">
                    {features.filter(f => f.defaultInMVP).map((feature) => (
                      <li key={feature.id} className="flex items-center gap-3">
                        <Checkbox 
                          id={`feature-${feature.id}`} 
                          checked={isFeatureEnabled(feature.id)}
                          onCheckedChange={() => toggleFeature(feature.id)}
                        />
                        <label 
                          htmlFor={`feature-${feature.id}`}
                          className="text-sm capitalize cursor-pointer"
                        >
                          {feature.name}
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5 text-purple-500" />
                    <h3 className="text-lg font-medium">Full Vision Features</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Additional features for the complete product vision.
                  </p>
                  <ul className="space-y-3">
                    {features.filter(f => f.defaultInFull && !f.defaultInMVP).map((feature) => (
                      <li key={feature.id} className="flex items-center gap-3">
                        <Checkbox 
                          id={`feature-${feature.id}`} 
                          checked={isFeatureEnabled(feature.id)}
                          onCheckedChange={() => toggleFeature(feature.id)}
                        />
                        <label 
                          htmlFor={`feature-${feature.id}`}
                          className="text-sm capitalize cursor-pointer"
                        >
                          {feature.name}
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="feature-management">
            <Card className="p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Feature Management</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Adjust which features are included in MVP or Full Vision mode by default.
              </p>
              
              <div className="border rounded-lg p-4 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Feature</th>
                      <th className="text-center py-2 px-4">In MVP</th>
                      <th className="text-center py-2 px-4">In Full Vision</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature) => (
                      <tr key={feature.id} className="border-b last:border-b-0">
                        <td className="py-3 px-4">
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-xs text-muted-foreground">{feature.description}</div>
                        </td>
                        <td className="text-center py-3 px-4">
                          <Checkbox 
                            id={`mvp-${feature.id}`}
                            checked={feature.defaultInMVP}
                            onCheckedChange={(checked) => 
                              updateFeatureDefaults(feature.id, !!checked, feature.defaultInFull)
                            }
                          />
                        </td>
                        <td className="text-center py-3 px-4">
                          <Checkbox 
                            id={`full-${feature.id}`}
                            checked={feature.defaultInFull}
                            onCheckedChange={(checked) => 
                              updateFeatureDefaults(feature.id, feature.defaultInMVP, !!checked)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button 
                  variant="outline" 
                  onClick={resetToDefaults}
                >
                  Reset Current View
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => setViewMode(viewMode === 'mvp' ? 'full' : 'mvp')}
                >
                  Switch to {viewMode === 'mvp' ? 'Full Vision' : 'MVP'} Mode
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
