class Scene {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.gameObjects = [];
		this.camera = new GameObject('Camera', _canvas.width / 2, _canvas.height / 2);
		this.camera.addComponent(new Camera(_canvas.width, _canvas.height, 1));
		this.gameObjects.push(this.camera);
	}
	
	addGameObject(go) {
		this.gameObjects.push(go);
	}
	
	start() {
		// update each component in each gameobject in the scene
		for(var g = 0; g < this.gameObjects.length; g++) {
			//console.log(this.gameObjects[g].getId);
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
		
		//adjust camera
		_context.setTransform(
			cam.zoom,		// horizontal scaling
			0,									// horizontal skewing
			0,									// vertical skewing
			cam.zoom,		// vertical scaling
			this.camera.transform.position.x,	// horizontal moving
			this.camera.transform.position.y	// vertical moving
			);
		
		_context.transform(1,0,0,1,-_canvas.width/2, -_canvas.height/2);
		
		//_context.save();
		//_context.rotate(this.camera.transform.rotation * Math.PI / 180);
		
		//_context.scale(cam.viewport.x / _canvas.width, cam.viewport.y / _canvas.height);
		
		//_context.scale(cam.zoom, cam.zoom);
		//_context.translate(-this.camera.transform.position.x / 2, -this.camera.transform.position.y / 2);
		
		// call each game Object draw method
		for(var g = 0; g < this.gameObjects.length; g++) {
			if(this.gameObjects[g] == this.camera) {
				continue;
			}
			this.gameObjects[g].render();
		}
		
		
		_context.setTransform(1, 0, 0, 1, 0, 0);
		
		//_context.restore();
	}
}