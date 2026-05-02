import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const showTopCow = async (id) => {
  const res = await fetch("http://localhost:3000//data.json");
  const cows = await res.json();
  const top = cows.slice(0, 8);
  console.log(top);
  return top;
};
const TopFeture = async ({ params }) => {
  const topFeture = await showTopCow();

  const id = await params;
  const signle = topFeture.find((cow) => cow.id == id.id);
  console.log(signle, id.id);

  return (
    <div className="max-w-lg mx-auto flex  justify-center mt-10">
      <Card className="flex-1 ">
        <div >
          <Image
            src={signle.img}
            height={300}
            width={500}
            alt={signle.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mx-auto rounded-2xl"
          />
        </div>
        <div className="mx-auto">
          <h2>{signle.name}</h2>
          <p>Animal Type<span>{signle.type}</span></p>
        </div>
      </Card>
    </div>
  );
};

export default TopFeture;
