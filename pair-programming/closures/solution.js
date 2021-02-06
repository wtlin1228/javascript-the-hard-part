// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

function createFunction() {
  function hello() {
    console.log('hello');
  }
  return hello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

function createFunctionPrinter(input) {
  function say() {
    console.log(input);
  }
  return say;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  function add(input) {
    return input + x;
  }
  return add;
}

const addByTwo = addByX(2);
// console.log(addByTwo(1)); //should return 3
// console.log(addByTwo(2)); //should return 4
// console.log(addByTwo(3)); //should return 5

const addByThree = addByX(3);
// console.log(addByThree(1)); //should return 4
// console.log(addByThree(2)); //should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); //should return 8
// console.log(addByFour(10)); //should return 14

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let lock = false;
  let result = '';

  function f(input) {
    if (lock) return result;
    else {
      result = func(input);
      lock = true;
      return result;
    }
  }

  return f;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

function after(count, func) {
  function f() {
    count--;
    if (count === 0) {
      func();
    }
  }

  return f;
}

const called = function() {
  console.log('hello');
};
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  function f() {
    setTimeout(func, wait);
  }

  return f;
}

const delayCalled = delay(called, 3000);
// delayCalled();

function rollCall(names) {
  function f() {
    const name = names.shift();
    console.log(name || 'Everyone accounted for');
  }

  return f;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // -> Should log 'Victoria'
rollCaller(); // -> Should log 'Juan'
rollCaller(); // -> Should log 'Ruth'
rollCaller(); // -> Should log 'Everyone accounted for'
