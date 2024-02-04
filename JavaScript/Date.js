const CurrentDate = new Date();

console.log("Date : " + CurrentDate.getDate());
console.log("month : " + CurrentDate.getMonth() + 1); // start from index zero
console.log("Year : " + CurrentDate.getFullYear());

console.log("Hours : " + CurrentDate.getHours());
console.log("Minutes : " + CurrentDate.getMinutes());
console.log("Seconds : " + CurrentDate.getSeconds());


console.log("Time in milisecond second since 1970 : " + CurrentDate.getTime());

function sum(){
    let a = 0;
    for(let i = 0; i < 10000; i++){
        a += i;
    }

    return a;
}

const BeforeDate = new Date();
const BeforeTimeInMs = BeforeDate.getTime();

sum()

const AfterDate = new Date();
const AfterTimeInMs = AfterDate.getTime();

console.log(AfterTimeInMs - BeforeTimeInMs);


function DisplayDate(){
    let myDate = new Date();
    console.log(`${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`);
}

setInterval(DisplayDate, 1000);