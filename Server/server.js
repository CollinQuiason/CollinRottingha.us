
var portNum = 8081;


var express = require('express');
var app = express();
var server = app.listen(portNum);

app.use(express.static('../Public'));

console.log("CollinRottingha.us server running on port: " + portNum + "!\n");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);








function newConnection(socket){

	var today = new Date(); 
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	var clientIpAddress = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
	console.log(dateTime + '  |  New Connection  |  IP : '+ clientIpAddress + '  ' + "|  ID: " +  socket.id);
}