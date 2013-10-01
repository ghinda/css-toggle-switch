function testSwitchTheme(name, theme) {
	var $container = document.getElementsByClassName(theme)[0],
		$switchLightButton = $container.querySelector('.switch-light a'),
		$switchToggleButton = $container.querySelector('.switch-toggle a');

	if($switchLightButton) {
		test(name + ' switch-light', function() {
			notEqual($switchLightButton.offsetLeft, '0');
		});
	}

	if($switchToggleButton) {
		test(name + ' switch-toggle', function() {
			notEqual($switchToggleButton.offsetLeft, '0');
		});
	}
};

function testSwitchNumber(name, number) {
	var $container = document.getElementsByClassName(number)[0],
		$switchToggleButton = $container.querySelector('a');

	test(name, function() {
		notEqual($switchToggleButton.offsetLeft, '0');
	});
};

function triggerEventOnPage(element, eventName) {
	if(element[eventName]) {
		// firefox and other desktop browsers
		element[eventName]();

	} else {
		var event;

		event = document.createEvent('Event');
		event.initEvent(eventName, true, true);

		element.dispatchEvent(event);
	}
};

window.onload = function() {

	// click all the switches
	var $switchLightButtons = document.querySelectorAll('.switch-light');
	var $switchToggleButtons = document.querySelectorAll('.switch-toggle label:last-of-type');

	var clickLabel = function(el) {
		setTimeout(function() {
			triggerEventOnPage(el, 'click');
		});
	};

	var i;
	for(i = 0; i < $switchLightButtons.length; i++) {
		clickLabel($switchLightButtons[i]);
	}

	for(i = 0; i < $switchToggleButtons.length; i++) {
		clickLabel($switchToggleButtons[i]);
	}

	// give it a second to move the switch buttons
	setTimeout(function() {

		testSwitchTheme('Barebones Switches (no theme)', 'barebones');
		testSwitchTheme('Android Theme', 'android');
		testSwitchTheme('Candy Theme', 'candy');
		testSwitchTheme('iOS Theme', 'ios');

		testSwitchNumber('Switch-toggle with 3 options', 'switch-3');
		testSwitchNumber('Switch-toggle with 4 options', 'switch-4');
		testSwitchNumber('Switch-toggle with 5 options', 'switch-5');

		testSwitchTheme('Bootstrap', 'bootstrap');
		testSwitchTheme('Foundation', 'foundation');

	}, 1000);

};
