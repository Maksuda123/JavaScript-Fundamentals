class Person{//parent class
    constructor(name, age){
        this.name = name;//property
        this.age = age;
    }
eat() {//method
    console.log(`${this.name} is eating`);
}
}

class Cricketer extends Person{//sub class
    constructor(name, age, type, country){
        super(name, age);
        
        this.type = type;
        this.name = name;
        this.country = country;
        this.age = age;
    }
    eat() {//polmorphism
        console.log(`${this.name} is eating rice and vagitable`);
    }

    // eat() {//polmorphism
    //     super.eat();
    //     console.log(`${this.name} is eating rice and vagitable`);
    // }
}

let tamim = new Cricketer('Tamim', 23, 'All Rounder', 'BAngladesh');
tamim.eat();  
