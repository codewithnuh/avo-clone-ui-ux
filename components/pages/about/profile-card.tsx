import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <Card className="p-0 border-0 rounded-none  bg-gradient-to-tr from-[#676767] to-transparent h-96 w-80  shadow-none">
      <CardContent className="p-0">
        <Image
          src={"/images/team-1.webp"}
          width={1000}
          height={1000}
          alt="Person"
        />
        <div className="px-8 mt-2 space-y-2">
          <p className="font-extrabold text-xl hover:text-primary uppercase">
            <span>John</span>
            <br />
            <span>Doe</span>
          </p>
          <p className="text-primary">Web Designer</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
