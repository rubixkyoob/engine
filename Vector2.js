class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	get magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	
}