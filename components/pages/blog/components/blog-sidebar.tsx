import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Category {
  name: string;
  count: number;
}

interface RecentPost {
  title: string;
  date: string;
  author: string;
  image: string;
}

const categories: Category[] = [
  { name: "Web Development", count: 15 },
  { name: "Web Design", count: 22 },
  { name: "UI/UX Design", count: 37 },
  { name: "Graphic Design", count: 45 },
  { name: "Application", count: 18 },
  { name: "Illustration", count: 29 },
  { name: "Branding", count: 16 },
];

const recentPosts: RecentPost[] = [
  {
    title: "Amplify your blockchain team",
    date: "Jul 22, 2020",
    author: "Admin",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Amplify your blockchain team",
    date: "Jul 22, 2020",
    author: "Admin",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Amplify your blockchain team",
    date: "Jul 22, 2020",
    author: "Admin",
    image: "/placeholder.svg?height=80&width=80",
  },
];

const tags = [
  "WEB",
  "DESIGN",
  "GRAPHIC",
  "UI",
  "UX",
  "APPS",
  "PROGRAMMING",
  "DEVELOPMENT",
];

export function BlogSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search */}
      <div className="relative">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full bg-background"
        />
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ScrollArea className="h-[300px] pr-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex justify-between items-center"
              >
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                </a>
                <span className="text-muted-foreground text-sm">
                  ({category.count})
                </span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      {/* Recent Blog Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Blog</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex gap-4">
                <img
                  src={post.image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.date} • {post.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tag Cloud</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Paragraph */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Paragraph</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
          lectus, autem feugiat tortor pulvinar at. Cras hendrerit dictum ex.
          Aenean viverra consectetur diam, et dapibus quam ornare ut.
        </p>
      </div>
    </aside>
  );
}
