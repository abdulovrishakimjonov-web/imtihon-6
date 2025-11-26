import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = res.data;

        const categoryData = data.find(
          (c) => c.category.toLowerCase().replace(/\s/g, "") === "newproducts"
        );

        if (categoryData) {
          setProducts(categoryData.products);
        }
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <section className="p-6 max-w-[1224px] mx-auto">
      <h2 className="text-3xl font-bold mb-6">New Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white shadow p-4 rounded-lg overflow-hidden hover:scale-105 transition-transform block h-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[160px] w-full object-contain mb-2"
                />
                <div className="p-2 text-base text-black">
                  {product.name}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-lg text-black">
                  ${product.price}
                </div>
                <div className="flex items-center gap-1 text-blue-700">
                  ⭐ {product.rating?.toFixed(1) || "0.0"}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
