// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++)
//   i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") : i % 3 === 0 ? console.log("Fizz") : i % 5 === 0 ? console.log("Buzz") : console.log(i);

for (let i = 1; i <= 100; i++) console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);

// const test = condizione ? valore1 : valore2;
// const test = condizione1 ? valore1: (condizione2 ? valore2 : valore3);

//FARFALLINO

const stringa = prompt("Inserisci una parola");
let finalStringa;

for (let i = 0; i <= stringa.length; i++) {
  stringa[i] === "a"
    ? (finalStringa += "afa")
    : stringa[i] === "e"
    ? (finalStringa += "efe")
    : stringa[i] === "i"
    ? (finalStringa += "ifi")
    : stringa[i] === "o"
    ? (finalStringa += "ofo")
    : stringa[i] === "u"
    ? (finalStringa += "ufu")
    : (finalStringa += stringa[i]);
}
alert(finalStringa);
