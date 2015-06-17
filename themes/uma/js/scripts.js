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

	handleIntro();
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

	var ch = $(".page-template-template-ingredients").find(".colonne").eq(0).height() || $("section").height();
	$(".colonne").css({"min-height": ch});
}

/**********************

**********************/
function handleIntro(){
	if(getCookie("visited4") == ""){
		setCookie("visited4",true);
		console.log("new")
		$("#intro").show();
		var d = 2000
		setTimeout(function(){
			$("#intro_volet_gauche").addClass("slideLeft");
			$("#intro_volet_droit").addClass("slideRight");
		},d);
		setTimeout(function(){
			//$("#intro").fadeOut('slow');
		},d*2);
	}else{
		console.log("old")
		$("#intro").hide();
	}
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
		});

		$("html").on("click", ".retailer", function(){
			$(".form").addClass("hidden");
			$("#map").removeClass("hidden");
		});

		$("html").on("change", "#caisses", function(e){
			var val = $(this).val();
			var total = parseFloat(val)*25;
				total += "€";
			$("#total").val(total);
		});

		$("html").on("submit", "form", function(e){
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
				}
			});
		});
	}


}