
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import AppRoutes from "./routes";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";
import { useFeatureFlags } from "./contexts/FeatureFlagContext";

const queryClient = new QueryClient();

// Component for the admin prototype controls that appears above the header
const PrototypeControls = () => {
  const { viewMode, setViewMode } = useFeatureFlags();
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  
  // Don't show prototype controls on admin page
  if (isAdminPage) return null;
  
  return (
    <div className="bg-yellow-100 border-b border-yellow-300 py-1 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm font-medium text-yellow-800">Prototype Mode</div>
        <div className="flex items-center gap-3">
          <span className={`text-sm ${viewMode === 'mvp' ? 'font-bold text-blue-600' : ''}`}>
            MVP
          </span>
          <a 
            href="/admin" 
            className="px-2 py-1 text-xs bg-slate-800 text-white rounded hover:bg-slate-700"
          >
            Admin Controls
          </a>
          <span className={`text-sm ${viewMode === 'full' ? 'font-bold text-purple-600' : ''}`}>
            Full Vision
          </span>
        </div>
      </div>
    </div>
  );
};

// Component to conditionally render the header based on route
const MainLayout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <PrototypeControls />}
      {!isAdminPage && <Header />}
      <main className="flex-1">
        <AppRoutes />
      </main>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FeatureFlagProvider>
        <Helmet defaultTitle="HOMEBASE by Sears" titleTemplate="%s | HOMEBASE by Sears" />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </FeatureFlagProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
