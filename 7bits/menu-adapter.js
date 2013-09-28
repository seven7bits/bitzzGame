$(function() {
	var mainMenu = $('#menu');
	var mainMenuElements = mainMenu.find("img").length;

	var startMenu = $('#menu2');
	var startMenuElements = startMenu.find('img').length;

	var backMenu = $('#back_menu');

	var settingsMenu = $('#settings');
	var settingsMenuElements = settingsMenu.find('img').length;

	var introScreen1 = $('#intro1');
	var introScreen2 = $('#intro2');
	var introScreen3 = $('#intro3');
	var introScreen4 = $('#intro4');
	var introScreen5 = $('#intro5');

	var selectLevel = $('#select_level');
	var selectLevelElements = selectLevel.find('[id^=select_level]').length;

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

    	var isMainMenuVisible = mainMenu.css('display') != 'none';
    	var isStartMenuVisible = startMenu.css('display') != 'none';
    	var isBackMenuVisible = backMenu.css('display') != 'none';
    	var isSettingsMenuVisible = settingsMenu.css('display') != 'none';

    	var isIntroScreen1Visible = introScreen1.css('display') != 'none';
    	var isIntroScreen2Visible = introScreen2.css('display') != 'none';
    	var isIntroScreen3Visible = introScreen3.css('display') != 'none';
    	var isIntroScreen4Visible = introScreen4.css('display') != 'none';
    	var isIntroScreen5Visible = introScreen5.css('display') != 'none';
    	
    	var isSelectLevelVisible = selectLevel.css('display') != 'none';

		switch(keyId) {
			case 38: // up
				keyUpAction(
					{
						isMainMenuVisible: isMainMenuVisible,
						isStartMenuVisible: isStartMenuVisible,
						isSettingsMenuVisible: isSettingsMenuVisible
					});
				break;

			case 40: // down
				keyDownAction(
					{
						isMainMenuVisible: isMainMenuVisible,
						isStartMenuVisible: isStartMenuVisible,
						isSettingsMenuVisible: isSettingsMenuVisible
					});
				break;

			case 37: // left
				keyLeftAction(
					{
						isSelectLevelVisible: isSelectLevelVisible
					});
				break;

			case 39: // right
				keyRightAction(
					{
						isSelectLevelVisible: isSelectLevelVisible
					});
				break;

			case 13: // enter
				selectAction(
					{
						isMainMenuVisible: isMainMenuVisible,
						isStartMenuVisible: isStartMenuVisible,
						isSettingsMenuVisible: isSettingsMenuVisible,
						isIntroScreen1Visible: isIntroScreen1Visible,
						isIntroScreen2Visible: isIntroScreen2Visible,
						isIntroScreen3Visible: isIntroScreen3Visible,
						isIntroScreen4Visible: isIntroScreen4Visible,
						isIntroScreen5Visible: isIntroScreen5Visible,
						isSelectLevelVisible: isSelectLevelVisible
					});
				break;

			case 27: // esc
				cancelAction(
					{
						isBackMenuVisible: isBackMenuVisible
					});
				break;

			case 65: // 'A'
				keyAAction(
					{
						isIntroScreen1Visible: isIntroScreen1Visible,
						isIntroScreen2Visible: isIntroScreen2Visible,
						isIntroScreen3Visible: isIntroScreen3Visible,
						isIntroScreen4Visible: isIntroScreen4Visible,
						isIntroScreen5Visible: isIntroScreen5Visible
					});
				break;
		}
	};

	var keyUpAction = function(options) {
		if (options.isMainMenuVisible) {
			var index = mainMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index - 1);

				index = index < 0 ? mainMenuElements-1 : index;

				mainMenu.find('img:eq(' + index + ')').addClass('active');
			}
		} else if (options.isStartMenuVisible) {
			var index = startMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index - 1);

				index = index < 0 ? startMenuElements-1 : index;

				startMenu.find('img:eq(' + index + ')').addClass('active');
			}
		} else if (options.isSettingsMenuVisible) {
			var index = settingsMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index - 1);

				index = index < 0 ? settingsMenuElements-1 : index;

				settingsMenu.find('img:eq(' + index + ')').addClass('active');
			}
		}
	}

	var keyDownAction = function(options) {
		if (options.isMainMenuVisible) {
			var index = mainMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index + 1) % mainMenuElements;

				mainMenu.find('img:eq(' + index + ')').addClass('active');
			}
		} else if (options.isStartMenuVisible) {
			var index = startMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index + 1) % startMenuElements;

				startMenu.find('img:eq(' + index + ')').addClass('active');
			}
		} else if (options.isSettingsMenuVisible) {
			var index = settingsMenu.find('img.active').removeClass('active').index();

			if (index != -1) {
				index = (index + 1) % settingsMenuElements;

				settingsMenu.find('img:eq(' + index + ')').addClass('active');
			}
		}
	}

	var keyLeftAction = function(options) {
		if (options.isSelectLevelVisible) {
			var index = selectLevel.find('[id^=select_level].active').index() - 1;

			if (index != -1 && index > 1) {
				selectLevel.find('[id^=select_level]:eq(' + index + ')').removeClass('active')

				index = index - 1;

				selectLevel.find('[id^=select_level]:eq(' + index + ')').addClass('active');
			}
		}
	}

	var keyRightAction = function(options) {
		if (options.isSelectLevelVisible) {
			var index = selectLevel.find('[id^=select_level].active').index() - 1;

			if (index != -1 && index < (selectLevelElements-1)) {
				selectLevel.find('[id^=select_level]:eq(' + index + ')').removeClass('active');

				index = index + 1;

				selectLevel.find('[id^=select_level]:eq(' + index + ')').addClass('active');
			}
		}
	}

	var selectAction = function(options) {
		if (options.isSelectLevelVisible) {
			var index = selectLevel.find('img.active').index() - 1;
			$('div#selectlevel' + index).click();
		} else if (options.isIntroScreen1Visible) {
			introScreen1.find('img#continue_small1').click();
		} else if (options.isIntroScreen2Visible) {
			introScreen2.find('img#continue_small2').click();
		} else if (options.isIntroScreen3Visible) {
			introScreen3.find('img#continue_small3').click();
		} else if (options.isIntroScreen4Visible) {
			introScreen4.find('img#continue_small4').click();
		} else if (options.isIntroScreen5Visible) {
			introScreen5.find('img#play_intro').click();
		} else if (options.isMainMenuVisible) {
			mainMenu.find('img.active').click();
		} else if (options.isStartMenuVisible) {
			startMenu.find('img.active').click();
		} else if (options.isSettingsMenuVisible) {
			settingsMenu.find('img.active').click();
		}
	}

	var cancelAction = function(options) {
		if (options.isBackMenuVisible) {
			backMenu.click();
		}
	}

	var keyAAction = function(options) {
		if (options.isIntroScreen1Visible) {
			introScreen1.find('img#skip1').click();
		} else if (options.isIntroScreen2Visible) {
			introScreen2.find('img#skip2').click();
		} else if (options.isIntroScreen3Visible) {
			introScreen3.find('img#skip3').click();
		} else if (options.isIntroScreen4Visible) {
			introScreen4.find('img#skip4').click();
		} else if (options.isIntroScreen5Visible) {
			introScreen5.find('img#play_intro').click();
		}
	}
});