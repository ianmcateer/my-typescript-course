# Annotations and Objects

```
const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

```

lets try destrucutre and pull properties off this object

```
const { age } = profile;
```

if we really wanted to put a type annotation on here for some reason we could

```
const { age }: { age: number } = profile;
```
this looks different to what we know
when we want to use destrucuting we have to write out the expected structure 
of profile over here

lets also destructure the lat and lng

```
const {
	coords: { lat, lng },
} = profile;
```
lets take this destructuring further
```
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

```