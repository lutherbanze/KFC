import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="localizações" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl font-display uppercase font-bold text-kfc-dark mb-6">
              Encontre um <br/> <span className="text-kfc-red">KFC Perto de Si</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos espalhados por Maputo e Matola para garantir que o sabor original nunca esteja longe.
            </p>
            
            <div className="space-y-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="p-4 border-l-4 border-gray-200 hover:border-kfc-red bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-display font-bold text-xl uppercase text-gray-900">{loc.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{loc.address}</p>
                  <div className="flex items-center mt-2 text-xs font-medium text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Aberto: {loc.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative shadow-inner">
             {/* Mock Map View */}
             <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <div className="text-center p-6">
                   <p className="text-gray-500 font-display text-lg mb-2">MAPA INTERATIVO</p>
                   <p className="text-gray-400 text-sm">(Integração Google Maps Placeholders)</p>
                   {/* Visual representation of pins */}
                   <div className="mt-8 relative w-64 h-48 border-2 border-dashed border-gray-400 mx-auto rounded opacity-50">
                      {LOCATIONS.map((loc, i) => (
                        <div 
                            key={loc.id}
                            className="absolute w-4 h-4 bg-kfc-red rounded-full border-2 border-white shadow-md transform hover:scale-150 transition-transform"
                            style={{ top: `${20 + i * 20}%`, left: `${20 + i * 15}%` }}
                            title={loc.name}
                        ></div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
