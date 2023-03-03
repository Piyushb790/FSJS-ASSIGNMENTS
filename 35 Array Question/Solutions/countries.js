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

let longestString = "";
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].length > longestString.length) {
    longestString = country_list[i];
  }
}

console.log("longest string in this array is ", longestString);

let fourLength = [];
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].length === 4) {
    fourLength.push(country_list[i]);
  }
}

console.log(fourLength);

const moreWords = [];
for (let i = 0; i < country_list.length; i++) {
  if (country_list[i].split(" ").length >= 2) {
    moreWords.push(country_list[i]);
  }
}

console.log(moreWords);

const ReversedCountries = country_list.reverse();

const capitalizedCountries = [];
for (i = 0; i < ReversedCountries.length; i++) {
  capitalizedCountries.push(ReversedCountries[i].toUpperCase());
}
console.log(capitalizedCountries);

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
