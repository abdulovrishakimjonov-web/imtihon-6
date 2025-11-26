import React, { useState } from 'react';
import soat from '../img/soat.png'
import aple from '../svg/aple.svg'
import soniy from '../svg/soniy.svg'
import samsung from '../svg/samsung.svg'
import mashrut from '../svg/mashrut.svg'
import huwawe from '../svg/huwawe.svg'
import LENOVA from '../svg/LENOVA.svg'

const Axiose = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    { 
      id: 1, 
      name: 'Apple', 
      logo: aple,
      color: '#000000'
    },
    { 
      id: 2, 
      name: 'Sony', 
      logo: soniy,
      color: '#000000'
    },
    { 
      id: 3, 
      name: 'Samsung', 
      logo: samsung,
      color: '#1428A0'
    },
    { 
      id: 4, 
      name: 'Canon', 
      logo: mashrut,
      color: '#E21D1D'
    },
    { 
      id: 5, 
      name: 'Huawei', 
      logo: huwawe,
      color: '#FF0000'
    },
    { 
      id: 6, 
      name: 'Lenovo', 
      logo: LENOVA,
      color: '#000000'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1224px] mx-auto px-4">
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Top Brands
          </h2>
          
          <div className="flex items-center justify-between gap-8 flex-wrap">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="relative group cursor-pointer transition-all duration-300"
                style={{
                  transform: hoveredBrand === brand.id ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <div className="w-38 h-20 flex items-center justify-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      filter: hoveredBrand === brand.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                  />
                </div>
                
                <div 
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300"
                  style={{
                    width: hoveredBrand === brand.id ? '100%' : '0%',
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-slate-800 to-slate-800 rounded-2xl overflow-hidden min-h-[400px]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coral-500 to-[#FF6951] rounded-l-full transform translate-x-20">
          </div>

          <div className="relative z-10 flex items-center justify-between h-full p-12">
            
            <div className="text-white max-w-md animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 animate-slide-up">
                SMART WATCH
              </h2>
              <p className="text-gray-300 text-lg mb-8 animate-slide-up-delay">
                Various designs and brands
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slide-up-delay-2">
                view
              </button>
            </div>

            <div className="relative w-1/2 h-96 flex items-center justify-center">
              <div className="absolute left-0 top-2/2 -translate-y-1/2 animate-float">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                  <img src={soat} alt="Smart Watch"className=" object-contain drop-shadow-2xl transform rotate-12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Axiose;