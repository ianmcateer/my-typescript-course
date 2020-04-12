# Interface

interface and classes is how we get really strong code reuse in typescript

interfaces: creates a new type describing the property names and value types of an object

```
// oject represents a car

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
	console.log(`name: ${vehicle.name}`);
	console.log(`year: ${vehicle.year}`);
	console.log(`broken?: ${vehicle.broken}`);
};

// void means function returns nothing

```

this type annotation here is really long
and can see how we end up duplicating it several times

## fixing long annotations with interfaces

to fix the long code we are going to define an interface
remember we are creating a new type

```

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`name: ${vehicle.name}`);
	console.log(`year: ${vehicle.year}`);
	console.log(`broken?: ${vehicle.broken}`);
};

```

TS will look through the argument and check the properties and ensure they match the interface

## Syntax around interfaces

we can expres any different type inside an interface

```
interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
}
```

we can also add functions

```
interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	// function called summary that returns a string
	summary(): string;
}
```

```
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return 'test';
	},
};
```

## Functions and Interfaces

```
const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary();
};

```

we are only referencing the summary method.
our function is only accessing this summary property
is it important to say that a vehicle must have these properties available?

if we delete the ones we arent using from the interface

```
interface Vehicle {
	summary(): string;
}
```

we dont get any errors in the file. why? it just checks if the object we pass has a method on it called summary that returns a string. doesnt matter if we have additional properties on the object we pass in

is the name Vehicle appropriate for this interface?

maybe more appropriate name is Reportable

```
interface Reportable {
	summary(): string;
}
```

```
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}
```

## Code Reuse With interfaces

lets define another new object called drink

```
// code reuasability

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `my drink has ${this.sugar} grams of sugar`
  }
}
```

this object and the other object both have a proeprty called summary they are both of type Recordable

we can use both of them with the function we defined down here

```
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(drink)
```

we can use a single interface to describe the shape of two very different objects

this encourages us to make generic looking functions and write more re-usable code with typescript

## General plan with interfaces

-   we have an interface Reportable
-   we have a printSummary function
-   Reportable is a gatekepper to 'printSummary'
-   the objects eg drink and oldCivic must satisfy the Reportable interface to work with 'printSummary'
