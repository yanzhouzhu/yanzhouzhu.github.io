var x;
var y;
var r=100;
var n = [];
var h=6;
var X;
var Y;
function setup(){
    let canvas=createCanvas(200,200,WEBGL);
    canvas.class("ability");
    noStroke();
    strokeWeight(1);
    background(255);
    n=[intelligence/1.5,stamina,popularity,(108-water)/1.5,(108-toilet)/1.5,(108-hungry)/1.5];
}
function draw(){
    background(255);
    n[3]=64+(108-toilet)/5.5;
    n[4]=64+(108-water)/5.5;
    n[5]=64+(108-hungry)/5.5;
    beginShape();
    for (i=0; i<h; i++) {
        x=n[i]*cos(2*PI*i/h-HALF_PI);
        y=n[i]*sin(2*PI*i/h-HALF_PI);
        vertex(x,y);
    }
    endShape(CLOSE);
    fill(231)
   
}