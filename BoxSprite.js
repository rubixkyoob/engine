class BoxSprite {
	constructor(w, h, c) {
		this.width = w;
		this.height = h;
		this.color = c;
	}
	
	draw() {
		_context.save();
		_context.fillStyle=this.color;
		_context.fillRect(
			-this.width / 2,
			-this.height / 2,
			this.width,
			this.height
		);
		_context.restore();
	}
}