let iphones = [
    { name: "iphone12", price: 210, amount: 8 },
    { name: "iphone11", price: 150, amount: 20 },
    { name: "iphonexs", price: 125, amount: 50 },
];

function show() {
    console.clear();
    console.table(iphones);
}

function add() {
    let newIPhone = {
        name: prompt("enter product name"),
        price: +prompt("enter product price"),
        amount: +prompt("enter product amount"),
    };
    iphones.push(newIPhone);
    show();
}

function remove() {
    let indexToRemove = +prompt("enter index of phone to be deleted");
    iphones.splice(indexToRemove, 1);
    show();
}

function updateName() {
    let indexToEdit = +prompt("enter index of phone to be edited");
    let productName = prompt("enter the new name");
    iphones[indexToEdit].name = productName;
    show();
}

function updatePrice() {
    let indexToEdit = +prompt("enter index of phone price to be edited");
    let productPrice = +prompt("enter the new price");
    iphones[indexToEdit].price = productPrice;
    show();
}

function updateamount() {
    let indexToEdit = +prompt("enter  index of phone amount to be edited");
    let productAmount = +prompt("enter the new amount");
    iphones[indexToEdit].amount = productAmount;
    show();
}