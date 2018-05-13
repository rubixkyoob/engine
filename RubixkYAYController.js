/// Rubix Controller
class RubixkYAYController {
	constructor(go, min, max) {
		this.gameObject = go;	// GameObject that this component is attached to
		this.min_angle = min;
		this.max_angle = max;
	}
	
	
	start() {
		this.head = this.gameObject.getChild(0);
		this.microphone = this.head.getComponent(Microphone);
		
	}
	
	update() {
		
		
		
		
		// rotate head
		var angle = this.min_angle + this.microphone.average / 255 * (this.max_angle - this.min_angle);
		//console.log('angle: ' + angle);
		if(angle > (this.max_angle - this.min_angle) * 0.1) {
			this.head.transform.rotation = -angle;
		}
		else {
			this.head.transform.rotation = (1 - 0.5) * this.head.transform.rotation + 0.5 * this.min_angle;
		}
		
	}
	
}