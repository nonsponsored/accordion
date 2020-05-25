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
		})
		
		// Set Up Event Listeners
		this._addEventListeners()
	}
	
	// Event Listeners
	_addEventListeners() {
		this.accordion.addEventListener('click', (e) => {
			if (e.target.matches('.accordion__button')) {
				// Find the next content container
				let accordionContent = e.target.parentNode.nextElementSibling
				// Check aria state
				let aria = e.target.getAttribute('aria-expanded');
				aria = aria == 'true' ? 'false' : 'true'
				// Update aria state on button
				e.target.setAttribute('aria-expanded', aria)
				// Update aria state on content
				accordionContent.setAttribute('aria-expanded', aria)
				// Toggle visibility of content
				accordionContent.hidden = !accordionContent.hidden
			}
		})
	}
}