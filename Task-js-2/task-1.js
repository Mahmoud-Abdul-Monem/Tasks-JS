let gymCostPerMonth = 350;
let numberOfMonths = +prompt("How many months do you want?");
let cost = numberOfMonths * gymCostPerMonth;
let personalTraining = confirm("Do you want a personal trainer?");

let priceAfterDiscount = cost;

if (numberOfMonths >= 6 && numberOfMonths < 12) {
    priceAfterDiscount = cost - (cost * 0.10);
    console.log("10% discount applied:", + (cost - priceAfterDiscount));
} else if (numberOfMonths >= 12) {
    priceAfterDiscount = cost - (cost * 0.15);
    console.log("15% discount applied:", + (cost - priceAfterDiscount));
} else {
    console.log("No discount applied");
}

if (personalTraining == true) {
    priceAfterDiscount += 200;
    console.log("Personal trainer cost added: 200");
} else {
    console.log("No personal trainer");
}

let vat = priceAfterDiscount + (priceAfterDiscount * 0.14);

console.log("Original cost:", cost);
console.log("Final cost after discount, trainer, and VAT:", vat);

