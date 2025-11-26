import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = res.data;

        const categoryData = data.find(
          (c) =>
            c.category.toLowerCase().replace(/\s/g, "") ===
            category.toLowerCase()
        );

        setProducts(categoryData?.products || []);
        setCategoryName(categoryData?.category || "");
      } catch (error) {
        console.error("Ошибка при загрузке категории:", error);
      }
    };

    fetchCategoryProducts();
  }, [category, location.pathname]);

  return (
    <div className="p-6 max-w-[1224px] w-full m-auto">
      <Link
        to="/technology"
        className="inline-block mb-4 text-blue-500 font-semibold hover:underline"
      >
        ← Go back to categories
      </Link>

      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`${product.id}`}  
            className="bg-white mx-auto shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center font-semibold">{product.name}</div>
            <div className="text-center text-gray-600">${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
