function wait(n){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Hello world !!")
        }, n);
    });
}

async function meth1(){
    let ans = await wait(3000)
    console.log(ans)
}

meth1()