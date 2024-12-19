"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "@/components/shared/testimonials";
import { FaPlay } from "react-icons/fa";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

// Type for the slide structure
interface HeroSlide {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  cta: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    bgImage: "/images/bg_1.webp",
    title: "We Create Modern & Minimal Website",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cta: "Explore Projects",
  },
  {
    id: 2,
    bgImage: "/images/bg_2.webp",
    title: "Crafting Exceptional User Experiences",
    description:
      "We design and develop websites that deliver outstanding results for businesses.",
    cta: "Start Project",
  },
];

const HeroCarousel = () => {
  // Embla carousel initialization
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay(),
  ]);

  // State to manage the current selected index of the carousel
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // State to store all the scroll snaps for the carousel
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update carousel dots based on the selected scroll snap
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Set the scroll snap list and add event listeners
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Scroll to specific slide when dot is clicked
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="pb-10">
      <div className="relative w-full  h-screen overflow-hidden">
        {/* Carousel Container */}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {/* Mapping through the heroSlides */}
            {heroSlides.map((slide) => (
              <div
                key={slide.id}
                className="flex-none w-full h-full relative  bg-black/60 bg-blend-overlay bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
                role="group" // Indicates that these are grouped slides
                aria-label={`Slide ${slide.id}`}
              >
                {/* Overlay Content */}
                <div className="container absolute mb-36 sm:mb-0 inset-0 flex sm:flex-row  flex-col-reverse justify-between sm:items-center  text-white">
                  <div className=" flex flex-col justify-center items-start">
                    <h1 className="h1 max-w-lg sm:max-w-md">{slide.title}</h1>
                    <p className="text-lg mt-4 max-w-md">{slide.description}</p>
                    <Button className="mt-6">{slide.cta}</Button>
                  </div>
                  <div className="mt-60 text-sm  sm:mb-96">
                    <p
                      className="font-bold text-2xl sm:text-5xl border-l-4 sm:border-l-0 px-2 sm:border-r-8
                     border-primary"
                    >
                      21
                    </p>
                    <p className="text-muted-foreground text-left sm:text-right mt-2">
                      Years of
                      <br />
                      experienced
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div
          className="absolute bottom-8 left-[20%]  sm:bottom-8 sm:left-1/2 transform -translate-x-1/2 flex space-x-4"
          aria-label="Carousel navigation dots"
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isSelected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              role="button" // Mark dot buttons as buttons for accessibility
              aria-label={`Go to slide ${index + 1}`} // Add an accessible label for each button
            />
          ))}
        </div>

        {/* Optional Play Button */}
        <div className="absolute bottom-10 right-16 sm:right-[16rem] xl:right-[28rem]">
          <div className="rounded-full bg-primary/70  p-5 left-2 animate-ping bottom-[0.4rem] absolute"></div>
          <Button
            className=" w-14 h-14 flex items-center justify-center rounded-full"
            aria-label="Play carousel" // Provide accessible label for play button
          >
            <FaPlay className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
