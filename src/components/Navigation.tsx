
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 mb-8">
      <Button 
        onClick={() => navigate("/")} 
        variant="outline"
        className="hover:bg-[#f57520]/10 bg-[#f57520]/10 rounded-xl border-[#f57520]/30"
      >
        <ArrowLeft className="mr-2" />
        Zurück
      </Button>
      <Button
        onClick={() => navigate("/defense")}
        variant="outline"
        className="hover:bg-[#f57520]/10 bg-[#f57520]/10 rounded-xl border-[#f57520]/30"
      >
        Defense
      </Button>
      <Button
        onClick={() => navigate("/offense")}
        variant="outline"
        className="hover:bg-[#f57520]/10 bg-[#f57520]/10 rounded-xl border-[#f57520]/30"
      >
        Offense
      </Button>
    </div>
  );
};

export default Navigation;

