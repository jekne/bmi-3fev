// 1.) As a person unsure about my weight, I want to know if I am overweight or not, so I can be informed.

// The formula for BMI is: weight (kg) / (height (m) x height (m))


console.log("What does process.argv contain?", process.argv)
const weightInKg= parseFloat( process.argv[2])
const heightInM= parseFloat (process.argv[3])
const age = parseFloat(process.argv[4])

const heightInCM = heightInM * 100


const idealBMI = 22.5

const BMI = weightInKg / (heightInM * heightInM)


console.log(`**************
    BMI CALCULATOR
    **************
    
    height: ${heightInM}
    weight: ${weightInKg}
    
    ****************
    FACING THE FACTS
    ****************
    
    Your BMI is ${Math.round(BMI)}

    Your ideal weight is ${Math.round(idealBMI *heightInM *heightInM)}

    how many calories i should eat ${Math.round(1.4*(10 * (weightInKg) + 6.25 * (heightInCM) - 5 * (age)))}

    
    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight`)


// 2.) As a person unsure about my weight, I want to know what my ideal weight is, so I have a target I can work towards.
// Let's assume that a BMI of 22.5 is ideal

const idealWeight = Math.round (idealBMI *( heightInM * heightInM))

console.log( "My ideal weight is ", idealWeight)


// 3.) As a person who is trying to lose weight, I want to know how many calories I should eat everyday, so I can make progress towards my weight goal.
// We can calculate how many calories you need per day by calculating a Basal Metabolic Rate (BMR). The theory behind the calculations comes from the Mifflin - St Jeor equation. (Source)

// The formula for Basal Metabolic Rate is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age

// If you have a "normal" lifestyle, you multiple your BMR x 1.4 to get the amount of calories you burn on a daily basis

const BMR = 1.4*(10 * (weightInKg) + 6.25 * (heightInCM) - 5 * (age))
console.log(Math.round(BMR))


// 4.) As a person who is trying to lose weight, I want to have a timeline in which I can reach my weight goal, so I can make a plan.

    
// Assumption: If you eat 500 calories less than you normally do you lose 0.5 kg of weight a week (Source)

// The amount of weight to lose to reach your idealweight is: weight (kg) - ideal weight (kg)

const amountWeightToLose = weightInKg - idealWeight
console.log(amountWeightToLose)

// The time (weeks) it will take to reach your ideal weight is: amount of weight to lose / 0.5

const numberOfWeeks= amountWeightToLose/0.5
console.log(numberOfWeeks)

// The amount of calories you need to consume while dieting is: your daily usage - 500
const amountCaloriesToeat = BMR - 500
console.log(amountCaloriesToeat)
