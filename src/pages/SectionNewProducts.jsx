import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://691aa27e2d8d7855756f8c58.mockapi.io/products2/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (!product) return <div>Product topilmadi</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-contain mb-4"/>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p>{product.description || "Mahsulot haqida batafsil ma’lumot yo‘q"}</p>
    </div>
  );
};

export default ProductDetail;
