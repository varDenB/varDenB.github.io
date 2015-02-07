/*
http://jsfiddle.net/varDenB/ddn8sk3e/
Реализовать виджет "секундомер". Кнопки "стоп", "старт" (одна и та же кнопка), "сброс", 
"круг". Секундомер работает с точностью до миллисекунд. Когда он запущен, показывается 
время в формате чч:мм:сс:мс. Нажатие на кнопку "стоп" останавливает ход секундомера. 
Кнопка "круг" добавляет текущее значение секундомера в список результатов. 
Элементы из списка результатов можно удалять поштучно. Кнопка "сброс" останавливает 
секундомер, если тот бежит, сбрасывает значение в нули, убирает все результаты, 
если такие есть. "круг" работает одинаково для остановленного и запущенного секундомеров.
Управление с клавиатуры (проверь, чтобы работало в разных расскладках): s - start/stop, 
l - lap, r - reset. Если на странице несколько секундомеров, с клавиатуры управляется тот,
 над последним из которых находилась мышка.
*/

window.onload = function() {
	'use strict';
	(function() {
		var S_KEYCODE = 83;
		var L_KEYCODE = 76;
		var R_KEYCODE = 82;

		function Stopwatch(node) {
			this.node = node;
			this.Stopwatch = this.buildStopwatch();
			this.intervalId = null;
			this.elapsedTime = 0;
			this.stopwatchLap = this.node.querySelector('.stopwatch-laps');
			this.buttonStartStop = this.node.querySelector('.btn-primary');
			this.buttonLap = this.node.querySelector('.btn-info');
			this.buttonReset = this.node.querySelector('.btn-sm');
			this.timer = this.node.querySelector('.timer');
			this.init();
		}

		Stopwatch.prototype.buildStopwatch = function() {
			var widgetStopwatch = document.createElement('div');
			widgetStopwatch.className += ' widget-stopwatch';
			widgetStopwatch.innerHTML = '<div class="col-xs-4"><h2 class="stopwatch-current"><span class="timer">00:00:00:000</span></h2><div class="stopwatch-laps"></div></div><div class="col-xs-4 stopwatch-controls"><div class="btn-group btn-group-lg"><button class="btn btn-primary">Start</button><button class="btn btn-info">Lap</button></div><button class="btn btn-danger btn-sm">Reset</button></div>';
			this.node.appendChild(widgetStopwatch);
		};

		Stopwatch.prototype.init = function() {
			this.buttonStartStop.addEventListener('click', this.stop.bind(this), false);
			this.buttonStartStop.addEventListener('click', this.start.bind(this), false);
			this.buttonLap.addEventListener('click', this.buildLap.bind(this), false);
			this.stopwatchLap.addEventListener('click', this.hideLap.bind(this), false);
			this.buttonReset.addEventListener('click', this.reset.bind(this), false);
			this.node.addEventListener('mouseenter', function() {
				Stopwatch.lastActive = this;
			}, false);
			document.addEventListener('keyup', this.keyboardControl.bind(this), false);
		};

		Stopwatch.prototype.keyboardControl = function() {
			if (Stopwatch.lastActive === this.node) {
				if (event.keyCode === S_KEYCODE) {
					this.stop();
					this.start();
				}
				if (event.keyCode === L_KEYCODE) {
					this.buildLap();
				}
				if (event.keyCode === R_KEYCODE) {
					this.reset();
				}
			}
		};

		Stopwatch.prototype.buildLap = function() {
			if (this.elapsedTime === 0) {
				return;
			}
			var lap = document.createElement('div');
			lap.className = 'alert alert-info';
			lap.innerHTML = '<span class="timer-lap">' + this.formatTime(this.elapsedTime) + '</span><span class="label label-danger">×</span>';
			this.stopwatchLap.appendChild(lap);
		};

		Stopwatch.prototype.hideLap = function(event) {
			event = event || window.event;
			var target = event.target || event.srcElement;
			if (target.className != 'label label-danger') return;
			target.parentNode.style.display = 'none';
		};

		Stopwatch.prototype.start = function() {
			var _this = this;
			if (this.intervalId) {
				this.intervalId = null;
				return;
			}
			this.buttonStartStop.innerHTML = 'Stop';
			var startTime = (new Date()).getTime();
			this.intervalId = setInterval(function() {
				var nextTicTime = (new Date()).getTime();
				_this.elapsedTime += (nextTicTime - startTime);
				startTime = nextTicTime;
				_this.drawTime();
			}, 16);
		};

		Stopwatch.prototype.drawTime = function() {
			this.timer.innerHTML = this.formatTime(this.elapsedTime);
		};

		Stopwatch.prototype.formatTime = function() {
			var sec_num = parseInt(this.elapsedTime, 10);
			var hour = parseInt(this.elapsedTime / 3600000);
			if (hour < 1) hour = 0;
			sec_num = parseInt(this.elapsedTime - hour * 3600000);
			if (hour < 10) hour = '0' + hour;
			var minutes = Math.floor(parseInt(this.elapsedTime / 60000)) % 60;
			if (minutes < 1) minutes = 0;
			sec_num = parseInt(this.elapsedTime - minutes * 60000);
			if (minutes < 10) minutes = '0' + minutes;
			var seconds = Math.floor(parseInt(this.elapsedTime / 1000)) % 60;
			if (seconds < 1) seconds = 0;
			sec_num = parseInt(this.elapsedTime - seconds * 1000);
			if (seconds < 10) seconds = '0' + seconds;
			var milliSeconds = sec_num % 1000;
			if (milliSeconds < 10) milliSeconds = '0' + milliSeconds;

			var time = hour + ':' + minutes + ':' + seconds + ':' + milliSeconds;
			return time;
		};

		Stopwatch.prototype.stop = function() {
			this.buttonStartStop.innerHTML = 'Start';
			clearInterval(this.intervalId);
		};

		Stopwatch.prototype.reset = function() {
			this.stop();
			this.stopwatchLap.innerHTML = '';
			this.intervalId = null;
			this.elapsedTime = 0;
			this.timer.innerHTML = '00:00:00:000';
		};
		new Stopwatch(document.querySelector('.left'));
		new Stopwatch(document.querySelector('.right'));

	}());

};