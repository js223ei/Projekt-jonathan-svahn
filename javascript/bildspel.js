// JavaScript Document

 	alert:("sdfs");
	console.log("hjej");
	
	
	var bilder = ['../css/pics/photo.PNG', '../css/pics/illu.PNG', '../css/pics/3d.PNG' ]
	
	var counter = 0;
	
	setInterval (function() {changeimage()},3000);
	function changeimage(){var image = document.querySelector("#me");
	image.setAttribute('src', bilder[counter]);
	counter ++;
	if (counter > 2){
		counter = 0; }
}