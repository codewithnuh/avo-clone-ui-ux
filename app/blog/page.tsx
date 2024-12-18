import BlogSection from "@/components/pages/home/sections/blog";
import Hero from "@/components/shared/hero";
import PaginationControl from "@/components/shared/pagination-control";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Hero pageTitle="Blog" />
      <BlogSection />
      <PaginationControl />
    </div>
  );
};

export default BlogPage;
