// sintax forLoop
/****************
for(var i = 0; i < 10; i++) {
	console.log('hello' + i);
}
***/

// Awesome animals
/*****************
var animals = [
	'Canidae',
	'Felidae',
	'Cat',
	'Cattle',
	'Dog',
	'Donkey',
	'Goat',
	'Horse',
	'Pig',
	'Rabbit',
	'Aardvark',
	'Albatross',
	'Alligator',
];

for (var i = 0; i < animals.length; i++) {
	animals[i] = 'The ' + animals[i] + ' is awesome animal!';
}
console.log(animals);
***/ 

// Random string generator
/*************************
var chars = 'qwertyuiopasdfghjklzxcvbnm';
var randomString = '';

var i = 0;
while (i <= 10) {
	randomString += chars[Math.floor(Math.random() * chars.length)];
	i++
}
console.log(randomString);
***/

var string = 'The secret message, cause javascript is awesome';
var output = '';
for(var i = 0; i < string.length; i++) {
	if (string[i] === 'a') {
		output += '4';
	} else if (string[i] === 'e') {
		output += '3';
	} else if (string[i] === 'i') {
		output += '1';	
	} else if (string[i] === 'o') {
		output += '0';
	} else {
		output += string[i]	
	}
		// switch (true) {
	// 	case (string[i] === 'a'):
	// 		output += '4';
	// 		break;
	// 	case (string[i] === 'e'):
	// 		output += '3';
	// 		break;
	// 	case (string[i] === 'i'):
	// 		output += '1';
	// 		break;
	// 	case (string[i] === 'o'):
	// 		output += '0';
	// 		break;	
	// 	default:
	// 		output += string[i]	
	// }
}
console.log(string)
console.log(output)