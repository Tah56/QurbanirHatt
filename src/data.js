 export const tip =async()=>{
    const res = await fetch("http://localhost:3000/tips-data.json")
    const data = await res.json()
    return data
}