import React from "react";
import Card from "../card/Card";
import Cards from "../card/Card";
import Link from "next/link";
import TopBreed from "../TopBreed/TopBreed";
import QurbaniTips from "../QurbaniTips/QurbaniTips";

const showTopCow = async () => {
  const res = await fetch("https://qurbanir-hatt.vercel.app/data.json");
  const cows = await res.json();
  const top = cows.slice(0, 4);
  console.log(top);
  return top;
};

const AllFetures = async () => {
  const cows = await showTopCow();
  console.log(cows);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Featured Animals</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
        {cows.map((cow) => (
          <Cards key={cow.id} cow={cow}></Cards>
        ))}
      </div>
      <QurbaniTips></QurbaniTips>
      <TopBreed></TopBreed>
    </div>
  );
};

export default AllFetures;
