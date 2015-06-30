var IngredientsController = function(){
	var _this = this,
		header_h;

	this.init = function(){
		header_h = $("header").outerHeight();
		_this.bindEvents();
	};

	this.bindEvents = function(){

		$("html").on("click", ".page-template-template-ingredients h2", function(event) {
			$(".page-template-template-ingredients h2").removeClass('current_titre');
			$(this).addClass('current_titre');

			$(".content_ingredient").addClass("slideRight");
			var idx = $(this).data("idx");
			$(".content_ingredient[data-idx='"+idx+"']").removeClass("slideRight");

			var p = $(".colonne").eq(0).offset().top - header_h;
			$('body,html').animate({ scrollTop: p }, 400);
			$('.contenu').animate({ scrollTop: 0 }, 400);
		})
	};

	
};