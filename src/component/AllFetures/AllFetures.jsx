import React from 'react';
import Card from '../card/Card';
import Cards from '../card/Card';

const showTopCow = async()=>{
    const res = await fetch("http://localhost:3000//data.json");
    const cows = await res.json()
    const top = cows.slice(0,8)
    console.log(top);
    return top
    
}


const AllFetures = async() => {
    const cows = await showTopCow()
    console.log(cows);
    
    
    return (
        <div>
            <h2>Top Feture</h2>
            <div className='grid grid-cols-4 gap-5 place-items-center'>
                {
                    cows.map(cow=><Cards key={cow.id} cow={cow}></Cards>)
                }
            </div>

        </div>
    );
};

export default AllFetures;