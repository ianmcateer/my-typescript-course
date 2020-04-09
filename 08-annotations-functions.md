# Annotations and Functions

```
// Functions
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};
// this syntax is pretty nasty
// we have provided an annotation- a description of the function
```

This is how we add type annotations to the ***variable*** holding the functions. its going to acontain a function that has some variables and returns some value. 

now focusong on the right side- how we add annotation to the function itself- its input arguments and the return values itself

## Functions and infererence

type annotations:
- code we are adding in to help TS along- the type of arguments a function will receive and the type of value it will return

type inference:
- is the automatic  system where TS will try to figure out what is going on for us- the samesystem applies to functions as well but one diff- type inference only works around the rturn value of the function, but not the arguments 

```
const add = (a, b) => {
	return a + b;
};

```

TS has no idea what type a or b is. if hover over a or b

```
Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage.
```

```
const add = (a: number, b: number): number => {
	return a + b;
};

```

## Inferences around function

- we are always going to annotate every single argument
- as well as the return type

```
const add = (a: number, b: number): number => {
	return a + b;
};
```

we wrote a funciton add- TS can ensure we are returning the correct type of value but doesnt try to make sre we have the correct type of object, we could subtract but TS doesnt care about that.

