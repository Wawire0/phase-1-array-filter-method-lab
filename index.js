function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }

  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Mike", hometown: "Chicago" },
  ];
  
  console.log(findMatching(drivers, "John")); // Returns [{ name: "John", hometown: "New York" }]
  console.log(fuzzyMatch(drivers, "j")); // Returns [{ name: "John", hometown: "New York" }, { name: "Jane", hometown: "Los Angeles" }]
  console.log(matchName(drivers, "Mike")); // Returns [{ name: "Mike", hometown: "Chicago" }]
