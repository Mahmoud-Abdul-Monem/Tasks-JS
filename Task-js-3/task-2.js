function process() {
    let amount = +prompt("enter amount")
    console.log("your amount is " + amount)

    let fee = amount * 0.02
    console.log("your service fee is " + fee)
    amount += fee
    console.log("your amount after fee is " + amount)
    let vat = amount * 0.14
    amount += vat

    console.log("your vat is " + vat)
    console.log("final price is " + amount)
}
function mobileRecharge() {
    process()
}