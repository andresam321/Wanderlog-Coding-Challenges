// most freq des per traveler  
const travelers = [ 
    
    "andres:paris", 
    "maria:rome", 
    "andres:rome",
    "andres:paris", 
    "maria:paris", 
    "maria:rome" 
]
// expected output [
// "andres paris 2",
// "maria rome 2"
//]

const freqDestinationTraveler = (logs) => {
    const travel = {}
 
    // console.log(logs)
    logs.forEach(element => {
        const [traveler, city] = element.split(":")
        console.log(traveler, city)
        
        if (!travel[traveler]){
            travel[traveler] = {}
        }

        if (!travel[traveler][city]) {
            travel[traveler][city] = 0
        }
      travel[traveler][city]++;
    });
    const results = []
    const total_visits = Object.entries(travel)
    console.log(total_visits)
    for(let traveler in travel){
        let maxCity = '';
        let maxCount = 0;
        console.log(traveler)
        const cities = travel[traveler]
        console.log(cities)
        for (let city in cities){
            const count = cities[city]
            console.log(count)

            if (count > maxCount || (count === maxCount && city < maxCity)){
                maxCity = city
                maxCount = count
            }
        }
        results.push(`${traveler} ${maxCity} ${maxCount}`)
    }
    console.log(results)
}

console.log(freqDestinationTraveler(travelers))