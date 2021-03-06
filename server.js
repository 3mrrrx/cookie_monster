var express = require('express');


var app=express();

var http = require('http').Server(app);
var server = require('socket.io')(http);

var net = require('net');


var port=8080;
var port_conductor=8080;
var port_python=8081;

var users_count = 0;

var counter0=0;//Initial counter value
var counter1=0;//Initial counter value
var counter2=0;//Initial counter value
var counter3=0;//Initial counter value
var counter4=0;//Initial counter value
var counter5=0;//Initial counter value


var events = 0;
var events_old
var code;

// app.get('/', function(req, res) {

//         res.sendFile(__dirname + '/index.html');
//     });

app.use(express.static(__dirname + '/public'));

////////////////////////////////////////////////////////////////////////////////////////////
// clicks server
////////////////////////////////////////////////////////////////////////////////////////////

server.on('connection', function(socket)
{

    users_count+=1;
    console.log('a user connected, number of users: '+ users_count);

    //on user connected sends the current click count
    socket.emit('click_count0',counter0);
    socket.emit('click_count1',counter1);
    socket.emit('click_count2',counter2);
    socket.emit('click_count3',counter3);
    socket.emit('click_count4',counter4);
    socket.emit('click_count5',counter5);

    //when user click the button
    socket.on('clicked0',function(){
        counter0+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count0',counter0);//send to all users new counter value
    });

    socket.on('clicked1',function(){
        counter1+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count1',counter1);//send to all users new counter value
    });

    socket.on('clicked2',function(){
        counter2+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count2',counter2);//send to all users new counter value
    });

    socket.on('clicked3',function(){
        counter3+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count3',counter3);//send to all users new counter value
    });

    socket.on('clicked4',function(){
        counter4+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count4',counter4);//send to all users new counter value
    });

    socket.on('clicked5',function(){
        counter5+=1;//increments global click count
        console.log("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        //server_python.emit("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)
        server.emit('click_count5',counter5);//send to all users new counter value
    });

    socket.on('disconnect', function () {
        users_count-=1;
        console.log('a user dis-connected, number of users:'+ users_count);
    });

    if(events != events_old){
        socket.emit('evets', events);
        console.log("event has changed: " + events);
        events_old = events;
    }

});

//starting server
http.listen(port, function()
{
    console.log('server is running; listening on port:'+port);
});


////////////////////////////////////////////////////////////////////////////////////////////
// python server
////////////////////////////////////////////////////////////////////////////////////////////

// Create and return a net.Server object, the function will be invoked when client connect to this server.
var server_python = net.createServer(function(client) {

    console.log('python Client connect to python server. Client local address : ' + client.localAddress + ':' + client.localPort + '. client remote address : ' + client.remoteAddress + ':' + client.remotePort);

    client.setEncoding('utf-8');

    client.setTimeout(1000);

    // When receive client data.
    client.on('data', function (data) {


        // Print received client data and length.
        console.log('python Receive client send data : ' + data + ', data size : ' + client.bytesRead);

        //        code = data.toString().slice(0,6);
        code = data.toString();
        console.log('code is code = ' + code);


        if( code == 'event0'){
            events = 0;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event1') {
            events = 1;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event2') {
            events = 2;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event3') {
            events = 3;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event4') {
            events = 4;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event5') {
            events = 5;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        } else if ( code == 'event6') {
            events = 6;
            server.emit('events',events);//send to all users new counter value
            client.write("events is now:  " + events);
            console.log('events is now:  ' + events);

        }

        client.write("clicked:  " + counter0 + " " + counter1 + " " + counter2 + " " + counter3 + " " + counter4 + " " + counter5)

        //// Server send data back to client use client net.Socket object.
        //client.end('python Server received data : ' + data + ', send back to python client data size : ' + client.bytesWritten);
    });

    // When client send data complete.
    client.on('end', function () {
        console.log('python Client disconnect.');

        // Get current connections count.
        server_python.getConnections(function (err, count) {
            if(!err)
            {
                // Print current connection count in server console.
                console.log("There are %d connections now to python server. ", count);
            }else
            {
                console.error(JSON.stringify(err));
            }

        });
    });

    // When client timeout.
    client.on('timeout', function () {
        console.log('python Client request time out. ');
    })
});

// Make the server a TCP server listening on port 9999.
server_python.listen(port_python, function () {

    // Get server address info.
    var serverInfo = server_python.address();

    var serverInfoJson = JSON.stringify(serverInfo);

    console.log('TCP python server listen on address : ' + serverInfoJson);

    server_python.on('close', function () {
        console.log('TCP python server socket is closed.');
    });

    server_python.on('error', function (error) {
        console.error(JSON.stringify(error));
    });

});
