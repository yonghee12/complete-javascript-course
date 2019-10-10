/******************************
* JS BASIC

console.log('안녕이라고 내게 말하지마!');

var firstName = 'John';
console.log(firstName);

var name = prompt('당신은 누구십니까?');
console.log(name + ' 왔다.');
alert(name + ' 환영합니다!');

*/



/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var markMass = prompt('Tell me how Mark weighs');
var johnMass = prompt('Tell me how John weighs');

function bmi(mass, height) {
  return mass * height**2
}

var markBmi = bmi(markMass);
var johnBmi = bmi(johnMass);

var isMarkHigher = markBmi > johnBmi;

console.log("Is Mark's BMI higher than John's? " + isMarkHigher)
*/

/*
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log('asdf');
    break;
  case 'asdf':
    break;
  default:
    console.log("asdf");
}
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var avgTeamJohn = (89 + 120 + 103) / 3;
// var avgTeamMike = (116 + 94 + 123) / 3;

// var winner = avgTeamJohn > avgTeamMike ? 'John' : 'Mike';
// console.log(winner);
// console.log(avgTeamJohn, avgTeamMike);


/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tip(bill) {
  if (typeof (bill) !== 'number') {
    return "You can input only numbers.";
  } else {
    if (bill < 50) {
      return bill * 0.2;
    } else if (bill <= 200) {
      return bill * 0.15;
    } else {
      return bill * 0.1;
    }
  }
}

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark = new Object();
mark.name = 'Mark Enderson';
mark.mass = 70;
mark.height = 1.75;
mark.bmi = function() {
  return this.mass / this.height**2;
};

var john = new Object();
john.name = 'John Lee';
john.mass = 85;
john.height = 1.72;
john.bmi = function() {
  return this.mass / this.height**2;
};

var bmiDifference = mark.bmi() - john.bmi();
if (bmiDifference === 0) {
  console.log("They have same bmis which I cannot believe.");
} else {
  if (bmiDifference > 0) {
    console.log('Mark has higher bmi. Their bmi scores are' + mark.bmi() + ' ' + john.bmi() + 'respectively.');
  } else {
    console.log('John has higher bmi. Their bmi scores are' + mark.bmi() + ' ' + john.bmi() + 'respectively.');
  }
}