
class Input {
	constructor() {
		
	}
}

Input.key_pressed = {};
Input.key_down = {};
Input.key_released = {};

$(document).ready(function() {
	
	window.addEventListener("onkeydown", function(e) {
		Input.key_pressed[]
	}, false);
});

Input.GetKeyPressed = function(key) {
	if(Input.key_pressed[key] == undefined) {
		Input.key_pressed[key] = false;
	}
	return Input.key_pressed[key];
}