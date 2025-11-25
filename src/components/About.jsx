import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://692609d226e7e41498f9294e.mockapi.io/props')
      .then((res) => setData(res.data));
  }, []);

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-12 px-10 bg-[#063A88] rounded-2xl">
        <div className="flex gap-6 overflow-x-auto pb-4">

          {data.map((item) => (
            <Link
              to={`/about/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg min-w-[239px] shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                className="w-[200px] h-[180px] object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-sm text-gray-800">{item.title}</h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
