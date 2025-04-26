
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <img
          src="/lovable-uploads/0ec61829-fdfd-4d0d-afaa-8cca6fa651d1.png"
          alt="TSV Logo"
          className="w-24 h-auto mb-8"
        />
        <img
          src="/lovable-uploads/39357a08-4c38-4fa9-8536-a4bdcdaa5343.png"
          alt="Basketball Logo"
          className="w-64 h-auto mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Unsere Spielprinzipien
        </h1>
        <div className="flex flex-col w-full gap-4">
          <button 
            onClick={() => navigate("/offense")} 
            className="nav-button rounded-xl"
          >
            Offense
          </button>
          <button 
            onClick={() => navigate("/defense")} 
            className="nav-button rounded-xl"
          >
            Defense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
