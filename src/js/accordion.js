var accordion = function (trigger , cssClass) {
	'use strict';

	[].map.call(document.querySelectorAll(trigger), function(toggleTrigger){
		toggleTrigger.addEventListener('click', function() {
			var dt = this.closest('dt');
			
			// Toggle Class
			dt.classList.toggle(cssClass);

			// Accordion Accessibility
			if ( dt.classList.contains(cssClass) ) {
				dt.nextElementSibling.setAttribute('aria-expanded','true');
			} else {
				dt.nextElementSibling.setAttribute('aria-expanded','false');
			}
		});
	});
};
document.addEventListener('DOMContentLoaded', function() {
	accordion('.js-accordionTrigger' , 'accordion--selected');
});
