function Particle(location, color){
	this.location = location.copy();
	this.vel = createVector(random(0,5), random(0,5));
	this.acc = createVector(0,0);
	this.mass = 1;

	this.show = function() {
		stroke(255);
		strokeWeight(5);
		point(this.location.x, this.location.y);
	}

	this.update = function(){
		this.vel.add(this.acc);
		this.location.add(this.vel);

		if (this.location.x < 0){
			this.location.x = width;
			this.vel = createVector(random(0,5), random(0,0));
		} else if(this.location.x > width) {
			this.location.x = 0;
			this.vel = createVector(random(0,5), random(0,5));
		}
		if (this.location.y < 0){
			this.location.y = width;
			this.vel = createVector(random(0,5), random(0,5));
		} else if(this.location.y > height) {
			this.location.y = 0;
			this.vel = createVector(random(0,5), random(0,5));
		}

	}

	this.run = function() {
		this.update();
		this.show();
	}
}

function mousePressed(){
systems.push(new Particle(createVector(mouseX,mouseY)));
}