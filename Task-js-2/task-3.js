let usage = +prompt("enter your electricity usage")
let optional = confirm("optional service fee 5 EGP")
let billCost = 0
if (usage > 0) {
    if (usage <= 100) {
        billCost = 0.75 * usage
        console.log("your bill is " + billCost)
    }
    if (usage > 100) {
        let firstPart = (usage - 100) * 1.20
        // firstPart *= 1.20
        billCost = firstPart + 75
        console.log("first 100KW price is " + 75)
        console.log("The usage rest price is " + firstPart)
        console.log("the full usage price " + billCost)

    }
    if (optional == true) {
        billCost += 5
        console.log("fee is 5EGP")
        console.log("price after fee is" + billCost)
    }
}

else {
    console.log("no electricity bill")
}

let vat = billCost * 0.14
console.log("your vat is " + vat)
console.log("final price is " + (billCost + vat))

