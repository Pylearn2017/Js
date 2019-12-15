/* * * * * * * * * * * * * * * * *
var message = 'Hello world!';
var name = 'Alex';
var age = 25;
console.log(message);
console.log('I am' + ' ' + name + ' ' + age);


var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(name );	
alert('Hello!');

var answer = prompt('Yes or not?');
console.log('The answer is ' + answer);

var year, yearJhon, yearMark;
now = 2019

// math operators
yearJhon = now - 25;
yearMark = now - 33;
ageJonh = 28;
ageMark = 33;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

var jhonOlder = ageJonh > ageMark;
console.log(jhonOlder);

// typeof operator
console.log(typeof jhonOlder);
console.log(typeof now);
console.log(typeof 'String');

/* * * * * * * * ** * * *
Operators precedence
* * * * * * * * * * ** */
/* * * * * * * * ** * * *
var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

var isFullAge = now - yearJhon >= fullAge;
console.log(isFullAge)

/* * * * * * * * * * * * * * * * *
How has heigher Body Mass Index?!
* * * * * * * * * * * * * * * * */


// var massMark, massJohn;
// var heightMark, heightJohn;

// massMark = prompt('What is the mass of Mark?');
// heightMark = prompt('What is the height of Mark?');
// var calculateMarkBMI = massMark / heightMark**2;

// massJohn = prompt('What is the mass of John?');
// heightJohn = prompt('What is the height of John?');
// calculateJohnBMI = massJohn / heightJohn**2;

// var ifHeigher =  calculateMarkBMI >= calculateJohnBMI; 

// console.log('Is Mark\'s BMI higher than John\'s?' + ' \n' + ifHeigher);



// If-else-if-else statmetnts

// var light = '234';

// if (light === 'green') {
// 	console.log('go');
// } else if (light === 'yellow') {
// 	console.log('wait');
// } else if (light === 'red') {
// 	console.log('stop')
// } else {
// 	console.log('something was wrong')
// }




// var hoursNow = 21;
// var today = 'monday';

// if (hoursNow < 7) {
// 	console.log('You have to sleep!');
// } else if (hoursNow >= 7 && hoursNow <= 10 && (!today === 'monday') ) {
// 	console.log('You have to go to work!');
// } else if (hoursNow >= 7 || today === 'friday') {
// 	console.log('Just relax..');
// }


var firstScoredJohn = 89;
var secondScoredJhon = 120;
var thirdScoredJhon = 103;

var firstScoredMike = 116;
var secondScoredMike = 94;
var thirdScoredMike = 123;

var firstScoredMary = 97;
var secondScoredMary = 134;
var thirdScoredMary = 105;

var avarageScoredJhon = (firstScoredJohn + secondScoredJhon + thirdScoredJhon) / 3;
var avarageScoredMike = (firstScoredMike + secondScoredMike + thirdScoredMike) / 3;
var avarageScoredMary = (firstScoredMary + secondScoredMary + thirdScoredMary) / 3;

// console.log(avarageScoredJhon, avarageScoredMike, avarageScoredMary)

if (avarageScoredJhon > avarageScoredMike) {
	if (avarageScoredJhon > avarageScoredMary) {
		console.log('The Jhon\'s team is winer');
	} else if (avarageScoredMary > avarageScoredJhon) {
		console.log('The Mary\'s team is winer');
	} else {
		console.log('The same average score');
	}
} else if (avarageScoredMike > avarageScoredJhon) {
	if (avarageScoredMike > avarageScoredMary) {
		console.log('The Mike\'s team is winer');
	} else if (avarageScoredMary > avarageScoredJhon) {
		console.log('The Mary\'s team is winer');
	} else {
		console.log('The same average score');
	}
} else if (avarageScoredMary > avarageScoredJhon) {
	if (avarageScoredMike > avarageScoredMary) {
		console.log('The Mike\'s team is winer');
	} else if (avarageScoredMary > avarageScoredJhon) {
		console.log('The Mary\'s team is winer');
	} else {
		console.log('The same average score');
	}
} else {
	console.log('The same average score');
}



// swith?!
