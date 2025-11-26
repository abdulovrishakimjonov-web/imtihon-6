import { useState } from "react";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Tech", "Business", "Design", "Lifestyle"];

  const blogs = [
    {
      id: 1,
      title: "How AI is Changing the World",
      category: "Tech",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    },
    {
      id: 2,
      title: "10 Tips for Better UI/UX",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1551817958-20204d6abddd?w=900",
    },
    {
      id: 3,
      title: "Start Your Business Easily",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900",
    },
    {
      id: 4,
      title: "Improve Your Daily Life",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=900",
    },
  ];

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchCategory = category === "All" || blog.category === category;
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Explore stories, ideas, and insights
          </p>

          {/* SEARCH INPUT */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-5 rounded-full text-black shadow-md focus:outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
              🔍
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                category === cat
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 shadow hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">
                <span className="text-sm text-blue-600 font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-lg font-bold mt-2 mb-3 hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <button className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No blogs found 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
