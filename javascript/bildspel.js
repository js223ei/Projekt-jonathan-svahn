// JavaScript Document

 	alert:("sdfs");
	console.log("hjej");
	
	
	var bilder = ['../css/pics/me.PNG', '../css/pics/hemsida.PNG', '../css/pics/TopGame.PNG' ]
	
	var counter = 0;
	
	setInterval (function() {changeimage()},3000);
	function changeimage(){var image = document.querySelector("#spel");
	image.setAttribute('src', bilder[counter]);
	counter ++;
	if (counter > 2){
		counter = 0; }
}