export class Accordion {
	constructor(element, cssClass) {
		
		// Wait for DOM
		document.addEventListener('DOMContentLoaded', () => {
			
			// Map Items
			[].map.call(document.querySelectorAll(element), (toggleElement) => {
				toggleElement.addEventListener('click', (e) => {
					var dt = e.currentTarget.closest('dt');
					
					// Toggle Class
					dt.classList.toggle(cssClass);
		
					// Accordion Accessibility
					if ( dt.classList.contains(cssClass) ) {
						dt.nextElementSibling.setAttribute('aria-expanded','true');
					} else {
						dt.nextElementSibling.setAttribute('aria-expanded','false');
					}
				});
			})
		})
	}
}