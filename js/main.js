(function($) {

	"use strict";

	$(document).ready(function() {

		//	FastClick	

		FastClick.attach(document.body);

		// Preloader

		$(window).load(function() {
			$(".preloader").fadeOut("slow", function() {
				$("#resume, #blog, #portfolio, #contact").removeClass("absolute");
				$(".preloader-left").addClass("slide-left");
				$(".preloader-right").addClass("slide-right");
				shuffleNode.shuffle('shuffle', 'all');
				$('.hi .detail')
					.typeTo("I'm Denis. Frontend (web) developer based on Kharkiv, Ukraine. While not coding, i like to play football and going to the workout gym.");
			});
		});

		//	Features animation function

		$("#profile .expand, #profile .expand-profile").on("click", function() {
			$("#profile").toggleClass("full-height").removeClass("profile");
			$("#profile .expand").hide();
		});

		$("#profile .expand-profile").on("click", function() {
			$("#profile").addClass("profile");
			$("#profile .expand").show();
		});

		$("#resume .expand").on("click", function() {
			$("#resume").toggleClass("full").toggleClass("full-height");
			$("#blog, #portfolio, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#resume .close-icon").on("click", function() {
			$("#resume .expand").show();
			$(this).hide();
		});

		$("#blog .expand").on("click", function() {
			$("#blog").toggleClass("full").toggleClass("full-height");
			$("#resume, #portfolio, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#blog .close-icon").on("click", function() {
			$("#blog .expand").show();
			$(this).hide();
		});

		$("#portfolio .expand").on("click", function() {
			$("#portfolio").toggleClass("full").toggleClass("full-height");
			$("#resume, #blog, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#portfolio .close-icon").on("click", function() {
			$("#portfolio .expand").show();
			$(this).hide();
		});

		$("#contact .expand").on("click", function() {
			$("#contact").toggleClass("full").toggleClass("full-height");
			$("#resume, #blog, #portfolio").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#contact .close-icon").on("click", function() {
			$("#contact .expand").show();
			$(this).hide();
		});

		//	Skill bars function

		function skillBars() {
			$('.skill-bar-bg').each(function() {
				var skillBarBg = $(this);
				skillBarBg.find('.skill-bar').css('width', skillBarBg.attr('data-percent') + '%');
			});
		}

		skillBars();



		//	Shuffle function

		var shuffleNode = $("#shuffle-container");

		shuffleNode.shuffle({
			itemSelector: ".shuffle-item"
		});

		$('#filter a').click(function(e) {
			e.preventDefault();

			$('#filter a').removeClass('active');
			$(this).addClass('active');
			var groupName = $(this).attr('data-group');
			shuffleNode.shuffle('shuffle', groupName);
		});

		//	CSS Correct

		var dateHeight = $(".date").outerHeight();
		$(".blog-title").css("min-height", dateHeight);

	});

})(jQuery);