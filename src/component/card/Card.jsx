import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Cards = ({cow}) => {

    return (
            <Card>
                <div>
                    <Image
                    src={cow.img}
                    width={200}
                    height={200}
                    alt='cow.name'
                    />
                </div>
            </Card>
    );
};

export default Cards;