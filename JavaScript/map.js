let numbers = [1,2,3,4,5]

let num = numbers.map((val, index, array)=>{
    console.log(val, index, array)
    return val + index
});

console.log(num)