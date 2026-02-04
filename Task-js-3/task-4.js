function currencyExhange() {
    let usd = +prompt("enter USD amount")
    console.log("you have " + usd + " dollars")
    egp = usd * 48
    console.log("you have " + egp + " egyptian pounds")

    let commission = egp * 0.03
    console.log(commission + " has been taken off")
    egp -= commission
    console.log("your money after commission is " + egp)
}