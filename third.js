// console.log("What does process.argv contain?", process.argv);

// const weightInKg = parseInt(process.argv[2]);
// const heightInM = parseFloat(process.argv[3]);
// const age = parseInt(process.argv[4]);

// console.log("weight in kg = ", weightInKg)

// const heightInCM = heightInM * 100
// console.log("this is the heightINCM = ",heightInCM)


// const BMR = 10 * weightInKg + 6.25 * heightInCM - 5 * age;
// //  

// console.log("BMR =", BMR)

// // declaring a variable and assigning it the value "no"
// const dailyExercise = process.argv[5];

// // Declaring a variable, but not assigning it yet, the value will depend on wether someone exercises!
// let dailyCalories;

// if (dailyExercise === "yes") {
//   // since "no" === "yes" resolves to false
//   // this code will NOT get run
//   console.log("This person works out");
//  dailyCalories=BMR*1.4
// } else {
//   // and this code WILL get run
//   console.log("This person does not work out");
//   dailyCalories= BMR * 1.6
// }

// console.log("daylicalories",dailyCalories)
console.log(process.argv)
const BMR = 1770;
const dailyExercise =process.argv[2]
console.log(dailyExercise)
// const dailyCalories = dailyExercise === "true" ? BMR * 1.6 : BMR * 1.4;
const dailyCalories = dailyExercise === true ? BMR * 1.6 : BMR * 1.4;
// resolves to: 1770 * 1.6 (2832)

console.log(dailyCalories); // 2832