// Goal: Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  // This is from example. But it is antipattern, isn't it? We can just "return candidate.constructor === Dog"
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
