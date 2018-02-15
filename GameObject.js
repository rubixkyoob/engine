var objectid = 0;
class GameObject {
	constructor(x, y) {
		this.id = objectid;
		objectid++;
		var t = new Transform(x, y);
		this.components = [t];
		this.children = [];
	}
	
	update() {
		if(this.components.length > 0) {
			for(var c; c < this.components.length; c++) {
				this.components[c].update();
			}
		}
	}
	
	get getId() {
		return this.id;
	}

}