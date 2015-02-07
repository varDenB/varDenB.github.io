'use strict';
$(document).ready(function() {

	function Slider(node) {
		this.node = node;
		this.Slider = this.buildSlider();
		this.wrapSlider = $('.widget-slider-wrap', this.node);
		this.slideWidth = $('.widget-slider-img', this.node).outerWidth();
		this.shiftImage = this.wrapSlider.position().left - this.slideWidth;
		this.scrollSlider = this.shiftImage;
		this.counter = 0;
		this.autoStartSlider();
	}

	Slider.prototype.buildSlider = function() {
		$('<div class="widget-slider"><ul class="widget-slider-nav"><div class="widget-slider-pointer"></div><li class="widget-slider-nav1"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav2"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav3"></li><div class="widget-slider-pointer"></div><li class="widget-slider-nav4"></li></ul><div class="widget-slider-show"><ul class="widget-slider-wrap"><li class="widget-slider-img"><img src="images/image1.jpg" alt=""></li><li class="widget-slider-img"><img src="images/image2.jpg" alt=""></li><li class="widget-slider-img"><img src="images/image3.jpg" alt=""></li><li class="widget-slider-img"><img src="images/image4.jpg" alt=""></li></ul></div></div>').appendTo(this.node);
		this.node.find('.widget-slider-nav').on('click', this.clickShiftImages.bind(this));
	};

	Slider.prototype.autoStartSlider = function() {
		this.clearPointer();
		this.showPointer();
		this.shift = setInterval(this.autoShiftImages.bind(this), 2000);
	};

	Slider.prototype.clearPointer = function() {
		$('.widget-slider-nav li', this.node).css('background-color', 'white');
		$('.widget-slider-pointer', this.node).css('display', 'none');
	};

	Slider.prototype.showPointer = function() {
		$('.widget-slider-nav li', this.node).eq(this.counter).css('background-color', 'orange');
		$('.widget-slider-pointer', this.node).eq(this.counter).css('display', 'block');
	};

	Slider.prototype.autoShiftImages = function() {
		this.clearPointer();
		if (this.counter === 3) {
			this.wrapSlider.animate({
				left: 0
			}, 1000);
			this.scrollSlider = this.shiftImage;
			this.counter = 0;
		} else {
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.counter += 1;
			this.scrollSlider += this.shiftImage;
		}
		this.showPointer();
	};

	Slider.prototype.clickShiftImages = function(event) {
		clearInterval(this.shift);
		clearInterval(this.timeoutAfterClick);
		this.clearPointer();
		this.wrapSlider.stop();
		$(event.target).css('background-color', 'orange');
		$(event.target.previousElementSibling).css('display', 'block');
		if (event.target.className === 'widget-slider-nav1') {
			this.counter = 0;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav2') {
			this.counter = 1;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav3') {
			this.counter = 2;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		} else if (event.target.className === 'widget-slider-nav4') {
			this.counter = 3;
			this.scrollSlider = this.counter * this.shiftImage;
			this.wrapSlider.animate({
				left: this.scrollSlider
			}, 1000);
			this.scrollSlider += this.shiftImage;
		}
		this.timeoutAfterClick = setTimeout(this.autoStartSlider.bind(this), 3000);
	};

	new Slider($('.top'));
	new Slider($('.bottom'));
});