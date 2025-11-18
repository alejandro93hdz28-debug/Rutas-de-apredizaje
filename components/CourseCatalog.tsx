import React from 'react';
import { LEARNING_PATHS_DATA } from '../constants';
import LearningPathSelector from './DiplomaSelector';
import AdjustmentsHorizontalIcon from './icons/AdjustmentsHorizontalIcon';
import CubeTransparentIcon from './icons/CubeTransparentIcon';
import WorkspacePremiumIcon from './icons/WorkspacePremiumIcon';


interface CourseCatalogProps {
    onSelectLearningPath: (id: string) => void;
    onSelectAllCourses: () => void;
}

const learningPathFeatures = [
    {
        icon: AdjustmentsHorizontalIcon,
        title: 'Estructurada',
        description: 'Organizada en niveles progresivos (inicial, intermedio, avanzado) para dominar una competencia docente.',
    },
    {
        icon: CubeTransparentIcon,
        title: 'Modular',
        description: 'Cada curso aborda habilidades específicas que se articulan entre sí para crear una trayectoria completa.',
    },
    {
        icon: WorkspacePremiumIcon,
        title: 'Con valor curricular',
        description: 'Al completar todos los cursos de la ruta, se otorga una certificación global del programa.',
    },
];


const CourseCatalog: React.FC<CourseCatalogProps> = ({ onSelectLearningPath, onSelectAllCourses }) => {
    return (
        <div id="catalog" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
           
            {/* Bloque 1: ¿Qué es una Ruta de Aprendizaje? */}
            <div className="mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-medium text-black">
                        ¿Qué es una Ruta de Aprendizaje?
                    </h2>
                    <p className="mt-4 text-2xl text-slate-600 font-normal">
                        Una Ruta de Aprendizaje integra varios cursos relacionados para desarrollar una competencia docente de forma progresiva. Cada curso se puede tomar por separado, pero completar la ruta te otorga una certificación global con valor curricular.
                    </p>
                </div>
            </div>

            {/* Bloque 2: Tres tarjetas de características */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {learningPathFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F24405]/10">
                                    <feature.icon className="h-6 w-6 text-[#F24405]" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-2xl font-medium text-slate-900">{feature.title}</h4>
                                <p className="mt-2 text-lg text-slate-600 font-normal leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <hr className="border-slate-200" />
            </div>
            
            {/* Bloque 3: Programas Disponibles */}
            <div>
                <div className="mb-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl font-medium text-black">
                        Programas Disponibles
                    </h2>
                    <h3 className="mt-4 text-2xl text-slate-600">
                       Selecciona una ruta de aprendizaje o explora todos nuestros cursos.
                    </h3>
                </div>
                <LearningPathSelector
                    learningPaths={LEARNING_PATHS_DATA}
                    onSelectLearningPath={onSelectLearningPath}
                    onSelectAllCourses={onSelectAllCourses}
                />
            </div>
        </div>
    );
};

export default CourseCatalog;