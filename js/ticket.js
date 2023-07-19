// alert("Houston siamo collegati");

// Kilometers to travel

const numKm = parseInt(prompt("Quanti Kilometri dovrai percorrere?"));
console.log(numKm);

// Age of passenger

const age = parseInt(prompt("Quanti hanni hai?"));
console.log(age);

// Cost per kilometer

const costKm = 0.21;

// Calculated Price

let totalCost = numKm * costKm;
console.log(totalCost);

// Formula for result

let printedCost = "Il costo totale è di " + totalCost + "€";
console.log(printedCost);

if (isNaN(numKm) || isNaN(age)) {
  alert("Inserisci solo valori numeri, grazie!");
} else {
}
