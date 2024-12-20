"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "@/components/shared/testimonials";
import { FaPlay } from "react-icons/fa";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Counter from "@/components/shared/counter";
import { ScrollAnimation } from "@/components/shared/scroll-animation";

interface HeroSlide {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  cta: string;
  vimeoId?: string; // Optional Vimeo video ID
  projects?: number;
  years?: number;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    bgImage: "/images/bg_1.webp",
    title: "We Create Modern & Minimal Website",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cta: "Explore Projects",
    projects: 400,
    vimeoId: "76979871",
  },
  {
    id: 2,
    bgImage: "/images/bg_2.webp",
    title: "We Create Modern & Minimal Website",
    description:
      "We design and develop websites that deliver outstanding results for businesses.",
    cta: "Start Project",
    years: 21,
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="pb-10">
      <div className="relative w-full h-screen overflow-hidden">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {heroSlides.map((slide) => (
              <div
                key={slide.id}
                className="flex-none w-full h-full relative bg-black/60 bg-blend-overlay bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
                role="group"
                aria-label={`Slide ${slide.id}`}
              >
                <div className="container absolute mb-16 sm:mb-0 inset-0 flex sm:flex-row flex-col-reverse justify-between sm:items-center text-white">
                  <ScrollAnimation>
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="h1 max-w-lg sm:max-w-[29rem]">
                        {slide.title}
                      </h1>
                      <p className="text-lg mt-4 max-w-md">
                        {slide.description}
                      </p>
                      <Button className="mt-6">{slide.cta}</Button>
                    </div>
                  </ScrollAnimation>
                  <div className="mt-60 text-sm sm:mb-96">
                    <p
                      className="font-bold text-2xl sm:text-5xl border-l-4 sm:border-l-0 sm:border-r-8
                     border-primary"
                    >
                      {slide.years ? (
                        <Counter target={slide.years} duration={0.5} />
                      ) : (
                        <Counter target={slide.projects!} duration={0.5} />
                      )}
                    </p>
                    <p className="text-muted-foreground text-left sm:text-right mt-2">
                      {slide.years
                        ? "years of experience"
                        : `projects completed`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-6 left-[60%] sm:bottom-8 sm:left-1/2 transform -translate-x-1/2 flex space-x-4"
          aria-label="Carousel navigation dots"
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isSelected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              role="button"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-16 hover:cursor-pointer z-30 right-16 sm:right-[16rem] xl:right-[28rem]">
          <div className="rounded-full bg-primary/70 p-5 left-2 animate-ping bottom-[0.4rem] absolute"></div>
          <Button
            className="w-14 h-14 flex items-center justify-center rounded-full"
            aria-label="Play video"
          >
            <FaPlay className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
