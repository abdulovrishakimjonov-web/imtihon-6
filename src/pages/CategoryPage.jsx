import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
 const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt") // All products API
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p => p.category === category);
        setProducts(filtered);
      });
  }, [category]);

  return (
   <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{category} mahsulotlari</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(item => (
          <Link key={item.id} to={`/produkt/${item.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300">
              <img src={item.image} alt={item.title} className="h-40 object-contain mb-2"/>
              <p className="text-center font-medium">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
