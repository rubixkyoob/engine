class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	get magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	add(other) {
		return new Vector2(this.x + other.x, this.y + other.y);
	}
	
	subtract(other) {
		return new Vector2(this.x - other.x, this.y - other.y);
	}
	
	multiply(factor) {
		return new Vector2(this.x * factor, this.y * factor);
	}
	
	normalize() {
		var m = this.magnitude();
		return new Vector2(this.x / m, this.y / m);
	}
	
	// returns the dot product of the current vector and the given vector
	dotProduct(other) {
		return (this.x * other.x) + (this.y * other.y);
	}
	
	// projection of this onto other
	projection(other) {
		var s = this.dotProduct(other) * other.dotProduct(other);
		return other.multiply(s);
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