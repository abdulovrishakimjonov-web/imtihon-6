import React, { useEffect, useState } from "react";
import axios from "axios";
import HorizontalBlogCard from "./HorizontalBlogCard";


const HorizontalBlogList = () => {

     const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://692609d226e7e41498f9294e.mockapi.io/props")
      .then((res) => {
        const formatted = res.data.map((item) => ({
          ...item,
          author: item.author || "Admin",
          date: item.date || "Nov 26, 2025",
          excerpt:
            item.excerpt ||
            "Bu blog post qisqacha tavsifi. Foydali ma’lumotlar bilan to‘ldiriladi.",
          link: "#",
        }));
        setPosts(formatted);
      });
  }, []);

  return (
     <section className="py-12 bg-[#063A88] min-h-screen">
      <div className="max-w-[1224px] mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-white mb-8">Featured Blog Posts</h1>

        {posts.map((post) => (
          <HorizontalBlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default HorizontalBlogList