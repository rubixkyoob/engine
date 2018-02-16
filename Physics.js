class Physics {
	constructor (m) {
		this.velocity = new Vector2(0,0);
		this.acceleration = new Vector2(0,0);
		this.netForce = new Vector2(0,0);
		this.mass = m;
	}
}