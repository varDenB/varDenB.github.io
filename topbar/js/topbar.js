$(document).ready(function() {

	var $questionSign = $('.topbar .glyphicon-question-sign');
	var $hOffer = $('.topbar-h-offer');
	var $detailOffer = $('.topbar-detail-offer');
	var $hCompetitors = $('.topbar-h-competitors');
	var $detailCompetitors = $('.topbar-detail-competitors');
	var $socialLink = $('.topbar .social-popover');
	var $controls = $('.topbar .glyphicon-cog');
	var $popovers = [];
	var count = 0;
	var autoShowPopovers;
	var widthScreen=$(window).width();
	
	if(widthScreen<=768){
		$popovers = [$detailOffer, $detailCompetitors, $controls];
	}else if(widthScreen>768 && widthScreen<=992){
		$popovers = [$detailOffer, $hCompetitors, $detailCompetitors, $controls];
	}else if(widthScreen>992 && widthScreen<=1200){
		$popovers = [$hOffer,$detailOffer, $hCompetitors, $detailCompetitors, $controls];
	}else{
		$popovers = [$hOffer, $detailOffer, $hCompetitors, $detailCompetitors, $socialLink, $controls];
	}

	$(".topbar .glyphicon-remove-circle").click(function() {
		$(".topbar").slideUp('slow');
		$questionSign.popover('hide');
		$(".show-topbar").show();
	});
	$(".show-topbar").click(function() {
		$(".topbar").slideDown('slow');
		$questionSign.popover('show');

	});

	$questionSign.popover('show');

	$questionSign.click(function() {
		$('.topbar .blur').css('display', 'block');
		$('.topbar .popover-controls').css('display', 'block');
		$questionSign.popover('hide');
		$popovers[count].popover('show');
		/*Autoshow popovers
		autoShowPopovers = setInterval(function() {
			$popovers[count].popover('hide');
			count += 1;
			if (count === $popovers.length) {
				count = 0;
			}
			$popovers[count].popover('show');
		}, 4000);
		*/
	});

	$(".topbar .glyphicon-chevron-right").click(function() {
		$popovers[count].popover('hide');
		count += 1;
		if (count === $popovers.length) {
			count = 0;
			}
		$popovers[count].popover('show');
	});

	$(".topbar .glyphicon-chevron-left").click(function() {
		$popovers[count].popover('hide');
		count -= 1;
		if (count === -1) {
			count = $popovers.length-1;
			}
		$popovers[count].popover('show');
	});


	$(".topbar .remove-help").click(function() {
		$('.topbar .blur').css('display', 'none');
		$('.topbar .popover-controls').css('display', 'none');
		$popovers[count].popover('hide');
		count = 0;
	//	clearInterval(autoShowPopovers);
	});

	setTimeout(function() {
		$('.topbar-search').css("display", "none");
		$('.topbar-answer').css("display", "block");
	}, 5000);
});