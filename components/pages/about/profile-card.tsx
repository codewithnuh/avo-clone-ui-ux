import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ProfileCard = ({
  firstName,
  lastName,
  role,
  imgUrl,
}: ProfileCardProps) => {
  return (
    <Card className="p-0 border-0 rounded-none  h-96 w-56  shadow-none">
      <CardContent className="p-0">
        <div className=" bg-gradient-to-tr from-[#676767] to-transparent">
          <Image
            src={imgUrl}
            width={1000}
            height={1000}
            alt={firstName + " " + lastName}
          />
        </div>
        <div className="px-8 mt-2 space-y-2">
          <p className="font-[900] tracking-wider text-xl hover:text-primary uppercase">
            <span>{firstName}</span>
            <br />
            <span>{lastName}</span>
          </p>
          <p className="text-primary">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
