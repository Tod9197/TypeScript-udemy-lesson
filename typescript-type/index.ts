let hasValue = true;
let count: number = 13;
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

// console.log(CoffeeSize.TALL);

let anything: any = true;
anything = "hello";
anything = 1;

let banana = "banana";
banana = anything;

let unionType: number | string = 10;
unionType = "hello";
unionType.toUpperCase();

type ClothSize = "small" | "medium" | "large";
const apple = "apple";
let clothSize: ClothSize = "small";

const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "medium",
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function sayHello(): void {
  // console.log("Hello");
  return;
}
// console.log(sayHello());

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = (num) => num * 2;

function dounbleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  // console.log(num * 2);
}
dounbleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
anyInput = "hello";
anyInput = 21;
anyInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
