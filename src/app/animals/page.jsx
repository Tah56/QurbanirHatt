"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllAnimals = () => {
  const [sort, setSort] = useState([]);

  useEffect(() => {
    const showTopCow = async () => {
      const res = await fetch("http://localhost:3000//data.json");
      const cows = await res.json();

      setSort(cows);
    };
    showTopCow();
  }, []);

  const sorted = [...sort].sort((a, b) => a.price - b.price);
  return (
    <div className="grid grid-cols-4 container mx-auto gap-20 py-10">
      {sorted.map((data) => {
        return (
          <Link key={data.id} href={`animals/${data.id}`}>
          <Card  className="cursor-pointer w-96">
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
      </Link>
        );
      })}
    </div>
  );
};

export default AllAnimals;
