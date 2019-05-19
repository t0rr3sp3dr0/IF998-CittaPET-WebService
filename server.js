const http = require("http");
const express = require('express');
const messages = require('./proto/map_pb');
const services = require('./proto/map_grpc_pb');
const grpc = require('grpc');
const mongoose = require('mongoose');
var assert = require('assert');

const app = express();

const client = new services.MapClient('localhost:50051', grpc.credentials.createInsecure());
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const BusEvent = mongoose.model('BusEvent', { unit: String, timestamp: String, coordinate: {easting: String, northing: String }});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connected!")
});

app.get('/busesLocation', (_, res) => {
	res.header("Content-Type", "text/event-stream");
  res.header("Cache-Control", "no-cache");
  res.header("Connection", "keep-alive");
 
  setInterval(() => {
		// enviar mapa atualizado

	client.getBusesLocation(new messages.GetBusesLocationRequest(), function(err, response) {
		const busesLocationList = response.toObject().busesLocationList;
		console.log(busesLocationList);
			res.write("data: " + JSON.stringify(busesLocationList) + "\n\n");
	  });
  }, 100);
});

app.get('/unitList', (req, res) => {
	res.header("Content-Type", "text/event-stream");
  res.header("Cache-Control", "no-cache");
  res.header("Connection", "keep-alive");
 
	// enviar lista de unidades de onibus

	BusEvent.distinct('unit', function (err, result) {
		if (err) return handleError(err);
	
		assert(Array.isArray(result));
		console.log('unique units', result);
		res.json(result)
	})
	
});

app.use('/', (_, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

server.listen(8081);