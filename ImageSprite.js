
class ImageSprite {
	constructor(s, w, h, ox, oy) {
		
		this.source = s;
		
		this.width = w;
		this.height = h;
		this.offsetX = ox;
		this.offsetY = oy;
		
		this.img = new Image();
		this.img.src = this.source;
		
		//this.imgLoad = new Image();
		//$("#imageLoader").appendChild(this.imgHtml);
		//$("<img id='asdf' ></img>").appendTo("#imageLoader");
		//this.imgHtml = $("#asdf");
	}
	
	start() {
		//var s = this.source;
		//var html = this.imgHtml;
		//this.imgLoad.onload = function() {
		//	// image loaded
		//	console.log("successfully loaded " + s);
		//	$("#asdf").attr('src',this.src);
		//}
		//this.imgLoad.src = s;
	}
	
	draw() {
		_context.save();
		
		var w = this.img.width * this.width;
		var h = this.img.height * this.height;
		//var x = this.transform.position.x;
		//var y = this.transform.position.y;
		
		//_context.translate(x,y);
		//_context.rotate(this.transform.rotation * Math.PI / 180);
		
		_context.drawImage(this.img, this.offsetX, this.offsetY, w, h);
		_context.restore();
	}
	
}