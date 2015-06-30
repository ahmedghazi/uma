var ScrollController = function(){
	var _this = this,
		positionTop,
		containerHeight,
		scrollHeight,
		min,
		slideLen,
		slideIdx,
		tranche,
		headerH;

	this.init = function(){
		headerH = $("header").height();
		containerHeight = $(".contenu").height();
		scrollHeight = $(".contenu div").height();
		min = scrollHeight - containerHeight;

		//slideLen = $(".slide").length;
		//slideIdx = 0;

		tranche = scrollHeight/slideLen;

		if($("body").hasClass('page-template-template-gauche-droite-centre'))
			_this.bindEvents();

		if($("body").hasClass('page-template-template-histoire'))
			_this.bindEvents();
		//_this.gotoSlide(slideIdx);
	};

	this.bindEvents = function(){
		$(window).scroll(function(event) {
			var pt = $(window).scrollTop();
			console.log(pt)
			if(pt < 91)
				$(".fa-chevron-down").hide();
			else
				$(".fa-chevron-down").show();
		});

		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
			 
		$('.main').imagesLoaded( function() {
				//var timer;
			$("section.pin").each(function(index, el) {

				var d = $(el).find(".diapo_item").length * wh;
	//			d = 3000;
				
				$dispo = $(el).children(".dispo");
				controller.pin($dispo, d, {
					anim: (new TimelineLite())
				  		.append(TweenMax.to( $dispo.find(".diapos"), 4,{css:{top:'-100%'}})),
					offset:-108,
					onPin: function() {
						console.log("onPin")
					}, 
					onUnpin: function() {
						console.log("onUnpin")
					}
				}); 
			
			});

			$("section.pin2").each(function(index, el) {

				var d = $(el).find(".colonne_desc").height() - 108;
				console.log(d);
				//d = 2000;
				
				$dispo = $(el).find(".colonne_pin");
				
				controller.pin($dispo, d, {

					offset:-108,
					onPin: function() {
						console.log("onPin")
					}, 
					onUnpin: function() {
						console.log("onUnpin")
					//	clearInterval(timer);
					}
				}); 
			
			});

		});

	};

	this.handleTimer = function(el,slideLen){
		if($(el.el).position().top == 108){
			console.log($(el.el).offset().top , el.pinEnd)
			var idx = Math.round( ( slideLen * $(el.el).offset().top ) / el.pinEnd );
			//var idxx = Math.round( ( slideLen * $(el.el).offset().top ) / el.pinEnd );
			//idx -= 1;
			console.log(idx,slideLen);
			//sc.gotoSlide(idx)
			$(".diapo_item").addClass("vhidden");
			$(el.el).find(".diapo_item").eq(idx).removeClass("vhidden");
		}
	}

	this.gotoSlide = function(idx){
		$(".diapo_item").addClass("vhidden");
		$(".diapo_item").eq(idx).removeClass("vhidden");
		
	};

	this.isScrolledIntoView = function(elem){
		var $elem = $(elem);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top - headerH;
		var elemBottom = elemTop + $elem.height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	};

};