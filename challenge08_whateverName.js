const logs = [
    "andres:paris:4",
    "maria:rome:2",
    "andres:rome:3",
    "maria:paris:1",
    "leif:paris:2"
  ]

// output [
//     "paris 7",
//     "rome 5"
//   ]
  
  
  //traveler:city:stays
// return the number of nights booked in each city 

  const bookedCities = (logs) => {
    const cityCount = {}
    const result = []
    logs.forEach(element => {
        const [traveler, city, stays] = element.split(":")
        // console.log(`${traveler} ${city} ${stays}`)
        // console.log(cityCount[city])
            if(!cityCount[city]){
                cityCount[city] = 0
            }
        cityCount[city] += Number(stays)
        // console.log(cityCount)
        // console.log(Object.entries(cityCount))
        
    })
    const arr = Object.entries(cityCount)
    for(let [city, total] of arr){
        console.log(city, total)
        result.push(`${city} ${total}`)
    }
    console.log(result)
    return result
  }

console.log(bookedCities(logs))