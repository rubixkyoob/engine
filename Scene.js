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
			console.log(this.gameObjects[g].getId);
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
		
		//adjust camera
		var cam = this.camera.getComponent(Camera);
		_context.setTransform(
			1,		// horizontal scaling
			0,									// horizontal skewing
			0,									// vertical skewing
			1,		// vertical scaling
			-this.camera.transform.position.x + this.camera.transform.scale.x * cam.viewport.x/2,	// horizontal moving
			-this.camera.transform.position.y + this.camera.transform.scale.y * cam.viewport.y/2	// vertical moving
			);
		_context.rotate(this.camera.transform.rotation * Math.PI / 180);
		_context.save();
		_context.scale(cam.viewport.x / _canvas.width, cam.viewport.y / _canvas.height);
		// call each game Object draw method
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].render(this.camera);
		}
		_context.restore();
	}
}