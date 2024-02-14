/*

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

*/

/* Write an ES2015 Version */

const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

// console.log(filterOutOdds(3, 5, 6, 10, 21, 34));

//Find Min

const findMin = (...numbers) => {
  const numsArray = [...numbers];
  return Math.min(...numsArray);
};

// console.log(findMin(3, 5, 6, 10, 21, 34));

const mergeObjects = (objOne, objTwo) => {
  return { ...objOne, ...objTwo };
};

// console.log(mergeObjects({name: "Robyn"}, {hobby: "coding"}));

const doubleAndReturnArgs = (arr, ...nums) => {
  const doubles = nums.map((n) => n * 2);

  return [...arr, ...doubles];
};

// console.log(doubleAndReturnArgs([1,2,3],4,4))

//Slice and Dice

//removes random item from array copy

const removeRandom = (items) => {
  const itemsArray = [...items];
  const random = Math.floor(Math.random() * itemsArray.length) - 1;
  itemsArray.splice(random, 1);
  return itemsArray;
};

// console.log(removeRandom([ 1, 2, 3, 8, 8 ]));

//concats arrays

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// console.log(extend([2, 4, 6, 8], [5, 13, 9, 10]));

//Adds key and value to copy of object

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

// console.log(addKeyVal({name: "Robyn", hobby: "coding"}, "children", true));

//remove matching key from copy of object

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];

  return newObj;
};

//combines two objects in to a new object

const combine = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};

//update copy of object with key and value taken from arguments
const update = (obj, key, val) => {
  const newObj = { ...obj };
  return (newObj[key] = val);
};
