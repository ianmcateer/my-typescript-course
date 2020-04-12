const carMakers = ['ford', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
// ts will know this is a string

// prevent incompatible values
carMakers.push(100);

// we get alot of help with built in functions
carMakers.map((car: string) => {
	return car;
});

// flexible arrays
const importantDates = [new Date(), '2030-10-10'];
