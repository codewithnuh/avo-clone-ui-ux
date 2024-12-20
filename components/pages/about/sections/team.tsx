import React from "react";
import ProfileCard from "../profile-card";
import { TEAM_MEMBERS } from "@/constants";
import { ScrollAnimation } from "@/components/shared/scroll-animation";

const Team = () => {
  return (
    <section className="container pb-30 ">
      <h2 className="h2 mb-16">Expert team</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {TEAM_MEMBERS.map((member, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <ProfileCard {...member} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Team;
