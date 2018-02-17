class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	get magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	add(v) {
		return new Vector2(this.x + v.x, this.y + v.y);
	}
	
	subtract(v) {
		return new Vector2(this.x - v.x, this.y - v.y);
	}
	
	multiply(factor) {
		return new Vector2(this.x * factor, this.y * factor);
	}
	
	static Lerp(start, end, smooth) {
		var dx = (1 - smooth) * start.x + smooth * end.x;
		var dy = (1 - smooth) * start.y + smooth * end.y;
		return new Vector2(dx, dy);
	}
	
	toString() {
		return "<x:" + this.x + ", y:" + this.y + ">";
	}
	
}