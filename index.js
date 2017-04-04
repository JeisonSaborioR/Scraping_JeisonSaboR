var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8080; 

var url = "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2051541.m570.l1313.TR12.TRC2.A0.H0.Xiphone.TRS0&_nkw=iphone&_sacat=0";
request(url, function(err,resp,body){
	if(err){
		console.log(err);
	}else{

		var $ = cheerio.load(body);
		$('.shic').each(function(i,element){

			var titulo = $(this).find('.lvtitle').text();
			var precio = $(this).find('.prRange').text();
			var vendedor = $(this).find('.red').text();
			

			//var titulo = $(this).html();
			console.log(titulo); 
			console.log(precio);
			console.log(vendedor);
			console.log("");
		});
	}
});



 