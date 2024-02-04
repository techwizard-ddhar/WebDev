function ReadFile(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello inside promise-3 !!");
        }, 3000);
    });
}

async function meth3(){
    ReadFile().then(function(data){
        console.log(data);
    });

    console.log("Inside meth3") // it will resolve immediately, then after 3sec "Hello inside promise-3" will be printed
}

meth3();