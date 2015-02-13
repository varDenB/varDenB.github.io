$(document).ready(function() {

	var ESC_KEYCODE = 27;
	var SPACE_KEYCODE = 32;
	var R_KEYCODE = 82;
	var prepareTime = 10000;
	var doTime = 40000;
	var restTime = 10000;
	var setRestTime = 60000;
	var buttonStartPause = document.querySelector('.btn-start');
	var buttonReset = document.querySelector('.btn-reset');
	var timer = document.querySelector('.timer-current span');
	var intervalId = null;
	var elapsedTime = 0;
	var tempElapsedTime = prepareTime;
	var status = 'prepareTime';
	var counter = 0;
	var set = 0;
	var halfset=0;

	$('.exercise').eq(0).css('box-shadow', ' inset 0px 0px 50px 50px yellow');
	buttonStartPause.addEventListener('click', startPause, false);
	buttonReset.addEventListener('click', reset, false);
	$('.exercise').mouseenter(function(event) {
		if (status === 'doTime') {
			return;
		}
		$('p', event.currentTarget).fadeIn();
	});
	$('.exercise').mouseleave(function(event) {
		$('p', event.currentTarget).fadeOut();
	});
	$('.remove-button').click(function(event) {
		$('.superset>p').fadeOut();
	});
//	document.addEventListener('keyup', keyboardControl, false);

	function reset() {
		clearInterval(intervalId);
		buttonStartPause.innerHTML = 'Start';
		intervalId = null;
		status = 'prepareTime';
		counter = 0;
		set = 0;
		elapsedTime = 0;
		halfset=0;
		drawTime(elapsedTime);
		tempElapsedTime = prepareTime;
		$('.exercise').css('box-shadow', 'none');
		$('.exercise').eq(0).css('box-shadow', ' inset 0px 0px 50px 50px yellow');
	}

	function startPause() {
		$('.superset>p').fadeOut();
		if (intervalId !== null) {
			buttonStartPause.innerHTML = 'Start';
			tempElapsedTime = elapsedTime;
			clearInterval(intervalId);
			intervalId = null;
		} else {
			startTime = (new Date()).getTime() + tempElapsedTime;
			buttonStartPause.innerHTML = 'Pause';
			intervalId = setInterval(function() {
				var ticTime = (new Date()).getTime();
				elapsedTime = (startTime - ticTime);
				drawTime(elapsedTime);
				if (elapsedTime <= 0) {
					$('.exercise').css('box-shadow', 'none');
					document.getElementById('sound1').play();
					if (status === 'prepareTime' || status === 'restTime' && counter !== 3) {
						$('.exercise p').fadeOut();
						$('.exercise').eq((set * 3) + counter).css('box-shadow', 'inset 0px 0px 50px 50px green');
						startTime = (new Date()).getTime() + doTime;
						status = 'doTime';
						counter += 1;
					} else if (status === 'doTime' && counter !== 3) {
						$('.exercise').eq((set * 3) + counter).css('box-shadow', ' inset 0px 0px 50px 50px yellow');
						startTime = (new Date()).getTime() + restTime;
						status = 'restTime';
					} else {
						startTime = (new Date()).getTime() + setRestTime;
						status = 'restTime';
						halfset +=1;
						if (halfset % 2 === 0){
						$('.exercise').eq((set * 3) + counter).css('box-shadow', ' inset 0px 0px 50px 50px yellow');	
						counter=0;
						set += 1;
						if (set === 3) {
							set = 0;
							halfset=0;
							$('.exercise').eq(0).css('box-shadow', 'inset 0px 0px 50px 50px yellow');
						}
					}else{
					counter = 0;
					$('.exercise').eq((set * 3) + counter).css('box-shadow', ' inset 0px 0px 50px 50px yellow');
					}
				}
				}
			}, 100);
		}
	}

	function drawTime(elapsedTime) {
		var sec_num = parseInt(elapsedTime, 10);
		var minutes = Math.floor(parseInt(elapsedTime / 60000)) % 60;
		if (minutes < 1) minutes = 0;
		sec_num = parseInt(elapsedTime - minutes * 60000);
		if (minutes < 10) minutes = '0' + minutes;
		var seconds = Math.floor(parseInt(elapsedTime / 1000)) % 60;
		if (seconds < 1) seconds = 0;
		sec_num = parseInt(elapsedTime - seconds * 1000);
		if (seconds < 10) seconds = '0' + seconds;
		var time = minutes + ':' + seconds;
		timer.innerHTML = time;
	}
/*
	function keyboardControl(event) {
		if (event.keyCode === ESC_KEYCODE) {
			$('.superset>p').fadeOut();
		}
		if (event.keyCode === SPACE_KEYCODE) {
			startPause();
		}
		if (event.keyCode === R_KEYCODE) {
			reset();
		}
	}
*/
});