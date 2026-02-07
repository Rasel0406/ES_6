class Dog {
    constructor(name,age,breed){
        this.name=name;
        this.age=age;
        this.breed=breed;
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}
class Cat{
    constructor(name,age,color){
        this.name = name;
        this.age=age;
        this.color = color;
        }
        meow(){
            console.log(`${this.name} is meowing`);
        }
}
 class Bird{
    constructor(name,age,type){
        this.name = name; 
        this.age = age;
        this.type = type;
    }
    fly(){
        console.log(`${this.name} is flying`);
    }
 }
const dog1 = new Dog("Tommy",3,"Bulldog");
console.log(dog1);
dog1.bark();
const cat1 = new Cat("Kitty",2,"White");
console.log(cat1);
cat1.meow();
const bird1 = new Bird("Tweety",1,"Canary");
console.log(bird1);
bird1.fly();