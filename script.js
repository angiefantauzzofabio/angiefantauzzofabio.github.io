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