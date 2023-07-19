// alert("Houston siamo collegati");

// Kilometers to travel

const numKm = parseInt(prompt("Quanti Kilometri dovrai percorrere?"));
console.log(numKm);

// Age of passenger

const age = parseInt(prompt("Quanti hanni hai?"));
console.log(age);

// Cost per kilometer

const costKm = 0.21;

// discounts

const discountMinor = 20;

const discountSenior = 40;

// Calculated Price

let totalCost = numKm * costKm;
console.log(totalCost);

if (isNaN(numKm) || isNaN(age)) {
  alert("Inserisci solo valori numeri, grazie!");
} else {
  // Age < 18
  if (age < 18) {
    totalCost = totalCost - (totalCost * discountMinor) / 100;
  }
  //   age >= 65
  else if (age >= 65) {
    totalCost = totalCost - (totalCost * discountSenior) / 100;
  }

  // Decimal Price
  let finalCost = totalCost.toFixed(2);
  // Formula for printed result
  let printedCost = "Il costo totale è di " + finalCost + "€";
  console.log(printedCost);
}
