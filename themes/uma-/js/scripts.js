// remap jQuery to $
(function($){})(window.jQuery);

var ww,wh,sc;

/* trigger when page is ready */
$(document).ready(function (){
	init();
});

$(window).load(function() {
	reveal();
});

$(window).resize(function() {
	format();
});

/**********************

**********************/
function init(){
	init_onjects();
	init_vendors();
}

function init_onjects(){
	sc = new ScrollController();
	sc.init();

	var nc = new NavigateController();
		nc.init();
}

function init_vendors(){
	
}

/**********************

**********************/
function reveal(){
	$(".wrapper").css({opacity:0});
	$(".wrapper").removeClass('vhidden').animate({opacity:1});
}

/**********************

**********************/
function format(){
	ww = $(window).width();
	wh = $(window).height();
}

/**********************

**********************/
function format(){
	ww = $(window).width();
	wh = $(window).height();
}