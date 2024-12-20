"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { WORKS } from "@/constants";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
export default function WorksSection() {
  const pathName = usePathname();
  return (
    <section
      className={`py-28 px-4 md:px-6 relative ${
        pathName === "/work" ? "bg-white" : "bg-accent"
      } `}
    >
      <div className="custom-shape-divider-top-1734607374">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1734527401">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          fill="white"
          preserveAspectRatio="none"
          className="!fill-white"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className={` ${
              pathName === "/work" ? "!fill-white" : "!fill-accent"
            } `}
          ></path>
        </svg>
      </div>
      <div className=" mx-auto container">
        <h2 className="h2 mb-12">OUR WORKS</h2>

        <div className="space-y-24">
          {WORKS.map((work, index) => (
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
                <ScrollAnimation>
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
                    className={
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }
                  >
                    <Button variant="outline" className="mt-4">
                      VIEW PORTFOLIO
                    </Button>
                  </div>
                </ScrollAnimation>
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
