//Data types and variables::::

// STRINGSSS

console.log("Hello world");

console.log("Hello " + "worlders " + "100k");

console.log("Hello World"[10]);

// Shows how many characters
console.log("Lolowlo".length);

// Shows how to input any last letter to any text
let str = "Laurence";
console.log(str[str.length - 1]);

// to know what data type when forgetful
typeof "anything really,btw put this in the console of inspect element";
// or
typeof anything;

// moving on to NUMBERSS

15 % 5; //input this on inspect element (or not i know yu no) -basically it says the divisibility of a number, if result is not 0, it is the remainder

// BOOOOOLEAN

1 > 2; //input on f12
2 > 1; //also this,

// NULLL and UNDEFINED, no codes I guess

// & variables, I thought we go to conditionals but o well
/**
 * Basically variables stores data like those I professionally, intricatively encoded codes above
 * 3 ways to define variables:
 * var - super outdated(don't use)
 * let - can be used anywhere, everytime(I think)
 * const - cannot be reassigned, altho kinda same with let
 */

const name = "Laurence";
let temperature = 20;
let isRaining = true;

temperature = temperature * 2;

console.log(temperature);

// exercise

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

// not included in the previous list but here we go EQUALITY

// == checks the values (barely used)
let boool = "1" == 1;

console.log(boool);

// != checks if values are not equal (opposite of ==)
let booola = "1" != 1;

console.log(booola);

// === checks the values and types (commonly used)
let baaal = "1" === 1;

console.log(baaal);

// !== checks if values and types are not equal (opposite of ===)
let baaala = "1" !== 1;

console.log(baaala);

// CONDITIONALSSSSSSS

// Order is very important because it disregards everthing below to what will run. also 1 one of the if else elseif can run, no simultaneous
let subscribed = true;
let loggedIn = true;

if (subscribed === true) {
  console.log('show the "video"');
} else if (loggedIn === true) {
  console.log("upgrade to premium subscription");
} else {
  console.log("log into account");
}

// condition sample

let cash = 50
let price = 400
let difference = cash - price

// I used back tick btw (`left side of 1`) for ${math things}
if (cash > price) {
    console.log(`you paid extra, here\'s ${difference} dollars change`)
}
else if (cash === price)
console.log("I've received the exact amount, thanks")
else {
    console.log(`you are short on payment by ${cash - price * -1}`);
}

// Logic Operators

let money = 60
let prices = 40
let isStoreOpen = false

if (cash >= prices && isStoreOpen === true) {
    console.log('cash is enough for buying')
}

else if (cash < prices || !isStoreOpen) {

    console.log('not enough gold')
}

// Truthy and Falsy value

// if u got lazy reading ma notes, empty string ("") is a falsy value
let val = "";

// !!smth is a checker thing for booleans
if (val) {
    console.log(/**"truthy value"*/ !!val)
}
else {
    console.log(/**"falsy value"*/ !!val)
}