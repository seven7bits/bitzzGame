var SevenBits = SevenBits || {};

(function(){
	'use strict';

	var keys = {
		'backspace': 	{ code: 8, isPressed: false},
		'tab': 			{ code: 9, isPressed: false},
		'enter': 		{ code: 13, isPressed: false},
		'escape':		{ code: 27, isPressed: false},
		'end':			{ code: 35, isPressed: false},
		'home':			{ code: 36, isPressed: false},
		'left_arrow':	{ code: 37, isPressed: false},
		'up_arrow':	 	{ code: 38, isPressed: false},
		'right_arrow':	{ code: 39, isPressed: false},
		'down_arrow': 	{ code: 40, isPressed: false},
		'0':			{ code: 48, isPressed: false},
		'1':			{ code: 49, isPressed: false},
		'2':			{ code: 50, isPressed: false},
		'3':			{ code: 51, isPressed: false},
		'4':			{ code: 52, isPressed: false},
		'5':			{ code: 53, isPressed: false},
		'6':			{ code: 54, isPressed: false},
		'7':			{ code: 55, isPressed: false},
		'8':			{ code: 56, isPressed: false},
		'9':			{ code: 57, isPressed: false},
		'a':			{ code: 65, isPressed: false},
		'b':			{ code: 66, isPressed: false},
		'c':			{ code: 67, isPressed: false},
		'd':			{ code: 68, isPressed: false},
		'e':			{ code: 69, isPressed: false},
		'f':			{ code: 70, isPressed: false},
		'g':			{ code: 71, isPressed: false},
		'h':			{ code: 72, isPressed: false},
		'i':			{ code: 73, isPressed: false},
		'j':			{ code: 74, isPressed: false},
		'k':			{ code: 75, isPressed: false},
		'l':			{ code: 76, isPressed: false},
		'm':			{ code: 77, isPressed: false},
		'n':			{ code: 78, isPressed: false},
		'o':			{ code: 79, isPressed: false},
		'p':			{ code: 80, isPressed: false},
		'q':			{ code: 81, isPressed: false},
		'r':			{ code: 82, isPressed: false},
		's':			{ code: 83, isPressed: false},
		't':			{ code: 84, isPressed: false},
		'u':			{ code: 85, isPressed: false},
		'v':			{ code: 86, isPressed: false},
		'w':			{ code: 87, isPressed: false},
		'x':			{ code: 88, isPressed: false},
		'y':			{ code: 89, isPressed: false},
		'z':			{ code: 90, isPressed: false}
	};

	var keyEvent = function(state, keyCode) { return $.Event(state, { which: keyCode }); }

	SevenBits.setKeyState = function(keyName, isPressed) {
		if (isPressed) {
			console.log(keys[keyName].code);
			$(document).trigger(keyEvent("keydown", keys[keyName].code));
			keys[keyName].isPressed = true;
		} else {
			$(document).trigger(keyEvent("keyup", keys[keyName].code));
			keys[keyName].isPressed = false;
		}
	};

	SevenBits.getKeyState = function(keyName) {
		return keys[keyName].isPressed;
	};
}());

var SevenBitsKeyPress = function(keyName, state) {
	keyName = keyName.toLowerCase();

	var pressKey = (state == 1 ? true : false);

	switch (keyName) {
		case 'left':
			SevenBits.setKeyState('left_arrow', pressKey);
			break;
		case 'right':
			SevenBits.setKeyState('right_arrow', pressKey);
			break;
		case 'a':
			SevenBits.setKeyState('x', pressKey);
			break;
		case 'b':
			SevenBits.setKeyState('c', pressKey);
			break;
		case 'aa':
			SevenBits.setKeyState('a', pressKey);
			break;
		case 'select':
			SevenBits.setKeyState('enter', pressKey);
			break;
		case 'start':
			SevenBits.setKeyState('escape', pressKey);
			break;
	}
};