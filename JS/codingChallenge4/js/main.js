var mark = {
	firstName:'Mark',
	lastName:'Mikels',
	mass: 80,
	height: 1.8,
	getBmi: function() {
		this.bmi = this.mass / this.height**2;
	},
	returnBmi: function() {
		bmi = this.mass / this.height**2;
		return bmi;
	},

};

var john = {
	firstName:'John',
	lastName:'Smith',
	mass: 93,
	height:1.86,
	getBmi: function() {
		this.bmi = this.mass / this.height**2;
	},
	returnBmi: function() {
		bmi = this.mass / this.height**2;
		return bmi;
	},
};

mark.getBmi();
john.getBmi();

switch (true) {
	case (mark.bmi > john.bmi):
		console.log('The ' + mark.firstName + ' ' + mark.lastName + ' is' + 'BMIst');
		break;
	case (john.bmi > mark.bmi):
		console.log('The ' + john.firstName + ' ' + john.lastName + ' is' + ' BMIst ');
		break;
	default:
		console.log('The same BMI');

};
