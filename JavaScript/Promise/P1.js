//this ias an UGLY way of creating your own Async function
const fs = require("fs");

//arjo bring me potato <-- 
function read(fn){
    fs.readFile("a.txt", "utf-8", function(err, data){
        fn(data) // I brought it mummy -->
    })
}

//mummy
function callback(data){

    console.log(data);
}


read(callback);