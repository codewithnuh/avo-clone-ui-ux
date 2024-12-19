import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm"; // Add this import

interface Props {
  markdown: string;
}

const MarkdownRenderer = async ({ markdown }: Props) => {
  const processor = unified()
    .use(remarkParse) // Parse markdown into an Abstract Syntax Tree (AST)
    .use(remarkGfm) // Enable GitHub-Flavored Markdown, including tables
    .use(remarkRehype) // Transform Markdown AST into HTML AST
    .use(rehypeDocument) // Wrap the content in an HTML document structure
    .use(rehypeFormat) // Format the output HTML for readability
    .use(rehypeAutolinkHeadings) // Add links to headings
    .use(rehypePrettyCode, {
      theme: "github-dark", // Code highlighting theme
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify); // Serialize the HTML AST to a string

  const processed = await processor.process(markdown);
  const htmlContent = processed.toString();

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

export default MarkdownRenderer;
