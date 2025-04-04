const countries = [
    "paris:3",
    "rome:5",
    "paris:2",
    "madrid:4"
  ]

  
  const summarizeTrips = (lines) => {
    const tripTotals = {}
    lines.forEach(line => {
        console.log("line12", line)
        const [city, days] = line.split(":")
        console.log(`Parsed -> city: ${city}, days: ${days}`);
        tripTotals[city] = (tripTotals[city] || 0) + Number(days)
        console.log("Updated tripTotals:", tripTotals);
    })
    const result = Object.entries(tripTotals)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([city, total]) => `${city} ${total}`)
    
    console.log("First data:", lines);
    return result
  }

  console.log("Returned:", summarizeTrips(countries));