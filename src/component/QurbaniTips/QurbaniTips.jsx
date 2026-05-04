import { tip } from "@/data";
import { Card } from "@heroui/react";
import React from "react";

const QurbaniTips = async () => {
  const tips = await tip();
  console.log(tips);

  return (
    <div className="py-20 text-center space-y-10  shadow-2xl my-20 rounded-2xl container mx-auto place-items-center ">

        <h2 id="qurbani-tips" className="text-4xl font-bold border-b border-red-50 container mx-auto ">Qurbani tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10  ">
        {tips.map((data) => {
          return (
            <Card key={data.id} className="w-70" variant="default ">
              <Card.Header className="space-y-5 animate__animated  animate__fadeIn">
                <h2 className="w-10 h-10 rounded-full text-center items-center content-center border shadow-2xl">{data.id}</h2>
                <Card.Title className="text-xl">{data.title}</Card.Title>
                <Card.Description>{data.description}</Card.Description>
              </Card.Header>
              
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default QurbaniTips;
