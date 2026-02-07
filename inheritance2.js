class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
      eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog  extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed=breed;
    }
  
    bark(){
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
        }
        meow(){
            console.log(`${this.name} is meowing`);
        }
}
 class Bird extends Animal{
    constructor(name,age,type){
        super(name,age);
        this.type = type;
    }
    fly(){
        console.log(`${this.name} is flying`);
    }
 }
const dog1 = new Dog("Tommy",3,"Bulldog");
console.log(dog1);
dog1.bark();
dog1.eat();
const cat1 = new Cat("Kitty",2,"White");
console.log(cat1);
cat1.meow();
cat1.eat();
const bird1 = new Bird("Tweety",1,"Canary");
console.log(bird1);
bird1.fly();
bird1.eat();