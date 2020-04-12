// oject represents a car

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `${this.name}`;
	},
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
// 	console.log(`name: ${vehicle.name}`);
// 	console.log(`year: ${vehicle.year}`);
// 	console.log(`broken?: ${vehicle.broken}`);
// };

// void means function returns nothing

interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	// function called summary that returns a string
	summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary();
};

printVehicle(oldCivic);

// code reuasability

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `my drink has ${this.sugar} grams of sugar`
  }
}