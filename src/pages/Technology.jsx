import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const categories = [
  { name: "Accessories", path: "accessories" },
  { name: "Camera", path: "camera" },
  { name: "Laptop", path: "laptop" },
  { name: "Smart Phone", path: "smartphone" },
  { name: "Gaming", path: "gaming" },
  { name: "Smart Watch", path: "smartwatch" },
];

const Technology = () => {
  const [firstProducts, setFirstProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = res.data;

        const firstItems = categories.map((cat) => {
          const categoryData = data.find((c) => c.category === cat.name);
          return {
            ...cat,
            product: categoryData?.products[0],
          };
        });

        setFirstProducts(firstItems);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-[1224px] w-full m-auto">
      <h1 className="text-3xl font-bold mb-6">Technology</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {firstProducts.map((item) => (
          <Link
            key={item.path}
            to={`/technology/${item.path}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {item.product && (
              <img
                src={item.product.image}
                alt={item.product.name}
                className="m-auto object-cover"
              />
            )}
            <div className="p-4 text-center font-semibold">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technology;
