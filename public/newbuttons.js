$(document).ready(function(){


  // alert('This webpage will use your speakers! boom boom');
  var result = confirm( 'This webpage will use your speakers! \n boom boom!!!' );

  if ( result ) {


      var sound1, sound2, sound3, sound4, sound5, sound6;

      var button1, button2, button3, button4, button5, button6;
      //Initial counter value
      var counter0, counter1, counter2, counter3, counter4, counter5;
      counter0 = counter1 = counter2 = counter3 = counter4 = counter5 = 0;

      var events = 1;
      var events_old = 1;

      var alreadyExecute=false;

      var waitTime;
      var startTime;

      var finishTimeCase3;

      var sounds=[];
      var colours=[];

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
      socket.on('click_count1',function(value){counter1 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
      socket.on('click_count2',function(value){counter2 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
      socket.on('click_count3',function(value){counter3 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
      socket.on('click_count4',function(value){counter4 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});
      socket.on('click_count5',function(value){counter5 = value; console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5);});

      // // listen to server
      // socket.on('click_count0',function(value) {counter0 = value;});
      // socket.on('click_count1',function(value) {counter1 = value;});
      // socket.on('click_count2',function(value) {counter2 = value;});
      // socket.on('click_count3',function(value) {counter3 = value;});
      // socket.on('click_count4',function(value) {counter4 = value;});
      // socket.on('click_count5',function(value) {counter5 = value;});

      // listen to port_conductor
      socket.on('conductor_count0',function(value) {counter0 = value;});
      socket.on('conductor_count1',function(value) {counter1 = value;});
      socket.on('conductor_count2',function(value) {counter2 = value;});
      socket.on('conductor_count3',function(value) {counter3 = value;});
      socket.on('conductor_count4',function(value) {counter4 = value;});
      socket.on('conductor_count5',function(value) {counter5 = value;});

      // laod sound files
      var sound1 = new Pizzicato.Sound('assets/Sound1.mp3');
      var sound2 = new Pizzicato.Sound('assets/Sound2.mp3');
      var sound3 = new Pizzicato.Sound('assets/Sound3.mp3');
      var sound4 = new Pizzicato.Sound('assets/Sound4.mp3');
      var sound5 = new Pizzicato.Sound('assets/Sound5.mp3');
      var sound6 = new Pizzicato.Sound('assets/Sound6.mp3');

      var counterxx = 0;

      var log = function(msg) {
        return function(e) {
        // out put even to pre
         // var pre = $("pre");
         //  pre.append("EVENT (" + new Date().getTime() + "): dev nr."+ event.target.id + " "  + msg + "\n");
         // if(e.originalEvent.type == "touchmove") e.preventDefault();
         // pre[0].scrollTop = pre.height();
        // out put event to console log
         var orgColor = event.target.style.backgroundColor
         console.log("EVENT Time: (" + new Date().getTime() + "); Event Id: "+ event.target.id + "; event param: "  + msg + "\n");
         // console.log("EVENT color: " + orgColor);

        if ( msg == "mousedown" || msg == "touchstart"){
          counterxx += 1;
          console.log("click count: " + counterxx);

           switch (event.target.id) {
            case 'Xbutton1':
                socket.emit('clicked0');
                sound1.play();
                event.target.style.backgroundColor = "#D18E4C";
                break;
            case 'Xbutton2':
                socket.emit('clicked1');
                sound2.play();
                event.target.style.backgroundColor = "#D16800";
                break;
            case 'Xbutton3':
                socket.emit('clicked2');
                sound3.play();
                event.target.style.backgroundColor = "#AA5500";
                break;
            case 'Xbutton4':
                socket.emit('clicked3');
                sound4.play();
                event.target.style.backgroundColor = "#A896C2";
                break;
            case 'Xbutton5':
                socket.emit('clicked4');
                sound5.play();
                event.target.style.backgroundColor = "#876EAF";
                break;
            case 'Xbutton6':
                socket.emit('clicked5');
                sound6.play();
                event.target.style.backgroundColor = "#7252A2";
                break;
             default:
                console.log('Sorry, we are out of ' + expr + '.');
           }
         }


         if ( msg == "mouseup" || msg == "touchend"){
            switch (event.target.id) {
             case 'Xbutton1':
                 // socket.emit('clicked0');
                 sound1.stop();
                 event.target.style.backgroundColor = "#FFAD5C";
                 break;
             case 'Xbutton2':
                 // socket.emit('clicked1');
                 sound2.stop();
                 event.target.style.backgroundColor = "#FF7F00";
                 break;
             case 'Xbutton3':
                 // socket.emit('clicked2');
                 sound3.stop();
                 event.target.style.backgroundColor = "#BA5D00";
                 break;
             case 'Xbutton4':
                 // socket.emit('clicked3');
                 sound4.stop();
                 event.target.style.backgroundColor = "#B8A5D5";
                 break;
             case 'Xbutton5':
                 // socket.emit('clicked4');
                 sound5.stop();
                 event.target.style.backgroundColor = "#9478C0";
                 break;
             case 'Xbutton6':
                 // socket.emit('clicked5');
                 sound6.stop();
                 event.target.style.backgroundColor = "#7D5AB2";
                 break;
              default:
                 console.log('Sorry, we are out of ' + expr + '.');
            }
          }

         // // not used
         // song.start();
         // event.target.style.backgroundColor  = "red"
         // event.target.style.color = orgColor
         // soundBuffer.start();
        };
      };

      $(function() {
        // $("div").on("mousedown", log("mousedown"));
        // $("div").on("mouseup", log("mouseup"));
        // $("div").on("click", log("click"));
        // $("div").on("dblclick", log("dblclick"));
        // $("div").on("context", log("context"));
        //$("div").on("touchstart", log("touchstart"));
        //$("div").on("touchstart", log("touchstart"));
        // $("canvas").on("touchstart", log("touchstart"));
        // $("div").on("touchcancel", log("touchcancel"));
        // $("div").on("touchmove", log("touchmove"));
        // $("div").on("touchleave", log("touchleave"));
        // $("div").on("touchend", log("touchend"));

        //$("button").on("touchstart", log("touchstart"));
        //$("button").on("click", log("click"));

        // document.getElementById("Xbutton1").addEventListener("mousedown", log("mousedown"));
        // document.getElementById("Xbutton2").addEventListener("mousedown", log("mousedown"));
        // document.getElementById("Xbutton3").addEventListener("mousedown", log("mousedown"));
        // document.getElementById("Xbutton4").addEventListener("mousedown", log("mousedown"));
        // document.getElementById("Xbutton5").addEventListener("mousedown", log("mousedown"));
        // document.getElementById("Xbutton6").addEventListener("mousedown", log("mousedown"));


        // document.getElementById("Xbutton1").addEventListener("mouseup", log("mouseup"));
        // document.getElementById("Xbutton2").addEventListener("mouseup", log("mouseup"));
        // document.getElementById("Xbutton3").addEventListener("mouseup", log("mouseup"));
        // document.getElementById("Xbutton4").addEventListener("mouseup", log("mouseup"));
        // document.getElementById("Xbutton5").addEventListener("mouseup", log("mouseup"));
        // document.getElementById("Xbutton6").addEventListener("mouseup", log("mouseup"));


        document.getElementById("Xbutton1").addEventListener("touchstart", log("touchstart"));
        document.getElementById("Xbutton2").addEventListener("touchstart", log("touchstart"));
        document.getElementById("Xbutton3").addEventListener("touchstart", log("touchstart"));
        document.getElementById("Xbutton4").addEventListener("touchstart", log("touchstart"));
        document.getElementById("Xbutton5").addEventListener("touchstart", log("touchstart"));
        document.getElementById("Xbutton6").addEventListener("touchstart", log("touchstart"));

        document.getElementById("Xbutton1").addEventListener("touchend", log("touchend"));
        document.getElementById("Xbutton2").addEventListener("touchend", log("touchend"));
        document.getElementById("Xbutton3").addEventListener("touchend", log("touchend"));
        document.getElementById("Xbutton4").addEventListener("touchend", log("touchend"));
        document.getElementById("Xbutton5").addEventListener("touchend", log("touchend"));
        document.getElementById("Xbutton6").addEventListener("touchend", log("touchend"));



// colors not pressed
// #FFAD5C #FF7F00 #BA5D00 #B8A5D5 #9478C0 #7D5AB2

// colors  pressed
// #D18E4C #D16800 #AA5500 #A896C2 #876EAF #7252A2


      });


      // use XHR to load an audio track, and
      // decodeAudioData to decode it and OfflineAudioContext to render it
//
//       function getData() {
//
//         // define online and offline audio context
//
//         var audioCtx = new AudioContext();
//         var offlineCtx = new OfflineAudioContext(2,44100*40,44100);
//
//         source = offlineCtx.createBufferSource();
//
//
//         request = new XMLHttpRequest();
//
//         request.open('GET', 'assets/Sound1.mp3', true);
//
//         request.responseType = 'arraybuffer';
//
//         request.onload = function() {
//           var audioData = request.response;
//
//           audioCtx.decodeAudioData(audioData, function(buffer) {
//             myBuffer = buffer;
//             source.buffer = myBuffer;
//             source.connect(offlineCtx.destination);
//             source.start();
//             //source.loop = true;
//             offlineCtx.startRendering().then(function(renderedBuffer) {
//               console.log('Rendering completed successfully');
//               var song = audioCtx.createBufferSource();
//               song.buffer = renderedBuffer;
//
//               song.connect(audioCtx.destination);
//
//               $("div").on("touchstart", song.start(), log("touchsart"));
//
//               $("button").on("click", song.start(),log("touchsart"));
//
// //              $("div").on("touchstart", song.start(), log("touchsart"));
//
//               acousticGuitar.play();
//               // play.onclick = function() {
//               //   song.start();
//               // }
//             }).catch(function(err) {
//                 console.log('Rendering failed: ' + err);
//                 // Note: The promise should reject when startRendering is called a second time on an OfflineAudioContext
//             });
//           });
//         }
//
//         request.send();
//       }
//
//
// getData() ;

  } else {
      // the user clicked cancel or closed the confirm dialog.
  }

});



// document.querySelector('button').addEventListener('click', function() {
//   var context = new AudioContext();
//   // Setup all nodes
//   ...
// });

// Run getData to start the process off
// $("div").on("mousedown",getData(), log("---------------start--------------------"));
