// index.js
console.log("What does process.argv contain?", process.argv);

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const doesExercise = process.argv[5]

// The formula for BMI is: weight (kg) / (height (m) x height (m))
const BMI = weightInKg / (heightInM * heightInM);

// Assumption: ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
const idealWeightKg = 22.5 * heightInM * heightInM;

// The formula for Basal Metabolic Rate (BMR) is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
const heightInCm = heightInM * 100;
const BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age;

// Assumption: calories for a normal lifestyle is BMR * 1.4
const dailyCalories = BMR * 1.4;

// Assumption: This app is built for people who weigh too much
const weightToLoseKg = weightInKg - idealWeightKg;

// Assumption: we can lose 0.5 kg a week
const dietWeeks = weightToLoseKg / 0.5;

// Assumption: to lose 0.5 kg a week we need to cut calorie intake by 500 calories
const dietCalories = dailyCalories - 500;

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} years
height: ${heightInM} m
weight: ${weightInKg} kg

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

// As a person who is trying to lose weight, I want the amount of exercise taken into account when creating my diet plan, so I can be motivated to work out.

// If you exercise daily, we assume your daily calories used is BMR x 1.6 instead of BMR x 1.4



if (doesExercise.toLowerCase() === 'true') {
    console.log("this person work out")
} else {
    console.log("YOU SHOULD WORKOUT")
}

// As a woman who is trying to lose weight, I want gender to be taken into account when creating my diet plan, so the information is more relevant to me.

// As a person who is trying to gain weight, I want to know how much calories I should eat everyday, so I can make progress towards my weight goal.

// As a person who is trying to gain weight, I want to have a timeline in which I can reach my weight goal, so I can make a plan.

// As a user, I want the program to give me feedback when I input the wrong information, so I can learn how to use the program.

