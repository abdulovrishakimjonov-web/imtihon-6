import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    if (!item) return;

    fetch(`https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          p => p.category === item.category && String(p.id) !== String(item.id)
        );
        setRelated(filtered);
      });
  }, [item]);

  if (!item) return <h2 className="text-center py-10">Loading...</h2>;

  return (
     <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg p-6">
        <div className="md:w-1/3">
          <img src={item.image} alt={item.title} className="w-full h-64 object-contain"/>
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <h2 className="text-xl font-semibold text-blue-600">{item.price} $</h2>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Shunga o‘xshash mahsulotlar</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map(prod => (
              <Link key={prod.id} to={`/produkt/${prod.id}`} className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
                <img src={prod.image} alt={prod.title} className="h-40 object-contain w-full mb-2"/>
                <p className="text-center font-medium">{prod.title}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
