/**********************
    insertPageHtml
**********************/
(function($) {
    $.fn.insertPageHtml = function(options) {
        //the option is an array : {html:the ajax html, scripts: the scripts that already are in the html, customData:any data you associated to this state during navigate} 
        //switch elements
console.log(options)
        //var bdc = $("#bdc", options.html).attr("class");
        $("body").attr("class", options.class);

        $('body,html').animate({ scrollTop: 0 }, 10);

        $('section').html($("section", options.html).html()).animate({opacity:1});

        $(this).trigger({type:"finishrefreshinsert"});
        format();
        handleTemplate();
        sc.init();
        
        timer = setTimeout(function(){
            
        },2000);

    };
})(jQuery);

var NavigateController = function() {
	var _this		= this;
			
	this.init = function(){
		_this.bindEvents();

        
	};

    this.bindEvents = function(){
        
        $.navigate.init({
            //ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"], .ajaxLink',
            defaultInsertFunction:'insertPageHtml'
        });

        $(window).on( 'hashchange', function(){
            
        });
        
    };
};

