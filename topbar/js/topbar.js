$(document).ready(function() {

	var $questionSign = $('.topbar .glyphicon-question-sign');
	var $hOffer = $('.topbar-h-offer');
	var $detailOffer = $('.topbar-detail-offer');
	var $hCompetitors = $('.topbar-h-competitors');
	var $detailCompetitors = $('.topbar-detail-competitors');
	var $socialLink = $('.topbar .social-popover');
	var $controls = $('.topbar .glyphicon-cog');
	var $popovers = [$hOffer, $detailOffer, $hCompetitors, $detailCompetitors, $socialLink, $controls];
	var count = 0;
	var autoShowPopovers;

	$(".topbar .glyphicon-remove-circle").click(function() {
		$(".topbar").css("display", "none");
		$questionSign.popover('hide');
	});
	$questionSign.popover('show');

	$questionSign.click(function() {

		$('.topbar .blur').css('display', 'block');
		$('.topbar .remove-help').css('display', 'block');
		$questionSign.popover('hide');

		$popovers[count].popover('show');
		autoShowPopovers = setInterval(function() {
			$popovers[count].popover('hide');
			count += 1;
			if (count === $popovers.length) {
				count = 0;
			}
			$popovers[count].popover('show');
		}, 4000);


	});
	$(".topbar .remove-help").click(function() {
		$('.topbar .blur').css('display', 'none');
		$('.topbar .remove-help').css('display', 'none');
		$popovers[count].popover('hide');
		count = 0;
		clearInterval(autoShowPopovers);
	});

	setTimeout(function() {
		$('.topbar-search').css("display", "none");
		$('.topbar-answer').css("display", "block");
	}, 5000);
});