var express = require('express');
var router = express.Router();

var $ = require('jquery');

router.post('/', function(req, res){

	var mysql =  require('mysql');
	var connection =  mysql.createConnection({
	  	host : "localhost",
	  	user : "root",
	  	password: ""
	});

	connection.connect();
	connection.query("use test");


	if(req.body.name)
		connection.query( "update hanbat set name='" + req.body.name + "' limit 1;");
	
	if(req.body.age)
		connection.query( "update hanbat set age='" + req.body.age + "' limit 1;");
	if(req.body.height)
		connection.query( "update hanbat set height='" + req.body.height + "' limit 1;");
	if(req.body.weight)
		connection.query( "update hanbat set weight='" + req.body.weight + "' limit 1;");
	if(req.body.school)
		connection.query( "update hanbat set school='" + req.body.school + "' limit 1;");
	if(req.body.work)
		connection.query( "update hanbat set work='" + req.body.work + "' limit 1;");

	connection.end();

});


router.get('/', function(req, res){

	var mysql =  require('mysql');
	var connection =  mysql.createConnection({
	  	host : "localhost",
	  	user : "root",
	  	password: ""
	});

	connection.connect();
	connection.query("use test");
	connection.query( "select * from hanbat limit 1;", function(err, rows){
		if(err)	
			throw err;
		else{
	
			myname = rows[0].name;
			myage = rows[0].age;
			myheight = rows[0].height;
			myweight = rows[0].weight;
			myschool = rows[0].school;
			mywork = rows[0].work;
			
		}
	});

	res.send("In the database.....</br>Name : " + myname + "</br>Age : " + myage + "</br>Height : " + myheight
			+ "</br>Weight : " + myweight + "</br>School : " + myschool + "</br>Work : " + mywork);


});

module.exports = router;