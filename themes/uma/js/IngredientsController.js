var IngredientsController = function(){
	var _this = this;

	this.init = function(){
		_this.bindEvents();
	};

	this.bindEvents = function(){
		$("html").on("mouseenter", ".page-template-template-ingredients h2", function(event) {
		//$(".page-template-template-ingredients h2").on("mouseenter", function(event) {
			$(".content_ingredient").addClass("slideRight");
			var idx = $(this).data("idx");
			$(".content_ingredient[data-idx='"+idx+"']").removeClass("slideRight");
		})
	};

	
};