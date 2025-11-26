import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              {/* Simple KFC-like Logo SVG */}
              <div className="h-10 w-10 bg-kfc-red rounded-sm flex items-center justify-center text-white font-bold text-xl tracking-tighter border-2 border-black">
                KFC
              </div>
              <span className="font-display font-bold text-2xl tracking-wide text-black">MAPUTO</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Menu', 'Localizações', 'Sobre', 'Ofertas'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display uppercase text-lg text-gray-800 hover:text-kfc-red transition-colors font-medium tracking-wide"
              >
                {item}
              </a>
            ))}
            <button className="bg-kfc-red text-white font-display uppercase px-6 py-2 rounded hover:bg-red-700 transition-colors shadow-md tracking-wide">
              Pedir Agora
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-kfc-red focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Menu', 'Localizações', 'Sobre', 'Ofertas'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-display uppercase text-gray-800 hover:text-kfc-red hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full text-left block px-3 py-2 text-base font-display uppercase text-kfc-red font-bold">
              Pedir Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
