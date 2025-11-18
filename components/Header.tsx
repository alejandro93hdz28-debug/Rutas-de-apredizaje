import React from 'react';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={onGoHome} className="flex items-center space-x-3 text-left">
                <img 
                    src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763061972/Presentation_-_FLIPPED_CLASSROOM_TRANSFORMAR_TU_CLASE_5_xdedh4.png" 
                    alt="Logo Institucional" 
                    className="h-8 w-auto"
                />
                <h1 className="text-2xl font-medium text-slate-900">
                Centro de Capacitación Académico
                </h1>
            </button>
          </div>
          <div className="flex items-center space-x-4">
              <a
                href="https://da.iest.edu.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-4 py-2 text-base font-medium text-slate-700 bg-transparent border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
              >
                CDA
              </a>
              <a
                href="https://sie.iest.edu.mx/sie/login/securelogv4.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-4 py-2 text-base font-medium text-slate-700 bg-transparent border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
              >
                SIE
              </a>
              <a
                href="https://sie.iest.edu.mx/sie/login/securelogv4.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                Inscribirse
              </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;