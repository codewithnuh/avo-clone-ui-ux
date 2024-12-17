"use client";

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

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
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

type DotButtonProps = ComponentPropsWithRef<"button"> & {
  isSelected: boolean;
};

export const DotButton: React.FC<DotButtonProps> = ({
  isSelected,
  ...restProps
}) => {
  return (
    <button
      type="button"
      {...restProps}
      className={cn(
        "h-3 w-3 rounded-full mx-1 transition-colors",
        isSelected ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"
      )}
    />
  );
};

// Testimonials Data
const testimonials = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  name: `Client ${index + 1}`,
  position: "Marketing Manager",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
}));

// Group testimonials into sets of 3
const groupedTestimonials = [];
for (let i = 0; i < testimonials.length; i += 3) {
  groupedTestimonials.push(testimonials.slice(i, i + 3));
}

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start", // Align groups properly
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="w-full max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">
        Clients Say About Us
      </h2>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {groupedTestimonials.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex-none w-full md:w-[100%] flex p-4"
            >
              {group.map((testimonial) => (
                <div key={testimonial.id} className="flex-1 px-2">
                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm mb-4 text-gray-600">
                        {testimonial.text}
                      </p>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
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
