import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Showcese from '../components/Showcese'
import About from '../components/About';
import Funktion from '../components/Funktion';

const HomePages = () => {
  
   const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt") // Home API
      .then(res => res.json())
      .then(data => {
        // Faqat 6 ta kategoriya olish
        const uniqueCategories = [];
        const result = [];
        data.forEach(item => {
          if (!uniqueCategories.includes(item.category)) {
            uniqueCategories.push(item.category);
            result.push(item);
          }
        });
        setCategories(result.slice(0, 6));
      });
  }, []);
   
  return (
    <div>
      <Showcese/>
      <div className="max-w-[1224px] mx-auto mb-15">
      <h1 className="text-3xl font-bold mb-6">Kategoriya kartlari</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map(item => (
          <Link key={item.id} to={`/category/${item.category}`}>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300">
              <img src={item.image} alt={item.category} className="h-28 object-contain mb-2"/>
              <p className="text-center font-semibold text-gray-800">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <About/>
    <Funktion/>

    </div>
  )
}

export default HomePages