import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="bg-[#F24405]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
                <h2 className="text-5xl font-medium text-white">
                    Inicia ahora tu proceso de inscripción en línea
                </h2>
                <div className="mt-8">
                     <a
                        href="https://sie.iest.edu.mx/sie/login/securelogv4.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[#F24405] font-medium px-8 py-4 rounded-md hover:bg-slate-100 transition-colors text-xl"
                    >
                        Inscríbete ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;