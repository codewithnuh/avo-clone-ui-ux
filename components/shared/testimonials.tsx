"use client";

// Import necessary React hooks and types
import React, {
  useCallback,
  useEffect,
  useState,
  ComponentPropsWithRef,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { EmblaCarouselType } from "embla-carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";
// Type definition for the dot button hook return value
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

// Custom hook to handle carousel dot button functionality
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number): void => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType): void => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType): void => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Props type for the DotButton component
type DotButtonProps = ComponentPropsWithRef<"button"> & {
  isSelected: boolean;
};

// DotButton component styled like a radio button
export const DotButton: React.FC<DotButtonProps> = ({
  isSelected,
  ...restProps
}) => {
  return (
    <button
      type="button"
      {...restProps}
      className={cn(
        "h-4 w-4 rounded-full border-2 flex items-center justify-center mx-1 transition-all",
        isSelected
          ? "border-primary" // Red border when selected
          : "border-gray-300 hover:border-gray-400" // Light gray border for unselected
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          isSelected ? "bg-primary" : "bg-gray-200"
        )}
      />
    </button>
  );
};

// Type definition for testimonial data
type Testimonial = {
  id: number;
  name: string;
  position: string;
  review: string;
  profileImage: string;
};

// Mock testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "John Smith",
    position: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "John Smith",
    position: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "John Smith",
    position: "Marketing Manager",
    review:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// Main testimonials carousel component
export default function TestimonialsCarousel(): React.ReactElement {
  const pathName = usePathname();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="container max-w-7xl relative mx-auto py-10 mb-36">
      <div className="custom-shape-divider-top-1734527970">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className={`${pathName == "/about" ? "fill-white" : "shape-fill"}`}
          ></path>
        </svg>
      </div>
      <h2 className="h2 mt-20 mb-20">Clients Says About Us?</h2>

      {/* Embla Carousel */}
      <div className="overflow-clip py-6" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none  px-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <Card className="relative shadow-sm flex flex-col justify-between p-6 max-w-96 bg-accent">
                {/* Quote Icon Positioned Half on the Left Side */}
                <FaQuoteLeft
                  size={38}
                  className="absolute -top-6 left-4 text-primary "
                />

                <CardContent className="text-left flex flex-col space-y-6 h-full">
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left ml-4">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            isSelected={index === selectedIndex}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
