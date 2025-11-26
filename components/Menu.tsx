import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bucket', label: 'Baldes' },
    { id: 'burger', label: 'Burgers' },
    { id: 'box', label: 'Box Meals' },
    { id: 'sides', label: 'Acompanhamentos' },
    { id: 'drinks', label: 'Bebidas' },
  ];

  const filteredItems = activeCategory === 'todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display uppercase font-bold text-kfc-dark mb-4">
            Nosso <span className="text-kfc-red">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-kfc-red mx-auto"></div>
          <p className="mt-4 text-gray-600">Escolha o seu favorito.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-display uppercase tracking-wide text-sm md:text-base transition-all ${
                activeCategory === cat.id
                  ? 'bg-kfc-dark text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 border border-gray-200 hover:border-kfc-red hover:text-kfc-red'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                 {item.popular && (
                  <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-black text-xs font-bold px-2 py-1 uppercase rounded">
                    Popular
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-gray-900 leading-tight uppercase">{item.name}</h3>
                  <span className="text-lg font-bold text-kfc-red whitespace-nowrap">{item.price} MT</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                <button className="w-full bg-gray-100 text-gray-900 font-display font-bold uppercase py-2 rounded hover:bg-kfc-red hover:text-white transition-colors">
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
