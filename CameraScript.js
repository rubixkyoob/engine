/// Camera Script
class CameraScript {
	constructor(go, spd, zr) {
		this.gameObject = go;	// GameObject that this component is attached to
		
		// movement vars
		this.moveSpeed = spd;
		
		// zoom vars
		this.startPos = new Vector2(0, 0);
		this.startZoom = 0;
		this.dragging = false;
		this.zoomRate = zr;
	}
	
	start() {
		
		this.camera = this.gameObject.getComponent(Camera);
		this.startZoom = this.camera.zoom;
	}
	
	update() {
		
		// moving
		var axis = Input.getAxis();
		console.log("axis: (" + axis.x + ", " + axis.y + ")");
		//this.gameObject.transform.position.x += axis.x * this.moveSpeed;
		//this.gameObject.transform.position.y += axis.y * this.moveSpeed;
		this.gameObject.transform.position = this.gameObject.transform.position.add(
			new Vector2(axis.x * this.moveSpeed, axis.y * this.moveSpeed)
			);
		console.log("transform: (" + this.gameObject.transform.position.x + ", " + this.gameObject.transform.position.y + ")");
		
		// zooming
		if(Input.getKeyDown("leftMouse")) {
			if(!this.dragging) {
				this.startPos = Input.getMousePosition().y;
				this.startZoom = this.camera.zoom;
				this.dragging = true;
			}
			this.camera.zoom = this.startZoom + (Input.getMousePosition().y - this.startPos) * this.zoomRate;
			console.log("zoom: " + this.camera.zoom);
		}
		if(Input.getKeyReleased("leftMouse")) {
			this.dragging = false;
		}
		
	}
	
}