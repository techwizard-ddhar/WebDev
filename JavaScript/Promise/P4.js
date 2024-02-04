// immediate rsolve

function ReadFile1(){
    return new Promise(function(resolve){
        resolve("Hello all");
    });
}


let ans = ReadFile1();
console.log(ans);
