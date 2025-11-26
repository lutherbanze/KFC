import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Menu />
        <section className="py-16 bg-kfc-red text-white text-center">
           <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4 tracking-tighter">Terça Louca!</h2>
             <p className="text-xl mb-8 font-light">Não percas as promoções exclusivas todas as Terças-feiras em todas as lojas KFC Maputo.</p>
             <button className="bg-white text-kfc-red font-bold uppercase px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition-colors">
               Ver Oferta
             </button>
           </div>
        </section>
        <Locations />
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
             <h3 className="font-display text-2xl font-bold mb-4">KFC MAPUTO</h3>
             <p className="text-gray-400 text-sm">O melhor frango frito do mundo, agora em Moçambique. Sabor original desde 1952.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-gray-200">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Menu</a></li>
              <li><a href="#" className="hover:text-white">Carreiras</a></li>
              <li><a href="#" className="hover:text-white">Termos & Condições</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-gray-200">Contacto</h4>
            <p className="text-gray-400 text-sm">Email: geral@kfc.co.mz</p>
            <p className="text-gray-400 text-sm">Tel: +258 84 123 4567</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-gray-200">Siga-nos</h4>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-kfc-red cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-kfc-red cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-kfc-red cursor-pointer transition-colors"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} KFC Maputo. Todos os direitos reservados.
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
