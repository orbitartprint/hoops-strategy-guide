
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Offense from "./pages/Offense";
import Defense from "./pages/Defense";
import NotFound from "./pages/NotFound";
import PasswordProtection from "./components/PasswordProtection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PasswordProtection>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/offense" element={<Offense />} />
            <Route path="/defense" element={<Defense />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PasswordProtection>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
