// remap jQuery to $
(function($){})(window.jQuery);

var ww,wh,sc,lamap;

/* trigger when page is ready */
$(document).ready(function (){

	
});

$(window).load(function() {
	format();
	init();

	$('body,html').animate({ scrollTop: 0 }, 10);

	reveal();
});

$(window).resize(function() {
	format();
});

/**********************

**********************/
function init(){

	init_objects();
	//init_vendors();

	if($("body").hasClass("home"))handleIntro();
	handleTemplate();
}

function init_objects(){
	sc = new ScrollController();
	sc.init();

	var nc = new NavigateController();
		nc.init();

	var ic = new IngredientsController();
		ic.init();

	lamap = new Map();
	
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
	//$("section").css({"height": wh+"px"});

	$("section.parallax").css({
		height:$(".banner_img").find("img").height()
	})

	var dispo_h = wh - 92;
	$(".dispo_centre,.dispo_gauche,.dispo_droite").css({height: dispo_h+"px"});

	var bh = $(".banner").find("img").height();
	$(".banner").css({height: bh});

	if($("body").hasClass("page-template-template-ingredients")){
		var maxHeight = -1;

		$('.content_ingredient').each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});

		$('.colonne').each(function() {
			$(this).height(maxHeight);
		});
	}

	if($("body").hasClass("page-template-template-retailers")){
		$(".colonne").css({"min-height": dispo_h});
	}



	$(".hdd").css({height:$(".hdd").find("img").height()})
	if($("body").hasClass("page-template-template-histoire")){
		console.log($(".histoire_banner_img").find("img").height());
		$(".colonne").css({"height": $(".histoire_banner_img").find("img").height()});
	}


}

/**********************

**********************/
function handleIntro(){
	//$("#intro").hide();
	//return;
	$("#intro").show();
	var d = 4000;
	setTimeout(function(){
		$("#intro_volet_gauche").addClass("slideLeft");
		$("#intro_volet_droit").addClass("slideRight");
	},d);
	setTimeout(function(){
		$("header").hide().css({"z-index":2}).fadeIn();
	},d*1.5);
}

/**********************

**********************/
function handleTemplate(){
	if($("body").hasClass("page-template-template-ingredients")){
		$(".content_ingredient[data-idx='0']").removeClass("slideRight");
	}

	if($("body").hasClass("page-template-template-retailers")){
		lamap.init();

		$("html").on("click", ".commander", function(){
			$("#map").addClass("hidden");
			$(".form").removeClass("hidden");

			$(".retailers li").removeClass("current_retailer");
			$(this).addClass("current_retailer");
		});

		$("html").on("click", ".retailer", function(){
			$(".form").addClass("hidden");
			$("#map").removeClass("hidden");

			$(".retailers li").removeClass("current_retailer");
			$(this).addClass("current_retailer");
		});

		$("html").on("change", "#caisses", function(e){
			var val = $(this).val();
			var total = parseFloat(val)*25;
				total += "€";
			$("#total").val(total);
		});

		$("html").on("submit", "form", function(e){
			$("input[type='submit']").hide();
			e.preventDefault();
			var data = $(this).serialize();
			var o = {
				action:"order_caisse",
				data:data
			}
			console.log(data)
	        $.ajax({
				url: ajaxUrl,
				type:'POST',
				data: o,
				success: function(res){
					console.log(res)
					$(".success").removeClass("hidden");
				}
			});
		});
	}


}