$(document).ready(function() {
	
	var $topbarhelp = $(".topbar-help");
	var $questionSign=$('.glyphicon-question-sign');
	var $hOffer=$('.topbar-h-offer');
	var $detailOffer=$('.topbar-detail-offer');
	var $hCompetitors=$('.topbar-h-competitors');
	var $detailCompetitors=$('.topbar-detail-competitors');
	var $controls=$('.topbar-controls');
	var $popovers=[$hOffer,$detailOffer,$hCompetitors,$detailCompetitors,$controls];

	$(".topbar .glyphicon-remove-circle").click(function() {
		$(".topbar").css("display", "none");
	});
	$('.glyphicon-question-sign').popover('show');

	$(".topbar .glyphicon-question-sign").click(function() {

		$('.topbar .blur').css('display','block');
		$('.glyphicon-question-sign').popover('hide');

		
		setInterval(function() {
			for(var i=0;i<$popovers.length;i+=1){
			$popovers[i].popover('show');
		}
		},2000);	
		
		
	});

	setTimeout(function() {
		$('.topbar-search').css("display", "none");
		$('.topbar-answer').css("display", "block");
	}, 5000);
});