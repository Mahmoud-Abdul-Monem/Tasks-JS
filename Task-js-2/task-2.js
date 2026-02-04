let price = +prompt("enter the product price")
let quatity = +prompt("enter product quatity")
let coupon = confirm("do you have a coupon")
let priceBeforeVat = price * quatity
console.log("original price is " + priceBeforeVat)
if (coupon == true) {
    let priceAftercoupon = +prompt("enter coupon value")
    let discountValue = (priceBeforeVat * priceAftercoupon) / 100
    priceBeforeVat -= discountValue
    console.log("your discount is " + -discountValue)
    console.log("your price after coupon " + priceBeforeVat)

}
else {
    console.log("no discunt has been added")
    console.log("your price is still " + priceBeforeVat)
}
if (priceBeforeVat >= 1000) {
    console.log("no shipping price")
}
else {
    priceBeforeVat += 60
    console.log("shipping costs " + 60)
    console.log("your price after shipping " + priceBeforeVat)
}

let vat = priceBeforeVat * 0.14
console.log("your vat is " + vat)
console.log("final price is " + (priceBeforeVat + vat))
