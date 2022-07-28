// callback;
//   a function that gets passed to another function
//   to be invoked by that second function


// // higher order function (HOF)
// // a function that accepts another function as an argument

const sayHello = function(name) {
  console.log(`sayHello: hello there ${name}`);
};

const sayHello2 = function(name) {
  console.log("sayHello2 logs:",`hola!! ${name}`);
};

function processor(arg1, callback){
  // does some stuff
  callback(arg1);
}



processor(1,sayHello);
processor('Dora',sayHello2);







// const addTwo = function(num) {
//   console.log(num + 2);
// };

// runMe(sayHello2);






// runMe(addTwo);
