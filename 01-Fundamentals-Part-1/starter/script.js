let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!");
console.log(40 + 40 + 10);

console.log("Jonas");
let firstName = "Jonas";
console.log(firstName);

let PI = 3.14159;

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year);
console.log(typeof "str");

const avgAge = 32;
console.log(avgAge, avgAge / 2, avgAge / 6);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const markHeight = 78;
const markMass = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnHeight = 92;
const johnMass = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = Boolean(markBMI > johnBMI);
const markHigherBMI2 = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI2);
console.log(markHigherBMI);

/*
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

if (markHigherBMI) console.log(`Mark has the higher BMI of: ${markBMI}`);
else console.log(`John has the higher BMI of: ${johnBMI}`);
console.log();

const jonasName = "Jones";
const jonas = `I'm ${jonasName}`;
console.log(jonasName, jonas);

console.log("String with \n\
multiple \n\
letters");

const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 21);

console.log(Number("John"));
console.log(typeof NaN);

let n = "1" + 1;
n = n - 1;
console.log(n);
console.log("10" - "4" - "3" - 2 + "5");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("john"));
console.log(Boolean({}));

/*
== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.	
=== is used for comparing two variables, but this operator also checks datatype and compares two values.
*/
console.log("--------------");
let age = 18;
console.log(age === 18);
console.log(age == 18);
console.log("--------------");
console.log("Hi" !== 3);
console.log("23" == 23); //true
console.log("23" === 23); //false

//Switch Statements
console.log("--------------");
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan cours structure");
    console.log("Go to coding");
    break;
  case "tuesday":
    console.log("Deliver packages");
    break;
  case "wednesday":
    console.log("Go grocery shopping");
    break;
  case "thursday":
    console.log("Go to class");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
    console.log("Watch Prem");
    break;
  case "sunday":
    console.log("Day off");
    break;
}

//Ternary Operators
console.log("--------------");
age = 42;
age >= 21
  ? console.log("Legal to drink!")
  : console.log("I likey to drink water!");

const drink = age <= 18 ? "wine!!!" : "water!!!";
console.log(drink);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �

*/
let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
