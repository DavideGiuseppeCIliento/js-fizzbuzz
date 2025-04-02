// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?

// -------- CONFIGURAZIONE

// -------- INPUT

// -------- VALIDAZIONE INPUT

// ----------------------------------------- ALGORITMO

for (let i = 1; i <= 100; i++) {
  if (i / 3 === 0 && i / 5 !== 0) {
    console.log("Fizz");
  } else if (i / 3 !== 0 && i / 5 === 0) {
    console.log("Buzz");
  } else if (i / 3 === 0 && i / 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log("i");
  }
}
