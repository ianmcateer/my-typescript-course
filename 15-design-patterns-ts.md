# Design Pattersn in Typescript

-   goig to build first app
-   focus on design patterns
-   how to use TS effecticvely and use its features for re-usable code

we are going to make web app- going to randomly generate two different entities, a user and a company

every user in every company has a location property, then we show it on a google map. goal is to get better understanding of classes

going to use parcel-bundler to help get typescript run in the browser

```ts
npm install -g parcel-bundler
```

## Bundling with Parcel

go to terminal

-   create a folder
-   create a index.html fileand index.ts file
-   inside html file add a script tag for index.ts file

we cant have raw ts code in the browser- how does this work?

startup parcel and feed the index.html file into it- parcel is going to see the script tag and when it sees .ts it parses the code and turns it into javascript and runs that in the browser- awesome little tool setitng up little typescript projects easy

```
parcel index.html
```

should startup a server

three classes: User, Company and Map

create a new file in src called User.ts
use capital name because going to create and export a class from this file

## Generating Random Data

```ts
class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
}
```

will do initialisation inside constructor function instead of the same line

going to use a library called 'faker'

```
npm install faker
```

add it into the User.ts

```
import faker from 'faker';
```

might get error cannot find declaration file for faker

```
Could not find a declaration file for module 'faker'.
```

when we writing typescript code we can reference javascript files- but caveat
TS wants to check your code- it wants to know all the functions you have, alll the types of data flowing around your app

when using js code- not going to have type information attached to it- to fix this ts has idea of type defenition files- an adapter between TS code you write and Js files you work with

a type defenition file tells the ts compiler all the different functions available inside this js library, what type of argument they take and what type of value they return

some packages like axios include a type defeintion file by default

might have to add a type defenition file manually if not included by default for us

if you ever make use of a module and see the warning you need to install the type declaration file

vast majority of these type defenition libraries are available for you already

we reach into a project called defenitaly typed

in general we always install npm module generally named like this

```
@types/{library name}
```

```
@types/faker
```

```
npm install @types/faker
```

the warning should be gone now
