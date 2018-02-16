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
	
	addComponent(c) {
		this.components.push(c);
	}
	
	start() {
		if(this.components.length > 0) {
			for(var c = 0; c < this.components.length; c++) {
				if(typeof this.components[c].start == 'function') {
					this.components[c].start();
				}
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
	}
	
	render() {
		if(this.visible && this.components.length > 0) {
			for(var c = 0; c < this.components.length; c++) {
				// only call function if it exists
				if(typeof this.components[c].draw == 'function') {
					this.components[c].draw();
				}
			}
		}
	}
	
	get getId() {
		return this.id;
	}
	//getTransform() {
	//	if(this.components.length > 0) {
	//		for(var c = 0; c < this.components.length; c++) {
	//			if(this.components[c] instanceof Transform) {
	//				return this.components[c];
	//			}
	//		}
	//	}
	//	return null;
	//}
}