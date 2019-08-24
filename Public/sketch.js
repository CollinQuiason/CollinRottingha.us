var w, h;


function preload(){

}

function setup(){
	h = window.innerHeight;
 	w = window.innerWidth;
	cnv = createCanvas(w, h);
}

function draw(){
	background(0);
}

function windowResized(){
	w = window.innerWidth;
    h = window.innerHeight;
    resizeCanvas(w, h);
}