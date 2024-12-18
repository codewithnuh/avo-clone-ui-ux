import WorksSection from "@/components/pages/home/sections/work";
import Hero from "@/components/shared/hero";
import React from "react";

const WorkPage = () => {
  return (
    <div>
      <Hero pageTitle={"Work"} />
      <WorksSection />
    </div>
  );
};

export default WorkPage;
