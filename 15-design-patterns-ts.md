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
npm install -g faker
```
