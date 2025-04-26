
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <img
          src="/lovable-uploads/0ec61829-fdfd-4d0d-afaa-8cca6fa651d1.png"
          alt="TSV Logo"
          className="w-32 h-auto mb-4"  // Reduced size of TSV Logo
        />
        <img
          src="/lovable-uploads/39357a08-4c38-4fa9-8536-a4bdcdaa5343.png"
          alt="Basketball Logo"
          className="w-48 h-auto mb-4"  // Increased size of Basketball Logo
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Unsere Spielprinzipien
        </h1>
        <div className="flex flex-col w-full gap-6">
          <button 
            onClick={() => navigate("/offense")} 
            className="nav-button rounded-xl px-12 py-6 text-2xl"
          >
            Offense
          </button>
          <button 
            onClick={() => navigate("/defense")} 
            className="nav-button rounded-xl px-12 py-6 text-2xl"
          >
            Defense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

