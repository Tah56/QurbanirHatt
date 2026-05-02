
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const showTopCow = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const cows = await res.json();

  return cows;
};
const AllAnimals = async () => {
  const all = await showTopCow();
  return (
    <div className="grid grid-cols-4 container mx-auto gap-20 py-10">
      {all.map((data) => {
        return (
          <Link key={data.id} href={`/animals/${data.id}`}>
            <Card className="cursor-pointer w-96">
              <div className="relative w-full  aspect-square">
                <Image src={data.img}
                  fill
                  alt={data.name}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div>
                <h2>NAME: {data.name}</h2>
                <h2>Animal Type: {data?.type}</h2>
                <h2>Breed:{data.breed}</h2>
                <h2>Price: {data?.price}</h2>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default AllAnimals;
