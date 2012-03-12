/* Ionut Colceriu - ghinda.net
 * Add mobile support to CSS toggle switches.
 */
 
/* Minimal Touch support test.
 * You should probably use Modernizr.
 */
var touchSupport = ('ontouchstart' in window),
	mobile = (screen.width <= 1024);

// Utility function, needed to get the input elements next to labels
Object.prototype.previousObject = function() {
	var p = this;
	do p = p.previousSibling;
	while (p && p.nodeType != 1);
	return p;
}

/* Manualy check the input, for Opera Mini/proxy browsers
 */
function checkRadio(e) {
	var input = e.target.previousObject(),
		inputType = input.getAttribute('type');
		
	if(inputType === 'checkbox') {
		
		if(input.getAttribute('checked')) {
			input.removeAttribute('checked');
		} else {
			input.setAttribute('checked', true);
		}
		
	} else if(inputType === 'radio') {
	
		input.setAttribute('checked', true);
		
	};
};

/* Force reflow
 */
function forceReflow(e) {
	/* There's a delay between taping a label, and checking the input.
	 * That's why we have to 
	 */
	if(e.target.previousObject().checked) {
		// force reflow
		document.body.className = document.body.className;
	} else {
		// if the input is not checked yet, try again
		setTimeout(function() { forceReflow(e) }, 100);
	};	
};

/* Get all labels on the page.
 * You should use a more specific selector on your page.
 */
var labels = document.querySelectorAll('label');
	
if(touchSupport) {
	// Mobile Webkit(Android, iOS, BB, WebOS, etc.), and others with Touch support
	for(var i = 0; i < labels.length; i++ ) {
		labels[i].ontouchstart = forceReflow;
	};
	
} else if(mobile) {
	// Non-touch browsers, Opera Mini and other proxy-browsers
	for(var i = 0; i < labels.length; i++ ) {
		labels[i].onclick = checkRadio;
	};
	
};