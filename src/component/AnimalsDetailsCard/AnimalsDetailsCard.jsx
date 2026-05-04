import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalsDetailsCard = ({data}) => {
    return (
        <div>
             <Card key={data.id}  className="cursor-pointer w-70 md:w-96  hover:scale-110 duration-400 ease-in-out">
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
        </div>
    );
};

export default AnimalsDetailsCard;