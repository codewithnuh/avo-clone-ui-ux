import React from "react";
import { Button } from "../ui/button";
import { ScrollAnimation } from "./scroll-animation";

const CTA = () => {
  return (
    <section className="container pb-80">
      <div className="bg-[url('/images/bg_1.webp')] max-h-[25rem] sm:h-80 w-full rounded-sm bg-black/30 bg-blend-overlay bg-cover bg-center">
        <div className="p-8 sm:p-14">
          <ScrollAnimation>
            <div className="max-w-80 space-y-2">
              <p className="text-primary">Get Started</p>

              <h2 className="text-white font-medium text-3xl">
                Fill in the brief and get the project estimate
              </h2>
              <p className="text-muted-foreground">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
              <Button>Get Started</Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
