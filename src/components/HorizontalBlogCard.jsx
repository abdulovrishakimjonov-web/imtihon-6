import React from 'react'

const HorizontalBlogCard = () => {
  return (
     <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition duration-300">
      
      {/* Blog Image */}
      <div className="md:w-1/3 overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-3">
            By <span className="font-semibold">{post.author}</span> | {post.date}
          </p>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
        </div>

        <a
          href={post.link}
          className="self-start bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default HorizontalBlogCard