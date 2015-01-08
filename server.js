var express = require('express');
var fs = require('fs');
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
	ws.username = numberconnected++;
	ws.send("Hello, "+ws.username);
	ws.on('message', function(packet){
		var message = JSON.parse(packet);
		switch (message.type){
			case "save":
				saveData(message.username, message.data);
			break;
			case "load":
				ws.send(JSON.stringify({type: "load", data: loadData(message.username)}));
			break;
		}
		ws.send("Thanks for sending a message!");
	});
});

function filenameFromUsername(username){
	return __dirname+"/userdata/"+username;
}

function saveData(username, data){
	fs.writeFileSync(filenameFromUsername(username), data);
}

function loadData(username){
	var data = fs.readFileSync(filenameFromUsername(username), 'utf8');
	return data;
}
