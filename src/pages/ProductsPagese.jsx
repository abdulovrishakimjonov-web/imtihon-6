import React, { useState, useEffect } from 'react';
import blog from '../img/blog.png';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productId = 1;

  useEffect(() => {
    fetch(`https://691aa27e2d8d7855756f8c58.mockapi.io/products2/${productId}`)
      .then(res => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product Not Found</div>;

  const images = product.image ? [product.image, product.image, product.image, product.image] : [];
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#0000FF'];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left: Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-2 sm:p-4">
              <img
                src={images[selectedImage] || blog}
                alt={product.title || 'Product'}
                className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-lg"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-2 cursor-pointer transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-blue-600 shadow'
                      : 'hover:shadow'
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-14 sm:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">

            <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>

            <div className="flex items-center flex-wrap gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">${product.price}</span>
              <span className="line-through text-gray-400 text-lg sm:text-xl">
                ${(product.price * 1.3).toFixed(2)}
              </span>
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">-23%</span>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Color</h3>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-blue-600'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Size</h3>
              <div className="flex gap-3 flex-wrap">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Quantity</h3>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 sm:px-4 py-2 bg-gray-50 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="px-4 sm:px-6 py-2 border-x">{quantity}</span>

                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 sm:px-4 py-2 bg-gray-50 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <span className="text-sm text-gray-600">Only 12 left!</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Add to Cart
              </button>

              <button className="w-full sm:w-auto px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                ❤️
              </button>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex gap-6 border-b overflow-x-auto pb-2">
            {['description', 'specifications', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm sm:text-base font-semibold capitalize ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pt-6">
            {activeTab === 'description' && (
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            )}

            {activeTab === 'specifications' && (
              <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p><strong>Brand:</strong> {product.category}</p>
                <p><strong>Model:</strong> 2024 Edition</p>
                <p><strong>Weight:</strong> 500g</p>
                <p><strong>Dimensions:</strong> 10 × 15 × 5 cm</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <p className="text-gray-600 text-sm">No reviews yet.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
