
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Protect from "./pages/Protect";
import Appliances from "./pages/Appliances";
import ApplianceUpgrade from "./pages/ApplianceUpgrade";
import Financial from "./pages/Financial";
import NotFound from "./pages/NotFound";
import Buy from "./pages/Buy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet defaultTitle="HOMEBASE by Sears" titleTemplate="%s | HOMEBASE by Sears" />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/protect" element={<Protect />} />
              <Route path="/appliances" element={<Appliances />} />
              <Route path="/appliances/upgrade" element={<ApplianceUpgrade />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
