"use strict";
let hasValue = true;
let count = 13;
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello;";
let back = `hello`;
const person2 = {
    name: {
        first: "Jack",
        last: "Smith",
    },
    age: 21,
};
const fruits = ["Apple", "Banana", "Grape", 1];
const book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.TALL;
// console.log(CoffeeSize.TALL);
let anything = true;
anything = "hello";
anything = 1;
let banana = "banana";
banana = anything;
let unionType = 10;
unionType = "hello";
unionType.toUpperCase();
const apple = "apple";
let clothSize = "small";
const cloth = {
    color: "white",
    size: "medium",
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    // console.log("Hello");
    return;
}
// console.log(sayHello());
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
function dounbleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    // console.log(num * 2);
}
dounbleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
anyInput = "hello";
anyInput = 21;
anyInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error"));
