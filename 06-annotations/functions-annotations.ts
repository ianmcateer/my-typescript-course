const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a - b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string) => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logweather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

// es2015
const logWeather = ({ date, weather }) => {
	console.log(date);
	console.log(weather);
};

const logWeather2 = ({ date, weather }: { date: Date; weather: 'string' }) => {
	console.log(date);
	console.log(weather);
};
