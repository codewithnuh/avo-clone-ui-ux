import BlogCard from "@/components/shared/blog-card";
import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-accent">
      <div className="container">
        <h2 className="h2 mb-28">Recent Blog</h2>
        <div className="py-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
