 
var express=require("express")
var app=express();

var cors=require("cors")

app.use(cors());

const requestIp = require('request-ip');

app.use(requestIp.mw())
 
app.use(function(req, res) {
    const ip = req.clientIp;
    res.end(ip);
});

app.get('/',function (req,res){

		console.log("hey i am in");
		
});

app.listen(3000);

