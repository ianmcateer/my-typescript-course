# Understanding inference

whenever we make a new variable inside our applicaiton we are actually undergoing two seperate steps

1- variabel declaration
```
const color
```

2- variable initialiszation
```
color = 'red'
```

type inference- if we do both on the same line then TS will figure out the type of value we assign to color for us

TS will infer the type string 
```
const color = 'red'
```

TS will infer type any
```
let apples
apples = 'apples'
```

## when are we going to add these type annotations?
we rely on type inference ALWAYS

so we will write code like this as much as we can

```
let apples = 5;
```

we rely on annotations on three scenarios:
1. when we declare a variable on one line and then initialize it later
2. when a function returns the 'any' type and we need to clarify the value
3. when we want a variable to have a type that can be inferred

```
// 1. Function that returns the 'any' type
const json = '{"x": 10}';
const coordintions = JSON.parse(json);

```

TS will think that coordinates is of type any

also if you hoever over JSON.parse

```
(method) JSON.parse(text: string, reviver?: (this: any, key: string, value: any) => any): any
```
## What does the any type mean?

JSON.parse() can return a multitude of possible types

TS cannot predict these different types bc it depends on the string we put into the function. As a shortcut TS says you will get back the any type

any type = TS has no idea what type the value is 

- any is a type
- means TS has no idea what it is 
- avoid variables with any at all cost

types help us catch errors- if TS knows the types it can figure out if we are referencing the correct proeprties. TS cant help you out if it has a type any

## Fixing the any type

any type very bad thing to have in your applications

TS just cant predict what JSON.parse cant return.

we can add a type annotation to coordinates
```
const coordintions: { x: number } = JSON.parse(json);
```

this is the first case: we have to enter annotation when a function returns type any

## whenever we declare a variable on one line and iniitialise it after

type inference doesnt work when we delcare a variable on one like and initialise it later

```

let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

```

if hover over foundWord 

```
Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.
```

we have to add a type annotation to make it go away

```
let foundWord: boolean;
```

## final case: when we want a variable to have a type that can be inferred

```
// 3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}

```

type inference didnt understand the intent of the code
we can use an inference with the OR
```
let numberAboveZero: boolean | number = false;
```