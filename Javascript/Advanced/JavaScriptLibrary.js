const _ = {
  // applies this function to every value of the array supplied
  map: function(arr, otherFunction) {
    for(let i=0; i<arr.length; i++){
      arr[i] = otherFunction(arr[i]);
    }
  },
  
  // reduces the array to a single value as per the function supplied.  also can accept a value to start with.
  reduce: function(arr, otherFunction, initial) { 
    let start = 0;
    if (!initial){
      initial = arr[0];
      start = 1;
    }
    for (let i=start; i<arr.length; i++) {
      initial = otherFunction(arr[i], initial);
    }
    return initial;
  },

  // returns the first entry in the array that returns true
  find: function(arr, otherFunction) {   
    for (let i=0; i<arr.length; i++){
      if (otherFunction(arr[i])){
        return arr[i];
      }
    }
  },

  // returns a new array of all the values in which the function returns true
  filter: function(arr, otherFunction) { 
    let temp = [];
    for (let i=0; i<arr.length; i++){
      if (otherFunction(arr[i])){
        temp.push(arr[i]);
      }
    }
    return temp;
  },

  // returns a new array of all the values in which the function returns false
  reject: function(arr, otherFunction) { 
    let temp = [];
    for (let i=0; i<arr.length; i++){
      if(!otherFunction(arr[i])) {
        temp.push(arr[i]);
      }
    }
    return temp;
  },
}


let evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

_.map(evens, function(x) { return x * 5; });
console.log(evens);
console.log(_.reduce(evens, function(x, initial) { return x + initial; }));
console.log(_.find(evens, function(x) { return x > 20; }));
console.log(_.filter(evens, function(x) { return x < 20; }));
console.log(_.reject(evens, function(x) { return x < 20; }));