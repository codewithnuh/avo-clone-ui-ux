import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface WorkItem {
  title: string;
  category: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
}

const works: WorkItem[] = [
  {
    title: "Cassette tape",
    category: "Web Design",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_1.webp",
    },
    image: "/images/work-1.webp",
  },
  {
    title: "Miniwall Clock",
    category: "Product Design",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_2.webp",
    },
    image: "/images/work-2.webp",
  },
  {
    title: "Avo Portfolio Agency",
    category: "Web Design",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_3.webp",
    },
    image: "/images/work-3.webp",
  },
  {
    title: "Hand Writing",
    category: "Web Development",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_4.webp",
    },
    image: "/images/work-4.webp",
  },
  {
    title: "Hand Writing",
    category: "Web Development",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_3.webp",
    },
    image: "/images/work-5.webp",
  },
  {
    title: "Hand Writing",
    category: "Web Development",
    description:
      "For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Jamie Jameson",
      avatar: "/images/person_1.webp",
    },
    image: "/images/work-6.webp",
  },
];

export default function WorksSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="h2 mb-12">OUR WORKS</h2>

        <div className="space-y-24">
          {works.map((work, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
              }`}
            >
              <div
                className={`space-y-4  ${
                  index % 2 === 0
                    ? "md:order-2 md:text-left"
                    : "md:order-1 md:text-right"
                }`}
              >
                <p className="text-sm text-gray-600">{work.category}</p>
                <h3 className="text-2xl font-medium">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
                <div
                  className={`flex items-center gap-3 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={work.author.avatar}
                      alt={work.author.name}
                    />
                    <AvatarFallback>JJ</AvatarFallback>
                  </Avatar>
                  <div className="inline-flex flex-col text-left ">
                    <span className="text-sm text-gray-800">
                      {work.author.name}
                    </span>
                    <span className="text-sm text-gray-600">avo.com</span>
                  </div>
                </div>
                <div
                  className={index % 2 === 0 ? "md:text-left" : "md:text-right"}
                >
                  <Button variant="outline" className="mt-4">
                    VIEW PORTFOLIO
                  </Button>
                </div>
              </div>
              <div
                className={`aspect-[4/3] sm:aspect-[6/5.8] shadow-md relative ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
