var objectid = 0;
class GameObject {
	constructor(x, y) {
		this.id = objectid;
		objectid++;
		var t = new Transform(x, y);
		this.components = [t];
		this.transform = this.components[0];
		this.children = [];
		this.visible = true;
	}
	
	getComponent(cmpt) {
		if(this.components.length > 0) {
			for(var c = 0; c < this.components.length; c++) {
				if(this.components[c] instanceof cmpt) {
					return this.components[c];
				}
			}
		}
		return null;
	}
	
	addComponent(c) {
		this.components.push(c);
	}
	
	addChild(go) {
		this.children.push(go);
	}
	
	start() {
		if(this.components.length > 0) {
			for(var c = 0; c < this.components.length; c++) {
				if(typeof this.components[c].start == 'function') {
					this.components[c].start();
				}
			}
		}
		if(this.children.length > 0) {
			for(var c = 0; c < this.children.length; c++) {
				this.children[c].start();
			}
		}
	}
	
	update() {
		if(this.components.length > 0) {
			for(var c = 0; c < this.components.length; c++) {
				if(typeof this.components[c].update == 'function') {
					this.components[c].update();
				}
			}
		}
		
		if(this.children.length > 0) {
			for(var c = 0; c < this.children.length; c++) {
				this.children[c].update();
			}
		}
	}
	
	render() {
		if(this.visible) {
			_context.save();
			console.log("updating " + this.id);
			// transform context to gameObject's transform
			_context.setTransform(
			this.transform.scale.x,		// horizontal scaling
			0,							// horizontal skewing
			0,							// vertical skewing
			this.transform.scale.y,		// vertical scaling
			this.transform.position.x,	// horizontal moving
			this.transform.position.y	// vertical moving
			)
			_context.rotate(this.transform.rotation * Math.PI / 180);
			
			if(this.components.length > 0) {
				for(var c = 0; c < this.components.length; c++) {
					if(typeof this.components[c].draw == 'function') {
						this.components[c].draw();
					}
				}
			}
			
			
			if(this.children.length > 0) {
				for(var c = 0; c < this.children.length; c++) {
					this.children[c].render();
				}
			}
			
			_context.restore();
		}
	}
	
	get getId() {
		return this.id;
	}
	
}