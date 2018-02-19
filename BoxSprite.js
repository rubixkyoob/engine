class BoxSprite {
	constructor(w, h, c, t) {
		this.width = w;
		this.height = h;
		this.color = c;
		this.transform = t;
	}
	
	draw() {
		_context.fillStyle=this.color;
		_context.fillRect(
			this.transform.position.x - (this.width * this.transform.scale.x * 0.5),
			this.transform.position.y - (this.height * this.transform.scale.y * 0.5),
			this.width * this.transform.scale.x,
			this.height * this.transform.scale.y
		);
	}
}