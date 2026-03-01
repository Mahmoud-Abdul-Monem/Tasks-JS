let inchInput = document.querySelector(".inchesInput");
let btn = document.querySelector(".calcBtn");
let result = document.querySelector(".result");
let error = document.querySelector(".error-box");

function clickTocalculate() {

    error.innerText = "";
    result.innerText = "Result will appear here";

    let value = inchInput.value;

    if (value === "") {
        error.innerText = "enter a number";
    } else {
        let meters = value * 0.0254;
        result.innerText = value + " inch = " + meters + " meter";
    }

}