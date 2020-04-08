# What is a Type System

We need ot understand the syntax and features of the language
  - what is an interface
  - what is the syntax for defining an interface

Design Patterns with TS
  - this is what the course is mostly about

- plain defenition and overview
- why do we care
- examples
- when to use this


## Basic Types
easy way to refer to the different properties and functions that a value has

a value in JS and TS is anything we can assign to a variable, classes, arrays, null, undefined

all these have types, null has a type, an object has a type

"red"

what is inside this box with "red" in it?

- it is a string
- it is a value that has all the properties and methods that we assume a string has eg.length, indexOf
- when we refer to the type of a value it is a shortcut to refer to all the properties and methods that value has


```
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
```

here we created a new type and called it Todo, we didnt say it is an object that has id property,

"response.data" is a Todo

Types are shortcuts/labels 

## More on types
Some basic types:

- string: "hi there" ""
- number: .00024 -20
- boolean: true false
- Date: new Date()
- Todo: {id: 1, completed: boolean, title: "Trash"}

We have two different categories of types in TS:
- primtiive types: number, string, boolean, void, null, undefined, symbol
- object types: functions, arrays, objects, classes

object types are any types you and i create, or any object types build into the language itself

we can trick TS compiler in a good way- we can do this with object types only

## Why do we care about types?
Types are used to analyse our code for errors.
It allows other engineers to understand what values are flowing around our codebase

## Examples of Types

```
const today = new Date()
```

if however over it will tell you what type that value is pointing to

```
const today: date
```
lets try it with our own plain object
```
const person = {
	age: 20,
};

```
if hover over it, we dont get a nice name for the type bc we havent given it a shortened name
```
const person: {
    age: number;
}
```

