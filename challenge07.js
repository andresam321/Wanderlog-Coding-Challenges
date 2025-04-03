const travel = [
    "andres:paris",
    "maria:paris",
    "andres:rome",
    "leif:paris",
    "maria:rome",
    "leif:rome"
  ]

  //PAIRS OF TRAVELERS THAT VISITR
  // andres: paris, rome 
  // maria: paris, rome
  // leif: paris, rome

  // FIRST gotta pair the names with current cities

  const pairsOfTravelers = (logs) => {
    const travelPair = {}
    logs.forEach(element => {
        const [traveler, city] = element.split(":")
        console.log(`${traveler} ${city}`)
        if (!travelPair[traveler]){
            travelPair[traveler] = new Set()
        }
        // console.log(travelPair)
        // if(!travelPair[traveler][city]){
        //     travelPair[traveler][city] = 0
        // }
        // travelPair[traveler][city]++;
        travelPair[traveler].add(city)
    });
    console.log(travelPair)
    let count = 0
    const result = []
    const names = Object.keys(travelPair)
    // console.log(names)
    for(let i = 0; i < names.length; i++){
        for(let j = i + 1; j < names.length; j++){
            const a = names[i]
            const b = names[j]
            

            const citiesA = travelPair[a]
            const citiesB = travelPair[b]
            console.log(citiesA,citiesB)

            let sharedCount = 0;
            for (let city of citiesA){
                if(citiesB.has(city)){
                    sharedCount++
                }
            }
        const pair = [a,b].sort().join(",")
        result.push(`${pair} ${sharedCount}`)
        }
    }
    console.log(result)
    return result
  }

  console.log(pairsOfTravelers(travel))