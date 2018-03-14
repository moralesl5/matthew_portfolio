console.log("JS Linked");

// START JQUERY
$(document).ready(function(){
	console.log('jQuery Linked');

	// About Section
	var aboutDiv = $(".about")

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
		overlay.removeClass('hidden');
		aboutDiv.removeClass('hidden');
    	setTimeout(function () {
      		overlay.removeClass('visuallyHidden');
      		aboutDiv.removeClass('visuallyHidden')
    	}, 20);

  //   	var typewriter = new Typewriter(textOne, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		wrapperClassName: "textOne",
  //   		typingSpeed: 50
		// });

		// typewriter.pauseFor(1000)
		// 	.typeString('Hello.')
		// 	.start();

		// var typewriter2 = new Typewriter(textTwo, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textTwo"
		// });

		// typewriter2.pauseFor(2500)
		// 	.typeString('I am happy you are here.')
		// 	.start();

		// var typewriter3 = new Typewriter(textThree, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textThree"
		// });

		// typewriter3.pauseFor(4000)
		// 	.typeString('A little bit about me...')
		// 	.start();

		// var typewriter4 = new Typewriter(textFour, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textFour"
		// });

		// typewriter4.pauseFor(6000)
		// 	.typeString('I am a meditator, reader, writer and lover of life.')
		// 	.start();

		// var typewriter5 = new Typewriter(textFive, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textFive"
		// });

		// typewriter5.pauseFor(8000)
		// 	.typeString("I founded three companies, the first when I was 22, creating a marketplace that provides convenient and affordable access to fitness clubs and healthy living. I am currently CEO of Goalspriing which is reinventing coaching for the modern workforce. I\'ve coached more than 100 executives at private, venture-backed companies since our inception.")
		// 	.start();

		// var typewriter6 = new Typewriter(textSix, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textSix"
		// });

		// typewriter6.pauseFor(21000)
		// 	.typeString('This quote speaks to who i am.')
		// 	.start();

		// var typewriter7 = new Typewriter(textSeven, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textSeven"
		// });

		// typewriter7.pauseFor(24000)
		// 	.typeString('"The master in the art of living makes little distinction between his work and his play, his labor and his leisure, his mind and his body, his education and his recreation, his love and his religion. He hardly knows which is which. He simply pursues his vision of excellence at whatever he does, leaving others to decide whether he is working or playing. To him he is always doing both."')
		// 	.start();

		// var typewriter8 = new Typewriter(textEight, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textEight"
		// });

		// typewriter8.pauseFor(38000)
		// 	.typeString('- L.P. Jacks')
		// 	.start();

		// var typewriter9 = new Typewriter(textNine, {
  //   		loop: false,
  //   		animateCursor: false,
  //   		cursor: "",
  //   		typingSpeed: 30,
  //   		wrapperClassName: "textNine"
		// });

		// typewriter9.pauseFor(40000)
		// 	.typeString('Please get in touch with me if you are interested in coaching or collaborating on life enhancing ventures.')
		// 	.start();


	}, 3000);

	// $.backstretch("./resources/matthew_main.jpg");

	// Get Modal
	var modal = document.getElementById('myModal');
	    
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
	// var musingsLink = document.getElementById("navMusings");
	var contactLink = document.getElementById("navContact");

	// When user clicks button, open Modal
	var modalOn = function(){
	   modal.style.display = "block";
	   // background.style.backgroundImage = "url('./resources/matthew_wide.jpg')"
	   // background.style.backgroundSize = "cover";
	   // background.style.backgroundPosition = "center";
	   modalSign.style.display = "block";
	   btn.style.display = "none";
	}

	// When user clicks Close (x), close Modal
	var modalOff = function(){
	   modal.style.display = "none";
	   // background.style.backgroundImage = "url('./resources/matthew_wide.jpg')"
	   // background.style.backgroundSize = "cover";
	   // background.style.backgroundPosition = "center";
	   modalSign.style.display = "none"
	   btn.style.display = "block";
	};


	// Nav Links
	// var showAbout = function(){
	// 	aboutDiv.style.display = "block";
	// }

	// var hideAbout = function(){
	// 	aboutDiv.style.display = "none";
	// }

	var showContact = function(){
		aboutDiv.style.display = "none";
		contactDiv.style.display = "block";
	}

	var hideContact = function(){
		contactDiv.style.display = "none"
	}

	aboutLink.onclick = function(){
		modalOff();
		// showAbout();
	};

	contactLink.onclick = function(){
		modalOff();
		showContact();
	}

	btn.onclick = function() {
		modalOn();
	};

	span.onclick = function() {
		modalOff();
	};


	// When user clicks anywhere outside of the Modal, close Modal
	 window.onclick = function(event) {
	    if (event.target == modal) {
	       modal.style.display = "none";
	       }
	 }
});
// END OF jQUERY