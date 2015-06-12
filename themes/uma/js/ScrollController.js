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


		_this.bindEvents();
		//_this.gotoSlide(slideIdx);
	};

	this.bindEvents = function(){
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
	    
	   

		var pinAnimations = new TimelineLite();
			pinAnimations
				.append(TweenMax.from( $('.colonne_desc'), 2, 
			  		{css:{top:'90px', opacity: 1}, ease:Expo.easeOut}))
			 

		var timer;
		$("section.pin").each(function(index, el) {
			var d = $(el).find(".diapo_item").length * 1000;
			$dispo = $(el).children(".dispo")
			controller.pin($dispo, d, {
				anim:pinAnimations, 
				offset:-108,
				onPin: function() {
					console.log("onPin")
					var el = this,
						slideLen = $(el.el).find(".diapo_item").length,
						timer = setInterval(function(){ _this.handleTimer(el,slideLen) }, 100);
				}, 
				onUnpin: function() {
					console.log("onUnpin")
					clearInterval(timer);
				}
			}); 
		
		});
	};

	this.handleTimer = function(el,slideLen){
		
		//console.log(el.pinStart,$(el.el).offset().top,el.pinEnd)
		var idx = Math.round( ( slideLen * ($(el.el).offset().top) ) / el.pinEnd );
		var idxx = Math.round( ( slideLen * ($(el.el).offset().top) ) / el.pinEnd );
		idx -= 1;
		console.log(idx,slideLen);
		//sc.gotoSlide(idx)
		$(".diapo_item").addClass("vhidden");
		$(el.el).find(".diapo_item").eq(idx).removeClass("vhidden");
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