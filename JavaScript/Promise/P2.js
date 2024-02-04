//arjo bring me potato

const fs = require("fs");

function read(){
    return new Promise(function(resolve){

        fs.readFile("b.txt", "utf-8", function(err, data){
            resolve(data) // I brought it mummy
        });
    })
    
}

//mummy
function callback(data){

    console.log(data);
}


read().then(callback);