import React from 'react'
import HorizontalBlogList from '../components/HorizontalBlogList'

const BlogPages = () => {
  return (
    <div>
      <div className="bg-[#063A88] min-h-screen">
      {/* Latest Posts */}
      <section className="py-12">
        <div className="max-w-[1224px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Latest Posts</h1>
          <HorizontalBlogList/>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-[#0a4bb8]">
        <div className="max-w-[1224px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Featured Posts</h1>
          <HorizontalBlogList />
        </div>
      </section>
    </div>
    </div>
  )
}

export default BlogPages