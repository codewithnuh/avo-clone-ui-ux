import BlogCard from "@/components/shared/blog-card";
import { blogData } from "@/constants";
import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-accent pt-44 mt-28">
      <div className="container">
        <h2 className="h2 mb-28">Recent Blog</h2>
        <div className="py-5 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-4">
          {blogData
            .slice(0, 4)
            .map(({ author, slug, summary, title, mainImgUrl }, index) => (
              <BlogCard
                key={index}
                author={author}
                summary={summary}
                slug={slug}
                imgUrl={mainImgUrl}
                title={title}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
