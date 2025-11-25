import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AboutDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://692609d226e7e41498f9294e.mockapi.io/props/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log("API ERROR:", err));
  }, [id]);

  if (!item) {
    return (
      <h2 className="text-center mt-10 text-white">
        Loading yoki API bo‘sh qaytyapti...
      </h2>
    );
  }

  return (
    <div className="max-w-[1224px] mx-auto p-6">
      <div className="bg-white shadow p-6 rounded-xl flex gap-6">

        <img
          src={item.img}
          className="w-[300px] h-[260px] object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold mb-3">{item.title}</h1>
          <p className="text-gray-700 mb-4">
            {item.desc || "Bu mahsulotda desc mavjud emas."}
          </p>
          <p className="text-lg font-semibold text-blue-600">
            ${item.price || "999.99"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutDetail;
