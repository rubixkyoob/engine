/// test script
class TestScript {
	constructor(t) {
		this.transform = t;
		
		this.travelTime = 4.0;
		this.changeTime = Time.time + this.travelTime;
		this.state = 0;
		this.sSpeed = 1;
		this.destinations = [
			new Vector2(500, 300), 
			new Vector2(100, 300), 
			new Vector2(100, 100),
			new Vector2(50, 20)
			];
	}
	
	start() {
		
	}
	
	update() {
		this.transform.position = Vector2.Lerp(this.transform.position, this.destinations[this.state], this.sSpeed * Time.deltaTime);
		//this.transform.scale = Vector2.Lerp(this.transform.scale, this.destinations[this.state].multiply(0.01), this.sSpeed * Time.deltaTime);
		this.transform.rotation += 1;
		if(Time.time >= this.changeTime) {
			this.state += 1;
			if(this.state > this.destinations.length - 1) {
				this.state = 0;
			}
			this.changeTime = Time.time + this.travelTime;
		}
			
	}
	
}