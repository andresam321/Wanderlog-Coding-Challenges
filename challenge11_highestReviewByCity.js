// highestReviewByCity.js

function highestReviewByCity(reviews) {
    const bestTravelerByCity = {};
  
    reviews.forEach(entry => {
      const [city, traveler, scoreStr] = entry.split(':');
      const score = Number(scoreStr);
  
      if (!bestTravelerByCity[city] || score > bestTravelerByCity[city].score) {
        bestTravelerByCity[city] = { traveler, score };
      }
      // If tie, do nothing (keep the earlier one)
    });
  
    const result = Object.entries(bestTravelerByCity)
      .map(([city, data]) => `${city} ${data.traveler}`);
  
    return result;
  }
  
  // Example usage:
  const reviews = [
    "paris:andres:3",
    "rome:maria:5",
    "paris:maria:4",
    "madrid:andres:2",
    "rome:leif:5",
    "paris:leif:1"
  ];
  console.log(highestReviewByCity(reviews));
  // Output: [ 'paris maria', 'rome maria', 'madrid andres' ]
  