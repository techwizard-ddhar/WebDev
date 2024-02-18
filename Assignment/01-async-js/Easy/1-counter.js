function counter(i){
    if(i>0){
        console.log(i)
        setTimeout(()=>{
            counter(i-1)
        }, 1000);
    }
}

counter(30);