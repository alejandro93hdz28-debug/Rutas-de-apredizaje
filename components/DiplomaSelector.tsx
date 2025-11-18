import React from 'react';
import { LearningPath } from '../types';

interface LearningPathSelectorProps {
  learningPaths: LearningPath[];
  onSelectLearningPath: (id: string) => void;
  onSelectAllCourses: () => void;
}

const LearningPathSelector: React.FC<LearningPathSelectorProps> = ({ learningPaths, onSelectLearningPath, onSelectAllCourses }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Map through the two learning paths */}
        {learningPaths.map((path) => (
          <button
            key={path.id}
            onClick={() => onSelectLearningPath(path.id)}
            className="text-left rounded-lg bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#F24405] transition-all duration-300 group flex flex-col"
          >
            <img src={path.imageUrl} alt={path.title} className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-base font-medium text-[#F24405] uppercase tracking-wider">Ruta de Aprendizaje</p>
              <h3 className="text-2xl font-medium text-slate-900 mt-1 leading-tight">
                {path.title} {path.subtitle}
              </h3>
              <p className="text-lg text-slate-600 mt-4 flex-grow font-normal">{path.objective}</p>
              <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-base font-medium text-slate-500">{path.courses.length} CURSOS</span>
                <span className="text-base font-bold text-slate-600 group-hover:text-[#F24405] transition-colors duration-300">
                    VER CURSOS &rarr;
                </span>
              </div>
            </div>
          </button>
        ))}

        {/* The third card for all courses, with the new style */}
        <button
          onClick={onSelectAllCourses}
          className="text-left rounded-lg bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#F24405] transition-all duration-300 group flex flex-col"
        >
          <img src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763061141/3_zrwsqf.png" alt="Cursos de capacitación" className="w-full h-40 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-base font-medium text-[#F24405] uppercase tracking-wider">Catálogo Completo</p>
            <h3 className="text-2xl font-medium text-slate-900 mt-1 leading-tight">
              Cursos de capacitación docente y administrativo
            </h3>
             <p className="text-lg text-slate-600 mt-4 flex-grow font-normal">Agosto - Diciembre</p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-base font-medium text-slate-500">OFERTA COMPLETA</span>
              <span className="text-base font-bold text-slate-600 group-hover:text-[#F24405] transition-colors duration-300">
                  EXPLORAR &rarr;
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LearningPathSelector;