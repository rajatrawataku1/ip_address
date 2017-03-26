
var getting_resonse_ip;


$(document).ready(function(){

	var settings=
	{
		"async":true,
		"crossDomain" : true,
		"url" :"http://localhost:3000/",
		"method" : "GET"
	}

	$.ajax(settings).done(function(response) {

		getting_resonse_ip=response;

	    $("#ip_man").text("Your IP address is : "+response );

	})



});