var SevenBits = SevenBits || {};

(function(){
	'use strict';

	var baseElement = $(document);

	var keyStateGenerator = function(keyCode, state) {
		return $.Event(state, { which: keyCode });
	}

	var upKeyEvent = function(state) { return keyStateGenerator(38, state); }
	var downKeyEvent = function(state) { return keyStateGenerator(40, state); }
	var leftKeyEvent = function(state) { return keyStateGenerator(37, state); }
	var rightKeyEvent = function(state) { return keyStateGenerator(39, state); }

	var escapeKeyEvent = function(state) { return keyStateGenerator(27, state); }
	var enterKeyEvent = function(state) { return keyStateGenerator(13, state); }
	var aKeyEvent = function(state) { return keyStateGenerator(65, state); }

	var isUpKeyPressed = false;
	var isDownKeyPressed = false;
	var isLeftKeyPressed = false;
	var isRightKeyPressed = false;
	// var isEscapeKeyPressed = false;
	// var isEnterKeyPressed = false;
	// var isAKeyPressed = false;

	SevenBits.setUpKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(upKeyEvent("keydown"));
			isUpKeyPressed = true;
		} else {
			baseElement.trigger(upKeyEvent("keyup"));
			isUpKeyPressed = false;
		}		
	};

	SevenBits.getUpKeyState = function() {
		return isUpKeyPressed;
	};

	SevenBits.setDownKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(downKeyEvent("keydown"));
			isDownKeyPressed = true;
		} else {
			baseElement.trigger(downKeyEvent("keyup"));
			isDownKeyPressed = false;
		}
	};

	SevenBits.getDownKeyState = function() {
		return isDownKeyPressed;
	}

	SevenBits.setLeftKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(leftKeyEvent("keydown"));
			isLeftKeyPressed = true;
		} else {
			baseElement.trigger(leftKeyEvent("keyup"));
			isLeftKeyPressed = false;
		}
	};

	SevenBits.getLeftKeyState = function() {
		return isLeftKeyPressed;
	};

	SevenBits.setRightKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(rightKeyEvent("keydown"));
			isRightKeyPressed = true;
		} else {
			baseElement.trigger(rightKeyEvent("keyup"));
			isRightKeyPressed = false;
		}
	};

	SevenBits.getRightKeyState = function() {
		return isRightKeyPressed;
	};

	SevenBits.setEscapeKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(escapeKeyEvent("keydown"));
			// isEnterKeyPressed = true;
		} else {
			baseElement.trigger(escapeKeyEvent("keyup"));
			// isEnterKeyPressed = false;
		}
	};

	SevenBits.setEnterKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(enterKeyEvent("keydown"));
			// isEnterKeyPressed = true;
		} else {
			baseElement.trigger(enterKeyEvent("keyup"));
			// isEnterKeyPressed = false;
		}
	};

	SevenBits.setAKeyState = function(isPressed) {
		if (isPressed) {
			baseElement.trigger(aKeyEvent("keydown"));
			// isAKeyPressed = true;
		} else {
			baseElement.trigger(aKeyEvent("keyup"));
			// isAKeyPressed = false;
		}
	};

}());

var SevenBitsKeyPress = function(keyName, state) {
	keyName = keyName.toLowerCase();

	var pressKey = (state == 1 ? true : false);

	switch (keyName) {
		case 'left':
			SevenBits.setLeftKeyState( pressKey );
			break;
		case 'right':
			SevenBits.setRightKeyState( pressKey );
			break;
		case 'up':
			SevenBits.setUpKeyState( pressKey );
			break;
		case 'down':
			SevenBits.setDownKeyState( pressKey );
			break;
		case 'start':
			SevenBits.setEscapeKeyState( pressKey );
			break;
		case 'select':
			SevenBits.setEnterKeyState( pressKey );
			break;
		case 'a':
			SevenBits.setAKeyState( pressKey );
			break;
	}
};