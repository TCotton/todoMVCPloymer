(function (document) {
	'use strict';

	function checkClass() {
		'use strict';
		try {
			eval('class Foo {}');
		} catch (e) { return false; }

		return true;
	}

	if (checkClass()) {

		var resource = document.createElement('script');
		resource.src = 'js/feature-detection.js';
		var script = document.getElementsByTagName('script')[0];
		script.parentNode.insertBefore(resource, script);

	}
})(document);
