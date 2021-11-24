"use strict";
//strict mode engaged

let hasDriversLicence = false;
const passTest = true;

/*
    missing s in hasDriverLicence

    if (passTest) hasDriverLicence = true;
    if (hasDriverLicence) console.log("I can drive :D!");
*/
// stricts reserves private
//const private = 1323;

function logger() {
  console.log("My name is Jonas");
}
logger();

function fruitProcessor(apples, organges) {
  console.log(apples, organges);
  const juice = `Juice with ${apples} apples and ${organges} oranges!`;
  return juice;
}
const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);

const num = Number("23");

//function decaration
function caclAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = caclAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1991);

//arrow function
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years!!!`);
    return retirement;
  } else {
    console.log(
      `${firstName} already retired ${Math.abs(retirement)} years ago!!!`
    );
    return -1;
  }
};

console.log(yearsUntilRetirement(1957, "Joe"));
console.log(yearsUntilRetirement(1937, "Nick"));
console.log(yearsUntilRetirement(1999, "Mary"));

console.log(age1, age2, age3);

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const avgThree = (game1, game2, game3) => (game1 + game2 + game3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
  avgDolphins > avgKoalas
    ? console.log("Dolphins Win!")
    : console.log("Koalas Win!");
}

let dolphinsAvg = avgThree(44, 23, 71);
let koalasAvg = avgThree(65, 54, 49);

checkWinner(dolphinsAvg, koalasAvg);

dolphinsAvg = avgThree(85, 54, 41);
koalasAvg = avgThree(23, 34, 27);

checkWinner(dolphinsAvg, koalasAvg);

//Array funcitons

const friends = ["Mike", "Steven", "David"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);
console.log(newLength);

friends.pop();
const poppped = friends.pop();
console.log(poppped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
friends.push(53);
console.log(friends);

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/
function billCalculator(billTot) {
  if (billTot >= 50 && billTot <= 300) {
    return billTot * 0.15;
  } else return billTot * 0.2;
}

const bills = [123, 45, 900, 12];
const tips = [];
for (i = 0; i < bills.length; i++) {
  tips.push(billCalculator(bills[i]));
}
console.log(billCalculator(100));
console.log(tips);
