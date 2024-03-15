// Exercise 2
var personName = "Eric";
var greeting = "Hello ".concat(personName, ", would you like to learn some Python today?");
console.log(greeting);
// Exercice 3
var myname = "irfan";
// to Upper Case
console.log(myname.toUpperCase());
// to  LowerCase
console.log(myname.toLowerCase());
// Titlecase
var titlecaseName = myname.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log("Titlecase: ".concat(titlecaseName));
// exercise 4
console.log("Quaid-e-Azam once said,\"There are two powers in the world; one is the sword and the other is the pen\"");
// exericse 5
var author = 'Quaid-e-Azam';
var qoute = 'There are two powers in the world; one is the sword and the other is the pen';
console.log("".concat(author, " once said,\"").concat(qoute, "\""));
// exerise 6
var nameWithWhitespace = "\t Muhammad  \nIrfan  \tKhan  \n";
console.log("Name with whitespace:", nameWithWhitespace);
var trimmedName = nameWithWhitespace.trim();
console.log("Stripped name:", trimmedName);
// exercise 7
console.log("Addition:", 3 + 5);
console.log("Subtraction:", 11 - 3);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 16 / 2);
// exercise 8
// Exercise 9
var favoriteNumber = 42;
var message = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message);
// Exercise 10
// This program stores my favorite number and prints a message revealing it.
// Author:dell - 2024-03-16
var favoriteNumber1 = 42;
var message1 = "My favorite number is ".concat(favoriteNumber1, ".");
console.log(message1);
// Exercise 11
var friends = ["Irfan", "Bab", "janny"];
for (var i = 0; i < friends.length; i++) {
    console.log("Friend:", friends[i]);
}
// Exercise 12
for (var i = 0; i < friends.length; i++) {
    console.log("Good night to : ", friends[i]);
}
//   Exercise 13
var favoriteTransports = ["Mehran", "Civic", "Grande", "Mark-x"];
for (var i = 0; i < favoriteTransports.length; i++) {
    var transport = favoriteTransports[i];
    console.log("I would love to travel by ".concat(transport, "."));
}
// Exercise 14
var guestList = ["Janny", "Irfan khan", "sham"];
for (var i = 0; i < guestList.length; i++) {
    var guestName = guestList[i];
    console.log("Dear ".concat(guestName, ","));
    console.log("I would be honored if you would join me for dinner. It would be a great opportunity .");
    console.log("Please let me know if you are available. \nSincerely, Fani ");
    console.log("------------------------");
}
// Exercise 15
console.log("Unfortunately, Irfan Khan cannot make it to the dinner.");
guestList[1] = "Awais khan";
for (var i = 0; i < guestList.length; i++) {
    var guestName = guestList[i];
    console.log("Dear ".concat(guestName, ","));
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
for (var i = 0; i < guestList.length; i++) {
    var guestName = guestList[i];
    console.log("Dear ".concat(guestName, ","));
    console.log("I would be honored if you would join me for dinner. It would be a great opportunity to discuss your work and insights.");
    console.log("Please let me know if you are available. \nSincerely, irfan");
    console.log("------------------------");
}
// exercise 17
console.log("Unfortunately, the new dinner table won't arrive on time. I can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest) {
        console.log("Dear ".concat(removedGuest, ","));
        console.log("I'm so sorry, but due to unforeseen circumstances, I can no longer invite you to dinner. I apologize for any inconvenience this may cause.");
        console.log("Sincerely, irfan");
        console.log("------------------------");
    }
}
// Inform the remaining guests
console.log("To the remaining guests:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guestName = guestList_1[_i];
    console.log("Dear ".concat(guestName, ","));
    console.log("You are still invited to dinner! I look forward to seeing you then.");
    console.log("Sincerely, irfan");
    console.log("------------------------");
}
guestList.length = 0;
console.log("Guest List (should be empty):", guestList);
// exercise 18
var places = ['hunza', 'sawat', 'ayubia', 'murree', 'kashmir'];
console.log(places);
var newPlaces = places.slice();
console.log(newPlaces.sort());
console.log(newPlaces.reverse());
console.log(places);
// reverse of original array
console.log(places.reverse());
// reverse to original array
console.log(places.reverse());
// sort to alpahbetically
console.log(places.sort());
// console.log(places.reverse());
// exercise 19
console.log("I am inviting", guestList.length, "people to dinner.");
// exercise 20
var favoriteBooks = ["A Confederacy of Dunces", "The Hitchhiker's Guide to the Galaxy", "The Lord of the Rings"];
console.log("My Favorite Books:");
for (var _a = 0, favoriteBooks_1 = favoriteBooks; _a < favoriteBooks_1.length; _a++) {
    var book = favoriteBooks_1[_a];
    console.log(book);
}
// exercises 21
var countries = [
    {
        name: "Japan",
        capital: "Tokyo",
        population: 125833002,
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 38512007,
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
    },
];
console.log("Countries:");
for (var _b = 0, countries_1 = countries; _b < countries_1.length; _b++) {
    var country = countries_1[_b];
    console.log("Name: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("--------------------");
}
// exercise 22
var guestList2 = ["Marie Curie", "Stephen Hawking", "Alan Turing", "Ada Lovelace", "Sham"];
// Sort the guest list alphabetically (causing the error)
guestList.sort();
console.log("Guest List (alphabetical - Error will occur here):");
for (var _c = 0, guestList_2 = guestList; _c < guestList_2.length; _c++) {
    var guestName = guestList_2[_c];
    console.log(guestName[5]);
}
console.log("Guest List (alphabetical):");
for (var _d = 0, guestList_3 = guestList; _d < guestList_3.length; _d++) {
    var guestName = guestList_3[_d];
    if (guestName.length > 5) {
        console.log(guestName[5]);
    }
    else {
        console.log(guestName);
    }
}
// exercise 23
var car = "subaru";
var age = 25;
var isStudent = true;
var pi = 3.14159;
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
var fruits = ["apple", "banana", "orange"];
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
var alien_color = "green";
if (alien_color === "green") {
    console.log("You just earned 5 points!");
}
var alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("You just earned 5 points!");
}
// Exercise 26
var alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points!");
}
var alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points!");
}
// exercise 28
var Newage = 30; // Set the person's age
if (Newage < 2) {
    console.log("The person is a baby.");
}
else if (Newage >= 2 && Newage < 4) {
    console.log("The person is a toddler.");
}
else if (Newage >= 4 && Newage < 13) {
    console.log("The person is a kid.");
}
else if (Newage >= 13 && Newage < 20) {
    console.log("The person is a teenager.");
}
else if (Newage >= 20 && Newage < 65) {
    console.log("The person is an adult.");
}
else {
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
var usernames = ["user1", "Eric", "admin", "Alice", "Bob"]; // Array of usernames
for (var _e = 0, usernames_1 = usernames; _e < usernames_1.length; _e++) {
    var username = usernames_1[_e];
    if (username === "admin") {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// Exercises 31
var usernames2 = [];
// Check if there are any usernames
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _f = 0, usernames2_1 = usernames2; _f < usernames2_1.length; _f++) {
        var username = usernames2_1[_f];
        if (username === "admin") {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Exercise 32
var current_users = ["admin", "user1", "John", "Alice", "Bob"];
var new_users = ["John Doe", "jane", "JOHN", "Emma", "Peter"];
function checkUsernameAvailabilitys(username) {
    for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
        var currentUser = current_users_1[_i];
        if (username.toLowerCase() === currentUser.toLowerCase()) {
            console.log("".concat(username, ", this username is already taken. Please choose another."));
            return; // Exit the function after finding a duplicate (early termination)
        }
    }
    console.log("".concat(username, ", this username is available."));
}
for (var _g = 0, new_users_1 = new_users; _g < new_users_1.length; _g++) {
    var newUser = new_users_1[_g];
    checkUsernameAvailabilitys(newUser);
}
// Exercies 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _h = 0, numbers_1 = numbers; _h < numbers_1.length; _h++) {
    var num = numbers_1[_h];
    var ordinalSuffix = void 0;
    if (num === 1) {
        ordinalSuffix = "st";
    }
    else if (num === 2) {
        ordinalSuffix = "nd";
    }
    else if (num === 3) {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = "th";
    }
    console.log("".concat(num).concat(ordinalSuffix));
}
// Exercies 34
var favoritePizzas = ["pepperoni", "cheese", "veggie"];
for (var _j = 0, favoritePizzas_1 = favoritePizzas; _j < favoritePizzas_1.length; _j++) {
    var pizza = favoritePizzas_1[_j];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
// Exercies 35
var furryAnimals = ["dog", "cat", "rabbit"];
for (var _k = 0, furryAnimals_1 = furryAnimals; _k < furryAnimals_1.length; _k++) {
    var animal = furryAnimals_1[_k];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("All of these animals are furry friends!");
// exercies 36
function make_shirt1(size, message) {
    console.log("I made a ".concat(size, " t-shirt that says '").concat(message, "'."));
}
// Call the function with arguments
make_shirt1('large', 'I love TypeScript!');
// Exercise 37
function make_shirtss(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("I made a ".concat(size, " t-shirt that says '").concat(message, "'."));
}
make_shirtss();
make_shirtss("medium");
make_shirtss("small", "I love JavaScript!");
// Exercise 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city.toUpperCase(), " is in ").concat(country.toUpperCase(), "."));
}
// Call the function for different cities
describe_city("karachi");
describe_city("berlin", "germany");
describe_city("new york city", "united states");
// Exercise 39
function city_country(city, country) {
    return "".concat(city.toUpperCase(), ", ").concat(country.toUpperCase());
}
var cityCountry1 = city_country("Lahore", "Pakistan");
var cityCountry2 = city_country("Berlin", "Germany");
var cityCountry3 = city_country("New York City", "USA");
// Print the returned values
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
// exercise 40
var magicians = ["David Blaine", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    console.log("Here is a list of famous magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
// exercise 44
function buildSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("You forgot to add any ingredients! Here's your bread-only sandwich.");
        return;
    }
    console.log("Your sandwich includes:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("-", ingredient);
    }
}
// Call the function with different numbers of arguments
buildSandwich("bread", "cheese", "ham");
buildSandwich("bread", "peanut butter", "jelly");
buildSandwich("bread");
