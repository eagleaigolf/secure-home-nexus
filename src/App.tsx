
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import AppRoutes from "./routes";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FeatureFlagProvider>
        <Helmet defaultTitle="HOMEBASE by Sears" titleTemplate="%s | HOMEBASE by Sears" />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </FeatureFlagProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
