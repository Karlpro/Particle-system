var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);
var dots = [];
class Particle{
constructor(x,y){
	this.pos={};
	this.pos.x = x;
	this.pos.y=y;
    this.radius = 30+Math.random()*10;
    this.vel = {};
    this.vel.x = Math.random()*2-1;
    this.vel.y = Math.random()*2-1;
    this.life = 0;
}
move(){
	this.life++;
	if(this.radius>3)this.radius*=0.99;
	this.vel.x *=0.99;
	this.vel.y*=0.99;
	this.pos.x+= this.vel.x;
	this.pos.y+= this.vel.y;
	if(this.life %16===0){

	}
}
draw(ctx){
	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();

}
}
for (var i = 0;i<50;i++) {
	dots.push(new Particle(Math.random()*width,Math.random()*height))}
	canvas.onmousemove = function(e){
		dots.push(new Particle(
			e.layerX,
			e.layerY
			))
	}

function draw(){
	ctx.clearRect(0,0,width,height);
	dots.forEach((e,index)=>{
		e.move();
		e.draw(ctx);
		if(e.vel.x<0.1){
			dots.splice(index,1);
		}
	})
}
function Render(){
	draw()
	window.requestAnimationFrame(Render);
}
Render();