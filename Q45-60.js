// Conditionals
// 45. Check whether a number is positive or negative.
let val = -3
if (val > 0) {
    console.log("Positive Number")
} else console.log("Negative Number")

// 46. Check whether a number is even or odd.
let num = 10
if (num % 2 === 0) {
    console.log("Even Number")
} else console.log("Odd Number")

// 47. Check whether a person is eligible to vote.
let age = 17
if (age >= 18){
    console.log("Eligible for Vote")
} else console.log("Not Eligible")

// 48. Find the largest among a. two numbers b. three numbers.
// a.
let a = 10, b = 20, c = 30
if (a > b) {
    console.log(a)
} else console.log(b)
//b. 
if (a > b && a > c){
    console.log(a)
} else if (b > a && b > c){
    console.log(b)
} else console.log(c)

// 49. Check whether a year is a leap year.
let year = 2000
if (year % 4 === 0 || year % 400 === 0){
    console.log(`${year} is a leap year`)
}

// 50. Check whether a number is divisible by both 3 and 5.
let x = 15
if (a % 3 === 0 && a % 5 === 0){
    console.log(`${x} is divisible by both 3 and 5`)
}

// 51. Create a simple grading system: 90+ → A, 75+ → B, 50+ → C, below 50 → Fail
let marks = 87
if (marks > 90){
    console.log("A")
} else if (marks > 75) {
    console.log("B")
} else if (marks > 50) {
    console.log("C")
} else console.log("Fail")

// 52. Check whether a character is a vowel or consonant.
let char = "i"
if (char === "A" || 
    char === "E" || 
    char === "I" || 
    char === "O" ||
    char === "U" ||
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"){
    console.log("Vowel")
} else console.log("Consonant")

// 53. Print the day name based on a number (1-7).
let dayNum = 4
if (dayNum === 1) {
  console.log("Sunday")
} else if (dayNum === 2) {
  console.log("Monday")
} else if (dayNum === 2) {
  console.log("Tuesday")
} else if (dayNum === 2) {
  console.log("Wednesday")
} else if (dayNum === 2) {
  console.log("Thursday")
} else if (dayNum === 2) {
  console.log("Friday")
} else  console.log("Saturday")
    
// 54. Check whether a username is "admin" and password is "1234".
let username = "admin" , password = 1234
if (username === "admin" && password === 1234) {
    console.log("Admin login successful")
} else console.log("Admin login failed")

// Truthy & Falsy
// 55. Check whether truthy or falsy a. an empty string b. 0 c. []
// a.
console.log(Boolean(""))
// b.
console.log(Boolean(0))
// c.
console.log(Boolean([]))

// Ternary Operator
// 56. Create a variable and print "Valid" if it has a value otherwise print "Invalid".
let var1 = ""
let res1 = var1 ? "Valid" : "Invalid"
console.log(res1)

// 57. Check whether a number is even or odd using ternary operator.
let var2 = 24
let res2 = var2 % 2 === 0 ? "Even"  : "Odd"
console.log(res2)

// 58. Check whether age is above 18 using ternary operator.
let val3 = 18
let res3 = val3 >= 18 ? "Eligible" : "Not Eligible"
console.log(res3)

// 59. Find the largest using ternary operator among a. two numbers b. three numbers
// a.
let val4 = 12 , val5 = 14 , val6 = 18
let res4 = val4 > val5 ? val4 : val5
console.log(res4)

// b.
let res5 = val4 > val5 ? val4 : val5 > val6 ? val5 : val6 
console.log(res5)

// 60. print "Hello User" if user logged in, "Hello Guest" in not logged in  
let greeting = "Hello"
let isUser = true
let greet = isUser ? (greeting += " User") : (greeting += " Guest")
console.log(greet)









