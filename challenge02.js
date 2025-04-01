logs = [
    "paris:andres",
    "rome:maria",
    "paris:maria",
    "madrid:andres",
    "paris:andres",
    "rome:leif"
  ]
  
const leaderboard = (logs) => {
    const totals = {}
    logs.forEach(ele => {
        const [city, traveler] = ele.split(":")
        console.log(`city: ${city} traveler: ${traveler}`)
        
        if (!totals[city]){
            totals[city] = new Set()
        }
        totals[city].add(traveler)
        // console.log("line20",totals)
    });
    const results = Object.entries(totals).map(([city, traveler]) => `${city} ${traveler.size}`)
       console.log("line23",results)
    return results
}
    

console.log(leaderboard(logs));