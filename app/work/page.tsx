import WorksSection from "@/components/pages/home/sections/work";
import Hero from "@/components/shared/hero";
import PaginationControl from "@/components/shared/pagination-control";
import React from "react";

const WorkPage = () => {
  return (
    <div>
      <Hero pageTitle={"Work"} />
      <WorksSection />
      <PaginationControl />
    </div>
  );
};

export default WorkPage;
