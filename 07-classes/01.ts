class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log('vroom');
	}
}

const car = new Car(4, 'red');
