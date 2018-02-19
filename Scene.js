class Scene {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.gameObjects = [];
	}
	
	addGameObject(go) {
		this.gameObjects.push(go);
	}
	
	start() {
		// update each component in each gameobject in the scene
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].start();
		}
	}
	
	update() {
		// update each component in each gameobject in the scene
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].update();
			
		}
	}
	
	render() {
		//clear scene before redrawing
		_context.clearRect(0, 0, _canvas.width, _canvas.height);
		_context.globalAlpha=1;
		
		// call each game Object draw method
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].render();
		}
	}
}