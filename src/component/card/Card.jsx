import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Cards = ({cow}) => {

    return (
            <Card className='cursor-pointer'>
                <div>
                    <Image
                    src={cow.img}
                    width={200}
                    height={200}
                    alt={cow.name}
                    />
                </div>
                <div>

                <h2>NAME: {cow.name}</h2>
                <h2>Animal Type: {cow.type}</h2>
                <h2>Breed:{cow.breed}</h2>
                <h2>Price: {cow.price}</h2>
                </div>

            </Card>
    );
};

export default Cards;