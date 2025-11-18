import React, { useEffect } from 'react';
import { Course, Session } from '../types';
import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';
import LocationIcon from './icons/LocationIcon';
import XIcon from './icons/XIcon';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
}

const SessionCard: React.FC<{ session: Session }> = ({ session }) => {
    const isOriginal = session.type === 'Sesión original';
    const accentColor = isOriginal ? 'border-[#F24405]' : 'border-slate-300';
    const textColor = isOriginal ? 'text-[#F24405]' : 'text-slate-700';

    return (
        <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm ${accentColor} border-t-4`}>
            <div className="p-4">
                <h6 className={`font-bold text-xl ${textColor}`}>{session.type}</h6>
            </div>
            <div className="px-4 pb-4 space-y-4">
                <div className="flex items-start">
                    <CalendarIcon className="w-5 h-5 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-base text-slate-500 font-normal">Día</p>
                        <p className="font-medium text-slate-800 text-lg">{session.day}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <ClockIcon className="w-5 h-5 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-base text-slate-500 font-normal">Hora</p>
                        <p className="font-medium text-slate-800 text-lg">{session.time}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <LocationIcon className="w-5 h-5 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-base text-slate-500 font-normal">Salón</p>
                        <p className="font-medium text-slate-800 text-lg">{session.room}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  if (!course) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F8FAFC] rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-200 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <XIcon className="w-6 h-6" />
          </button>

          <div className="mb-6">
            <h4 id="modal-title" className="text-3xl font-medium text-slate-900">{course.title}</h4>
            <p className="text-xl text-slate-600 mt-2 font-normal">{course.objective}</p>
          </div>
          
          <div className="border-t border-slate-200 pt-6">
            <h5 className="text-2xl font-medium text-slate-800 mb-4">¿Qué aprenderás?</h5>
            <ul className="space-y-2 text-lg text-slate-700 list-disc list-inside font-normal">
              {course.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {course.sessions.map((session, index) => (
                <SessionCard key={index} session={session} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CourseDetailModal;