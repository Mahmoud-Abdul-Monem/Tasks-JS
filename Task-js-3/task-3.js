function process() {
    let litersOfFule = +prompt("how many liters of fuel do you want")

    let fuelCost = litersOfFule * 12
    let isCash = confirm("are you paying cash")
    console.log("your main fuel cost is " + fuelCost)
    if (isCash == true) {
        let discount = fuelCost * 0.05
        console.log("your discount is " + discount)
        fuelCost -= discount
        console.log("your fuel cost after discount is  " + fuelCost)

    }
    let vat = fuelCost * 0.14
    fuelCost += vat

    console.log("your vat is " + vat)
    console.log("final price is " + fuelCost)
}

function fuelCost() {
    process()
}