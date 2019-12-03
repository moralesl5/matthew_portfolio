console.log("JS Linked");

// START JQUERY
$(document).ready(function(){
	console.log('jQuery Linked');
	var query = window.location.search;

	// About Section
	var aboutDiv = $(".about")
	var hamburger = $(".menu");

	// var textOne = document.getElementsByClassName("typeOne")[0];
	// var textTwo = document.getElementsByClassName("typeTwo")[0];
	// var textThree = document.getElementsByClassName("typeThree")[0];
	// var textFour = document.getElementsByClassName("typeFour")[0];
	// var textFive = document.getElementsByClassName("typeFive")[0];
	// var textSix = document.getElementsByClassName("typeSix")[0];
	// var textSeven = document.getElementsByClassName("typeSeven")[0];
	// var textEight = document.getElementsByClassName("typeEight")[0];
	// var textNine = document.getElementsByClassName("typeNine")[0];


	// Get overlay element
	var overlay = $(".overlay");
	setTimeout(function(){
		hamburger.removeClass('hidden');
		overlay.removeClass('hidden');
		aboutDiv.removeClass('hidden');
    	setTimeout(function () {
      		hamburger.removeClass('visuallyHidden');
      		overlay.removeClass('visuallyHidden');
      		aboutDiv.removeClass('visuallyHidden');
    	}, 20);
	}, 2000);

	// $.backstretch("./resources/matthew_main.jpg");

	// Get Modal
	var modal = document.getElementById('myModal');
	    
	// Get white logo
	var logoWhite = document.getElementsByClassName("logo_white")[0];

	// Get black logo
	var logoBlack = document.getElementsByClassName("logo_black")[0];

	// Get pseudoelement to open Modal
	var btn = document.getElementById("sized");

	// Get background element
	var background = document.getElementsByClassName("container")[0];

	// Get modal-signature element
	var modalSign = document.getElementsByClassName("modal-sign")[0];


	// Contact Section
	var contactDiv = document.getElementsByClassName('contact')[0];

	// Get the <span> element to close Modal
	var span = document.getElementsByClassName("close")[0];

	// modal links
	var aboutLink = document.getElementById("navAbout");
	
	var musingsLink = document.getElementById("navMusings");
	
	var musingsDiv = document.getElementsByClassName("musings")[0]
	
	var contactLink = document.getElementById("navContact");

	var logoWhite = document.getElementsByClassName("logo_white")[0]

	// Get in touch link
	var getInTouch = document.getElementsByClassName("typeNine")[0].getElementsByTagName("A")[0];

	// When user clicks button, open Modal
	var modalOn = function(){
	   modal.style.display = "block";
	   modalSign.style.display = "block";
	   btn.style.display = "none";
	   logoWhite.style.display = "none"
	}

	// When user clicks Close (x), close Modal
	var modalOff = function(){
	   modal.style.display = "none";
	   modalSign.style.display = "none"
	   btn.style.display = "block";
	   logoWhite.style.display = "block"
	};


	// Nav Links
	// var showAbout = function(){
	// 	aboutDiv.style.display = "block";
	// }

	// var hideAbout = function(){
	// 	aboutDiv.style.display = "none";
	// }

	var showContact = function(){
		// var href = window.location.href;
		// if (query == "?musings=Rookie_Leaders") {
		// 	window.location = href.replace("?musings=Rookie_Leaders","")
		// }
		aboutDiv.css("display", "none");
		musingsDiv.style.display = "none";
		background.style.paddingTop = "0px";
		contactDiv.style.display = "block";
		overlay.css("background-color","rgba(0,0,0,0.3)")
	}

	var hideContact = function(){
		contactDiv.style.display = "none"
	}


	var showMusings = function(){
		aboutDiv.css("display", "none");
		background.style.paddingTop = "0px";
		musingsDiv.style.display = "block";
		overlay.css("background-color","rgba(0,0,0,0.7)");
		// var href = window.location.href;
		// if (query != "?musings=Rookie_Leaders") {
		// 	window.location = href.concat("?musings=Rookie_Leaders")
		// }
		
	}

	logoWhite.onclick = function(event){
		background.style.paddingTop = "25%";
		aboutDiv.css("transition", "");
		aboutDiv.css("display", "block");
		overlay.css("background-color","rgba(0,0,0,0.7)")
		contactDiv.style.display = "none";
		musingsDiv.style.display = "none";
		// var href = window.location.href;
		// if (query == "?musings=Rookie_Leaders") {
		// 	window.location = href.replace("?musings=Rookie_Leaders","")
		// 	event.preventDefault();
		// }
	}

	logoBlack.onclick = function(event){
		modalOff();
		background.style.paddingTop = "25%";
		aboutDiv.css("transition", "");
		aboutDiv.css("display", "block");
		overlay.css("background-color","rgba(0,0,0,0.7)")
		contactDiv.style.display = "none";
		musingsDiv.style.display = "none";
		// var href = window.location.href;
		// if (query == "?musings=Rookie_Leaders") {
		// 	window.location = href.replace("?musings=Rookie_Leaders","")
		// 	event.preventDefault();
		// }
	}

	contactLink.onclick = function(event){
		modalOff();
		showContact();
		event.preventDefault();
	}

	musingsLink.onclick = function(event){
		modalOff()
		hideContact()
		showMusings()
		event.preventDefault();
	}

	getInTouch.onclick = function(event){
		showContact();
		event.preventDefault();
	}

	btn.onclick = function() {
		modalOn();
	};

	span.onclick = function() {
		modalOff();
	};

	if (query == "?musings=Rookie_Leaders") {
		modalOff();
		showMusings();
	}

	// When user clicks anywhere outside of the Modal, close Modal
	window.onclick = function(event) {
	    if (event.target == modal) {
	       modal.style.display = "none";
	    }
	}
});
// END OF jQUERY