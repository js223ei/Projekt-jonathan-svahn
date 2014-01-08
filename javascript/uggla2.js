 	alert:("sdfs");
	console.log("hjej");
	
	
	var bilder = ['../css/pics/uggla2.PNG', '../css/pics/uggla3.PNG', '../css/pics/uggla1.PNG', '../css/pics/uggla1.PNG', '../css/pics/uggla1.PNG','../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  '../css/pics/uggla1.PNG',  ]
	
	var counter = 0;
	
	setInterval (function() {changeimage()},100);
	function changeimage(){var image = document.querySelector("#blink2");
	image.setAttribute('src', bilder[counter]);
	counter ++;
	if (counter > 22){
		counter = 0; }
}// JavaScript Document