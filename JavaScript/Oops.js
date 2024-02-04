/*class Car {    
    constructor(model, price, city) {

        this.model = model;
        this.let = price;
        this.city = city;
        switch (city) {
            case "delhi":
                console.log(`${model} takes ${price + price * 0.1}`);
                break;
            case "mumbai":
                console.log(`${model} takes ${price + price * 0.09}`);
                break;
            case "bangalore":
                console.log(`${model} takes ${price + price * 0.5}`);
                break;
        }
    }

    static metaData(age, gender) {
        if (gender === 'male' && age > 18) {
            return `Only ${gender} of age above ${age} are allowed to drive`;
        } else {
            return `You are not allowed to drive`;
        }
    }

}


const myCar = new Car("Verna", 1200, "mumbai");

// static method can be accessible by class name
console.log(Car.metaData(24, 'female'));*/


class rectangle {
    constructor(l, b) {
        this.length = l;
        this.breadth = b;
        
    }

    AreaOfRect() {
        return this.length * this.breadth;
    }
}

class cuboid extends rectangle {
    constructor(l, b, ht) {
        super(l, b);
        this.height = ht;
        
    }

    AreaOfCuboid() {
        return this.AreaOfRect() * this.height; // Call AreaOfRect as a method and use return
    }
}

let myCuboid = new cuboid(2, 4, 8);

let res = myCuboid.AreaOfCuboid();
console.log(res); // Output: 64

let res1 = myCuboid.AreaOfRect();
console.log(res1); // Output: 8

