const myArray = [true, false, "true", true, false, true]
const counter = myArray.filter(value => value == true).length
console.log(myArray)
console.log(counter)
// const counter = myArray.filter(Boolean).length 