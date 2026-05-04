import Cards from "../card/Card";

const showTopCow = async()=>{
    const res = await fetch("https://qurbanir-hatt.vercel.app/data.json");
    const cows = await res.json()
    const top = cows.slice(0,4)
    console.log(top);
    return top
    
}


const TopBreed = async() => {
    const cows = await showTopCow()
    console.log(cows);
    
    
    return (
        <div id="top-breed" className="py-10">
            <h2 className='text-4xl font-bold text-center my-10'>Top Breed</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
                {
                    cows.map(cow=><Cards key={cow.id}  cow={cow}></Cards>)
                }
            </div>

        </div>
    );
};

export default TopBreed;