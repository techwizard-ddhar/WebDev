function ReadFile(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello inside promise !!");
        }, 3000);
    });
}

function meth2(){
    let value = ReadFile(); // it get stuck over here -- solution --> {async and await}
    console.log(value);
}

meth2();