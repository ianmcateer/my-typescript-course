# Arrays in Typescript

## typed arrays

Arrays where each element is some consitent type of value

generally we only stick same types inside of an array eg only an array of strings

we can technically put different types in array but we need to do a special type annotation for that scenario

## Examples

```
const carMakers = ['ford', 'toyota'];
```

ts will kick in and do type inference

```
const carMakers: string[]
```

```
const carMakers: string[] = ['ford', 'toyota'];
```

we might want to do type annotations when we are working with arrays if we initialize the array as an ampty array

ts wont have enough infrmation to know what type of values should be inside this array

```
const carMakers = []
```

if hover over it
ts will this type is : any[]

we want to avoid the any type as much as possible

we can also put complex objects inside as well

```
const dates = [new Date(), new Date()];
```

and 2d arrays

```
const carsByMake = [['f150'], ['corolla'], ['camaro']];
```

```
const carsByMake: string[][]
```

# Why typed arrays?

when we work with arrays we got advantages and downsides:

-   ts can do type inference when extracting values from an array
-   ts can prevent us from adding incompatible values to the array
-   we can get help with 'map' 'foreach' functions
-   flexible arrays can still contain multiple different types

```
// help with inference when extracting values
const car = carMakers[0];
// ts will know this is a string
```

also prevents incompatible values

```
// prevent incompatible values getting put into the array
// cant add element that is not one of the types
carMakers.push(100);
```

```
// we get alot of help with built in functions
carMakers.map((car: string) => {
	return car;
});
```

## Multiple Types in an Array

so arrays can be made flexibile can use miltiple types of value sinside of them

```
// flexible arrays
const importantDates = [new Date(), '2030-10-10'];
```

hover over it and you see

```
const importantDates: (string | Date)[]
```

should enter manutal annotation when create array and override type inference if you intend to put other types in the array

eg

```
const improtantDates: (Date | string)[] = [new Date()]
importantDates.push('2010-10-03)
```

want to avoid array of any type

## When to use Types Arrays

whenever we want to use a colleciton of records with some arbitrary sort order

there is a very similar data structure to arrays in typescript called tuples
