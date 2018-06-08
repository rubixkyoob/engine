/*

Source from:
https://gist.github.com/grifdail/75d2b8596b8a5895ba19

Input.jump = {
  key: 32//Space
  gamepad: 0// A button on as XBOX360 gamepad
}

dont forget to call
Input.update();
at the end of each frame.

//To know if the button is pressed right now.
Input.getButtonDown(Input.jump);

//To know if the button was just pressed in the next frame.
Input.getButtonPressed(Input.jump);

//To know if the button was just release.
Input.getButtonReleased(Input.jump);

get the mouse position
Input.getMousePosition();

//Get the axis
Input.getAxis();

//Return {
	x, //Left - right key or X on the first stick
	y, //up - down key or Y on the first stick
	x2, // X on the second stick
	y2, // Y on the second stick
}

//to test for only the keyboard:
Input.getKeyDown(keycode);
Input.getKeyPressed(keycode);
Input.getKeyReleased(keycode);

//to test for only the gamepad:
Input.getGamepadDown(keycode);
Input.getGamepadPressed(keycode);
Input.getGamepadReleased(keycode);

//to test for the mouse button 
Input.getKeyDown("leftMouse" || "middleMouse" || "rightMouse");

*/
var width = _canvas.width, 
height = _canvas.height;

var Input = (function getKeysInput(canvas,width,height) {
	var keys = {};
	var keysDown = {};
	var keysUp = {};
	var gamepad = {};
	var gamepadDown = {};
	var gamepadUp = {}
	var axis = {x: 0,y: 0,x2: 0,y2: 0};
	var mousePosition = new Vector2(0, 0);
	window.addEventListener("keydown", function (e) {
		if (!keys[e.keyCode]) {
			keysDown[e.keyCode] = true;
		}
		keys[e.keyCode] = true;
	});
	window.addEventListener("keyup", function (e) {
		keys[e.keyCode] = false;
		keysUp[e.keyCode] = true;
	});
	window.addEventListener("mousedown", function (e) {
		var btn = e.button === 0 ? "leftMouse" : e.button === 1 ? "middleMouse" : "rightMouse";
		//console.log(btn, e);
		if (!keys[btn]) {
			keysDown[btn] = true;
		}
		keys[btn] = true;
	});
	window.addEventListener("mouseup", function (e) {
		var btn = e.button === 0 ? "leftMouse" : e.button === 1 ? "middleMouse" : "rightMouse";
		keys[btn] = false;
		keysUp[btn] = true;
	});
	window.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});
	window.addEventListener("mousemove", function (evt) {
		var rect = canvas.getBoundingClientRect();
		var scaleY = -(rect.top - rect.bottom) / height;
		var scaleX = -(rect.left - rect.right) / width;
		mousePosition.x = (evt.clientX - rect.left) / scaleX;
		mousePosition.y = (evt.clientY - rect.top) / scaleY;
	});
	function updateGamepad() {
		var pads = navigator.getGamepads();
		if (pads[0]) {
			var pad = pads[0];
			pad.buttons.forEach(function(btn,i) {
				if (btn.pressed) {
					if (!gamepad[i]) {
						gamepadDown[i] = true;
					}
				} else {
					if (gamepad[i]) {
						gamepadUp[i] = true;
					}
				}
				gamepad[i] = btn.pressed;
			});
			axis.x = axis.x || (Math.abs(pad.axes[0]) > 0.15 ? pad.axes[0] : 0);
			axis.y = axis.y || -(Math.abs(pad.axes[1]) > 0.15 ? pad.axes[1] : 0);
			axis.x2 = axis.x2 || (Math.abs(pad.axes[2]) > 0.15 ? pad.axes[2] : 0);
			axis.y2 = axis.y2 || -(Math.abs(pad.axes[3]) > 0.15 ? pad.axes[3] : 0);
		}
	}
	return {
		update: function update() {
			keysDown = {};
			keysUp = {};
			gamepadDown = {};
			gamepadUp = {};
			axis = {x: 0,y: 0,x2: 0,y2: 0};
			axis.x = keys[this.left] ? -1 : (keys[this.right] ? 1 : 0);
			axis.y = keys[this.up] ? -1 : (keys[this.down] ? 1 : 0);
			updateGamepad();

		},
		//
		getKeyDown: function getButtonDown(e) {
			return !!keys[e];
		},
		getKeyPressed: function getButtonPressed(e) {
			return !!keysDown[e];
		},
		getKeyReleased: function getButtonReleased(e) {
			return !!keysUp[e];
		},
		//////////////
		getGamepadDown: function getButtonDown(e) {
			return gamepad[e];
		},
		getGamepadPressed: function getButtonPressed(e) {
			return !!gamepadDown[e];
		},
		getGamepadReleased: function getButtonReleased(e) {
			return !!gamepadUp[e];
		},
		////////////////////
		getButtonDown: function getButtonDown(mapping) {
			return !!keys[mapping.key] || !!gamepad[mapping.gamepad] ;
		},
		getButtonPressed: function getButtonPressed(mapping) {
			return !!keysDown[mapping.key] || !!gamepadDown[mapping.gamepad] ;
		},
		getButtonReleased: function getButtonReleased(mapping) {
			return !!keysUp[mapping.key] || !!gamepadUp[mapping.gamepad] ;
		},
		//
		getMousePosition: function getMousePosition() {
			return mousePosition;
		},
		getAxis: function getAxis() {
			return axis;
		},
		left: 37,
		down: 40,
		up: 38,
		right: 39,
		space: 32,
		mouseButton: "mouseButton",
		action1: {
			key: 32,
			gamepad: 0
		},
		action2: {
			key: 13,
			gamepad: 1
		}
	};
})(_canvas,width,height);