let total = +prompt("ادخل قيمة الميراث")

if (total > 0) {
    let wifeStatus = confirm("is your wife alive ?")
    if (wifeStatus == true) {
        let totalAfterWife = total / 8
        console.log("the wife's money is " + totalAfterWife)
        let newTotal = total - totalAfterWife

        let numOfMales = +prompt("How many males does he has")
        let numOfFemales = +prompt("How many females does he has")
        let totalOfChildrens = (numOfMales * 2) + numOfFemales
        let everyOneMoney = newTotal / totalOfChildrens

        let allMalesRights = everyOneMoney * (numOfMales * 2)
        let allFemalesRights = everyOneMoney * numOfFemales
        console.log(allMalesRights + " نصيب كل الاولاد هو")
        console.log(allFemalesRights + " نصيب كل الاناث هو ")
        console.log((allMalesRights / numOfMales) + " نصيب كل ولد هو")
        console.log((allFemalesRights / numOfFemales) + " نصيب كل بنت هو ")

    }
    else {
        console.log("الزوجه يرحمها الله ")
        let numOfMales = +prompt("How many males does he has")
        let numOfFemales = +prompt("How many females does he has")
        let totalOfChildrens = (numOfMales * 2) + numOfFemales
        let everyOneMoney = total / totalOfChildrens

        let allMalesRights = everyOneMoney * (numOfMales * 2)
        let allFemalesRights = everyOneMoney * numOfFemales
        console.log(allMalesRights + " نصيب كل الاولاد هو")
        console.log(allFemalesRights + " نصيب كل الاناث هو ")
        console.log((allMalesRights / numOfMales) + " نصيب كل ولد هو")
        console.log((allFemalesRights / numOfFemales) + " نصيب كل بنت هو ")
    }
}

else {
    console.log("ليس هنالك اى ورث ليقسم")
}
