import { BuyForm } from "@/component/BuyForm/BuyForm";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const showTopCow = async () => {
  const res = await fetch("https://qurbanir-hatt.vercel.app/data.json");
  const cows = await res.json();
  
  return cows;
};
const TopFeture = async ({ params }) => {
  const topFeture = await showTopCow();

  const id = await params;
  const signle = topFeture.find((cow) => cow.id == id.id);
  

  return (
    <div className="max-w-lg mx-auto flex  justify-center mt-10">
      <Card className="flex-1 ">
        <div >
          <Image
            src={signle?.img}
            height={300}
            width={500}
            alt={signle?.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mx-auto rounded-2xl"
          />
        </div>
        <div className="mx-auto font-bold">
          <h2>{signle?.name}</h2>
          <p>Animal Type: <span className="font-medium text-xl">{signle?.type}</span></p>
          <p>Animal Breed: <span className="font-medium text-xl">{signle?.breed}</span></p>
          <p>Price: <span className="font-medium text-xl">{signle?.price}</span></p>
          <p>Weight: <span className="font-medium text-xl">{signle?.weight}Kg</span></p>
          <p>Animal Age: <span className="font-medium text-xl">{signle?.age}</span></p>
          <p>Animals description : <span className="font-medium text-xl">{signle?.description}</span></p>
        </div>
        <div className="flex p-2.5 gap-5 justify-end">

      <Button><Link href={"/animals"}>Go back</Link></Button>
      <BuyForm></BuyForm>
        </div>
      </Card>
     
    </div>
  );
};

export default TopFeture;
