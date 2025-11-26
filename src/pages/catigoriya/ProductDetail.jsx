import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        const data = res.data;


        let foundProduct = null;
        let foundCategory = "";

        data.forEach((cat) => {
          const prod = cat.products.find((p) => p.id === id);
          if (prod) {
            foundProduct = prod;
            foundCategory = cat.category;
          }
        });

        setProduct(foundProduct);
        setCategoryName(foundCategory);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Загрузка...</div>;
  if (!product) return <div className="p-6 text-center">Товар не найден</div>;

  let backLink = "/products"; 
  if (categoryName.toLowerCase().replace(/\s/g, "") === "bestsellers") {
    backLink = "/best";
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow-md">
      <Link to={backLink} className="text-blue-600 hover:underline mb-4 block">
        ← Back to {categoryName}
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded object-contain"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description || "No description"}</p>
          <p className="text-xl font-semibold mb-2">${product.price}</p>
          <p className="mb-2">Brand: {product.brand || "Unknown"}</p>
          <p className="mb-2">Rating: {product.rating || 0} ⭐</p>
          <p className="mb-2">Stock: {product.stock || 0}</p>
          <button className="mt-4 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
