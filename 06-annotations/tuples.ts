const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// could alternatively
// const pepsi = ['brown', true, 40];
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// alternative way
// create a type alias
// rather than having to repeat the defnition each time we want to create a drink
type Drink = [string, boolean, number];
// this does not create an array, we are creating a brand new type
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
	horsePower: 400,
	weight: 3354,
};
