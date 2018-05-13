
class Input {
	constructor() {
		
	}
}

Input.keys = {};
Input.key_pressed = {};
Input.key_down = {};
Input.key_released = {};
Input.mouse_down = {};

$(document).ready(function() {
	
	window.addEventListener('onkeypress', function(e) {
		console.log("keypress" + e.keyCode);
		Input.keys[e.keyCode].pressed = true;
	}, false);
	window.addEventListener('onkeydown', function(e) {
		console.log("keydown" + e.keyCode);
		Input.keys[e.keyCode].down = true;
	}, false);
	window.addEventListener('onkeyup', function(e) {
		console.log("keyup" + e.keyCode);
		Input.keys[e.keyCode].released = true;
	}, false);
	
	_canvas.addEventListener('mousedown', function(e) {
		console.log('mousedown ' + e.button);
		
	}, false);
});

Input.lateUpdate = function(){
	// reset key presses
	for (var key in Input.keys) {
		// skip loop if the property is from prototype
		if (!keys.hasOwnProperty(key)) continue;
		
		Input.keys[key].pressed = false;
		Input.keys[key].released = false;
	}
}

//Input.Clear = function() {
//	for(var key in Input.key_pressed) {
//		Input.key_pressed[key] = false;
//	}
//	for(var key in Input.key_released) {
//		Input.key_released[key] = false;
//	}
//}

Input.GetKeyPressed = function(key) {
	if(Input.keys[key] === undefined) {
		Input.keys[key].pressed = false;
	}
	return Input.keys[key].pressed;
}
Input.GetKeyDown = function(key) {
	if(Input.keys[key] === undefined) {
		Input.keys[key].down = false;
	}
	return Input.keys[key].down;
}
Input.GetKeyReleased = function(key) {
	if(Input.keys[key] === undefined) {
		Input.keys[key].released = false;
	}
	return Input.keys[key].released;
}