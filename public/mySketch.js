

var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;


var counter0=0;//Initial counter value 
var counter1=0;//Initial counter value 
var counter2=0;//Initial counter value 
var counter3=0;//Initial counter value 
var counter4=0;//Initial counter value 
var counter5=0;//Initial counter value 

var socket = io();//connect to the socket

socket.on('connect',function()
{
   console.log('Yeah I am connected!!');
});

//Listen from server.js
socket.on('click_count0',function(value){counter0 = value; console.log("counter0: "+ counter0);});
socket.on('click_count1',function(value){counter2 = value; console.log("counter1: "+ counter1);});
socket.on('click_count2',function(value){counter3 = value; console.log("counter2: "+ counter2);});
socket.on('click_count3',function(value){counter4 = value; console.log("counter3: "+ counter3);});
socket.on('click_count4',function(value){counter5 = value; console.log("counter4: "+ counter4);});
socket.on('click_count5',function(value){counter6 = value; console.log("counter5: "+ counter5);});

// listen to server
socket.on('click_count0',function(value) {counter0 = value;});
socket.on('click_count1',function(value) {counter1 = value;});
socket.on('click_count2',function(value) {counter2 = value;});
socket.on('click_count3',function(value) {counter3 = value;});
socket.on('click_count4',function(value) {counter4 = value;});
socket.on('click_count5',function(value) {counter5 = value;});

function preload() {

 sound1 = new Audio('assets/Sound1.mp3');
 sound2 = new Audio('assets/Sound2.mp3');
 sound3 = new Audio('assets/Sound3.mp3');
 sound4 = new Audio('assets/Sound4.mp3');
 sound5 = new Audio('assets/Sound5.mp3');
 sound6 = new Audio('assets/Sound6.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
/*
	sound1.setVolume(0.1);
	sound2.setVolume(0.1);
	sound3.setVolume(0.1);
	sound4.setVolume(0.1);
	sound5.setVolume(0.1);
	sound6.setVolume(0.1);
*/
}

function draw() {
	background(100);
	noStroke();  // FIRST COLUMN
	fill(200,100,0);
	rect( width/4 -75 ,height/4 -50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter0,width/4  ,height/4  );
	fill(200,100,100);
	rect( width/4 -75 ,2*height/4 -50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter1,width/4  ,2*height/4  );
	fill(200,100,200);
	rect( width/4 -75 ,3*height/4 -50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter2,width/4  ,3*height/4  );

	fill(200,100,0); // SECOND COLUMN
	rect( 3*width/4 -77 ,height/4 -50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter3,3*width/4  ,height/4  );
	fill(200,100,100);
	rect( 3*width/4 -75 ,2*height/4 -50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter4,3*width/4  ,2*height/4  );
	fill(200,100,200);
	rect( 3*width/4 -75 ,3*height/4-50, 150, 100 );
	fill(0);
  	textSize(30);
  	text(counter5,3*width/4  ,3*height/4  );
}

function mousePressed(){
	// FIRST COLUMN
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>height/4 -50 && mouseY< height/4 +50){
			sound1.play();
			socket.emit('clicked0');//Emitting user click
			print("ENTRA1");
		}
	}
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
			sound2.play();
			socket.emit('clicked1');//Emitting user click
			print("ENTRA2");
		}
	}
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
			sound3.play();
			socket.emit('clicked2');//Emitting user click
			print("ENTRA3");
		}
	}
	// SECOND COLUMN
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>height/4 -50 && mouseY< height/4 +50){
			sound4.play();
			socket.emit('clicked3');//Emitting user click
			print("ENTRA4");
		}
	}
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
			sound5.play();
			socket.emit('clicked4');//Emitting user click
			print("ENTRA5");
		}
	}
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
			sound6.play();
			socket.emit('clicked5');//Emitting user click
			print("ENTRA6");
		}
	}
}

function mouseReleased(){

  sound1.pause();
  sound1.currentTime = 0;
  sound2.pause();
  sound2.currentTime = 0;
  sound3.pause();
  sound3.currentTime = 0;
  sound4.pause();
  sound4.currentTime = 0;
  sound5.pause();
  sound5.currentTime = 0;
  sound6.pause();
  sound6.currentTime = 0;
}



