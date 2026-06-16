//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get getter(){
		return this.species;
	}

	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	bark(){
		console.log("woof");
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();


myCat.purr();



const myDog = new Dog("Golden Retriever");
myDog.makeSound();


myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
