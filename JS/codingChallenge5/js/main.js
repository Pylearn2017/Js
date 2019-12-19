var calculateFinalPaid = function(bills, tips) {
	let finalPaid = [];
	for(i in bills) {
		finalPaid.push(tips[i] + bills[i]);
	}
	return finalPaid;
};
var calculateAverageTip = function(tips) {
	let averageTip = 0;
	for(i in tips) {
		averageTip += tips[i];
	};
	averageTip = averageTip/tips.length;
	return averageTip;
};

var billValuesJohn = {
	bills:[124, 48, 268, 180, 42],
	tipCalculatorJohn: function(bill) {
		if(bill <= 50) {
			tip = bill * 0.20;
		} else if(bill >= 50 && bill < 200) {
			tip = bill * 0.15;
		} else if (bill >= 200) {
			tip = bill * 0.10;
		} else {
			tip = 1;
		}
		return tip;
	},
	tipsCalculator:function() {
		let tips = [];
		for(i in this.bills) {
			tips.push(Math.floor(this.tipCalculatorJohn(this.bills[i])));
		}
		this.tips = tips;
	},
	calculateFinal: function() {
		this.finalPaid = calculateFinalPaid(this.bills, this.tips);
	},
};
billValuesMark = {
	bills:[77, 375, 110, 45],
	tipCalculatorMark: function(bill) {
		if(bill <= 100) {
			tip = bill * 0.20;
		} else if(bill >= 100 && bill < 300) {
			tip = bill * 0.10;
		} else if (bill >= 300) {
			tip = bill * 0.25;
		} else {
			tip = 1;
		}
		return tip;
	},
	tipsCalculator:function() {
		let tips = [];
		for(i in this.bills) {
			tips.push(Math.floor(this.tipCalculatorMark(this.bills[i])));
		}
		this.tips = tips;
	},
	calculateFinal: function() {
		this.finalPaid = calculateFinalPaid(this.bills, this.tips);
	},	

}
billValuesJohn.tipsCalculator();
billValuesJohn.calculateFinal();
billValuesMark.tipsCalculator();
billValuesMark.calculateFinal();
calculateAverageTip(billValuesJohn.tips) > calculateAverageTip(billValuesMark.tips) ? 
console.log('John\'s family paid the highest tips on average') : 
console.log('Marks\'s family paid the highest tips on average');