// longest stay in each city
// returns an array of stings like city traveler days
// sorted by highest number of DAYS (DESCENDING)

// city:traveler:days
const logs = [
    "paris:andres:3",
    "rome:maria:5",
    "paris:maria:4",
    "madrid:andres:2",
    "rome:leif:5",
    "paris:leif:1"
  ]

  const longestStay = (logs) => {
    const trips = {}
    logs.forEach(ele => {
        const [city, traveler, days] = ele.split(":")
        // console.log(`${city} ${traveler} ${days}`)
        if (!trips[city]) {
            // First time we see this city — store it!
            trips[city] = { traveler, days }
          } else if (days > trips[city].days) {
            // Someone stayed longer than the previous record — update it
            trips[city] = { traveler, days }
          }
    });
    // console.log(trips)
    console.log(Object.entries(trips))
    const results = Object.entries(trips)
    .sort((a, b) => b[1].days - a[1].days || a[0].localeCompare(b[0]))
    .map(([city, {traveler, days}]) => `${city} ${traveler} ${days}`)
  }
  


  
console.log(longestStay(logs));