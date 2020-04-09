// 1. Function that returns the 'any' type
const json = '{"x": 10}';
const coordintions: { x: number } = JSON.parse(json);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
