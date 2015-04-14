$(document).ready(function() {
	
	var $topbarhelp = $(".topbar-help");

	$(".topbar .glyphicon-remove-circle").click(function() {
		$(".topbar").css("display", "none");
	});

	$(".topbar .glyphicon-question-sign").click(function() {
		if ($topbarhelp.css('display') === 'none') {
			$topbarhelp.slideDown("slow");
		} else {
			$topbarhelp.slideUp('slow');
		}
	});

	setTimeout(function() {
		$('.topbar-search').css("display", "none");
		$('.topbar-answer').css("display", "block");
	}, 5000);

});