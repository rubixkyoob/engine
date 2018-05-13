/// Click and Drag
class ClickAndDrag {
	constructor(go) {
		this.gameObject = go;	// GameObject that this component is attached to
		this.offset = new Vector2(0, 0);
		this.dragging = false;
		
	}
	
	
	start() {
		
		
		
	}
	
	update() {
		
		if(Input.getKeyDown("leftMouse")) {
			if(!this.dragging) {
				this.offset = this.gameObject.transform.position.subtract(Input.getMousePosition());
				this.dragging = true;
			}
			this.gameObject.transform.position = Input.getMousePosition().add(this.offset);
		}
		if(Input.getKeyReleased("leftMouse")) {
			this.dragging = false;
		}
		
		if(this.dragging) {
			console.log('draggin');
		}
		
	}
	
}