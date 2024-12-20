import Image from "next/image";
import React from "react";
const WorkCard = ({
  imgSide,
  image,
  tag,
  title,
}: {
  imgSide: "left" | "right";
  image: string;
  tag: string;
  title: string;
}) => {
  return (
    <>
      <div className={`${imgSide == "left" ? "order-1" : "order-2"}`}>
        <Image src={image} width={1000} height={1000} alt="image" />
      </div>
      <div
        className={`${
          imgSide != "left" ? "order-1 text-left" : "order-2 text-right"
        }  `}
      >
        <div className="flex items-center">
          <div>
            <span>{tag}</span>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
