// Code your solution in this file!

const headquarters = 42;

function distanceFromHqInBlocks(pickupLocation) {
  //returns the number of blocks given a value
  let numberOfBlocks;

  if (pickupLocation > 42) {
    numberOfBlocks = pickupLocation - headquarters;
  } else if (pickupLocation < 42) {
    numberOfBlocks = headquarters - pickupLocation;
  }

  return numberOfBlocks;
}

function distanceFromHqInFeet(location) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  let numberOfFeet = distanceFromHqInBlocks(location) * 264;
  return numberOfFeet;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled

  let numberOfBlocks;

  if (start > destination) {
    numberOfBlocks = start - destination;
  } else if (destination > start) {
    numberOfBlocks = destination - start;
  }

  let numberOfFeet = numberOfBlocks * 264;
  return numberOfFeet;
}

// `calculatesFarePrice`: Given the same starting and ending block as the
//   previous test (_hint hint_), return the fare for the customer. The first four
//   hundred feet are free. For a distance between 400 and 2000 feet, the price is
//   2 cents per foot (not including 400, which are free!). Then Scuber charges a
//   flat fare for a distance over 2000 feet and under 2500 feet.
//   Finally, Scuber does not allow any rides over 2500 feet — the function returns
//   `'cannot travel that far'` if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination);
  let cost;

  if (distance <= 400) {
    cost = 0;
  } else if (distance > 400 && distance <= 2000) {
    cost = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    cost = 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }

  return cost;
}
