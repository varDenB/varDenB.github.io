$(document).ready(function() {
	$(".topbar .glyphicon-remove-circle").click(function() {
		$(".topbar").css("display", "none");
	});

	setTimeout(function() {
		$('.topbar-search').css("display", "none");
		$('.topbar-answer').css("display", "block");
	}, 4000);
});