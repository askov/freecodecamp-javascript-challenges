// Goal: Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Add your code below this line

function glideMixin(obj) {
  obj.glide = function() {
    console.log('glide')
  };
}

glideMixin(bird);
glideMixin(boat);
