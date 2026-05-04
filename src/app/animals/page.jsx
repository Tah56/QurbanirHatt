"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllAnimals = () => {
  const [sort, setSort] = useState([]);

  useEffect(() => {
    const showTopCow = async () => {
      const res = await fetch("https://qurbanir-hatt.vercel.app/data.json");
      const cows = await res.json();

      setSort(cows);
    };
    showTopCow();
  }, []);

  const sorted = [...sort].sort((a, b) => a.price - b.price);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto md:gap-10 place-items-center py-10">
      {sorted.map((data) => {
        return (
         
          <Card key={data.id}  className="cursor-pointer w-96">
            <div className="relative w-full  aspect-square">
              <Image
                src={data.img}
                fill
                alt={data.name}
                className="object-cover rounded-2xl"
                />
            </div>
            <div className="space-y-5">
              <h2 className="text-lg font-bold">
                {" "}
                NAME: <span className="font-medium">{data.name}</span>
              </h2>
              <h2>Animal Type: {data?.type}</h2>
              <h2>Breed:{data.breed}</h2>
              <h2>Price: {data?.price}Taka</h2>
            </div>
            <Link
              className={"ml-auto"}
              key={data.id}
              href={`/animals/${data.id}`}
              >
              <Button>Full details</Button>
            </Link>
          </Card>
      
        );
      })}
    </div>
  );
};

export default AllAnimals;
