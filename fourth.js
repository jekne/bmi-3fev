// console.log("What does process.argv contain?", process.argv);

var weightInKg = parseInt(process.argv[2]);
var heightInM = parseFloat(process.argv[3]);
var age = parseInt(process.argv[4]);
var dailyExercise = process.argv[5];

// The formula for BMI is: weight (kg) / (height (m) x height (m))
var BMI = weightInKg / (heightInM * heightInM);

// Assumption: ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
var idealWeightKg = 22.5 * heightInM * heightInM;

// The formula for Basal Metabolic Rate (BMR) is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
var heightInCm = heightInM * 100;
var BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age;

// Assumption: calories for a normal lifestyle is BMR * 1.4
// Assumption: calories for a active lifestyle is BMR * 1.6

// Declaring a variable, but not assigning it yet, the value will depend on wether someone exercises!
var dailyCalories;

if (dailyExercise === "yes") {
  // assigning dailyCalories a value now that we've checked the condition
  dailyCalories = BMR * 1.6;
} else {
  dailyCalories = BMR * 1.4;
}

// Assumption: This app is built for people who weigh too much
var weightToLoseKg = weightInKg - idealWeightKg;

// Assumption: we can lose 0.5 kg a week
var dietWeeks = weightToLoseKg / 0.5;

// Assumption: to lose 0.5 kg a week we need to cut calorie intake by 500 calories
var dietCalories = dailyCalories - 500;

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} years
height: ${heightInM} m
weight: ${weightInKg} kg
do you exercise daily? ${dailyExercise}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealWeightKg)} kg
With a normal lifestyle you burn ${Math.round(dailyCalories)} calories a day

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${Math.round(idealWeightKg)} kg:

Eat ${Math.round(dietCalories)} calories a day
For ${Math.round(dietWeeks)} weeks
`);