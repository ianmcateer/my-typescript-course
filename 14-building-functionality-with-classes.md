# Classes

a class is a blueprint to create an object with some fields and methods attached to it to represent a 'thing'

1. going to learn about fields and methods
2. define a set of fields (values) and methods

```
class Vehicle {
	drive(): void {
		console.log('chugga chugga');
	}
}

const vehicle = new Vehicle();
vehicle.drive();

```

```
ts-node classes.ts
```

## Basic Inheritance

a car would be a type of vehicle, it should honk and drive as well.

we want cat to have some methods of vehicle

we can have it extend vehicle so it takes all the methods

```
class Car extends Vehicle {}

const car = new Car();
car.drive();
car.honk();

```

we can overide different methods on the child class

```
class Car extends Vehicle {
drive(): void {
	console.log('vroom');
}
}
```

## Instance Method Modifiers

lets discuss differences between es2015 classes and classes TS

modifies are different keywords we can place on different methods and properties inside a class: public private and protected

the goal of these modifiers is to restrict access to different functions or different variables

by default every method and proeprty we add to a class has the public modifier on it

it assumes it is all public if we dont add the modifier itself- that method can be called anywhere anytime

if a method is private that method can only be called by other methods in this class

protected means the method can be called y other methods in this class, or by other methods in child classes

```ts
class Vehicle {
	public drive(): void {
		console.log('chugga chugga');
	}
	public honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {
	public drive(): void {
		console.log('vroom');
	}
}

const car = new Car();
car.drive();
car.honk();
```

this change snothing bc public si the default

lets try private

```
class Vehicle {
	private drive(): void {
		console.log('chugga chugga');
	}
	private honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle();
vehicle.drive();

```

```
Property 'drive' is private and only accessible within class 'Vehicle'.
```

we can never call this method outside of this class, only inside a method in that class

if we have a child class that has a method the same name as the parent, we cannot change the modifier in the child class

## Why do we care about this?

we do not mark methods as private over concerns over hacking lol

we are not adding in any layer of privacy- we are just restricting different methods other developers can call. a method may deeply manipulates the class- we might not want other developers to call this method- we will mark it as being private

what does protected do?? with protected is just like private but we can access the method in child clases, but still cant be accessed anywhere outside of that child class eg on the instance of the class

## Fields inside Classes

```
class Vehicle {
	protected honk(): void {
		console.log('beep');
	}
	color: string = 'red';
}

```

the instance of the vehicle will have a property on it called color

we might want to add the color when we initialise the instance

if we are going to pass in any arguments we have to define a special funciton inside the class defenition called constructor

the constructor function is a very special function defined inside of a class. any time we define the constructor it will be instantly executed right when we create a new instance of the class. so as soon as we call new vehicle the constructor function will run, and the arguments to that function will be whatever we pass in when we create the instance,

we will take that value and do some assignment with it

if we used constructor we do not need to initliase it anywhere else. either you are going to initialise a property on the same line you define it or youre going to initialise it inside the constructor

```
class Vehicle {
	color: string;
	constructor(color: string) {
		this.color = color;
	}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');

```

theree is a shortcut to automate this entire process right here

```
class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

```

public can be used on fields as well- this syntax means we are going to take whetever comes in as the furst argument and will be assigned as an instance variable called color

the code is the same as before just shortened up

## Fields with Inheritance

```
class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}
}

const car = new Car();
car.startDrivingProcess();

```

we get an error

```
constructor Car(color: string): Car
Expected 1 arguments, but got 0.
```

class extends vehicle- we have to provide it with a string that will serve as a color
car doesnt have a constructor function- it calls the constructor of the parent function

```
class Car extends Vehicle {
	constructor(public wheels: number) {}
	private drive(): void {
		console.log('vroom');
	}
}

const car = new Car();
car.startDrivingProcess();

```

```
Constructors for derived classes must contain a 'super' call.
```

super is a reference to the super class or the parent class of car which is Vehicle so whenever we call the csotructor of the child class we are required ot call the cosntructor of the parent class

```js
class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
	constructor(public wheels: number) {
		super('red');
	}
	private drive(): void {
		console.log('vroom');
	}
}

const car = new Car(4);

```

but we probaly want color to come in as an argument to car when we create it

```ts
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log('vroom');
	}
}

const car = new Car(4, 'red');
```

## Where to use Classes

with classes and interfaces, we get really strong code reuse in TS
