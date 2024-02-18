function getLength(name){
    return name.length;
}

try{
    const ans = getLength();
    console.log(ans);
}catch(error){
    console.log(error.message)
}

console.log("No matter what i will always get execute")