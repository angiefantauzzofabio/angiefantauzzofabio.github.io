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