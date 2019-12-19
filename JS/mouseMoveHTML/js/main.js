$('html').mousemove(function(event) {
	$('#headiText').offset({
		left: event.pageX,
		top: event.pageY
	});
});
