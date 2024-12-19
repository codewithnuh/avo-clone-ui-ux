import Image from "next/image";
import { CommentsList } from "./comment-list";
import { CommentForm } from "./comment-form";
import { Separator } from "@/components/ui/separator";
import MarkdownRenderer from "@/components/shared/markdown-renderer";

export function BlogPost({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <article className=" prose container overflow-hidden  mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Blog post cover"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover"
          />
          <h1 className="text-4xl font-bold">{title}</h1>
          <MarkdownRenderer markdown={content} />
        </div>
        <Separator className="my-8" />
        <CommentsList />
        <CommentForm />
      </div>
    </article>
  );
}
