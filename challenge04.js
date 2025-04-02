// traveler,city,stars
// need to calculate the average rating for each city
// RETURN city avgRating
//sort DESCENDING
// then city name alphabetically if tied


const logs = [
    "andres:paris:4",
    "maria:rome:5",
    "leif:paris:3",
    "andres:rome:4",
    "maria:paris:5"
  ]

  const averageRating = (logs) => {
    const res = {}
    let count = 0
    logs.forEach(ele => {
    const [traveler,city,stars] = ele.split(":")
    const rating = Number(stars)
        if (!res[city]){
            res[city] = []
            }
        res[city].push(rating)
        // console.log(res)
    // console.log(rating)
    // console.log(` city: ${city} ${res[city]}`)
    // count += rating
    // console.log(count)
        
    });
    const results = []
    Object.entries(res).forEach(([city,rating]) => {
       let sum = 0
       for (let r of rating){
        sum += r
       }
    // console.log(sum)
    const avg = (sum / rating.length).toFixed(2)
    // console.log(avg)
    results.push([city, Number(avg)])
});
    // console.log(results)
    results.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    return results.map(([city, avg]) => `${city} ${avg.toFixed(2)}`)
    

  }

  console.log(averageRating(logs));