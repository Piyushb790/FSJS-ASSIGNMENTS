let a = "Hello Js";
let b = true;
let c = undefined;
let d = null;

console.log(a, "DataType  " + typeof a);
console.log(b, "DataType  " + typeof b);
console.log(c, "DataType  " + typeof c);
console.log(d, "DataType  " + typeof d);

let firstName = "Piyuh";
let lastName = "Bhatt";
let maritalStatus = "Single";
let country = "India";
let age = 23;

console.log(
  `My first name is ${firstName} and my last name is ${lastName} and my marital status is ${maritalStatus} and the country that i live in is ${country} and currently i am ${age}`
);

let a = "omkarananda saraswati nilayam";
let result = a.toUpperCase();
console.log(result);

let a = "Humpty Dumpty sat on a wall";
let result = a.includes("sat");
console.log(result);

let a = "Hello Hitesh Sir how are you doing";
let result = a.split("");
console.log(result);

let a = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let result = a.split(" ");
console.log(result, Array.isArray(result));
 In Javascript array are considered as the object

let a =
  "Javascript is the most used language on the web Javascript is loved my everyone";

let result = a.lastIndexOf("Javascript");
console.log(result);

let a ="You cannot end a sentence with because because because is a conjunction";
let result = a.indexOf("because");
console.log(result);

let a = " Nature is Metal ";
console.log(a.length);
let result = a.trim("");
console.log(result, result.length);

let a = 10;
let b = 10;
let c = 10;
console.log(a == b);
console.log(b == a);
console.log(c == a);

console.log(5 > 7);
console.log(true != true);
let x = 5;
console.log(x === undefined);

console.log(4 > 3);  true
console.log(4 >= 3); true
console.log(4 < 3);  false
console.log(4 <= 3); false
console.log(4 == 4); true
console.log(4 === 4); true
console.log(4 != 4); false
console.log(4 !== 4); false
console.log(4 != "4");  false
console.log(4 == "4"); true
console.log(4 === "4"); true

let a = "python";
let b = "jargon";
console.log(a.length !== b.length);

let d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());

let oldDate = new Date(1970 - 01 - 01);

let diffDate = d - oldDate;
console.log(diffDate, "seconds");

let a = prompt("Enter the base");
let b = prompt("Enter the Height");
let area = a * b;
alert("Area of a triangle is " + area);

let y1 = 2;
let x1 = 2;

let y2 = 10;
let x2 = 6;

let m = (y2 - y1) / (x2 - x1);
console.log("Slope is " + m);

const equation = (x) => 2 * x - 2;

const x_intercept = equation(0);

const y_intercept = equation(0);

console.log("0 " + x_intercept);
console.log(y_intercept + " 0");

const slope = (-2 - 0) / (0 - -2);
console.log(slope);

const pi = 3.14;
let r = prompt("Enter the radius of the circle");
let area = pi * r * r;
let circumference = 2 * pi * r;
alert("Area of circle is " + area);
alert("Area of circumference is " + circumference);

let d = new Date();
let result1 = d.toISOString().replace("T", " ").substring(0, 16);
console.log(result1.length);
console.log(result1);

console.log(
  `${d.getDate()}-${
    d.getMonth() + 1
  }-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
);
console.log(
  `${d.getDate()}/${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
);

let age = prompt("Enter the age");
let number = 18 - age;
age >= 18
  ? alert("you are old enought to drive")
  : alert("wait for " + number + " years to turn 18");

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));
console.log(isEven(8));

let grade = 40;
switch (true) { //The expression in parentheses to be evaluated is true in this example. This means that any case that evaluates to true will be a match.
  case grade >= 80 && grade <= 100:
    console.log("A");
    break;
  case grade >= 70 && grade <= 79:
    console.log("B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("D");
    break;
  case grade >= 40 && grade <= 49:
    console.log("Fail");
    break;

  default:
    console.log("no match case");
}

let season;
let month = "October";

if (month == "september" || month == "October" || month == "November") {
  season = " Autumn";
} else if (month == "December" || month == "January" || month == "February") {
  season = " Winter";
} else if (month == "March" || month == "April" || month == "May") {
  season = " Spring";
} else if (month == "June" || month == "July" || month == "August") {
  season = " Summer";
} else {
  console.log("No match found");
}

console.log(`Month is ${month} and season is ${season}`);

function noDaysInMonth(month) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    return 31;
  } else if (month == 2) {
    return 28;
  } else {
    return 30;
  }
}

console.log(noDaysInMonth(2) + " days");

let year = 2016;
function noDaysInMonth(month) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    return 31;
  } else if (
    month == 2 &&
    (year % 4 === 0 || (year % 100 === 0 && year % 400 == 0))
  ) {
    return 29;
  } else if (month == 2) {
    return 28;
  } else {
    return 30;
  }
}

this is not the case in the Gregorian calendar, where years that are divisible by 4 OR by both 100 and 400 are considered leap years.

console.log(noDaysInMonth(2) + " days");

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart.splice(3, 1, "GreenTea");
console.log(shoppingCart);

let a = ["India", "America", "Singapore", "Taiwan"];
console.log(a.includes("ETHIOPIA"));
a.push("ETHIOPIA");
console.log(a);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let max = Math.max.apply(Math, ages);
let min = Math.min.apply(Math, ages);
console.log("Maximum number is " + max);
console.log("Minimum number is " + min);

function removeDuplicates(ages) {
  return [...new Set(ages)];
}
console.log(removeDuplicates(ages));
console.log(ages);

function median(ages) {
  const middle = Math.floor(ages.length / 2);

  if (ages.length % 2 === 0) {
    return ages[middle - 1] + ages[middle] / 2;
  }
  return ages[middle];
}
console.log(median(ages));
let average = removeDuplicates(ages);
let Totalaverage = Math.floor(average.reduce((a, b) => a + b) / 6);
console.log(Totalaverage);

let range = max - min;
console.log(range);

let value1 = min - Totalaverage;
let value2 = max - Totalaverage;
console.log(Math.abs(value1));
console.log(Math.abs(value2));

for (let i = 0; i <= 100; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) console.log(i);
}

let odd = [];
let even = [];
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even.push(i);
  }
  if (i % 2 == 1) {
    odd.push(i);
  }
}
console.log(odd);
console.log(even);

const randomHexNumber = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
};
console.log(randomHexNumber());
