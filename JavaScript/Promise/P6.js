function ReadFile(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello inside promise !!");
        }, 3000);
    });
}

async function main(){
    let value = await ReadFile(); // thread will get stuck over here, for 3sec
    console.log("hii there-1");
    console.log(value);
}

main();

console.log("after main") // in between thread will continue executing it

// await is only validate inside async function