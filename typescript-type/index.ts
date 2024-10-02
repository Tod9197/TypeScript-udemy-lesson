let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello;";
let back: string = `hello`;

const person2 = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

const fruits = ["Apple", "Banana", "Grape", 1];

const book: [string, number, boolean] = ["business", 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

coffee.size = CoffeeSize.TALL;

console.log(CoffeeSize.TALL);
