// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  return map(array, callback);
}

//Extension 2
function reduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

//Extension 3
function intersection(arrays) {
  const callback = (resultArray, array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (resultArray.indexOf(array[i]) !== -1) {
        result.push(array[i]);
      }
    }
    return result;
  };
  const initialValue = arrays.shift();
  return reduce(arrays, callback, initialValue);
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  const callback = (resultArray, array) => {
    for (let i = 0; i < array.length; i++) {
      if (resultArray.indexOf(array[i]) === -1) {
        resultArray.push(array[i]);
      }
    }
    return resultArray;
  };
  return reduce(arrays, callback, []);
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const map = {};
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(callback(array1[i])) !== -1) {
      map[array1[i]] = array2[array2.indexOf(callback(array1[i]))];
    }
  }
  return map;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const result = {};
  for (let i = 0; i < arrVals.length; i++) {
    const arr = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      arr.push(arrCallbacks[j](arrVals[i]));
    }
    result[arrVals[i]] = arr;
  }
  return result;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//Extension 7
function objectFilter(obj, callback) {
  const result = {};
  for (let e in obj) {
    if (callback(e) === callback(obj[e])) {
      result[e] = obj[e];
    }
  }
  return result;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
