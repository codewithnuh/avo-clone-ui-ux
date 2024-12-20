"use client";
import BlogCard from "@/components/shared/blog-card";
import { blogData } from "@/constants";
import React from "react";
import { usePathname } from "next/navigation";
const BlogSection = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <section
      className={`${
        pathName === "/blog" ? "bg-white" : "bg-accent"
      }  relative py-36 mt-28`}
    >
      <div className="custom-shape-divider-top-1734607033 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
