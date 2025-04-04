entries = [
    "andres:paris",
    "maria:rome",
    "andres:rome",
    "leif:paris",
    "andres:madrid",
    "maria:paris"
  ]


const topTravelers = (logs) => {
    const tripTotals = {}
    logs.forEach(element => {
        const [name, city] = element.split(":")
        // console.log(`Name ${name} city ${city}`)
        if (!tripTotals[name]){
            tripTotals[name] = new Set()

        }
        tripTotals[name].add(city)
        // console.log("line12",tripTotals)
    });
    const results = Object.entries(tripTotals).map(([name, cities]) => `${name} ${cities.size}`)
    console.log(results)
    return results
}

console.log(topTravelers(entries));
