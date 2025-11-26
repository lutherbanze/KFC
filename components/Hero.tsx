import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-kfc-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pattern-stripes"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-block bg-kfc-red text-white px-3 py-1 font-bold uppercase tracking-wider text-sm rotate-2">
              Finger Lickin' Good
            </span>
            <h1 className="text-5xl md:text-7xl font-display uppercase font-bold leading-none tracking-tighter">
              O Sabor <br/>
              <span className="text-kfc-red text-shadow-white">Original</span> <br/>
              De Maputo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 font-light">
              11 ervas e especiarias secretas. Crocante por fora, suculento por dentro. Feito na hora, todos os dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="bg-kfc-red text-white px-8 py-4 font-display uppercase text-xl font-bold rounded hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg border-b-4 border-red-900">
                Ver Menu Completo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-display uppercase text-xl font-bold rounded hover:bg-white hover:text-black transition-colors">
                Encontrar Restaurante
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-kfc-red rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/kfchero/800/800" 
              alt="Balde KFC" 
              className="relative w-full max-w-md mx-auto md:max-w-full rounded-2xl shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black font-display font-bold text-2xl p-6 rounded-full rotate-12 shadow-lg border-4 border-black">
              1950 MT
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
