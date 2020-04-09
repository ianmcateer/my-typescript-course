# Void and never

```
const logger = (message: string) => {
	console.log(message);
};
```

just console log it doesnt retun anoything. to annotate this as a return type we put : void. a funciton thet returns type void can return null or undefined

```
const logger = (message: string): void => {
	console.log(message);
};

```

when you throw an error the function wont technically return anything
```
const throwError = (message: string) => {
	throw new Error(message);
};
```
to annotate this we could add type annotation :never

```
const throwError = (message: string): never => {
  throw new Error(message)
}
```
:never means never going to never goig to reach the end of this function- at some point we are going to exit the function early without returning a value

this is a rare corner case- very rare you are going to want to throw an error like this- much more common to have some return value in here

```
const throwError = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

```
we can still annotate as a stirng even though it might throw an error. 

The primary reason to use 'never' is when you have a function that is expected to always throw an error (as shown in the video). 

Why would we have a function that throws an error?  We might want one if we expect to throw the same kind of error many times in an app.  For example:

```
const add = (a: number, b: number) => {
  if (typeof a != 'number' || typeof b != 'number') {
    invalidArgumentError();
  }
  return a + b;
};

const invalidArgumentError = (): never => {
  throw new Error('Invalid argument provided.  Expected a number');
}
```

## Destructuring with Annotations
```
const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logweather = (forecast: { date: Date; weather: string }) => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(forecast)
```

we could destructure using es6

```
// es2015
const logWeather = ({ date, weather }) => {
	console.log(date);
	console.log(weather);
};

```

all we have to do is replace the variable itself with the actual destructuring statement 

```
const logWeather2 = ({ date, weather }: { date: Date; weather: 'string' }): void => {
	console.log(date);
	console.log(weather);
};
```