function forEach(arr, fn) {
  //loop through entire array passed in
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr); //execute the call back function for each item
  }
}

function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function(i) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  });
  return newArr;
}

var arr = ["hello", "goodbye"];

function showFirstAndLast(arr) {
  //create var for new strings
  let newString = "";
  //new array
  let newArr = [];
  //loop over array
  arr.forEach(function(string) {
    newArr.push(string[0] + string[string.length - 1]);
  });
  return newArr;
}

function map(arr, fn) {
  // create new array
  var newArr = [];
  //iterate through array
  for (var i = 0; i < arr.length; i++) {
    //run call back on each item in array and push to new array
    newArr.push(fn(arr[i], i, arr));
  }
  //retur the new arr
  return newArr;
}

function doubleValues(arr) {
  return arr.map(funcion(item) {
    return item * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function(item, index) {
    return itme * index;
  });
}

function extractKey(arr, key) {
  return arr.map(function(item) {
    return item[key]; //return the value that corresponds to the key
  });
}

function filter(arr, fn) {
  // create new array
  var newArr = [];
  //interate through
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function filterByValue(arr, key) {
  return arr.filer(function(item) {
    return item[key] !== undefined;
  });
}

function find(arr, search) {
  return arr.filer(function(item) {
    return item === search;
  })[0];
}

function some(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return true;
    }
    return false;
  }
}

function every(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

function hasOddNumber(arr) {
  return arr.some(function(item) {
    return item % 2 !== 0;
  })
}

function hasAZero(num) {
  return num.toString().split('').some(function(item) {
    return val === '0';
  });
}

function extractValue(arr, key) {
  arr.reduce(functiom(acc, nextVal) {
    acc.push(nextVal[key]);
    return acc;
  });
}