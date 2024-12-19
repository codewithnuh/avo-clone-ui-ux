import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import Link from "next/link";
const BlogCard = ({
  title,
  author,
  summary,
  slug,
  imgUrl,
}: {
  title: string;
  author: string;
  summary: string;
  slug: string;
  imgUrl: string;
}) => {
  return (
    <Card className="p-0 max-w-80 bg-transparent space-y-4 rounded-none shadow-none border-none">
      <CardTitle className="font-medium text-xl ">
        <Link href={`/blog/${slug}`}>{title.slice(0, 40) + "..."}</Link>
      </CardTitle>
      <CardHeader className="p-0">
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          alt="Amplify your blockchain team"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between text-sm max-w-44 mb-2">
          <p>{new Date().toLocaleDateString()}</p>
          <p>{author}</p>
          <span className="flex space-x-2">
            <AiFillMessage size={20} />
            <span>3</span>
          </span>
        </div>
        <p className="text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
