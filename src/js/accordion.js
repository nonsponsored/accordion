export class Accordion {	
	constructor(accordion) {
		if (!accordion) {
			return
		}		

		this.accordion = accordion
		
		// Find the titles
		this.title = [].slice.call(accordion.querySelectorAll('.accordion__title'))		
		
		// Initialize
		this._init()
	}
	
	_init() {
		// Set class
		this.accordion.classList.add('accordion--init')
		
		// Things to do for each title
		this.title.forEach(function(accordionTitle) {
			// Find content container and add aria
			const accordionContent = accordionTitle.nextElementSibling
			accordionContent.setAttribute('aria-expanded','false')
			accordionContent.setAttribute('hidden','')
		
			// Get title text
			const titleText = accordionTitle.textContent
			
			// Create and set up button 
			const button = document.createElement('button')
			button.classList.add('class','accordion__button')
			button.setAttribute('type','button')
			button.setAttribute('aria-expanded','false')
			button.textContent = titleText
			
			// Replace title text with button
			accordionTitle.textContent = ''
			accordionTitle.appendChild(button)
		
			// Assign the button
			const accordionButton = accordionTitle.querySelector('button')
			
			// Listen for click
			accordionButton.addEventListener('click', (e) => {
				// Check aria state
				let aria = accordionButton.getAttribute('aria-expanded');
				aria = aria == 'true' ? 'false' : 'true'
				// Update aria state on button
				accordionButton.setAttribute('aria-expanded', aria)
				// Update aria state on content
				accordionContent.setAttribute('aria-expanded', aria)
				// Toggle visibility of content
				accordionContent.hidden = !accordionContent.hidden
			})
		})
	}
}