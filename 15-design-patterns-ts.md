# Design Pattersn in Typescript

- goig to build first app
- focus on design patterns
- how to use TS effecticvely and use its features for re-usable code

we are going to make web app- going to randomly generate two different entities, a user and a company

every user in every company has a location property, then we show it on a google map. goal is to get better understanding of classes

going to use parcel-bundler to help get typescript run in the browser

```ts
npm install -g parcel-bundler
```

## Bundling with Parcel

go to terminal

- create a folder
- create a index.html fileand index.ts file
- inside html file add a script tag for index.ts file

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

## Using Type Defenition Files

the warning should be gone now

faker turns into a clickable link of sorts- click and get taken to type defenition file

d.ts is file extension means type defenition file

only goal of this file is desrcibe functions classes that exist inside the library- only see a defenition of the different types that are available

```ts
declare namespace Faker {
	interface FakerStatic {
		locale: string;
		setLocale(locale: string): void;

		address: {
			zipCode(format?: string): string;
			city(format?: number): string;
			cityPrefix(): string;
			citySuffix(): string;
			streetName(): string;
			streetAddress(useFullAddress?: boolean): string;
			streetSuffix(): string;
			streetPrefix(): string;
			secondaryAddress(): string;
			county(): string;
			country(): string;
			countryCode(): string;
			state(useAbbr?: boolean): string;
			stateAbbr(): string;
			latitude(): string;
			longitude(): string;
		};
```

```ts
import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }
}
```

get an error for long and lat

```
Type 'string' is not assignable to type 'number'
```

the type defenition lng and lat are functions that returns strings
we need to convert them to a number

```ts
import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lng: Number.parseFloat(faker.address.longitude()),
    };
  }
}
```

## Export Statemenets in Typescript

```ts
export class User
import {User} from './User'
```

default keyword- we didnt provide the name for the value we are going to export

```
export default
```

can name it anything we want when we import it
in TS we usually dont use these default statemenets, cna get confusing when to use curly braces

community convention in TS world is to never use default exports
that way never have to worry about whether to use curly braces or not

rule doesnt apply to npm modules

```
import faker from 'faker';

export class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: Number.parseFloat(faker.address.latitude()),
			lng: Number.parseFloat(faker.address.longitude()),
		};
	}
}

```

```
import { User } from './User';
const user = new User();

console.log(user);

```

## Defining a Company

lets do the same for company now

```ts
import faker from "faker";

class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lng: Number.parseFloat(faker.address.longitude()),
    };
  }
}
```

import in index.ts and create a company index

## Get Google Map to Show on Screen

```ts
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(company);
```

pre generated api key google developer

```
AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
```

1. generate a google dev project: http://console.developers.google.com
2. enable google maps suppor tin project
3. generate api key
4. add google maps script tage to html file
5. add to html

```html
<html>
  <body>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"></script>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

script aded as global variable in project
inside our console google is available
the only issue is in the editor when we type out google we get an error

we need to help typescript understand that there will be a global variable inside our porject

```
cannot find name google
```

we need to install a type defenition file - to help js understand how a third party library works as well as script tags

go to npm

```
@types/googlemaps
```

will tell ts there is a global variable called google

```
/// <reference types="@types/googlemaps" />
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
google;

```

we see namespace: google when we hover on it

## exploring type defeniiton Files

add a div

```html
<html>
  <body>
    <div class="map" style="height: 100%;"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"></script>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

inside index.ts

```ts
/// <reference types="@types/googlemaps" />
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
```

\*\* Hiding Functionality

lets look at total things we can do in our index.ts file
our user and company we only have not so many methods and oroerties we created
what about th einstance of the map we created?

the instance map has alot of methods on it- eg setZoom, setCenter.

another engineer could look at the cool methods available on map and very easily break our application

as sole developer of applicaiton we havent vetted these methods - maybe if we found out a way to limit other engineers access to these methods would decrease the chances of our application breaking

maybe we should create a new class called map- our own custom map class- this custom class creates a new instance of a google map and also in that map class can add a method add marker

Map- new class we are going to create- inside it will create a google map- that way all those dangerous methods are hidden and wrapped up and hidden behind the fascade - only thing you can do is use our custom map class- more challenging for someone to break things

## Why Use Private modifiers

custom map wil internally create a googlemap for us- we dont want other engineers to access google map directly

so only thing we can do in index file is

1. create a COmpany reference its properties
2. create a User reference its properties
3. create a customMap and add a marker to it

create a new file called CustomMap
we want our CustomMap to be able to work with the Google Map

```ts
export class CustomMap {
  // saying that google map is going to be an instance of that class
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
```

remember by default a property in a class has a modifier of public- means anyone otuside can directly access and access different properties and methods on it

we dont want tengineer to access it so want to make it private- so that it is not able to be referenced from outside the class

now in index.ts

```
import { CustomMap } from './CustomMap';

const customMap = new CustomMap();
```

we cant access the googleMap property now

lets make the id we want to select an argument to the CustomCLass to make it more re-usable

```
/// <reference types="@types/googlemaps" />

export class CustomMap {
	// saying that google map is going to be an instance of that class
	private googleMap: google.maps.Map;

	constructor(elementId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(elementId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}
}

```

## Adding Markers

going to add some methods to it to add a marker onto the screen
going to first write bad code first for creating markers

we can use the class to refer to the type as well
so can be a value and a type as well

```ts
/// <reference types="@types/googlemaps" />
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  // saying that google map is going to be an instance of that class
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  addCompanyMarker(company: Company): void {}
}
```

```ts
import { User } from "./User";
// import { Company } from './Company';
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const user = new User();
customMap.addUserMarker(user);
```

now going to use same code to add marker for company

```ts
/// <reference types="@types/googlemaps" />
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  // saying that google map is going to be an instance of that class
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
```

```ts
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
```

can see that we now have duplicate code now
now going to fix bad code. we have two different methods ton of duplication between them

```ts
addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
```

what does the or do?

anytime we use an or operator- on that argument ts will take a look at the two different types and going to say can only refer to properties on that argument if they exist on both these different types

comapny:

- catchPhrase
- companyName
- location

user:

- name
- location

ts says we cannot refer to catchPhrase and company name and name because they dont exist on BOTH the types, only allowed to refer to the location type. ts will limit number of properties can refer to on this argument we pass in

```ts
mappable.
```

will only list our location- this is the only commonality between User and Company- couldnt refer to a users name

this works well for us because the only thing we care about here is location

downside to this approach-
what would happen if we started to have other things like CarLot, PArk

we would have to add additional or label to include these new types and also import each one into the file

so this approach is not very scalable- tight coupling between our map class and every other class inside our applicaiton that we want to show on the map

## Restricting Access with Interfaces

CustomMap depends upon User and Company

rather than custommap depending on these classes we are going to say if you want to work with Map you have to satisfy the maps requirements

at top of CustomMap we are going to add in some configuration - some instrucitons on how an obect can be an argument to the CustomMap function

to show up on the map you have to have a location proeprty, that has a lat and lng property on that object, we are going to make use of interfaces

interface can behave like gatekepper to define what it means to be mappable

## Implementation

```ts
// instructions on every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // saying that google map is going to be an instance of that class
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
```

```ts
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
```

## Implicit Type Checks

we now have a standalone custom map class we can use on new projects as well- not couple to Company, Class anymore

```ts
customMap.addMarker(user);
customMap.addMarker(company);
```

checks user and company see if they are of type Mappale interface

## Showing Popup Windows

- showing how click on marker show some relevant information about that marker
- can read type file or documentation on info windows
  InforWIndow is the class that represents the popup window- passing in content to display- create the marker then add the event listener

```ts
addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "hi there",
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
```

downside- no customised popup yet, but it works
