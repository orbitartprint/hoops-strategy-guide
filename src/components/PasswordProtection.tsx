
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PASSWORD = "1Team1Family";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  
  // Überprüfe beim Laden, ob bereits authentifiziert
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === PASSWORD) {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      toast({
        title: "Erfolgreich angemeldet",
        description: "Willkommen bei den Spielprinzipien!",
      });
    } else {
      toast({
        title: "Falsches Passwort",
        description: "Bitte versuche es erneut.",
        variant: "destructive",
      });
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/20">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/lovable-uploads/39357a08-4c38-4fa9-8536-a4bdcdaa5343.png"
            alt="Basketball Logo"
            className="w-24 h-auto mb-4"
          />
          <img
            src="/lovable-uploads/0ec61829-fdfd-4d0d-afaa-8cca6fa651d1.png"
            alt="TSV Logo"
            className="w-16 h-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Spielprinzipien</h1>
          <p className="text-center text-gray-600 mb-4">
            Bitte gib das Passwort ein, um auf die Inhalte zuzugreifen.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              className="pl-10"
              autoComplete="off"
            />
          </div>
          <Button type="submit" className="w-full bg-[#f57520] hover:bg-[#e06a1c] rounded-xl">
            Zugriff erhalten
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;
