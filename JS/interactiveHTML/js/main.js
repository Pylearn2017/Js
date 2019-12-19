var leftOffset = 0;

var moveHeading = function() {
	$('#headiText').offset({left:leftOffset})
	leftOffset++;
	if (leftOffset > 200) {
		leftOffset = 0;
	}
};

setInterval(moveHeading, 30)