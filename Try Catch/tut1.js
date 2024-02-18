// function getLength(name){
//     return name.length;
// }

// const ans = getLength("Debanjan");
// console.log(ans);


//error
function getLength(name){
    if(name){
        return name.length;
    }
    else{
        throw Error("Please enter the input")

    }
}

const ans = getLength();
console.log(ans);

