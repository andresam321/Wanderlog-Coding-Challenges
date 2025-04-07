// groupItemsBySale.js

function groupItemsBySale(sales) {
    const itemCount = {};
  
    sales.forEach(item => {
      if (!itemCount[item]) {
        itemCount[item] = 0;
      }
      itemCount[item]++;
    });
  
    const result = Object.entries(itemCount)
      .map(([item, count]) => `${item} ${count}`)
      .sort((a, b) => {
        const [itemA, countA] = a.split(' ');
        const [itemB, countB] = b.split(' ');
  
        if (Number(countB) !== Number(countA)) {
          return Number(countB) - Number(countA);
        }
        return itemA.localeCompare(itemB);
      });
  
    return result;
  }
  
  // Example usage:
  const sales = ['apple', 'apple', 'banana', 'orange', 'banana'];
  console.log(groupItemsBySale(sales));
  // Output: [ 'apple 2', 'banana 2', 'orange 1' ]
  