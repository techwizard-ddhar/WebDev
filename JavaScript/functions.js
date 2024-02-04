/*function meth3(a,b){

    return a/b
}

function meth2(a,b){

    let res = meth3(a,b)
    console.log(res)
}

function meth1(a,b)
{

    meth2(a,b)
}

let a = 10
let b = 6

meth1(a,b)


//callback function --> a function is passed as an argument into another function

function method3(num1,num2,funTocall){

    var div = num1/num2
    funTocall(div)
}

function method2(data)
{

    console.log('result of division : ' + data)
}

function method1(data)
{

    console.log("Division's result : " + data)
}

let num1 = 10
let num2 = 2

method3(num1,num2,method2)


function arithmetic(a1, b1, FunToCall){

    let result = FunToCall(a1, b1)
    return result
}

function add(a1, b1){
    return a1 + b1
}

function sub(a1, b1){
    return a1 - b1
}

function mul(a1, b1){
    return a1 * b1
}

let ans = arithmetic(6,2,mul)
console.log(ans)


//setTimeout

function subtarction(){
    console.log(10 - 7)
}

setTimeout(subtarction, 3 * 1000)*/

/*function counter(i) {
    if (i >= 0) {
      console.log(i);
      setTimeout(() =>{
        counter(i - 1);
      }, 1000); 
    }
  }
  
  counter(30);*/


function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function AreaOfShapes(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;

}

let res = AreaOfShapes(2, 4, square)
console.log(res);


  


