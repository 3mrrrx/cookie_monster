var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;

var events = 1;
var events_old = 1;

var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;

var alreadyExecute=false;


var waitTime;
var startTime;

var finishTimeCase3;

var sounds=[];
var colours=[];

var counter0=0;//Initial counter value
var counter1=0;//Initial counter value
var counter2=0;//Initial counter value
var counter3=0;//Initial counter value
var counter4=0;//Initial counter value
var counter5=0;//Initial counter value

var secuenceNumber=0;


var socket = io();//connect to the socket
var hours;
var minutes;
var seconds;

socket.on('connect',function()
{
   console.log('Yeah I am connected!!');
});

//Listen from server.js
socket.on('click_count0',function(value){counter0 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
socket.on('click_count1',function(value){counter2 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
socket.on('click_count2',function(value){counter3 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
socket.on('click_count3',function(value){counter4 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
socket.on('click_count4',function(value){counter5 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
socket.on('click_count5',function(value){counter6 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});

// listen to server
socket.on('click_count0',function(value) {counter0 = value;});
socket.on('click_count1',function(value) {counter1 = value;});
socket.on('click_count2',function(value) {counter2 = value;});
socket.on('click_count3',function(value) {counter3 = value;});
socket.on('click_count4',function(value) {counter4 = value;});
socket.on('click_count5',function(value) {counter5 = value;});

//
//socket.on('events',function(value) {events = value;});
socket.on('events',function(value) {events = parseInt(value);});

function preload() {
/*
 sound1 = new Audio('assets/Sound0.mp3');
 sound2 = new Audio('assets/Sound1.mp3');
 sound3 = new Audio('assets/Sound2.mp3');
 sound4 = new Audio('assets/Sound3.mp3');
 sound5 = new Audio('assets/Sound4.mp3');
 sound6 = new Audio('assets/Sound5.mp3');
 sound7 = new Audio('assets/Sound6.mp3');
 sound8 = new Audio('assets/Sound7.mp3');
 sound9 = new Audio('assets/Sound8.mp3');
 sound10 = new Audio('assets/Sound9.mp3');
 sound11 = new Audio('assets/Sound10.mp3');
 sound12 = new Audio('assets/Sound11.mp3');
*/
 sounds[0] = new Audio('assets/Sound0.mp3');
 sounds[1] = new Audio('assets/Sound1.mp3');
 sounds[2] = new Audio('assets/Sound2.mp3');
 sounds[3] = new Audio('assets/Sound3.mp3');
 sounds[4] = new Audio('assets/Sound4.mp3');
 sounds[5] = new Audio('assets/Sound5.mp3');
 sounds[6] = new Audio('assets/Sound6.mp3');
 sounds[7] = new Audio('assets/Sound7.mp3');
 sounds[8] = new Audio('assets/Sound8.mp3');
 sounds[9] = new Audio('assets/Sound9.mp3');  // musicBox
/*
 sounds[9] = new Audio('assets/Sound9.mp3');
 sounds[10] = new Audio('assets/Sound10.mp3');
 sounds[11] = new Audio('assets/Sound11.mp3');
*/
}

function setup() {
createCanvas(windowWidth, windowHeight);
//background('#D7DCD7');
  startTime = 0;
  waitTime = 1500; // 3 segundos

colours[0] = color('#3E78B2');
colours[1] = color('#FA8334');
colours[2] = color('#976BAE');
colours[3] = color('#F3CA40');
colours[4] = color('#FE5F55');
colours[5] = color('#70C1B3');

boton1=false;
boton2=false;
boton3=false;
boton4=false;
boton5=false;
boton6=false;

}

function draw() {

	if(events==1){
		console.log("ENTRAAAA--------111--------");
		noStroke();
	  // FIRST COLUMN
	  //textFont('Gotham');
	//textAlign(CENTER);
	//textStyle(BOLD);
	if(boton1==false){
	  fill('#FFAD5C');
	}
	else{
	  console.log("here");
	  fill('#D18E4C');
	}
	rect( 10 ,0, width/2-20, height/3 );    // 0
	fill(0);
	textSize(30);
	text( "1" /*counter0*/,width/4  ,height/4  );
	//fill(200,100,100);
	if(boton2==false){
	  fill(' #FF7F00 ');
	}
	else{
	  fill('#D16800');
	}
	rect( 10 , height/3 , width/2-20, height/3 );    // 1
	fill(0);
	textSize(30);
	text("2"/*counter1*/,width/4  ,2*height/4  );
	//fill(200,100,200);
	if(boton3==false){
	  fill(' #BA5D00 ');
	}
	else{
	  fill('#AA5500');
	}
	rect( 10 , 2*height/3, width/2-20, height/3 );   // 2
	fill(0);
	  textSize(30);
	  text("3" /*counter2*/,width/4  ,3*height/4  );
	  // SECOND COLUMN
	  //fill('#59CD90');
	  if(boton4==false){
	    fill(' #B8A5D5 ');
	  }
	  else{
	    fill('#A896C2');
	  }
	rect( width/2+10 ,0, width/2-20, height/3 );     // 3
	fill(0);
	  textSize(30);
	  text("4" /*counter3*/,3*width/4  ,height/4  );
	fill('#4381C1');
	if(boton5==false){
	  fill(' #9478C0 ');
	}
	else{
	  fill(' #876EAF ');
	}
	rect( width/2+10 ,height/3, width/2-20, height/3 );   // 4
	fill(0);
	  textSize(30);
	  text("5"/*counter4*/,3*width/4  ,2*height/4  );
	//fill('#D86152');
	if(boton6==false){
	  fill(' #7D5AB2 ');
	}
	else{
	  fill(' #7252A2 ');
	}
	rect( width/2+10 ,2*height/3, width/2-20, height/3 );   // 5
	fill(0);
	  textSize(30);
	  text("6"/*counter5*/,3*width/4  ,3*height/4  );
	}


	if(events==2){
	console.log("ENTRAAAA--------111--------");
	noStroke();
	  // FIRST COLUMN
	  //textFont('Gotham');
	//textAlign(CENTER);
	//textStyle(BOLD);
	if(boton1==false){
	  fill('#FFAD5C');
	}
	else{
	  console.log("here");
	  fill('#D18E4C');
	}
	rect( 10 ,0, width/2-20, height/3 );    // 0
	fill(0);
	textSize(30);
	text( "1" /*counter0*/,width/4  ,height/4  );
	//fill(200,100,100);
	if(boton2==false){
	  fill(' #FF7F00 ');
	}
	else{
	  fill('#D16800');
	}
	rect( 10 , height/3 , width/2-20, height/3 );    // 1
	fill(0);
	textSize(30);
	text("2"/*counter1*/,width/4  ,2*height/4  );
	//fill(200,100,200);
	if(boton3==false){
	  fill(' #BA5D00 ');
	}
	else{
	  fill('#AA5500');
	}
	rect( 10 , 2*height/3, width/2-20, height/3 );   // 2
	fill(0);
	  textSize(30);
	  text("3" /*counter2*/,width/4  ,3*height/4  );
	  // SECOND COLUMN
	  //fill('#59CD90');
	  if(boton4==false){
	    fill(' #B8A5D5 ');
	  }
	  else{
	    fill('#A896C2');
	  }
	rect( width/2+10 ,0, width/2-20, height/3 );     // 3
	fill(0);
	  textSize(30);
	  text("4" /*counter3*/,3*width/4  ,height/4  );
	fill('#4381C1');
	if(boton5==false){
	  fill(' #9478C0 ');
	}
	else{
	  fill(' #876EAF ');
	}
	rect( width/2+10 ,height/3, width/2-20, height/3 );   // 4
	fill(0);
	  textSize(30);
	  text("5"/*counter4*/,3*width/4  ,2*height/4  );
	//fill('#D86152');
	if(boton6==false){
	  fill(' #7D5AB2 ');
	}
	else{
	  fill(' #7252A2 ');
	}
	rect( width/2+10 ,2*height/3, width/2-20, height/3 );   // 5
	fill(0);
	  textSize(30);
	  text("6"/*counter5*/,3*width/4  ,3*height/4  );
	}
	  //console.log("millis: "+parseInt(millis())+" TiempoInicio: "+parseInt(startTime));
	if(events==3){
	console.log("ENTRAAAA--------333--------");

	  background('#9478C0');
	  if(alreadyExecute==false){
	    finishTimeCase3=millis()+52000;
	    alreadyExecute=true;
  	}

  	if( finishTimeCase3 > millis()){
	    sounds[9].loop = false;
	    sounds[ 9 ].play();
	    alreadyExecute=true;
  	}

	  /*
	  hours=hour();
	  minutes=minute();
	  seconds=second();

	  console.log("hour: "+hours+" Minute: "+minutes+" Seconds: "+seconds);
	  if(hours>=18 && minutes>=27 ){
	    console.log("Here");
	    if (millis() - startTime > waitTime) {
	      console.log(parseInt(secuenceNumber));
	      sounds[ parseInt(secuenceNumber) ].play();
	      background(colours[ parseInt(secuenceNumber) ]);
	      //sounds[ 0 ].play();
	      secuenceNumber++;
	      if(secuenceNumber>5){
	        secuenceNumber=0;
	      }
	      startTime = millis();
	   }
	  }
	  */
  	}

	if(events==4){
	  background( '#FF9F1C' );
	}
	if(events==5){
	  background( '#2EC4B6' );
	}
	if(events==6){
	  background( '#A896C2' );
	}

	if(events != events_old){
		console.log("event has changed: " + events);
		events_old = events;
	}

}

//function mousePressed(){
function touchStarted(){

// FIRST COLUMN

if(events==1){
if(mouseX>0 &&  mouseX< width/2  ){
if(mouseY>0  && mouseY< height/3 ){
      sounds[0].loop = true;
      sounds[0].play();
      socket.emit('clicked0');//Emitting user click
      boton1=true;
}
}

if(mouseX>0 &&  mouseX< width/2 ){
if(mouseY>height/3 && mouseY< 2*height/3 ){
      sounds[1].loop = true;
      sounds[1].play();
      socket.emit('clicked1');//Emitting user click
      boton2=true;
}
}

if(mouseX>0 &&  mouseX< width/2 ){
if(mouseY>2*height/3 && mouseY< 3*height/3){
      sounds[2].loop = true;
      sounds[2].play();
socket.emit('clicked2');//Emitting user click
boton3=true;
}
}
// SECOND COLUMN
if(mouseX>width/2 &&  mouseX< width ){
if(mouseY>0  && mouseY< height/3){
      sounds[3].loop = true;
      sounds[3].play();
socket.emit('clicked3');//Emitting user click
boton4=true;
}
}
if(mouseX>width/2 &&  mouseX< width ){
if(mouseY>height/3 && mouseY< 2*height/3){
      sounds[4].loop = true;
      sounds[4].play();
socket.emit('clicked4');//Emitting user click
boton5=true;
}
}
if(mouseX>width/2 &&  mouseX< width ){
if(mouseY>2*height/3 && mouseY< 3*height/3){
      sounds[5].loop = true;
      sounds[5].play();
socket.emit('clicked5');//Emitting user click
boton6=true;
}
}
}
   ////// CASE TWO ////////
if(events==2){
  if(mouseX>0 &&  mouseX< width/2  ){
  if(mouseY>0  && mouseY< height/3 ){
        sounds[0].loop = true;
        sounds[0].play();
        socket.emit('clicked0');//Emitting user click
        boton1=true;
  }
  }

  if(mouseX>0 &&  mouseX< width/2 ){
  if(mouseY>height/3 && mouseY< 2*height/3 ){
        sounds[1].loop = true;
        sounds[1].play();
        socket.emit('clicked1');//Emitting user click
        boton2=true;
  }
  }

  if(mouseX>0 &&  mouseX< width/2 ){
  if(mouseY>2*height/3 && mouseY< 3*height/3){
        sounds[2].loop = true;
        sounds[2].play();
  socket.emit('clicked2');//Emitting user click
  boton3=true;
  }
  }
  // SECOND COLUMN
  if(mouseX>width/2 &&  mouseX< width ){
  if(mouseY>0  && mouseY< height/3){
        sounds[3].loop = true;
        sounds[3].play();
  socket.emit('clicked3');//Emitting user click
  boton4=true;
  }
  }
  if(mouseX>width/2 &&  mouseX< width ){
  if(mouseY>height/3 && mouseY< 2*height/3){
        sounds[4].loop = true;
        sounds[4].play();
  socket.emit('clicked4');//Emitting user click
  boton5=true;
  }
  }
  if(mouseX>width/2 &&  mouseX< width ){
  if(mouseY>2*height/3 && mouseY< 3*height/3){
        sounds[5].loop = true;
        sounds[5].play();
  socket.emit('clicked5');//Emitting user click
  boton6=true;
  }
  }
}


}

//function mouseReleased(){
function touchEnded(){
  sounds[0].pause();
  sounds[0].currentTime = 0;
  sounds[1].pause();
  sounds[1].currentTime = 0;
  sounds[2].pause();
  sounds[2].currentTime = 0;
  sounds[3].pause();
  sounds[3].currentTime = 0;
  sounds[4].pause();
  sounds[4].currentTime = 0;
  sounds[5].pause();
  sounds[5].currentTime = 0;

  boton1=false;
  boton2=false;
  boton3=false;
  boton4=false;
  boton5=false;
  boton6=false;
/*
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

  */
}

