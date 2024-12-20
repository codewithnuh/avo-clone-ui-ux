import { BlogPost } from "@/components/pages/blog/components/blog-post";
import { BlogSidebar } from "@/components/pages/blog/components/blog-sidebar";
import Hero from "@/components/shared/hero";
import { blogData } from "@/constants";
import React from "react";
const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = blogData.filter((blog) => blog.slug === slug);
  return (
    <div>
      <Hero pageTitle="Single BLog" />
      <div className="container mx-auto py-8 px-4 mb-36191">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          <BlogPost
            content={blog[0].content}
            title={blog[0].title}
            mainImg={blog[0].mainImgUrl}
          />
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
