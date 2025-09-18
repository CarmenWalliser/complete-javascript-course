"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive !");

//die woorde bestaan klaar vir iets anders
// const interface = "Audio";
// const private = 534;

//functions
// function logger() {
//   console.log("My name is Jonas");
// }
// //calling, running, invoking a function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges `;
//   return juice;
// }

// const appleOranjeJuice = fruitProcessor(5, 0);
// console.log(appleOranjeJuice);

// //function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

//calling function in other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePiecces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePiecces} apples pieces and ${orangePieces} oranges pieces `;
  return juice;
}

console.log(fruitProcessor(2, 3));
