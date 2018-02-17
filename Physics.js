class Physics {
	
	
	constructor (m, t) {
		this.velocity = new Vector2(0,0);
		this.acceleration = new Vector2(0,0);
		//this.netForce = new Vector2(0,0);
		this.mass = m;
		this.transform = t;
	}
	
	start() {
		
	}
	
	update() {
		var gravForce = new Vector2(0, Physics.GRAVITY * this.mass);
		var netForce = gravForce;
		
		this.acceleration = netForce.multiply(1 / this.mass);
		this.velocity = this.velocity.add(this.acceleration);
		this.transform.position = this.transform.position.add(this.velocity);
		
	}
}

Physics.GRAVITY = 0.1;