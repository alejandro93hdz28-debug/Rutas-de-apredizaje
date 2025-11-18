import React from 'react';

interface HeroBannerProps {
    eyebrow?: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
    onButton1Click: () => void;
    onButton2Click: () => void;
    backgroundImageUrl?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ eyebrow, title, description, button1Text, button2Text, onButton1Click, onButton2Click, backgroundImageUrl }) => {
  const defaultBg = 'https://res.cloudinary.com/dsmvoemnu/image/upload/v1763056350/Untitled_design_5_cghntk.png';
  
  return (
    <section className="relative bg-slate-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImageUrl || defaultBg}')` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-left z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-lg font-medium text-[#F24405] uppercase tracking-wider mb-2">{eyebrow}</p>
          )}
          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-2xl text-slate-200 font-normal">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onButton1Click}
              className="inline-block bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-slate-200 transition-colors text-lg"
            >
              {button1Text}
            </button>
            <button
              onClick={onButton2Click}
              className="inline-block bg-transparent text-white font-medium px-6 py-3 rounded-md border border-slate-300 hover:bg-white/10 transition-colors text-lg"
            >
              {button2Text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;