/// main.js

$(document).ready(start);

// FPS
var fpsHistory = [0];
var fpsInterval = 10;
var fpsCounter = 1;

var scenes = [];
var currScene = 0;

function start() {
	//Initialize game engine
	
	var imagePath = "E:/Git/engine/Images/";
	
	// create a new scene from code
	var newScene = new Scene(600, 400);
	var imgOffset = new Vector2(-100, -200);
	
	var rubixHead = new GameObject('Head', 0, 0);
	rubixHead.addComponent(new ImageSprite(imagePath + "rubixkYAY_head.png", .25, .25, imgOffset.x, imgOffset.y));
	rubixHead.addComponent(new Microphone(0, 10, 120));
	
	var rubixkYAY = new GameObject('rubixkYAY', _canvas.width / 2 , _canvas.height / 2);
	rubixkYAY.addComponent(new ImageSprite(imagePath + "rubixkYAY_body.png", .25, .25, imgOffset.x, imgOffset.y));
	rubixkYAY.addComponent(new RubixkYAYController(rubixkYAY, 0, 90));
	//rubixkYAY.addComponent(new ClickAndDrag(rubixkYAY));
	rubixkYAY.addChild(rubixHead);
	
	newScene.addGameObject(rubixkYAY);
	//newScene.camera.addChild(rubixkYAY);
	//newScene.camera.addComponent(new ClickAndDrag(newScene.camera));
	newScene.camera.addComponent(new CameraScript(newScene.camera, 3, 0.005));
	var cam = newScene.camera.getComponent(Camera);
	//newScene.camera.transform.rotation = 90;
	cam.zoom = 1;
	
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
	
	//update input after the scene
	Input.update();
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
