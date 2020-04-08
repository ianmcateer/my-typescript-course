# Type Annotations and Type Inference

These are essentially two different systems inside of typescript

They apply different to variables, functions and objects

Type annotations: some tiny bit of code we add to tell typescript what type of value a variable will refer to

Type inference: Typescript tries to automatically figure out what type of value a variable refers to

## Annotations with Variables

```
const apples: number = 5;
```

the : number is a type annotation. telling ts we are only ever going to assign number to the variable apples.

```
const  apples: number = true
```

we will get an error. Type: true is not assignable to type number

```
let apples: number = 5;

let speed: string = 'fast';
speed = 10;
// Type '10' is not assignable to type 'string'.

// the name is the same as the type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
// saying we have a variable named now and we are only ever going to assign it a value of type Date
let now: Date = new Date();

```
## Functions


## Objects