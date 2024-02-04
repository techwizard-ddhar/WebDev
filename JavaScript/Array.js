let a = 10;
let b = 20;
let c = 30;

const arr = [a, b, c];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const fruits = ['apple', 'grapes', 'walnut']
const a1 = [7, "rahul", false, 7.8]

console.log(fruits)
console.log(a1)


//print even numbers in an array

function even(A){

    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            console.log(A[i])
        }
    }
}

var A = [1,2,3,4,5,6,7,8,9,10]
even(A)

//reverse an array

function reverse(B){
    for(let i = B.length-1; i >= 0; i--){
        console.log(B[i])
    }
}

let B = [1,2,3,4,5]
reverse(B)

//Find maximum and second maximum elements in an Array

let C = [2,9,4,7,1,0]
let max = 0;
let sec_max;

for(let i = 0; i < C.length; i++){
    if(max < C[i]){
        sec_max = max
        max = C[i]
    }
    else if(C[i] > sec_max){
        sec_max = C[i]
    }
}

console.log(max)
console.log(sec_max)


//Convert Array elements to string

let numbers = [1,2,3,4,5]

console.log(numbers.toString())

//splice

let a2 = numbers.splice(2,3,2916, 2918, 2922)
console.log(numbers)
console.log(a2)


//slice

let num1 = [1,2,3,4,5]
console.log(num1.slice(2))
console.log(num1.slice(1,4))