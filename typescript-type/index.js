var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello;";
var back = "hello";
var person2 = {
    name: {
        first: "Jack",
        last: "Smith",
    },
    age: 21,
};
var fruits = ["Apple", "Banana", "Grape", 1];
var book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.TALL;
console.log(CoffeeSize.TALL);
