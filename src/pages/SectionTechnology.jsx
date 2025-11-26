import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SectionTechnology = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchTechnologyProducts = async () => {
      try {
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = res.data;

        const techCategories = [
          "accessories",
          "camera",
          "laptop",
          "smartphone",
          "gaming",
          "smartwatch",
        ];

        const firstProducts = techCategories
          .map((slug) => {
            const categoryData = data.find(
              (c) => c.category.toLowerCase().replace(/\s/g, "") === slug
            );
            if (categoryData && categoryData.products.length > 0) {
              return {
                ...categoryData.products[0],
                category: categoryData.category,
              };
            }
            return null;
          })
          .filter(Boolean);
        setProducts(firstProducts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTechnologyProducts();
  }, []);

  return (
    <section className="p-6 max-w-[1224px] mx-auto">
          <h2 className="font-medium text-[32px] text-[color:var(--black)] font-family">Technology</h2>
          <div className="border-[color:var(--neutral-gray-b4b4b4)] border-t-2 border-solid mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/technology/${product.category.toLowerCase().replace(/\s/g, "")}`}
            className="bg-white shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] mx-auto w-full sm:w-[184px] h-[196px] px-[18px] py-2 rounded-lg overflow-hidden hover:scale-105 transition-transform block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto"
            />
            <div className="font-light text-base leading-[150%] text-center text-[color:var(--neutral-gray-2d2d2d)] font-family">{product.category}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionTechnology;
