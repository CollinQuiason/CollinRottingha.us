var w, h;
const socket = io('CollinRottingha.us:80/portfolio', {secure: true});

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