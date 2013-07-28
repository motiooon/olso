/*
*
* Initialize MongoDb connection
*
* */

var mongoose = require("mongoose");

module.exports = function(app){

	app.set("db", mongoose);

	// Connect to mongodb
	app.get("db").connect(env.mongodb.host, function (err) {
		if (err) { console.log("Couldn't connect to MongoDb"); }
	});

};