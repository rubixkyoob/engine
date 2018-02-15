/// Time class

function Time() {
	
}

//static vars
Time.time = 0.0;
Time.lastTime = new Date().getTime();
Time.deltaTime = 0.0;
Time.startTime = new Date().getTime();

Time.updateTime = function(newTime) {
	var currTime = newTime.getTime();
	Time.deltaTime = (currTime - Time.lastTime) * 0.001;
	Time.time += Time.deltaTime;
	Time.lastTime = currTime;
}