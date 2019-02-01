var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;

var waitTime;
var startTime;
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


 sound1 = new Audio('assets/Sound0.mp3');
 sound2 = new Audio('assets/Sound1.mp3');
 sound3 = new Audio('assets/Sound2.mp3');
 sound4 = new Audio('assets/Sound3.mp3');
 sound5 = new Audio('assets/Sound4.mp3');
 sound6 = new Audio('assets/Sound5.mp3');


 sounds[0] = new Audio('assets/Sound0.mp3');
 sounds[1] = new Audio('assets/Sound1.mp3');
 sounds[2] = new Audio('assets/Sound2.mp3');
 sounds[3] = new Audio('assets/Sound3.mp3');
 sounds[4] = new Audio('assets/Sound4.mp3');
 sounds[5] = new Audio('assets/Sound5.mp3');

}

function setup() {
createCanvas(windowWidth, windowHeight);
background(100);
  startTime = 0;
  waitTime = 15000; // 3 segundos

  colours[0] = color('#3E78B2');
colours[1] = color('#FA8334');
colours[2] = color('#976BAE');
colours[3] = color('#F3CA40');
colours[4] = color('#FE5F55');
colours[5] = color('#70C1B3');
}

function draw() {
//background(100);
  //background(colours[ 1 ]);
noStroke();
  // FIRST COLUMN
fill(200,100,0);
rect( 10 ,0, width/2-20, height/3 );    // 0
fill(0);
  textSize(30);
  text(counter0,width/4  ,height/4  );
fill(200,100,100);
rect( 10 , height/3 , width/2-20, height/3 );    // 1
fill(0);
  textSize(30);
  text(counter1,width/4  ,2*height/4  );
fill(200,100,200);
rect( 10 , 2*height/3, width/2-20, height/3 );   // 2
fill(0);
  textSize(30);
  text(counter2,width/4  ,3*height/4  );
  // SECOND COLUMN
  fill(200,100,0);
rect( width/2+10 ,0, width/2-20, height/3 );     // 3
fill(0);
  textSize(30);
  text(counter3,3*width/4  ,height/4  );
fill(200,100,100);
rect( width/2+10 ,height/3, width/2-20, height/3 );   // 4
fill(0);
  textSize(30);
  text(counter4,3*width/4  ,2*height/4  );
fill(200,100,200);
rect( width/2+10 ,2*height/3, width/2-20, height/3 );   // 5
fill(0);
  textSize(30);
  text(counter5,3*width/4  ,3*height/4  );

  //console.log("millis: "+parseInt(millis())+" TiempoInicio: "+parseInt(startTime));
  hours=hour();
  minutes=minute();
  seconds=second();
  //console.log("hour: "+hours+" Minute: "+minutes+" Seconds: "+seconds);
  if(hours>=18 && minutes>=27 /*&& seconds>=0*/){
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
}

function mousePressed(){
// FIRST COLUMN
if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
if(mouseY>height/4 -50 && mouseY< height/4 +50){
      sounds[0].loop = true;
      sounds[0].play();
socket.emit('clicked0');//Emitting user click
print("ENTRA1");
}
}
if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
      sounds[1].loop = true;
      sounds[1].play();
socket.emit('clicked1');//Emitting user click
print("ENTRA2");
}
}
if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
      sounds[2].loop = true;
      sounds[2].play();
socket.emit('clicked2');//Emitting user click
print("ENTRA3");
}
}
// SECOND COLUMN
if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
if(mouseY>height/4 -50 && mouseY< height/4 +50){
      sounds[3].loop = true;
      sounds[3].play();
socket.emit('clicked3');//Emitting user click
print("ENTRA4");
}
}
if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
      sounds[4].loop = true;
      sounds[4].play();
socket.emit('clicked4');//Emitting user click
print("ENTRA5");
}
}
if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
      sounds[5].loop = true;
      sounds[5].play();
socket.emit('clicked5');//Emitting user click
print("ENTRA6");
}
}
}

function mouseReleased(){

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

