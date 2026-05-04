 export const tip =async()=>{
    const res = await fetch("https://qurbanir-hatt.vercel.app/data.json")
    const data = await res.json()
    return data
}