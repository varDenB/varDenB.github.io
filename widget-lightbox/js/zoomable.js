'use strict';

function makeZoomable(node) {
	var ESC_KEYCODE = 27;
	var imgHeight;
	var imgWidth;
	var aspectRatioWH;
	var aspectRatioHW;
	var $nodeZoomable;
	var $imgZoomable;
	var marginHeightImg = 0.75;
	var marginWidthImg = 0.75;
	var zoomableWidth;
	var zoomableHeight;
	var urlLargeImg;

	$(window).resize(function() {
		calculationPosition();
	});

	$(node).on('click', 'img', function(event) {
		urlLargeImg = event.target.src.replace('small', 'large');
		if ($("div").is(".zoomable")) {
			$('<img src="' + urlLargeImg + '" alt="" class="zoomable-img">').appendTo('.zoomable');
		} else {
			$('<div class="zoomable"><div class="blur"></div><div class="remove-button"><img src="./img/close.png" alt=""></div><img src="' + urlLargeImg + '" alt="" class="zoomable-img"></div>').appendTo('body');
		}
		$nodeZoomable = $('.zoomable');
		$imgZoomable = $('.zoomable-img');
		$('.remove-button').click(function(event) {
			$nodeZoomable.css('display', 'none');
			$imgZoomable.remove();
		});
		$(document).on('keyup', function(event) {
		if (event.keyCode === ESC_KEYCODE) {
			$nodeZoomable.css('display', 'none');
			$imgZoomable.remove();
		}
	});
		$imgZoomable.off('load');
		$imgZoomable.one('load', function() {
			$nodeZoomable.css('display', 'block');
			imgHeight = $imgZoomable.height();
			imgWidth = $imgZoomable.width();
			aspectRatioWH = imgWidth / imgHeight;
			aspectRatioHW = imgHeight / imgWidth;
			calculationPosition();
		});
	});

	function calculationPosition() {
		zoomableWidth = $(window).width() * marginWidthImg;
		zoomableHeight = $(window).height() * marginHeightImg;
		if (zoomableWidth < imgWidth || zoomableHeight < imgHeight) {
			$imgZoomable.css('width', zoomableWidth);
			if (zoomableWidth * aspectRatioHW >= zoomableHeight) {
				$imgZoomable.css({
					'height': zoomableHeight,
					'width': zoomableHeight * aspectRatioWH
				});
			} else {
				$imgZoomable.css('height', zoomableWidth * aspectRatioHW);
			}
		} else {
			$('.zoomable-img').css({
				'height': imgHeight,
				'width': imgWidth
			});
		}
		$('.zoomable').css({
			'height': $('.zoomable-img').height(),
			'width': $('.zoomable-img').width()
		});
	}
}