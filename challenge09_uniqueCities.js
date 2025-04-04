const phonePlans = [
    "andres:paris",
    "maria:rome",
    "leif:paris"
  ];
  
  const laptopPlans = [
    "andres:rome",
    "maria:paris",
    "andres:paris"
  ];

//   [
//     "andres 2",
//     "leif 1",
//     "maria 2"
//   ]
  

  //Return an array showing how many unique cities each traveler has planned to visit.

  const uniqueCities = (phone, laptop) => {
    const mergeArrays = [...phone,...laptop]
    const setOne = new Set()
    const objOne = {}
    console.log(mergeArrays)
    mergeArrays.forEach(ele => {
        // console.log(ele)
        const [traveler, city] = ele.split(":")
        // console.log(`${traveler} ${city}`)
        if(!objOne[traveler]){
            objOne[traveler] = new Set()

        }
        objOne[traveler].add(city)
    });
    const rest = []
    for(let key in objOne){
        rest.push(`${key} ${objOne[key].size}`)
    }
    rest.sort()
    return rest
  }


  console.log(uniqueCities(phonePlans, laptopPlans))