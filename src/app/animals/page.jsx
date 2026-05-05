"use client";
import AnimalsDetailsCard from "@/component/AnimalsDetailsCard/AnimalsDetailsCard";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

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
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  container mx-auto gap-10 place-items-center py-10">
      {sorted.map((data) => {
        return (
          <AnimalsDetailsCard data={data} key={data.id}></AnimalsDetailsCard>
        );
      })}
    </div>
  );
};

export default AllAnimals;
