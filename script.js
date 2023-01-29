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

// const name = "Laurence"; I made this a comment cuzz imma use this const down this challenging exercise below,
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
let subscribeed = true;
let loggeedIn = true;

if (subscribeed === true) {
  console.log('show the "video"');
} else if (loggeedIn === true) {
  console.log("upgrade to premium subscription");
} else {
  console.log("log into account");
}

// condition sample

let cash = 50;
let prices = 400;
let difference = cash - prices;

// I used back tick btw (`left side of 1`) for ${math things}
if (cash > prices) {
  console.log(`you paid extra, here\'s ${difference} dollars change`);
} else if (cash === prices)
  console.log("I've received the exact amount, thanks");
else {
  console.log(`you are short on payment by ${cash - prices * -1}`);
}

// Logic Operators

let money = 50;
let price = 40;
let isStoreOpen = true;

if (cash >= price && isStoreOpen === true) {
  console.log("cash is enough for buying");
} else if (cash < price || !isStoreOpen) {
  console.log("not enough gold");
}

// Truthy and Falsy value

// if u got lazy reading ma notes, empty string ("") is a falsy value
let val = "";

// !!smth is a checker thing for booleans
if (val) {
  console.log(/**"truthy value"*/ !!val);
} else {
  console.log(/**"falsy value"*/ !!val);
}

// Ternary operators

let hot = false;

hot ? console.log("weather hot") : console.log("weather is freeze");

// another sample
let subscribedd = true;
let loggedIn = true;

let stri = subscribedd && loggedIn ? "show video" : "hide video";
console.log(stri);

// Bazic example (the scripts are getting repetitive so just look above, especially lines 112-114)
// goal is to print     'give receipt' : 'do not give receipt' at a "realistic" setting

let receipt =
  money >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(receipt);

// LOOOOOOOOOOOOOOOOPS
// DRY = Don't Repeat Yourself

let count = 1;

// za 3 types

// while loop, this is also the exercise
// funny thing(not really), I spent I think 5mins finding a vibe song to go through this exercise, forgot I have the.. ehemm.. BIGGEST BRAIN. yeh took less than 20secs to finish. I am kinda,, kinda good hehe (this is for self boost motivation thingy not for boasting I swear, or mostly killing time to stop going through the video, Imma . get back now.)
// while (count <= 100) {
//   console.log(count)
//   count = count + 1;
// } IF YOU WANNA SEE THIS THING PRINT 1-100 JUST YK, DO

// now, the goat, FOR LOOP
// i made this print up to 10 so it does not take all the space, i still have more theories to learn
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// it is said that on work, i++ is barely not seen on that for loop, according to sources
// i = i + 1 is technically equivalent to i++ (or ++i), it basically ups the increment by 1, so --i should down the decrement by 1

// Another exercise here we goooo
// At first I did not get it, but after doing it the second time, of course with no kodigoes, tho my kodigoes came from my photographic memory, yehh once I see it imma know it ALWAYS the 2nd time, got lazy with solving it on my own. so ye i should solve these exercise the 1st to have pure learning yes
for (let l = 1; l <= 20; ++l) {
  if (l % 3 === 0 && l % 5 === 0) {
    console.log(`${l} -> "Frontend Simplified"`);
  } else if (l % 3 === 0) {
    console.log(`${l} -> "Frontend"`);
  } else if (l % 5 === 0) {
    console.log(`${l} -> "Simplified"`);
  } else {
    console.log(`${l} -> ${l}`);
  }
}

// now the next exercise wants me to spell out Frontend Simplified, aww meeeen

// const title = "Frontend Simplified"
// for (let t = 1; t <= title.length; ++t) {
// if (t) {
//   console.log(title[t - 1])
// }
// } my solution

// I meaaaan, the words spelt out. there are some excess codes like that if, should've realized sooner it works off by an if alone. So disregard if

const title = "Frontend Simplified";
for (let t = 0; t < title.length; ++t) {
  console.log(title[t]);
}

// FUUUUUUUUUUUUUNCTIONS

// function definition (syntax needed to 'memorized')
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}!`);
}

// function calling
welcomePersonToFES("Laurence", "Lama");
welcomePersonToFES("David", "Doe");
welcomePersonToFES("You are");

// Return function, it is said to be very hard to understand. I will believe that, my brain cells can admit and will experience having a hard time with that.

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
} //parameters = parenthesis inside these multiple lines, it defines a something, ye basta it defines

console.log(sumOfTwoNumbers(10, 10)); // argument = the thing inside those parentheseses, this thing calls

// function return exercise lezgoo
/**convert celsius to fahrenheit
 * F = C x 1.8 + 32
 *
 * convertCelsiusToFahrenheit(0) -> 32
 * convertCelsiusToFahrenheit(10) -> 50
 * convertCelsiusToFahrenheit(30) -> 86
 */

/** My solution
function convertCelsiusToFahrenheit(C, F) {
  return F = C * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10));
console.log(convertCelsiusToFahrenheit(30)); */

// meh, I still did pretty decent this is the answer from the
// function convertCelsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(10));
// console.log(convertCelsiusToFahrenheit(30));

// this is another way by using arrows
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCelsiusToFahrenheit(0));

// ARRRRRRRAYS

let arr = [20, 30, 40, 50, 100];

// 1st element of array
console.log(arr[0]);

// last element of array
console.log(arr[arr.length - 1]);

// to add element onto end of an array
arr.push(200);

console.log(arr); //notice that the last element of array chosen is still 100 even tho there is a pushed 200, is because it is not included in the tray of bracket. Or that is how I understood it

/**let newArr = arr.filter((element) => {
  console.log(element)
  if (element < 69) { //this thing is pretty self explanatory
    return true //inserting this avoids the boxed bracket to be empty. From my understanding, it turns all values from the array to turn true, then the array filter loops from 20 to 200 until it encodes it all inside the boxed bracket 
  }
}) 
//this is long methowd
console.log(newArr) */

let newArr = arr.filter((element) => element < 69);

console.log(newArr);

// array exercisessees

// just use the commented lets cuz I get the solution, short method
let grades = ["A+", "A", "FAIL"];
// let grades = ['FAIL', 'FAIL', 'B']
// let grades = ['FAIL']

// as for separating B, just swap B from A+ below this, then just use the third let to show empty bracket from the third yes
let ngrades = grades.filter((element) => element <= "A+");

console.log(ngrades);

// let grades = ['FAIL', 'FAIL', 'B']
// let grades = ['FAIL']
// long method, I get it so just follow the explain above there
let gradesNew = grades.filter((element) => {
  return element !== "FAIL";
  // return element <= 'A+' this is my solution btw as observed by its similarity with line 319
});

console.log(gradesNew);

// arrays with 'for' loopss

// using array data from line 314,
for (let i = 0; i < grades.length; ++i) {
  // console.log(grades[i]) turn this back to non comment,
}

// EXERCISE AGAIN, it's hard someone said. I'll decide that if I decide it is hard, gottem
let myGrades = ["A+", "A", "FAIL"];
let goodGrades = [];

for (let i = 0; i < myGrades.length; ++i) {
  if (grades[i] !== "FAIL") {
    goodGrades.push(myGrades[i]);
  }
}

console.log(goodGrades);

//nt solutions, I deleted mine so not much code here, it's getting crowded

// as for others, btw the third task with 'FAIL' the only one inside the bracket and it was tasked to have an empty bracket, just leave 1 FAIL and remove the others below there
let goodGrade = ["FAIL", "FAIL", "B"];
let myGrade = [];

for (let i = 0; i < goodGrade.length; ++i) {
  if (goodGrade[i] !== "FAIL") {
    myGrade.push(goodGrade[i]);
  }
}

console.log(myGrade);

// this thing is reused and can be seen from line 284
let array = [1, 4, 9, 16];

let newArray = array.map((elem) => "doggy");

//this thing from line 371 is the as below this, just noted a long method cauze it is setup for multiple codes
// let newArray = array.map((elem) => {
//   console.log(elem)
//   return 'doggy'
// })

console.log(newArray);

// EXERCISEEE    AGAAAAIN LEZGOOO

let dollars = [1, 5, 10, 3];
// let dollars = [0, 10, 20];

// let newDollars = dollars.map((elem) => {
//   return elem * 100
// })
let newDollars = dollars.map((elem) => elem * 100);

console.log(newDollars);

// ma brain cells think it cannot keep up anymore. ANYWAY ANOTHER EXERCISE LEZGOGOGOGOGOG
// just do the exercise above but without map command, my solution btw
let cents = [];

for (let i = 0; i < dollars.length; i++) {
  // if (dollars[i] !== true) , I always add an if loop wherein lines I do not need, it is fine tho. Imma fix this
  cents.push(dollars[i] * 100);
}

console.log(cents);

// FINALLY DONE WITH ARRAYS YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAA

// next is OBJECTSSSSSSSSSSSSSSSSSSSS

let users = [
  {
    username: "Laurence",
    email: "lamalaurenceFES@.com",
    password: "test452",
    subStatus: "VIP",
    discord: "SHAAAAAA",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Hmm",
    email: "HmmFES@.com",
    password: "testing",
    subStatus: "VIP",
    discord: "SHAAAAAA",
    lessonsCompleted: [1, 2, 3],
  },
  {
    username: "Zero",
    email: "0@.com",
    password: "undefind",
    subStatus: "VIP",
    discord: "SHAAAAAA",
    lessonsCompleted: [0, 1, 2, 3, 4, 5],
  },
];

// console.log(user[0]); this just shows the 1st list of objects, the laurence one

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        console.log("user logged in");
      } else {
        console.log("password incorrect - try again");
      }
      return; // so it does not loop the if loop
    }
  }
  console.log("email not found");
}

login("lamalaurenceFES@.com", "test452");

// EXERCISE RIGHT OFF THE BAT DAMN, I have no idea what this guy means by push the user object to the user array but lezgo
// ye my solution was wayyyyyy off so just, just, just look at that answer so correct that it's not from me
function register(user) {// so this thing is called user instead of with an s because it is a function in need of a separate script from the array of 'users'
  users.push(user); // and this is the object, the array being inside an object?? or the other way around? idk
}

register({//this is the array I guess
  username: "Laurence",
  email: "lamalaurenceFES@.com",
  password: "test452",
  subStatus: "VIP",
  discord: "SHAAAAAA",
  lessonsCompleted: [0, 1]
}
);

console.log(users)


// I can say that I get about objects and arrays as a whole, but on specifics, like dictating-every-detail specific



// NOW FOR THE LAST ONEEEEEEE



// DOM


