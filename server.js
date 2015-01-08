var express = require('express');
var app = express();
app.use(express.static(__dirname+'/files'));
app.listen(3000);

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});

//Sends a message to all users
wss.broadcast = function(data){
	wss.clients.forEach(function(client){
		client.send(data);
	});
};

var numberconnected = 0;

wss.on('connection', function(ws){
	console.log("User "+numberconnected+" connected.");
	ws.userId = numberconnected++;
	ws.on('message', function(message){
		console.log("User "+numberconnected+" said: "+message);
		ws.send("Thanks for sending a message!");
	}
}
