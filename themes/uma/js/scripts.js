// remap jQuery to $
(function($){})(window.jQuery);

var ww,wh,sc;

/* trigger when page is ready */
$(document).ready(function (){
	init();
});

$(window).load(function() {
	format();
	init_vendors();
	reveal();
});

$(window).resize(function() {
	format();
});

/**********************

**********************/
function init(){

	init_onjects();
	//init_vendors();

	handleTemplate();
}

function init_onjects(){
	sc = new ScrollController();
	sc.init();

	var nc = new NavigateController();
		nc.init();

	var ic = new IngredientsController();
		ic.init();
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

	$("section").css({"min-height": wh+"px"});
	var dispo_h = wh - 92;
	$(".dispo_centre,.dispo_gauche,.dispo_droite").css({height: dispo_h+"px"});

	var bh = $(".banner").find("img").height();
	$(".banner").css({height: bh});

	var ch = $(".page-template-template-ingredients").find(".colonne").eq(0).height();
	$(".colonne").css({"min-height": ch});
}

/**********************

**********************/
function handleTemplate(){
	if($("body").hasClass("page-template-template-ingredients")){
		$(".content_ingredient[data-idx='0']").removeClass("slideRight");
	}
}