import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Cards = ({ cow }) => {
  return (
    <Card className="cursor-pointer w-96">
      <div className="relative w-full  aspect-square">
        <Image
          src={cow.img}
          fill
          alt={cow?.name}
          className="object-cover rounded-2xl"
        />
      </div>
      <div>
        <h2>NAME: {cow?.name}</h2>
        <h2>Animal Type: {cow?.type}</h2>
        <h2>Breed:{cow?.breed}</h2>
        <h2>Price: {cow?.price}</h2>
      </div>
    </Card>
  );
};

export default Cards;
