function Cone(){
	this.color = "#ffff00";
  	this.x = 0;
 	this.y = 0;
  	this.rotation = 0;
  	this.scaleX = 0.5;
  	this.scaleY = 0.5;

  	this.color1 = "#ffc248";
  	this.color2 = "#f60";
  	this.color3 = "#c11b00";
  	this.color4 = "#f90";
  	this.color5 = "#f43900";
}

Cone.prototype.draw = function(context){
	// path 1
	context.save();
	 context.translate(this.x, this.y);
	 context.rotate(this.rotation);
	 context.scale(this.scaleX, this.scaleY);

	context.beginPath();
	context.fillStyle = this.color1;
	  context.moveTo(131.23, 102.93);
	  context.lineTo(181.51, 47.67);
	  context.lineTo(131.23, 0);
	  context.lineTo(81.06, 47.68);
	  context.lineTo(131.23, 102.93);
	  context.fill();
	context.closePath();


	// path 2
	context.beginPath();
	context.fillStyle = this.color2;
	  context.moveTo(131.22, 222.1);
	  context.lineTo(185.83,176.51);
	  context.lineTo(131.22,110.19);
	  context.lineTo(72.56,176.39);
	  context.lineTo(131.22,222.1);
	    context.fill();
	context.closePath();



	// path 3
	context.beginPath();
	context.fillStyle = this.color3;
	  context.moveTo(131.22, 305.65);
	  context.lineTo(185.83,292.29);
	  context.lineTo(131.22,238.29);
	  context.lineTo(72.56,292.16);
	  context.lineTo(131.22,305.65);
	    context.fill();
	context.closePath();
	// path 4
	context.beginPath();
	context.fillStyle = this.color4;
	  context.moveTo(67.16, 171.18);
	    context.lineTo(111.61, 107.49);
	    context.lineTo(60.52, 44.07);
	    context.lineTo(16.7, 138.59);
	    context.lineTo(67.16, 171.18);
	      context.fill();
	context.closePath();
	// path 5
	context.beginPath();
	context.fillStyle = this.color4;
	context.moveTo(192.73, 171.18);
	    context.lineTo(148.28, 107.49);
	    context.lineTo(199.37, 44.07);
	    context.lineTo(243.19, 138.59);
	    context.lineTo(192.73, 171.18);
	      context.fill();
	context.closePath();
	// path 6
	context.beginPath();
	context.fillStyle = this.color5;
	context.moveTo(247.42, 238.29);
	    context.lineTo(193.85, 185.23);
	    context.lineTo(140.46, 235.19);
	    context.lineTo(194.41, 284.43);
	    context.lineTo(247.42, 238.29);
	      context.fill();
	context.closePath();
	// path 7
	context.beginPath();
	context.fillStyle = this.color2;
	context.moveTo(244.89, 221.11);
	    context.lineTo(200.43, 176.64);
	    context.lineTo(261.02, 150.92);
	    context.lineTo(244.89, 221.11);
	      context.fill();
	context.closePath();
	// path 8
	context.beginPath();
	context.fillStyle = this.color2;
	context.moveTo(16.13, 221.11);
	    context.lineTo(60.59, 176.64);
	    context.lineTo(0, 150.92);
	    context.lineTo(16.13, 221.11);
	      context.fill();
	context.closePath();
	// path 9
	context.beginPath();
	context.fillStyle = this.color5;
	context.moveTo(14.63, 238.29);
	    context.lineTo(68.2, 185.23);
	    context.lineTo(121.59, 235.19);
	    context.lineTo(67.64, 284.43);
	    context.lineTo(14.63, 238.29);
	      context.fill();
	context.closePath();

	context.restore();



}