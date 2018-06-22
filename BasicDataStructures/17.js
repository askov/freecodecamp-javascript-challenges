// Goal: We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  let names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  for (let i = 0; i < names.length; i++) {
    if (!obj.hasOwnProperty(names[i])) return false;
  }
  return true;
  // change code above this line
}

console.log(isEveryoneHere(users));
