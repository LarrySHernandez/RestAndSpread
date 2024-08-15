// Rest / Spread Operator Exercises
// In this exercise, you’ll refactor some ES5 code into ES2015.
// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

let filterOutOdds2 = (...nums) => nums.filter((num) => num % 2 === 0);


//Find Min

let findMin = (...nums) => nums.reduce((accumulator, currentVal) => accumulator < currentVal? accumulator: currentVal);


// mergeObjects

let mergeObjects = (...obj) => obj.reduce(function(accumulator, currentVal){
    for(let key in currentVal){
        accumulator[key] = currentVal[key];
    }
    return accumulator;
}, {}); 




//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...nums) => arr.concat(nums.map((num) => num * 2));




//Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (items) => {
    let randomNum = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

let addKeyVal = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */

let removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */



let update = (obj, key, val) => ({...obj, [key]: val});
































