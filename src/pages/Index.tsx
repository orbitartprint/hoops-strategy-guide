
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <img
          src="/lovable-uploads/0ec61829-fdfd-4d0d-afaa-8cca6fa651d1.png"
          alt="TSV Logo"
          className="w-24 h-auto mb-4"  // Kleiner gemacht
        />
        <img
          src="/lovable-uploads/39357a08-4c38-4fa9-8536-a4bdcdaa5343.png"
          alt="Basketball Logo"
          className="w-56 h-auto mb-4"  // Größer gemacht
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Unsere Spielprinzipien
        </h1>
        <div className="flex flex-col w-full gap-6">
          <button 
            onClick={() => navigate("/offense")} 
            className="bg-[#f57520]/90 hover:bg-[#f57520] text-white rounded-xl px-12 py-6 text-2xl font-medium shadow-md"
          >
            Offense
          </button>
          <button 
            onClick={() => navigate("/defense")} 
            className="bg-[#f57520]/90 hover:bg-[#f57520] text-white rounded-xl px-12 py-6 text-2xl font-medium shadow-md"
          >
            Defense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
