import React, { useState, useMemo, useRef } from 'react';
import { LEARNING_PATHS_DATA } from '../constants';
import { Course } from '../types';
import CourseCard from './CourseCard';
import CourseDetailModal from './CourseDetailModal';
import HeroBanner from './HeroBanner';
import CallToAction from './CallToAction';

interface LearningPathDetailProps {
    learningPathId: string;
    onBack: () => void;
}

const LearningPathDetail: React.FC<LearningPathDetailProps> = ({ learningPathId, onBack }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const coursesRef = useRef<HTMLDivElement>(null);

    const learningPath = useMemo(() => {
        return LEARNING_PATHS_DATA.find(p => p.id === learningPathId);
    }, [learningPathId]);

    const handleExploreCourses = () => {
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!learningPath) {
        return (
            <div className="text-center py-20 container mx-auto">
                <p className="text-lg">Ruta de Aprendizaje no encontrada.</p>
                <button onClick={onBack} className="mt-4 text-lg text-[#F24405] hover:underline">Volver</button>
            </div>
        );
    }

    return (
        <>
            <HeroBanner
                eyebrow="Ruta de Aprendizaje"
                title={`${learningPath.title} ${learningPath.subtitle}`}
                description={learningPath.objective}
                button1Text="← Volver a Programas"
                button2Text="Ver Cursos de la Ruta"
                onButton1Click={onBack}
                onButton2Click={handleExploreCourses}
                backgroundImageUrl={learningPath.imageUrl}
            />

            {/* Info Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card 1: Purpose & Modality */}
                        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col space-y-8">
                            {/* Purpose */}
                            <div>
                                <h3 className="text-3xl font-medium text-slate-900 flex items-center">
                                    <img src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763067941/school_63dp_F24405_FILL0_wght400_GRAD0_opsz48_bah9hg.svg" alt="Propósito de la Ruta de Aprendizaje" className="w-7 h-7 mr-3 flex-shrink-0" />
                                    Propósito de la Ruta de Aprendizaje
                                </h3>
                                <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">{learningPath.purpose}</p>
                            </div>

                            {/* Modality & Duration */}
                            <div>
                                <h3 className="text-3xl font-medium text-slate-900 flex items-center">
                                     <img src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763067941/calendar_clock_63dp_F24405_FILL0_wght400_GRAD0_opsz48_yufkkz.svg" alt="Modalidad y Duración" className="w-7 h-7 mr-3 flex-shrink-0" />
                                    Modalidad y Duración
                                </h3>
                                <div className="mt-4 space-y-2 text-lg text-slate-700 font-normal">
                                    <p><strong className="font-medium text-slate-800">Modalidad:</strong> {learningPath.modality}</p>
                                    <p><strong className="font-medium text-slate-800">Duración por curso:</strong> {learningPath.durationPerCourse} horas</p>
                                    <p><strong className="font-medium text-slate-800">Duración total:</strong> {learningPath.totalHours} horas ({learningPath.courses.length} cursos)</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Audience & Capabilities */}
                        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col space-y-8">
                            {/* Target Audience */}
                            <div>
                                <h3 className="text-3xl font-medium text-slate-900 flex items-center">
                                    <img src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763067941/account_circle_63dp_F24405_FILL0_wght400_GRAD0_opsz48_l66vyp.svg" alt="¿Esta ruta es para mí?" className="w-7 h-7 mr-3 flex-shrink-0" />
                                    ¿Esta ruta es para mí?
                                </h3>
                                <p className="mt-4 text-lg text-slate-600">Creamos esta ruta de aprendizaje especialmente para:</p>
                                <ul className="mt-4 space-y-2 text-lg text-slate-700 font-normal list-disc list-inside">
                                    {learningPath.targetAudience.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Capabilities */}
                            <div>
                                <h3 className="text-3xl font-medium text-slate-900 flex items-center">
                                    <img src="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763067941/star_shine_63dp_F24405_FILL0_wght400_GRAD0_opsz48_fyfwde.svg" alt="Obtén estas capacidades" className="w-7 h-7 mr-3 flex-shrink-0" />
                                    Obtén estas capacidades
                                </h3>
                                <ul className="mt-4 space-y-2 text-lg text-slate-700 font-normal list-disc list-inside">
                                    {learningPath.capabilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid Section */}
            <div ref={coursesRef} className="bg-[#F8FAFC] py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-medium text-black">Cursos de la Ruta de Aprendizaje</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {learningPath.courses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onSelect={() => setSelectedCourse(course)}
                            />
                        ))}
                    </div>
                </div>
            </div>


            <CallToAction />
            <CourseDetailModal 
                course={selectedCourse}
                onClose={() => setSelectedCourse(null)}
            />
        </>
    );
};

export default LearningPathDetail;