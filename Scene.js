class Scene {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.gameObjects = [];
	}
	
	addGameObject(go) {
		this.gameObjects.push(go);
	}
	
	update() {
		// update each component in each gameobject in the scene
		for(var g = 0; g < this.gameObjects.length; g++) {
			
			
		}
	}
}