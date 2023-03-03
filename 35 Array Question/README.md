# Solutions

1.  Create a variable.js file and declare
    variables and assign string, boolean, undefined and null data types,
    Display all the value with there type.

### Solution

```javascript
let a = "Hello Js";
let b = true;
let c = undefined;
let d = null;

console.log(a, "DataType  " + typeof a);
console.log(b, "DataType  " + typeof b);
console.log(c, "DataType  " + typeof c);
console.log(d, "DataType  " + typeof d);
```

2.  Declare variables to store your first name, last name, marital
    status, country and age and display them using interploation method.

### Solution

```javascript
let firstName = "Piyuh";
let lastName = "Bhatt";
let maritalStatus = "Single";
let country = "India";
let age = 23;

console.log(
  `My first name is ${firstName} and my last name is ${lastName} and my marital status is ${maritalStatus} and the country that i live in is ${country} and currently i am ${age}`
);
```

3.  Decalre a varibale and assign value to it and change all the string
    characters to capital letters using toUpperCase() method.

### Solution

```javascript
let a = "omkarananda saraswati nilayam";
let result = a.toUpperCase();
console.log(result);
```

4.  Check if the string contains a word Script using includes() method.

### Solution

```javascript
let a = "Humpty Dumpty sat on a wall";
let result = a.includes("sat");
console.log(result);
```

5.  Split the string into an array using split() method

### Solution

```javascript
let a = "Hello Hitesh Sir how are you doing";
let result = a.split("");
console.log(result);
```

6.  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the
    string at the comma and change it to an array.

### Solution

```javascript

```

7.  Use lastIndexOf to determine the position of the last occurrence of
    a script.

### Solution

```javascript
let a = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let result = a.split(" ");
console.log(result, Array.isArray(result));
// In Javascript array are considered as the object
```

8.  Use search to find the position of the first occurrence of the word
    because in the following sentence:'You cannot end a sentence with
    because because because is a conjunction'.

### Solution

```javascript
let a =
  "Javascript is the most used language on the web Javascript is loved my everyone";

let result = a.lastIndexOf("Javascript");
console.log(result);
```

9.  Use trim() to remove any trailing whitespace at the beginning and
    the end of a string.

### Solution

```javascript
let a = " Nature is Metal ";
console.log(a.length);
let result = a.trim("");
console.log(result, result.length);
```

10. Boolean value is either true or false.

    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.

### Solution

```javascript
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
```

11. Figure out the result of the following comparison expression first
    without using console.log(). After you decide the result confirm it
    using console.log()

    - 4 > 3
    - 4 >= 3
    - 4 \< 3
    - 4 \<= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison
      statement.

### Solution

```javascript
console.log(4 > 3);
true;
console.log(4 >= 3);
true;
console.log(4 < 3);
false;
console.log(4 <= 3);
false;
console.log(4 == 4);
true;
console.log(4 === 4);
true;
console.log(4 != 4);
false;
console.log(4 !== 4);
false;
console.log(4 != "4");
false;
console.log(4 == "4");
true;
console.log(4 === "4");
true;

let a = "python";
let b = "jargon";
console.log(a.length !== b.length);
```

12. Use the Date object to do the following activities

    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to
      now.

### Solution

```javascript
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
```

13. Write a script that prompt the user to enter base and height of the
    triangle and calculate an area of a triangle (area = 0.5 x b x h).

### Solution

```javascript
let a = prompt("Enter the base");
let b = prompt("Enter the Height");
let area = a * b;
alert("Area of a triangle is " + area);
```

14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2)
    and point(6,10)

### Solution

```javascript
let y1 = 2;
let x1 = 2;

let y2 = 10;
let x2 = 6;

let m = (y2 - y1) / (x2 - x1);
console.log("Slope is " + m);
```

15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

### Solution

```javascript
const equation = (x) => 2 * x - 2;

const x_intercept = equation(0);

const y_intercept = equation(0);

console.log("0 " + x_intercept);
console.log(y_intercept + " 0");

const slope = (-2 - 0) / (0 - -2);
console.log(slope);
```

16. Get radius using prompt and calculate the area of a circle (area =
    pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi =
    3.14.

### Solution

```javascript
const pi = 3.14;
let r = prompt("Enter the radius of the circle");
let area = pi * r * r;
let circumference = 2 * pi * r;
alert("Area of circle is " + area);
alert("Area of circumference is " + circumference);
```

17. Create a human readable time format using the Date time object

    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

### Solution

```javascript
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
```

18. Get user input using prompt("Enter your age:"). If user is 18 or
    older , give feedback:'You are old enough to drive' but if not 18
    give another feedback stating to wait for the number of years he
    needs to turn 18.

### Solution

```javascript
let age = prompt("Enter the age");
let number = 18 - age;
age >= 18
  ? alert("you are old enought to drive")
  : alert("wait for " + number + " years to turn 18");
```

19. Even numbers are divisible by 2 and the remainder is zero. How do
    you check, if a number is even or not using JavaScript?

### Solution

```javascript
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));
console.log(isEven(8));
```

20. Write a code which can give grades to students according to theirs
    scores:

    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

### Solution

```javascript
let grade = 40;
switch (
  true //The expression in parentheses to be evaluated is true in this example. This means that any case that evaluates to true will be a match.
) {
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
```

21. Check if the season is Autumn, Winter, Spring or Summer. If the user
    input is :

    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

### Solution

```javascript
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
```

22. Write a program which tells the number of days in a month.

### Solution

```javascript
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
```

23. Write a program which tells the number of days in a month, now
    consider leap year.

### Solution

```javascript
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

//his is not the case in the Gregorian calendar, where years that are divisible by 4 OR by both 100 and 400 are considered leap years.

console.log(noDaysInMonth(2) + " days");
```

24. Create a separate countries.js file and store the countries array in
    to this file, create a separate file web_techs.js and store the
    webTechs array in to this file. Access both file in main.js file

### Solution

```javascript
//Answer inside solution folder check file
```

25. In the following shopping cart add, remove, edit items => const
    shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    - add 'Meat' in the beginning of your shopping cart if it has not
      been already added
    - add Sugar at the end of you shopping cart if it has not been
      already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'

### Solution

```javascript
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart.splice(3, 1, "GreenTea");
console.log(shoppingCart);
```

26. In countries array check if 'Ethiopia' exists in the array if it
    exists print 'ETHIOPIA'. If it does not exist add to the countries
    list.

### Solution

```javascript
let a = ["India", "America", "Singapore", "Taiwan"];
console.log(a.includes("ETHIOPIA"));
a.push("ETHIOPIA");
console.log(a);
```

27. The following is an array of 10 students ages: => const ages =
    [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

        -   Sort the array and find the min and max age
        -   Find the median age(one middle item or two middle items divided
            by two)
        -   Find the average age(all items divided by number of items)
        -   Find the range of the ages(max minus min)
        -   Compare the value of (min - average) and (max - average), use
            abs() method

### Solution

```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let max = Math.max.apply(Math, ages);
let min = Math.min.apply(Math, ages);
console.log("Maximum number is " + max);
console.log("Minimum number is " + min);
```

```javascript
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
```

```javascript
let average = removeDuplicates(ages);
let Totalaverage = Math.floor(average.reduce((a, b) => a + b) / 6);
console.log(Totalaverage);
```

```javascript
let range = max - min;
console.log(range);
```

```javascript
let value1 = min - Totalaverage;
let value2 = max - Totalaverage;
console.log(Math.abs(value1));
console.log(Math.abs(value2));
```

28. Use for loop to iterate from 0 to 100 and print only prime numbers

### Solution

```javascript
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
```

29. Use for loop to iterate from 0 to 100 and print the sum of all evens
    and the sum of all odds.

### Solution

```javascript
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
```

30. Write a script which generates a random hexadecimal number.

### Solution

```javascript
const randomHexNumber = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
};
console.log(randomHexNumber());
```

31. Sort the webTechs array and mernStack array // countries Array :
    https://gist.github.com/incredimike/1469814

### Solution

```javascript
skills = [
  "SEO",
  "Social Media Platforms",
  "Twitter",
  "Web Analytics",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Algorithms",
  "Analytical Skills",
  "Big Data",
  "Calculating",
  "Compiling Statistics",
  "Data Analytics",
  "SEO",
  "Social Media Platforms",
  "Twitter",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Research",
  "Subject Matter Experts (SMEs)",
  "Technical Documentation",
  "Web Analytics",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Research",
  "Subject Matter Experts (SMEs)",
  "Technical Documentation",
];

console.log(skills.sort());
```

32. Array Questions

    - Extract all the countries contain the word 'land' from the
      countries array and print it as array
    - Find the country containing the hightest number of characters in
      the countries array
    - Extract all the countries contain the word 'land' from the
      countries array and print it as array
    - Extract all the countries containing only four characters from
      the countries array and print it as array
    - Extract all the countries containing two or more words from the
      countries array and print it as array
    - Reverse the countries array and capitalize each country and
      stored it as an array

### Solution

```javascript
var country_list = [
  "Russia",
  "Rwanda",
  "Saint Pierre  ",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Tajikistan",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Zambia",
  "Zimbabwe",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Reunion",
  "Romania",
  "Guyana",
  "Haiti",
  "Honduras",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Zambia",
  "Zimbabwe",
];

function landCountries(keyword) {
  if (keyword == "land") {
    let result = country_list.filter((country) => country.endsWith("land"));
    console.log(result);
    return result;
  }
}
landCountries("land");
```

```javascript
let longestString = "";
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].length > longestString.length) {
    longestString = country_list[i];
  }
}

console.log("longest string in this array is ", longestString);
```

```javascript
let fourLength = [];
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].length === 4) {
    fourLength.push(country_list[i]);
  }
}

console.log(fourLength);
```

```javascript
const moreWords = [];
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].split(" ").length >= 2) {
    moreWords.push(country_list[i]);
  }
}

console.log(moreWords);
```

```javascript
const ReversedCountries = country_list.reverse();

const capitalizedCountries = [];
for (i = 0; i < ReversedCountries.length; i++) {
  capitalizedCountries.push(ReversedCountries[i].toUpperCase());
}
console.log(capitalizedCountries);
```

33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg /
    (height x height) in m2. Write a function which calculates bmi. BMI
    is used to broadly define different weight groups in adults 20 years
    old or older.Check if a person is underweight, normal, overweight or
    obese based the information given below.

    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more

### Solution

```javascript
const BMI = (weight, height) => {
  const BodyMassIndex = Math.floor(weight / (height * height));
  if (BodyMassIndex < 18.5) {
    console.log("underweight");
  } else if (BodyMassIndex >= 18.5 && BodyMassIndex <= 24.9) {
    console.log("Normal weight");
  } else if (BodyMassIndex >= 25 && BodyMassIndex <= 29.9) {
    console.log("OverWeight");
  } else if (BodyMassIndex >= 30) {
    console.log("Obese");
  }
  console.log(BodyMassIndex);
};

BMI(110, 1.8);
```

34. Linear equation is calculated as follows: ax + by + c = 0. Write a
    function which calculates value of a linear equation,
    solveLinEquation.

### Solution

```javascript
function solveLinEquation(a, b, c, x, y) {
  // ax + by + c = 0
  const result = a * x + b * y + c;
  return result;
}

const a = 2;
const b = 3;
const c = 4;
const x = 5;
const y = 6;

const result = solveLinEquation(a, b, c, x, y);
console.log(result); // Output: 34
```

35. Write a functions which checks if all items are unique in the array.

### Solution

```javascript
const unique = (skills) => {
  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      if (skills[i] === skills[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(unique(skills));
```
