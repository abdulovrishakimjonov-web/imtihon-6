import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );

        const data = res.data;

        const categoryData = data.find(
          (c) => c.category.toLowerCase().replace(/\s/g, "") === "newproducts"
        );

        if (categoryData) {
          const found = categoryData.products.find((p) => p.id == id);
          setProduct(found);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <section className="p-6 max-w-[900px] mx-auto">
      <Link to="/" className="text-blue-600 text-lg">&larr; Back</Link>

      <div className="mt-6 flex flex-col md:flex-row gap-8 bg-white shadow p-6 rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-[350px] h-[300px] object-contain"
        />

        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-lg">Rating: ⭐ {product.rating?.toFixed(1)}</p>

          <p className="mt-4 text-gray-600 leading-7">
            {product.description || "No description available."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
