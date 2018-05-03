/// main.js

$(document).ready(start);

// FPS
var fpsHistory = [0];
var fpsInterval = 10;
var fpsCounter = 1;

var scenes = [];
var currScene = null;

function start() {
	//Initialize game engine
	
	
	// create a new scene from code
	var newScene = new Scene(600, 400);
	var imgOffset = new Vector2(50, -50);
	var rubixkYAY = new GameObject(_canvas.width / 2 - 86, _canvas.height / 2);
	rubixkYAY.addComponent(new ImageSprite("/Git/engine/Images/rubixkYAY_body.png", 0.25, 0.25, imgOffset.x, imgOffset.y, rubixkYAY.transform));
	
	var rubixHead = new GameObject(_canvas.width / 2 - 86, _canvas.height / 2);
	rubixHead.addComponent(new ImageSprite("/Git/engine/Images/rubixkYAY_head.png", 0.25, 0.25, imgOffset.x, imgOffset.y, rubixHead.transform));
	rubixHead.addComponent(new Microphone(0, 90, rubixHead.transform));
	
	newScene.addGameObject(rubixkYAY);
	newScene.addGameObject(rubixHead);
	scenes.push(newScene);
	currScene = 0;
	
	scenes[currScene].start();
	window.requestAnimationFrame(update);
}

function update() {
	
	$("#debug").text("FPS: " + calculateAverageFPS());
	//console.log("tick:" + Time.time + " -> dt:" + Time.deltaTime);
	
	scenes[currScene].update();
	
	scenes[currScene].render();
	
	Time.updateTime(new Date());
	window.requestAnimationFrame(update);
}


function calculateAverageFPS() {
	var fps = Math.round(1 / Time.deltaTime);
	//adjust fps history
	if(fpsHistory.length < fpsInterval) {
		fpsHistory.push(fps);
	}
	else {
		//shift history
		for(var i = 0; i < fpsHistory.length - 1; i++) {
			fpsHistory[i] = fpsHistory[i+1];
		}
		fpsHistory[fpsHistory.length - 1] = fps;
	}
	
	//calc average fps
	var avgFps = 0;
	for(var i = 0; i < fpsHistory.length; i++) {
		avgFps += fpsHistory[i];
	}
	avgFps = avgFps / fpsHistory.length;
	
	//set fps counter
	if(fpsCounter == fpsInterval) {
		fpsCounter = 1;
	}
	else {
		fpsCounter++;
	}
	return avgFps;
}