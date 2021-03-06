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
	
	var v2 = new Vector2(-3, 4);
	console.log(v2.magnitude);
	
	// create a new scene from code
	var newScene = new Scene(600, 400);
	var c = newScene.camera.getComponent(Camera);
	c.viewport.x = 300;
	//newScene.camera.addComponent(new TestScript(newScene.camera.transform));
	
	var go = new GameObject(50, 100);
	//go.addComponent(new BoxSprite(50, 50, "#55b24e", go.transform));
	go.addComponent(new ImageSprite("./Images/gnome.jpg", 0.1, 0.1, 0, 0));
	go.addComponent(new TestScript(go.transform));
	//go.addComponent(new Physics(5, go.transform));
	newScene.addGameObject(go);
	
	var go2 = new GameObject(300, 250);
	go2.addComponent(new BoxSprite(50, 50, "#55b24e"));
	newScene.addGameObject(go2);
	
	scenes.push(newScene);
	currScene = 0;
	
	scenes[currScene].start();
	window.requestAnimationFrame(update);
}

function update() {
	
	$("#debug").text("FPS: " + calculateAverageFPS());
	
	
	scenes[currScene].update();
	
	scenes[currScene].render();
	$("#inputDebug").text(Input.GetKeyPressed(32));
	Input.Clear();
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
