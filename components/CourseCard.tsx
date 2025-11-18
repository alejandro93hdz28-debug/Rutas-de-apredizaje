import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-slate-300">
      <div className="p-6">
        <h4 className="text-xl font-medium text-slate-900 h-16">{course.title}</h4>
        <p className="text-lg text-slate-600 mt-2 line-clamp-3 font-normal">{course.objective}</p>
      </div>

      <div className="border-t border-slate-200 px-6 py-4">
        <button
          onClick={onSelect}
          className="text-lg font-medium text-[#F24405] hover:underline"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default CourseCard;