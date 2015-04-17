$(document).ready(function() {

    $('body').append('<div class="topbar">' +
        '<div class="row">' +
        '<div class="col-lg-4 col-md-5 col-sm-3 col-xs-4 topbar-offers text-left">' +
        '<div>' +
        '<img src="img/logo.png" alt="Logo" width="34px" height="34px">' +
        '</div>' +
        '<div class="topbar-h-offer" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="Offers" data-content="The number of available additional offers">' +
        '<span>5 additional offers available</span>' +
        '</div>' +
        '<div class="dropdown">' +
        '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="text topbar-detail-offer" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="Offers" data-content="View the details offers and save money">Offers</span><span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="#"><span class="profit">$10</span><span class="text-offer">Get extra $10 when you book 5-stars resort</span></a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li><a href="#"><span class="profit">$10</span><span class="text-offer">Get extra $10 when you book 5-stars resort</span></a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li><a href="#"><span class="profit">$10</span><span class="text-offer">Get extra $10 when you book 5-stars resort</span></a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li><a href="#"><span class="profit">$10</span><span class="text-offer">Get extra $10 when you book 5-stars resort</span></a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li><a href="#"><span class="profit">$10</span><span class="text-offer">Get extra $10 when you book 5-stars resort</span></a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-5 col-md-5 col-sm-7 col-xs-5 topbar-completitors text-center">' +
        '<div class="topbar-search">' +
        '<span>Checking competitors prices...</span> <img src="img/ajax-loader.gif" alt="">' +
        '</div>' +
        '<div class="topbar-answer">' +
        '<div>' +
        '<span class="topbar-h-competitors" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="Competitors" data-content="Yes it is true">We have got the lowest price</span>' +
        '</div>' +
        '<div class="dropdown">' +
        '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="text topbar-detail-competitors" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="Competitors" data-content="Confirm the lowest price on Lucky 7 Travel">Competitors</span><span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li>' +
        '<a href="#"><img src="img/tripcentral.png" alt="Logo"><span class="title">Tripcentral</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/redtag.png" alt="Logo"><span class="title">Redtag</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/sunwing.png" alt="Logo"><span class="title">Sunwing</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/signature.png" alt="Logo"><span class="title">Signature vacations</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/sears.png" alt="Logo"><span class="title">Sears vacations</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/selloff.png" alt="Logo"><span class="title">Sell off vacations</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/flightcentre.png" alt="Logo"><span class="title">Flight centre</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/itravel.png" alt="Logo"><span class="title">Itravel2000</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/realcanadian.png" alt="Logo"><span class="title">Real Canadian</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li>' +
        '<a href="#"><img src="img/marlin.png" alt="Logo"><span class="title">Markin travel</span>' +
        '</a>' +
        '</li>' +
        '<li class="divider"></li>' +
        '<li><a href="#"><span class="title">and 138 others...</span></a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-lg-3 col-md-2 col-sm-2 col-xs-3 topbar-controls text-right">' +
        '<a href="#" class="social"><img src="img/facebook.png" alt="">' +
        '</a>' +
        '<a href="#" class="social social-popover" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="Social links" data-content="Let socialize"><img src="img/twitter.png" alt="">' +
        '</a>' +
        '<a href="#" class="social"><img src="img/google+.png" alt="">' +
        '</a>' +
        '<a href="#" class="social"><img src="img/you-tube.png" alt="">' +
        '</a>' +
        '<span class="glyphicon glyphicon-cog"></span>' +
        '<span class="glyphicon glyphicon-question-sign" data-container="body" data-toggle="popover" data-trigger="manual" data-placement="bottom" data-original-title="First time here?" data-content="We have got a new toolbar to make your booking experience easier. Click on question sign and start the help tour topbar."></span>' +
        '<span class="glyphicon glyphicon-remove-circle"></span>' +
        '</div>' +
        '</div>' +
        '<div class="blur"></div>' +
        '<div class="popover-controls">' +
        '<span class="glyphicon glyphicon-chevron-left"></span>' +
        '<span class="glyphicon glyphicon-chevron-right"></span>' +
        '<span class="remove-help glyphicon glyphicon-remove"></span>' +
        '</div>' +
        '</div>' +
        '<div class="show-topbar">' +
        '<span class="glyphicon glyphicon-chevron-down"></span>' +
        '<span>Show Topbar</span>' +
        '</div>');

    var $questionSign = $('.topbar .glyphicon-question-sign');
    var $hOffer = $('.topbar-h-offer');
    var $detailOffer = $('.topbar-detail-offer');
    var $hCompetitors = $('.topbar-h-competitors');
    var $detailCompetitors = $('.topbar-detail-competitors');
    var $socialLink = $('.topbar .social-popover');
    var $popovers = [];
    var count = 0;
    var autoShowPopovers;
    var widthScreen = $(window).width();

    if (widthScreen <= 768) {
        $popovers = [$detailOffer, $detailCompetitors];
    } else if (widthScreen > 768 && widthScreen <= 992) {
        $popovers = [$detailOffer, $hCompetitors, $detailCompetitors];
    } else if (widthScreen > 992 && widthScreen <= 1200) {
        $popovers = [$hOffer, $detailOffer, $hCompetitors, $detailCompetitors];
    } else {
        $popovers = [$hOffer, $detailOffer, $hCompetitors, $detailCompetitors, $socialLink];
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
            count = $popovers.length - 1;
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

    $(window).load(function() {
        $questionSign.popover('show');
    });
});