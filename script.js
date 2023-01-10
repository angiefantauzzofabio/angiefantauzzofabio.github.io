const counters = document.querySelectorAll('#counter');

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		//cuanto va a incrementar (de a 1)
		const inc = 1;

		// si llega al target para de conter 
		if (count < target) {
			// se va sumando 
			counter.innerText = count + inc;
			// tiempo en ir contando, cuanto mas grande el numero mas lento cuenta
			setTimeout(updateCount, 15);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal2 = document.getElementById("noticia1");
var modal2_not = document.getElementById("noticia2");


// Get the button that opens the modal
var btn2 = document.getElementById("botonNoticia1");
var btn2_not = document.getElementById("botonNoticia2");


// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2_noticia1")[0];
var span2_not = document.getElementsByClassName("close2_noticia2")[0];


// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn2_not.onclick = function() {
  modal2_not.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
	modal2.style.display = "none";
  }
span2_not.onclick = function() {
    modal2_not.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2_not) {
    modal2_not.style.display = "none";
  }
}

// Get the modal
var modal3 = document.getElementById("qr");

// Get the button that opens the modal
var btn3 = document.getElementById("botonQR");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
	modal3.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Get the modal
var modal4 = document.getElementById("dtoTec1");

// Get the button that opens the modal
var btn4 = document.getElementById("botonDtoTec1");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
	modal4.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// Get the modal
var modal5 = document.getElementById("dtoTec2");

// Get the button that opens the modal
var btn5 = document.getElementById("botonDtoTec2");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
	modal5.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

// Get the modal
var modal6 = document.getElementById("colaborar");

// Get the button that opens the modal
var btn6 = document.getElementById("botonColaborar");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
	modal6.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}