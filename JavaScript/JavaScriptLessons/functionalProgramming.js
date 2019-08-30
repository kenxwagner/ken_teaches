
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

Add your code below this line

const tea4DevTeam = getTea(40); // :(

// Add your code above this line

console.log(tea4DevTeam);