import React, { useState, useMemo, useRef } from 'react';
// Fix: Changed DIPLOMAS_DATA to LEARNING_PATHS_DATA to match the exported member from ../constants.
import { LEARNING_PATHS_DATA } from '../constants';
import { Course } from '../types';
import CourseCard from './CourseCard';
import CourseDetailModal from './CourseDetailModal';
import HeroBanner from './HeroBanner';
import CallToAction from './CallToAction';

interface AllCoursesProps {
    onGoHome: () => void;
}

const AllCourses: React.FC<AllCoursesProps> = ({ onGoHome }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const allCourses = useMemo(() => LEARNING_PATHS_DATA.flatMap(d => d.courses), []);
    const coursesGridRef = useRef<HTMLDivElement>(null);

    const handleExploreCourses = () => {
        coursesGridRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroBanner
                title="Centro de Capacitación Académico"
                description="Cursos y Rutas de Aprendizaje especializados en metodologías activas, herramientas digitales y estrategias innovadoras para transformar tu práctica educativa."
                button1Text="← Volver al Inicio"
                button2Text="Ver Todos los Cursos"
                onButton1Click={onGoHome}
                onButton2Click={handleExploreCourses}
                backgroundImageUrl="https://res.cloudinary.com/dsmvoemnu/image/upload/v1763061141/3_zrwsqf.png"
            />
            
            <div ref={coursesGridRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-5xl font-medium text-black">Todos Nuestros Cursos</h2>
                    <p className="mt-2 text-2xl text-slate-600">Explora la oferta completa de capacitación para llevar tu docencia al siguiente nivel.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onSelect={() => setSelectedCourse(course)}
                        />
                    ))}
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

export default AllCourses;