# Tuples in Typescript

tuples are very similar data structure
they are array like structure where each element represents some propety of a record

an array represents a collection of different records, a tuple usually contains multipe different proeprties to describe one single thing

lets say we have an object representing a drink

```
drink object

color: brown
carbonated: true
sugar: 40
```

one object represents one dirnk
lets say want to take this object and try to represent it with a different data structure
with an array instead

```
[brown, true, 40]
```

we have lost a little bit of information, we lost the property labels
we woul dhave to memories the labels and their order

this is a tuple- we have what looks like an array but we put the property values into that array in a specific order- the order part is very critical

we have a fixed order with a tuple

## Tuples in Action

const drink = {
color: 'brown',
carbonated: true,
sugar: 40,
};

// could alternatively
const pepsi = ['brown', true, 40];

hover

```
const pepsi: (string | number | boolean)[]
```

but problem is we add code that changes this order we have lost the information- our data model breaks down if we break the order

to solve this we are going to add an annotation to this thing- turns it into a tuple

```
const pepsi: [string, boolean, number] = ['brown', true, 40];
```

there is meaning to the order of elements now- if we try change the order we will get an error message now

```
// alternative way
// create a type alias
// rather than having to repeat the defnition each time we want to create a drink
type Drink = [string, boolean, number];
// this does not create an array, we are creating a brand new type
const pepsi: Drink = ['brown', true, 40];

```

```
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];
```

we dont use tuples very often

## Why tuples?

not a huge fan of tuples- csv file might be a good case might want to use a tuple

```
const carSpecs: [number, number] = [400, 3354];
```

what do these numbers mean to you?
as engineers we cant understand what is going on here

```
const carStats = {
	horsePower: 400,
	weight: 3354,
};

```

its more clear now using an object
