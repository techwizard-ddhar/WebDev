function greet(FirstName, LastName){
    console.log(`Good Morning ${FirstName} ${LastName}`)
}

greet("Debanjan", "Dhar");


for(var i = 0; i <= 1000; i++)
{
    console.log(i);
}


function greetgender(name){
    var gender = name;
    
    switch(gender){

        case "uncle":
            console.log("Hello uncle");
            break;
    
        case "aunty":
            console.log("Hello aunty");
            break;
    
        case "sister":
            console.log("Hello sis");
            break;
    
        default:
            console.log("Not specified");
            break;
    }
}

greetgender("dj");


