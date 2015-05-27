var ScrollController = function(){
	var _this = this,
		positionTop,
		containerHeight,
		scrollHeight,
		min,
		slideLen,
		slideIdx,
		tranche;

	this.init = function(){
		containerHeight = $(".contenu").height();
		scrollHeight = $(".contenu div").height();
		min = scrollHeight - containerHeight;

		slideLen = $(".slide").length;
		slideIdx = 0;

		tranche = scrollHeight/slideLen;


		_this.bindEvents();
		_this.gotoSlide(slideIdx);
	};

	this.bindEvents = function(){
		$( ".contenu" ).scroll(function(e) {
			var idx = Math.round( ( slideLen * $(this).scrollTop() ) / scrollHeight );
			_this.gotoSlide(idx);
		});
	};

	this.gotoSlide = function(idx){
		$(".slide").addClass("vhidden");
		$(".slide").eq(idx).removeClass("vhidden");
		
	};
};