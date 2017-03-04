$(document).ready(function() {
	$('#rocket').click(function() {
		spin();
	})
});

var currentAngle = 0;
var rotateAngle = 60;

var minSteps = 6;
var maxSteps = 60;

function spin() {
	var steps = getSteps()
	for (var i = 0; i < steps; i++) {
		rotateRocket();
	}
}

function rotateRocket() {
	var newAngle = currentAngle + rotateAngle;

	$('#rocket').animate({
		'rotate': newAngle + 'deg'
	}, 50);
	currentAngle = newAngle;
}

function getSteps() {
	var steps = Math.floor((Math.random() * (maxSteps - minSteps)) + minSteps);
	console.log(steps);
	return steps;
}