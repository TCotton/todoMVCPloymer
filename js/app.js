(function (window) {
	'use strict';

	window.addEventListener('load', () => {

		if (window.location.origin !== 'https://tcotton.github.io') {

			console.dir(document.links);

			for (let i = 0; i < document.links.length; i++) {
				console.log(document.links[i].href);
				// document.links[i].href += "?name=fc"
			}

		}

	});

	// Your starting point. Enjoy the ride!

})(window);
