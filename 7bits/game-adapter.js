$(function() {
	var backMenu2 = $('#back_menu2');

	$(document).on('keydown', function(evt){
		keyDownEvent(evt);
	});

	var keyDownEvent = function(evt) {
		var keyId = 0;

		if (window.event) {
        	keyId = window.event.keyCode

    	} else if (evt.which) {
        	keyId = evt.which
    	}

    	switch (keyId) {
    		case 27:
    			cancelAction();
    			break;
    	}
	};

	var cancelAction = function(options) {
		backMenu2.click();
	};

	me.input.isKeyPressed = function(key) {
		switch (key) {
			case 'jump':
				return SevenBits.getUpKeyState();
			case 'left':
				return SevenBits.getLeftKeyState();
			case 'right':
				return SevenBits.getRightKeyState();
			case 'down':
				return SevenBits.getDownKeyState();
		}
	};
});