const myArray = ["Hello", "World", 42, true,]

const firstElement = myArray[0]

const secondElement = myArray[1]

const thirdElement = myArray[2]

const fourthElement = myArray[3]


console.log(`firstElement ${firstElement}, secondElement ${secondElement}`)

// Option 1: pass it into the Number() function
const numberConvertedFromString = Number("1.79");
console.log(numberConvertedFromString); // 1.79, not '1.79'

// Option 2: parse an integer from a string (kg gets ignored!)
const integerFromString = parseInt("82 kg");
console.log(integerFromString); // 82

// Option 3: parse a floating point number (number with decimal places) from a string
const floatParsedFromString = parseFloat("1.79 meters");
console.log(floatParsedFromString); // 1.79

// If there are letter characters before the number you will get NaN (Not a Number)
const nope = parseInt("I am 82 kg");
console.log(nope); // NaN
const alsoDoesNotWork = parseFloat("I am 1.79 tall");
console.log(alsoDoesNotWork); // NaN