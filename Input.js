
class Input {
	constructor() {
		
	}
}

Input.key_pressed = {};
Input.key_down = {};
Input.key_released = {};

$(document).ready(function() {
	
	window.addEventListener('keydown', function(e) {
		console.log("key" + e.keyCode);
		Input.key_pressed[e.keyCode] = true;
	}, false);
});

Input.Clear = function() {
	for(var key in Input.key_pressed) {
		Input.key_pressed[key] = false;
	}
	for(var key in Input.key_released) {
		Input.key_released[key] = false;
	}
}

Input.GetKeyPressed = function(key) {
	if(Input.key_pressed[key] == undefined) {
		Input.key_pressed[key] = false;
	}
	return Input.key_pressed[key];
}