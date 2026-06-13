import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Advisor from "./pages/Advisor";
import Crops from "./pages/Crops";
import Soil from "./pages/Soil";
import Market from "./pages/Market";
import More from "./pages/More";
import Weather from "./pages/Weather";
import Rotation from "./pages/Rotation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/soil" element={<Soil />} />
          <Route path="/market" element={<Market />} />
          <Route path="/more" element={<More />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/rotation" element={<Rotation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
