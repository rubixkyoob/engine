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
		var c=document.getElementById("mainCanvas");
		var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.globalAlpha=1;
		
		// call each game Object draw method
		for(var g = 0; g < this.gameObjects.length; g++) {
			this.gameObjects[g].render();
		}
	}
}