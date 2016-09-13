function testSwitchTheme(name, theme) {
  var $container = document.getElementsByClassName(theme)[0],
    $switchLightButton = $container.querySelector('.switch-light a'),
    $switchToggleButton = $container.querySelector('.switch-toggle a');

  if($switchLightButton) {
    QUnit.test(name + ' switch-light', function(assert) {
      assert.notEqual($switchLightButton.offsetLeft, '0');
    });
  }

  if($switchToggleButton) {
    QUnit.test(name + ' switch-toggle', function(assert) {
      assert.notEqual($switchToggleButton.offsetLeft, '0');
    });
  }
};

function testSwitchNumber(name, number) {
  var $container = document.getElementsByClassName(number)[0],
    $switchToggleButton = $container.querySelector('a');

  QUnit.test(name, function(assert) {
    assert.notEqual($switchToggleButton.offsetLeft, '0');
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
    testSwitchTheme('Holo Theme', 'holo');
    testSwitchTheme('Candy Theme', 'candy');
    testSwitchTheme('iOS Theme', 'ios');
    testSwitchTheme('Material Theme', 'material');

    testSwitchNumber('Switch-toggle with 3 options', 'test-3');
    testSwitchNumber('Switch-toggle with 4 options', 'test-4');
    testSwitchNumber('Switch-toggle with 5 options', 'test-5');
    testSwitchNumber('Switch-toggle with 6 options', 'test-6');

    testSwitchTheme('Bootstrap', 'bootstrap');
    testSwitchTheme('Foundation', 'foundation');

  }, 2000);

};

var log = [];
var testName;

QUnit.done(function (test_results) {
  var tests = [];
  for(var i = 0, len = log.length; i < len; i++) {
    var details = log[i];
    tests.push({
      name: details.name,
      result: details.result,
      expected: details.expected,
      actual: details.actual,
      source: details.source
    });
  }
  test_results.tests = tests;

  window.global_test_results = test_results;
});

QUnit.testStart(function(testDetails){
  QUnit.log(function(details){
    if (!details.result) {
      details.name = testDetails.name;
      log.push(details);
    }
  });
});
