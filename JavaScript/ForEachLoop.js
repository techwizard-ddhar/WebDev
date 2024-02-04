//for each loop

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

staffsDetails.forEach((val)=>{
    let sentence = `My name is ${val.name} from KIIT`
    console.log(sentence)
});

staffsDetails.forEach((val, index) =>{
    let sentence = `${index} My name is ${val.name} from KIIT age is ${val.age}`
    console.log(sentence)
});


staffsDetails.forEach((val) => {
    if (val.salary >= 4000) {
        console.log(val.name);
    }
});


let numbers = [1,2,3,4,5,6]

numbers.forEach((val, index)=>{
    let str = `${index} : Square of ${val} is : ${val * val}`
    console.log(str)
});


//array of objects

const peopel = [
    {firstname : 'Rahul', lastname : 'Das', gender : 'male'},

    {firstname : 'pranjal', lastname : 'Dey', gender : 'male'},

    {firstname : 'Nikita', lastname : 'shit', gender : 'female'},

    {firstname : 'Rishi', lastname : 'raj', gender : 'male'}
];

peopel.forEach((obj)=>{

    if(obj.gender == 'male'){
        console.log(obj.firstname)
    }
});

