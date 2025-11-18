import React from 'react';

const timelineData = [
    {
        year: '2023',
        title: 'Implementamos cursos de IA',
        iconUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763063316/smart_toy_64dp_FFFFFF_FILL0_wght400_GRAD0_opsz48_fyvwcp.svg',
    },
    {
        year: '2024',
        title: 'Plan de estructuración de cursos de IA + estrategias de aprendizaje',
        iconUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763063316/tactic_64dp_FFFFFF_FILL0_wght400_GRAD0_opsz48_cwz75b.svg',
    },
    {
        year: '2025',
        title: 'Microcredenciales para validar competencias',
        iconUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763063316/workspace_premium_64dp_FFFFFF_FILL0_wght400_GRAD0_opsz48_v3vqrz.svg',
    },
    {
        year: '2026',
        title: 'Rutas de aprendizaje con validez curricular',
        iconUrl: 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763063315/route_64dp_FFFFFF_FILL0_wght400_GRAD0_opsz48_fuuztp.svg',
    },
];

const Roadmap: React.FC = () => {
    return (
        <section className="bg-[#F8FAFC] py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-5xl font-medium leading-tight text-black">
                        Ruta de la Coordinación de Desarrollo Académico
                    </h2>
                    <p className="mt-4 font-normal text-2xl text-slate-600">
                        Nuestra visión de futuro para la innovación en la capacitación docente, siempre un paso adelante.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block mt-24">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#F24405] transform -translate-y-1/2 translate-y-[39px]"></div>
                        <div className="relative flex justify-between">
                            {timelineData.map((item, index) => (
                                <div key={index} className="relative flex flex-col items-center group w-1/4">
                                    <div className="absolute top-1/2 transform -translate-y-1/2 translate-y-[39px] w-full h-0.5 flex items-center justify-center">
                                         <div className="w-6 h-6 bg-[#F24405] border-2 border-white rounded-full shadow-md"></div>
                                    </div>
                                    <div className="text-center transform -translate-y-6">
                                        <div className="w-24 h-24 mx-auto flex items-center justify-center bg-[#F24405] rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                                            <img src={item.iconUrl} alt="" className="w-12 h-12" />
                                        </div>
                                        <h3 className="mt-3.5 mb-5 font-bold text-3xl text-slate-800">{item.year}</h3>
                                    </div>
                                    <div className="text-center transform translate-y-8">
                                        <p className="text-xl font-normal text-slate-600 leading-snug px-4 h-24">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden mt-16 space-y-12">
                     {timelineData.map((item, index) => (
                         <div key={index} className="flex items-start">
                             <div className="flex flex-col items-center mr-6">
                                 <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#F24405] rounded-full shadow-md">
                                     <img src={item.iconUrl} alt="" className="w-8 h-8" />
                                 </div>
                                 {index < timelineData.length - 1 && <div className="w-0.5 h-24 bg-slate-300 mt-2"></div>}
                             </div>
                             <div>
                                 <h3 className="font-bold text-3xl text-slate-800">{item.year}</h3>
                                 <p className="mt-1 text-xl font-normal text-slate-600 leading-snug">{item.title}</p>
                             </div>
                         </div>
                     ))}
                </div>

            </div>
        </section>
    );
};

export default Roadmap;