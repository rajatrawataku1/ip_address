
var getting_resonse_ip;


$(document).ready(function(){

	var settings=
	{
		"async":true,
		"crossDomain" : true,
		"url" :"http://192.168.171.194:3000/",
		"method" : "GET"
	}

	$.ajax(settings).done(function(response) {

		getting_resonse_ip=response;

		$("#ip_address_bar").append('<br> <br> <br> <br> <div class="col s12 center ip_style"></div>')
		$("#ip_address_bar").children().text(" Your IP address is : " + response );

		
	})



});