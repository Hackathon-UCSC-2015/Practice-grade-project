var express = require('express');
var app = express();
app.use(express.static(__dirname+'/files'));
app.listen(3000, function(){});

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});

wss.broadcast = function(data){
	wss.clients.forEach(function(client){
		client.send(data);
	});
};

