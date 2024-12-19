import { BlogPost } from "@/components/pages/blog/components/blog-post";
import { BlogSidebar } from "@/components/pages/blog/components/blog-sidebar";
import Hero from "@/components/shared/hero";
import MarkdownRenderer from "@/components/shared/markdown-renderer";
import { Input } from "@/components/ui/input";
import { blogData } from "@/constants";
import { Search } from "lucide-react";
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
      <div className="container mx-auto py-8 px-4">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          <BlogPost content={blog[0].content} title={blog[0].title} />
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
