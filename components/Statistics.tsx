import React, { useState, useEffect, useRef } from 'react';

const AnimatedStat = ({ finalValue, text, suffix = '' }: { finalValue: number, text: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000; // 2 seconds
                    const startTime = performance.now();

                    const animateCount = (currentTime: number) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const currentCount = Math.floor(progress * (finalValue - start) + start);
                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animateCount);
                        } else {
                            setCount(finalValue);
                        }
                    };
                    requestAnimationFrame(animateCount);
                }
            },
            {
                threshold: 0.5,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [finalValue]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-6xl md:text-7xl font-medium text-white tracking-tighter">
                +{count}{suffix}
            </p>
            <p className="mt-2 text-xl text-white/90 tracking-wide font-normal">{text}</p>
        </div>
    );
};


const Statistics: React.FC = () => {
    return (
        <section className="bg-[#F24405] py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-5xl font-medium text-white">Nuestra Numeralia</h2>
                    <p className="mt-4 text-2xl text-white/90">
                        Impacto y crecimiento de nuestra comunidad académica en cifras.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    <AnimatedStat finalValue={100} text="Participantes en cursos y webinars" />
                    <AnimatedStat finalValue={15} text="Cursos de IA y estrategias de aprendizaje" />
                    <AnimatedStat finalValue={9} text="Visitas al sitio CDA desde su creación en el 2023" suffix=" mil" />
                </div>
            </div>
        </section>
    );
};

export default Statistics;