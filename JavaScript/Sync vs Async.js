/*function sum(n){

    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function FindSumTill100(){
    let res = sum(100);
    console.log(res);
}

setTimeout(FindSumTill100, 2000); // do this task for me, i will proceed to next task// Async process

function busy(){
    let a = 1;
    for(let i = 0; i < 10000000000; i++){
        a++;
    }
}
busy();

FindSumTill100(); //Sync process

console.log("Hello world");*/

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){

    console.log(data);
});

console.log("Hii world")


