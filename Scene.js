class Scene {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.gameObjects = [];
		this.camera = new GameObject(_canvas.width / 2, _canvas.height / 2);
		this.camera.addComponent(new Camera(_canvas.width, _canvas.height));
		this.gameObjects.push(this.camera);
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
		var cam = this.camera.getComponent(Camera);
		_context.setTransform(
			this.camera.transform.scale.x,		// horizontal scaling
			0,									// horizontal skewing
			0,									// vertical skewing
			this.camera.transform.scale.y,		// vertical scaling
			-this.camera.transform.position.x + this.camera.transform.scale.x * cam.viewport.x,	// horizontal moving
			-this.camera.transform.position.y + this.camera.transform.scale.y * cam.viewport.y	// vertical moving
			);
		
		// call each game Object draw method
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].render(this.camera);
		}
	}
}