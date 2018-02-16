class BoxSprite {
	constructor(w, h, c, t) {
		this.width = w;
		this.height = h;
		this.color = c;
		this.transform = t;
	}
	
	draw() {
		var c=document.getElementById("mainCanvas");
		var ctx=c.getContext("2d");
		ctx.fillStyle=this.color;
		ctx.fillRect(
			this.transform.position.x - (this.width * this.transform.scale.x * 0.5),
			this.transform.position.y - (this.height * this.transform.scale.y * 0.5),
			this.width * this.transform.scale.x,
			this.height * this.transform.scale.y
		);
	}
}