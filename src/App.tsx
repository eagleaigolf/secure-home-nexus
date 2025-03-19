
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import AppRoutes from "./routes";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";

const queryClient = new QueryClient();

// Component to conditionally render the header based on route
const MainLayout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  
  return (
    <div className="min-h-screen flex flex-col">
      {isAdminPage ? null : <Header />}
      <main className={`flex-1 ${isAdminPage ? 'pt-0' : ''}`}>
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
