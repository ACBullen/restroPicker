//example list of restaurants, with rankings, assuming 3 users

let restOptions = {
  'Good Luck Cafe and Deli': [1, 3, 2],
  'The Grove Yerba Buena': [2, 2, 1],
  'Beanstalk Cafe': [3, 1, 3]
};

function getPowerValues(options) {
  let powerValues = [];
  let n = Object.keys(options).length;
  let value = 1;
  while (n > 0) {
    powerValues.push(value);
    n -= 1;
    value /= 2;
  }
  return powerValues;
}

function assignPowerValues(options) {
  let values = getPowerValues(options);
  let rankTotals = {};
  Object.keys(options).forEach(resto => {
    let n = options[resto].length;
    let total = 0;
    while (n > 0) {
      let rankToBeAdded = options[resto][n-1];
      let valueToBeAdded = values[rankToBeAdded-1];
      total += valueToBeAdded;
      n -= 1;
    }
    rankTotals[resto] = total;
  });
  return rankTotals;
}

// console.log(getPowerValues(restOptions));
console.log(assignPowerValues(restOptions));
