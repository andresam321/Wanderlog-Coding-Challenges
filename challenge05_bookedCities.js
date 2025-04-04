const logs = [
    "andres:paris",
    "andres:rome",
    "maria:rome",
    "maria:paris",
    "leif:rome",
    "leif:paris",
    "maria:madrid",
    "leif:madrid"
  ]
   
  const findSharedCities = (logs) => {
    const travelMap = {}; // Step 1: Store traveler -> Set of cities
  
    // Build traveler map
    logs.forEach(log => {
      const [traveler, city] = log.split(":");
  
      // If traveler is new, start with an empty Set
      if (!travelMap[traveler]) {
        travelMap[traveler] = new Set();
      }
  
      // Add this city to the traveler's Set
      travelMap[traveler].add(city);
    });
  
    const names = Object.keys(travelMap); // Get all traveler names
    const results = [];
  
    // Step 2: Compare every unique pair of travelers
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        const name1 = names[i];
        const name2 = names[j];
  
        const cities1 = travelMap[name1];
        const cities2 = travelMap[name2];
        console.log(cities1 ,cities2)
  
        let shared = 0;
  
        // Step 3: Count common cities between these two
        for (let city of cities1) {
          if (cities2.has(city)) {
            shared++;
          }
        }
  
        // Only add pairs with at least 1 shared city
        if (shared > 0) {
          results.push(`${name1},${name2} ${shared}`);
        }
      }
    }
  
    return results;
  };
  

console.log(findSharedCities(logs))