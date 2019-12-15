function tipCalculator (bill) {
	bill <= 50 ? tip = bill * 0.20 : 
	bill >= 50 && bill < 200 ? tip = bill * 0.15 :
	bill >= 200 ? tip = bill * 0.10
	return tip
}

firstTip = tipCalculator(124)
consol.log(firstTip)