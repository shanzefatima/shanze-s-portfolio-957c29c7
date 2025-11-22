import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShootForTheStars from "./pages/case-studies/ShootForTheStars";
import HyperMarket from "./pages/case-studies/HyperMarket";
import SnapchatRedesign from "./pages/case-studies/SnapchatRedesign";
import BobstLibrary from "./pages/case-studies/BobstLibrary";
import CovidDataForest from "./pages/case-studies/CovidDataForest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/shoot-for-stars" element={<ShootForTheStars />} />
          <Route path="/case-study/hypermarket" element={<HyperMarket />} />
          <Route path="/case-study/snapchat-redesign" element={<SnapchatRedesign />} />
          <Route path="/case-study/bobst-library" element={<BobstLibrary />} />
          <Route path="/case-study/covid-data-forest" element={<CovidDataForest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
