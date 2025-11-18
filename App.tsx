import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CourseCatalog from './components/CourseCatalog';
import Statistics from './components/Statistics';
import Roadmap from './components/Roadmap';
import CallToAction from './components/CallToAction';
import LearningPathDetail from './components/DiplomaDetail';
import AllCourses from './components/AllCourses';

type View = 'home' | 'learningPathDetail' | 'allCourses';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedLearningPathId, setSelectedLearningPathId] = useState<string | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleSelectLearningPath = useCallback((id: string) => {
    setSelectedLearningPathId(id);
    setView('learningPathDetail');
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedLearningPathId(null);
    setView('home');
    window.scrollTo(0, 0);
  }, []);
  
  const handleGoToAllCourses = useCallback(() => {
    setView('allCourses');
    window.scrollTo(0, 0);
  }, []);

  const handleExploreLearningPaths = useCallback(() => {
    if (view === 'home') {
        catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
        handleGoHome();
    }
  }, [view, handleGoHome]);

  const renderContent = () => {
    switch (view) {
      case 'learningPathDetail':
        return <LearningPathDetail learningPathId={selectedLearningPathId!} onBack={handleGoHome} />;
      case 'allCourses':
        return <AllCourses onGoHome={handleGoHome} />;
      case 'home':
      default:
        return (
          <>
            <HeroBanner
              title="Centro de Capacitación Académico"
              description="Cursos y Rutas de Aprendizaje especializados en metodologías activas, herramientas digitales y estrategias innovadoras para transformar tu práctica educativa."
              button1Text="Explorar Rutas"
              button2Text="Explorar Cursos"
              onButton1Click={handleExploreLearningPaths}
              onButton2Click={handleGoToAllCourses}
            />
            <Statistics />
            <div ref={catalogRef}>
                <CourseCatalog onSelectLearningPath={handleSelectLearningPath} onSelectAllCourses={handleGoToAllCourses} />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-slate-200" />
            </div>

            <Roadmap />
            <CallToAction />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header onGoHome={handleGoHome} />
      <main>
        {renderContent()}
      </main>
      <footer className="text-center py-8 mt-16 text-slate-500 border-t border-slate-200">
        <p className="text-base">© 2025 Coordinación de Desarrollo Académico. Responsable de Acompañamiento Docente</p>
      </footer>
    </div>
  );
};

export default App;