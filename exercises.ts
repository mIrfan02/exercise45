// Exercise 2
let personName = "Eric";
let greeting = `Hello ${personName}, would you like to learn some Python today?`;

console.log(greeting);

// Exercice 3

let myname="irfan";
// to Upper Case
console.log(myname.toUpperCase());
// to  LowerCase

console.log(myname.toLowerCase());
// Titlecase
let titlecaseName = myname.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(`Titlecase: ${titlecaseName}`);


// exercise 4

console.log(`Quaid-e-Azam once said,"There are two powers in the world; one is the sword and the other is the pen"`);
// exericse 5
let author='Quaid-e-Azam';
let qoute='There are two powers in the world; one is the sword and the other is the pen';
console.log(`${author} once said,"${qoute}"`);

// exerise 6

let nameWithWhitespace: string = "\t Muhammad  \nIrfan  \tKhan  \n";

console.log("Name with whitespace:", nameWithWhitespace);

let trimmedName: string = nameWithWhitespace.trim();

console.log("Stripped name:", trimmedName);

// exercise 7

console.log("Addition:", 3 + 5);
console.log("Subtraction:", 11 - 3);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 16 / 2);

// exercise 8


// Exercise 9
let favoriteNumber: number = 42;

let message: string = `My favorite number is ${favoriteNumber}.`;

console.log(message);

// Exercise 10
// This program stores my favorite number and prints a message revealing it.
// Author:dell - 2024-03-16

let favoriteNumber1: number = 42;

let message1: string = `My favorite number is ${favoriteNumber1}.`;

console.log(message1);


// Exercise 11
let friends: string[] = ["Irfan", "Bab", "janny"];

for (let i = 0; i < friends.length; i++) {
  console.log("Friend:", friends[i]);
}

// Exercise 12

for (let i = 0; i < friends.length; i++) {
    console.log("Good night to : ", friends[i]);
  }


//   Exercise 13

let favoriteTransports: string[] = ["Mehran", "Civic", "Grande","Mark-x"];

for (let i = 0; i < favoriteTransports.length; i++) {
  let transport = favoriteTransports[i];
  console.log(`I would love to travel by ${transport}.`);
}

// Exercise 14
let guestList: string[] = ["Janny", "Irfan khan", "sham"];

for (let i = 0; i < guestList.length; i++) {
  let guestName = guestList[i];
  console.log(`Dear ${guestName},`);
  console.log("I would be honored if you would join me for dinner. It would be a great opportunity .");
  console.log("Please let me know if you are available. \nSincerely, Fani ");
  console.log("------------------------");
}


// Exercise 15


console.log("Unfortunately, Irfan Khan cannot make it to the dinner.");

guestList[1] = "Awais khan";

for (let i = 0; i < guestList.length; i++) {
  let guestName = guestList[i];
  console.log(`Dear ${guestName},`);
  console.log("I would be honored if you would join me for dinner. It would be a great opportunity to discuss ");
  console.log("Please let me know if you are available. \nSincerely, irfan");
  console.log("------------------------");
}


// Exercise 16
console.log("Great news! I found a bigger dinner table, so there's more space available.");

// Modify the list to add new guests
guestList.unshift("ehsan khan");
guestList.splice(2, 0, "fawad");
guestList.push("siddique");

for (let i = 0; i < guestList.length; i++) {
  let guestName = guestList[i];
  console.log(`Dear ${guestName},`);
  console.log("I would be honored if you would join me for dinner. It would be a great opportunity to discuss your work and insights.");
  console.log("Please let me know if you are available. \nSincerely, irfan");
  console.log("------------------------");
}


// exercise 17



console.log("Unfortunately, the new dinner table won't arrive on time. I can only invite two people for dinner.");


while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  if (removedGuest) {
    console.log(`Dear ${removedGuest},`);
    console.log("I'm so sorry, but due to unforeseen circumstances, I can no longer invite you to dinner. I apologize for any inconvenience this may cause.");
    console.log("Sincerely, irfan");
    console.log("------------------------");
  }
}

// Inform the remaining guests
console.log("To the remaining guests:");
for (let guestName of guestList) {
  console.log(`Dear ${guestName},`);
  console.log("You are still invited to dinner! I look forward to seeing you then.");
  console.log("Sincerely, irfan");
  console.log("------------------------");
}


guestList.length = 0;
console.log("Guest List (should be empty):", guestList);

// exercise 18

let places=['hunza','sawat','ayubia','murree','kashmir'];
console.log(places);
let newPlaces=places.slice();
console.log(newPlaces.sort());

console.log(newPlaces.reverse());
console.log(places);
// reverse of original array

console.log( places.reverse());
// reverse to original array
console.log(places.reverse());
// sort to alpahbetically
console.log(places.sort());
// console.log(places.reverse());


// exercise 19

console.log("I am inviting", guestList.length, "people to dinner.");


// exercise 20

let favoriteBooks: string[] = ["A Confederacy of Dunces", "The Hitchhiker's Guide to the Galaxy", "The Lord of the Rings"];

console.log("My Favorite Books:");
for (let book of favoriteBooks) {
  console.log(book);
}

// exercises 21
let countries = [
  {
    name: "Japan",
    capital: "Tokyo",
    population: 125_833_002,
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 38_512_007,
  },
  {
    name: "France",
    capital: "Paris",
    population: 65_273_511,
  },
];

console.log("Countries:");
for (let country of countries) {
  console.log(`Name: ${country.name}`);
  console.log(`Capital: ${country.capital}`);
  console.log(`Population: ${country.population}`);
  console.log("--------------------");
}



// exercise 22
let guestList2: string[] = ["Marie Curie", "Stephen Hawking", "Alan Turing", "Ada Lovelace", "Sham"];

// Sort the guest list alphabetically (causing the error)
guestList.sort();

console.log("Guest List (alphabetical - Error will occur here):");
for (let guestName of guestList) {
  console.log(guestName[5]);
}

console.log("Guest List (alphabetical):");
for (let guestName of guestList) {
  if (guestName.length > 5) {
    console.log(guestName[5]);
  } else {
    console.log(guestName);
  }
}


// exercise 23

let car = "subaru";
let age = 25;
let isStudent = true;
let pi = 3.14159;

// Test 1: Equality check (True)
console.log("Test 1: Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // True, because the values and data types match

// Test 2: Strict equality check (True)
console.log("Test 2: Is car === 'subaru'? I predict True.");
console.log(car === "subaru"); // True, because both value and data type are the same

// Test 3: Inequality check (False)
console.log("Test 3: Is car != 'subaru'? I predict False.");
console.log(car != "subaru"); // False, because car is "subaru"

// Test 4: Strict inequality check (False)
console.log("Test 4: Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); // False, same reason as Test 3

// Test 5: Test with a number (False)
console.log("Test 5: Is car == 25? I predict False.");
// console.log(car == 25); // False, because they have different data types (string vs number)

// Test 6: Greater than check (False)
console.log("Test 6: Is age > 30? I predict False.");
console.log(age > 30); // False, because age is 25

// Test 7: Less than or equal to check (True)
console.log("Test 7: Is age <= 25? I predict True.");
console.log(age <= 25); // True, because 25 is less than or equal to 25

// Test 8: Logical AND (True)
console.log("Test 8: Is age > 20 && isStudent? I predict True.");
console.log(age > 20 && isStudent); // True, both conditions are met

// Test 9: Logical OR (False)
console.log("Test 9: Is age > 30 || isStudent? I predict False.");
console.log(age > 30 || isStudent); // False, because the first condition is false and the second is true (OR requires at least one condition to be true)

// Test 10: Falsy check (True)
console.log("Test 10: Is pi === false? I predict False.");
// console.log(pi === false); // False, because pi is a number (truthy) and not strictly equal to false



// EXERCISE 24


let fruits = ["apple", "banana", "orange"];

// Test 1: Equality check (True)
console.log("Test 1: Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // True

// Test 2: Strict equality check (True)
console.log("Test 2: Is car === 'subaru'? I predict True.");
console.log(car === "subaru"); // True

// Test 3: Inequality check (False)
console.log("Test 3: Is car != 'subaru'? I predict False.");
console.log(car != "subaru"); // False

// Test 4: Strict inequality check (False)
console.log("Test 4: Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); // False

// Test 5: Test with a number (False)
console.log("Test 5: Is car == 25? I predict False.");
// console.log(car == 25); // False

// Test 6: Greater than check (False)
console.log("Test 6: Is age > 30? I predict False.");
console.log(age > 30); // False

// Test 7: Less than or equal to check (True)
console.log("Test 7: Is age <= 25? I predict True.");
console.log(age <= 25); // True

// Test 8: Logical AND (True)
console.log("Test 8: Is age > 20 && isStudent? I predict True.");
console.log(age > 20 && isStudent); // True

// Test 9: Logical OR (False)
console.log("Test 9: Is age > 30 || isStudent? I predict False.");
console.log(age > 30 || isStudent); // False

// Test 10: Falsy check (True)
console.log("Test 10: Is pi === false? I predict False.");
// console.log(pi === false); // False

// Tests for equality and inequality with strings
console.log("---------- String Tests ----------");

// Test 11: Equality check (False)
console.log("Test 11: Is 'apple' == 'APPLE'? I predict False.");
// console.log('apple' == 'APPLE'); // False

// Test 12: Inequality check (True)
console.log("Test 12: Is 'apple' != 'banana'? I predict True.");
// console.log('apple' != 'banana'); // True

// Tests using the lower case function
console.log("---------- Lowercase Tests ----------");

// Test 13: Lowercase conversion (True)
console.log("Test 13: Is 'Hello'.toLowerCase() == 'hello'? I predict True.");
console.log('Hello'.toLowerCase() == 'hello'); // True

// Numerical tests
console.log("---------- Numerical Tests ----------");

// Test 14: Greater than check (False)
console.log("Test 14: Is 10 > 15? I predict False.");
console.log(10 > 15); // False

// Test 15: Less than or equal to check (True)
console.log("Test 15: Is 20 <= 20? I predict True.");
console.log(20 <= 20); // True

// Tests using "and" and "or" operators
console.log("---------- Logical Operator Tests ----------");

// Test 16: Logical AND (False)
console.log("Test 16: Is age > 30 && isStudent === false? I predict False.");
// console.log(age > 30 && isStudent === false); // False

// Test 17: Logical OR (True)
console.log("Test 17: Is age < 30 || pi > 3? I predict True.");
console.log(age < 30 || pi > 3); // True

// Test whether an item is in a array
console.log("---------- Array Tests ----------");

// Test 18: Item in array (True)
console.log("Test 18: Is 'banana' in fruits? I predict True.");
console.log('banana' in fruits); // True



// EXERCISE 25

let alien_color: string = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points!");
}

let alien_color1: string = "red";

if (alien_color1 === "green") {
  console.log("You just earned 5 points!");
}

// Exercise 26
let alien_color2: string = "green";

if (alien_color2 === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points!");
}

let alien_color3: string = "yellow";

if (alien_color3 === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points!");
}

// exercise 28

let Newage: number = 30; // Set the person's age

if (Newage < 2) {
  console.log("The person is a baby.");
} else if (Newage >= 2 && Newage < 4) {
  console.log("The person is a toddler.");
} else if (Newage >= 4 && Newage < 13) {
  console.log("The person is a kid.");
} else if (Newage >= 13 && Newage < 20) {
  console.log("The person is a teenager.");
} else if (Newage >= 20 && Newage < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Exercise 29


// let favoriteFruits: string[] = ["apple", "banana", "mango"]; // Array of favorite fruits

// // Check for each fruit (independent if statements)
// if (favoriteFruits.includes("apple")) {
//   console.log("You really like apples!");
// }

// if (favoriteFruits.includes("banana")) {
//   console.log("You really like bananas!");
// }

// if (favoriteFruits.includes("mango")) {
//   console.log("You really like mangoes!");
// }

// if (favoriteFruits.includes("orange")) {
//   console.log("You really like oranges!"); // This won't print since orange is not in the array
// }

// if (favoriteFruits.includes("kiwi")) {
//   console.log("You really like kiwis!"); // This won't print since kiwi is not in the array
// }


// Exercise 30

let usernames: string[] = ["user1", "Eric", "admin", "Alice", "Bob"]; // Array of usernames

for (let username of usernames) {
  if (username === "admin") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// Exercises 31

let usernames2: string[] = [];

// Check if there are any usernames
if (usernames2.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames2) {
    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Exercise 32

let current_users: string[] = ["admin", "user1", "John", "Alice", "Bob"];
let new_users: string[] = ["John Doe", "jane", "JOHN", "Emma", "Peter"];

function checkUsernameAvailabilitys(username: string): void {
  for (let currentUser of current_users) {
    if (username.toLowerCase() === currentUser.toLowerCase()) {
      console.log(`${username}, this username is already taken. Please choose another.`);
      return; // Exit the function after finding a duplicate (early termination)
    }
  }
  console.log(`${username}, this username is available.`);
}

for (let newUser of new_users) {
  checkUsernameAvailabilitys(newUser);
}

// Exercies 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  let ordinalSuffix: string;

  if (num === 1) {
    ordinalSuffix = "st";
  } else if (num === 2) {
    ordinalSuffix = "nd";
  } else if (num === 3) {
    ordinalSuffix = "rd";
  } else {
    ordinalSuffix = "th";
  }

  console.log(`${num}${ordinalSuffix}`);
}


// Exercies 34

let favoritePizzas: string[] = ["pepperoni", "cheese", "veggie"];

for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");


// Exercies 35

let furryAnimals: string[] = ["dog", "cat", "rabbit"];

for (let animal of furryAnimals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("All of these animals are furry friends!");


// exercies 36


function make_shirt1(size: string, message: string): void {
    console.log(`I made a ${size} t-shirt that says '${message}'.`);
  }

  // Call the function with arguments
  make_shirt1('large', 'I love TypeScript!');


// Exercise 37
  function make_shirtss(size = "large", message = "I love TypeScript!"): void {
    console.log(`I made a ${size} t-shirt that says '${message}'.`);
  }

  make_shirtss();
  make_shirtss("medium");
  make_shirtss("small", "I love JavaScript!");


// Exercise 38

  function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city.toUpperCase()} is in ${country.toUpperCase()}.`);
  }

  // Call the function for different cities
  describe_city("karachi");
  describe_city("berlin", "germany");
  describe_city("new york city", "united states");


// Exercise 39

function city_country(city: string, country: string): string {
    return `${city.toUpperCase()}, ${country.toUpperCase()}`;
  }

  let cityCountry1 = city_country("Lahore", "Pakistan");
  let cityCountry2 = city_country("Berlin", "Germany");
  let cityCountry3 = city_country("New York City", "USA");

  // Print the returned values
  console.log(cityCountry1);
  console.log(cityCountry2);
  console.log(cityCountry3);

// exercise 40
  let magicians: string[] = ["David Blaine", "Criss Angel", "Dynamo"];

function show_magicians(magicians: string[]): void {
  console.log("Here is a list of famous magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);


// exercise 44
function buildSandwich(...ingredients: string[]): void {
    if (ingredients.length === 0) {
      console.log("You forgot to add any ingredients! Here's your bread-only sandwich.");
      return;
    }

    console.log("Your sandwich includes:");
    for (let ingredient of ingredients) {
      console.log("-", ingredient);
    }
  }

  // Call the function with different numbers of arguments
  buildSandwich("bread", "cheese", "ham");
  buildSandwich("bread", "peanut butter", "jelly");
  buildSandwich("bread");


