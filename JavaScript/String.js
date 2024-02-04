let boy1 = "Rishi"
let boy2 = "Debanjan"

const str = `${boy1} is a friend of ${boy2}`
console.log(str)

let st = "JavaScript"

//length
console.log(st.length)

//toLowerCase
console.log(st.toLowerCase())

//toUpperCase
console.log(st.toUpperCase())

let st1 = "welcome"

//subString
console.log(st1.substring(3))
console.log(st1.substring(3,6))

//replace
console.log(st1.replace('o', 'a'))

//charAt
console.log(st1.charAt(4))

//indexOf
console.log(st1.indexOf('e',2))

//lastIndexOf
console.log(st1.lastIndexOf('e'))


//trim

let st2 = "    Hello    "
console.log("length before trim : " + st2.length)

let s = st2.trim()
console.log("length after trim : " + s.length)

//split
let sentence = "Hello my name is raj";
const word = sentence.split(" ");

console.log(word)

let text = "Hello";
const myArray = text.split("");
console.log(myArray)

//parseInt

console.log(parseInt("42"))
console.log(parseInt("12.30"))
console.log(parseInt("69qwerty"))

//push
// Push an element to the last
let arr = [1,2,3,4]
arr.push(8)
console.log(arr)

// Delete last element

arr.pop()
console.log(arr)

// Delete first element

arr.shift()
console.log(arr)


//unshift
//push an element to the first
arr.unshift(69)
console.log(arr)

//concat
const firstArr = [1,2,3,4,5];
const lastArr = [6,7,8,9,10];

console.log(firstArr.concat(lastArr));



