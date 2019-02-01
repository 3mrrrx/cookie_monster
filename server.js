var express = require('express');
var app=express();
var http = require('http').Server(app);
var server = require('socket.io')(http);
var port=8081;


var users_count = 0;

var counter0=0;//Initial counter value 
var counter1=0;//Initial counter value 
var counter2=0;//Initial counter value 
var counter3=0;//Initial counter value 
var counter4=0;//Initial counter value 
var counter5=0;//Initial counter value 

// app.get('/', function(req, res) {

//         res.sendFile(__dirname + '/index.html');
//     });

app.use(express.static(__dirname + '/public'));

server.on('connection', function(socket)
{

    users_count+=1;
    console.log('a user connected, number of users: '+ users_count);

    //on user connected sends the current click count
    socket.emit('click_count0',counter0);

    //when user click the button
    socket.on('clicked0',function(){
        counter0+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count0',counter0);//send to all users new counter value
    });


    //on user connected sends the current click count
    socket.emit('click_count1',counter1);

    //when user click the button
    socket.on('clicked1',function(){
        counter1+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count1',counter1);//send to all users new counter value
    });


    //on user connected sends the current click count
    socket.emit('click_count2',counter2);

    //when user click the button
    socket.on('clicked2',function(){
        counter2+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count2',counter2);//send to all users new counter value
    });


    //on user connected sends the current click count
    socket.emit('click_count3',counter3);

    //when user click the button
    socket.on('clicked3',function(){
        counter3+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count3',counter3);//send to all users new counter value
    });

    //on user connected sends the current click count
    socket.emit('click_count4',counter4);

    //when user click the button
    socket.on('clicked4',function(){
        counter4+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count4',counter4);//send to all users new counter value
    });

        //on user connected sends the current click count
    socket.emit('click_count5',counter5);

    //when user click the button
    socket.on('clicked5',function(){
        counter5+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count5',counter5);//send to all users new counter value
    });

socket.on('disconnect', function () {
    users_count-=1;
    console.log('a user dis-connected, number of users:'+ users_count);

});

});

//starting server
http.listen(port, function()
{
    console.log('listening on port:'+port);
});
