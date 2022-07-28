// const animalNoises = ['Oink', 'Moo', 'Meow', 'Bark', 'Oof', 'Nehhhh', 'Boww', 'Haaay', 'Quack', 'caw', 'neigh', 'woof', 'cluck', 'doh', 'hisssss', 'wanwan', 'jar'];

// const forEach = (array, action) => {
//   console.log('this is our version of forEach');
//   for (const element of array) {
//     action(element);
//   }
// };

// // animalNoises.forEach((animalNoise) => {
// //   console.log(`the animal says "${animalNoise}"`);
// // });

// const thingToDo = animalNoise => console.log(`the animal says (our way) "${animalNoise}"`);

// // forEach(animalNoises, thingToDo);

// forEach(animalNoises, animalNoise => console.log(`the animal says (our way) "${animalNoise}"`));


// animalNoises.forEach(whatTheAnimalDoes);



const func1 = (data) => {
  console.log(`Ola ${data}`);
};

const func2 = (data) => {
  console.log(`Hello ${data}`);
};

const func3 = (data) => {
  console.log(`Bonjour ${data}`);
};

const arrayOfFunctions = [func1, func2, func3];


function processor(listOfActions, data){
  for (let ii = 0; ii < listOfActions.length; ii++){
    listOfActions[ii](data);
  }
}

processor(arrayOfFunctions, 'Elise!!');
