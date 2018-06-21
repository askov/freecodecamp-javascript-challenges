// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

var myHouse = new House(4);

myHouse instanceof House;
// Add your code below this line
