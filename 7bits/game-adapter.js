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
});

$(function() {
	me.input.isKeyPressed = function(key) {
		switch (key) {
			case 'down':
				return SevenBits.getKeyState('c');
			case 'jump':
				return SevenBits.getKeyState('x');
			case 'left':
				return SevenBits.getKeyState('left_arrow');
			case 'right':
				return SevenBits.getKeyState('right_arrow');
		}
	};
});