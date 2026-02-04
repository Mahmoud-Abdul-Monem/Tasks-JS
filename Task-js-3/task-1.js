function examGrader() {
    let mainDegree = +prompt("enter your grade")
    let attendance = confirm("did you attend the last lecture")
    if (attendance == true) {
        mainDegree += 3;
    }
    if (mainDegree > 0 && mainDegree < 97) {
        if (mainDegree >= 50 && mainDegree < 65) {
            console.log(`your degree is ${mainDegree} and your rate is " D "`)
        }
        else if (mainDegree < 50) {
            console.log(`you are a failure and your degree is ${mainDegree} and your rate is  " F "`)
        }
        else if (mainDegree >= 65 && mainDegree < 75) {
            console.log(`your degree is ${mainDegree} and your rate is " C "`)
        }
        else if (mainDegree >= 75 && mainDegree < 85) {
            console.log(`your degree is ${mainDegree} and your rate is " B "`)
        }
        else if (mainDegree >= 85) {
            console.log(`your degree is ${mainDegree} and your rate is " A "`)
        }
    }

    else {
        let rest = 100 - mainDegree
        mainDegree += rest
        console.log(`your degree is ${mainDegree} and your rate is " A "`)

    }

}