var Map = function() {
	var _this 		= this,
		geocoder	= null,
		map			= null,
		infowindow	= null,
		pano		= null,
		coord		= {},
		marker		= null,
		zoom		= 16,
		bounds		= null,
		lorient = null,
		kmlLayer;
			
	this.init = function(){
		_this.bindEvents();
		//geocoder = new google.maps.Geocoder();
		var paris = new google.maps.LatLng(48.8566140, 2.3522219);
	
		format()
		$("#map").css({
			width:$(".colonne").width(),
			height:$("section").height()
		});

		var style_map = _this.styleMap();
		var mapOptions = {
			center: paris,
			zoom: zoom,
			panControl: false,
			streetViewControl: false,
			zoomControl: true,
			zoomControl: true,
		    zoomControlOptions: {
		        style: google.maps.ZoomControlStyle.LARGE,
		        position: google.maps.ControlPosition.RIGHT_BOTTOM
		    },
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControlOptions: {
		        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		        position: google.maps.ControlPosition.BOTTOM_LEFT
		    },
			//disableDefaultUI: true
			//zoomControl: true,
			styles: style_map
		};
		//
		//map = new google.maps.Map(document.getElementById("map"), options);
		map = new google.maps.Map(document.getElementById("map"), mapOptions);

		
		google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
			this.setZoom(zoom);
		})
		
		$(".retailer").each(function(index, el) {
			var LatLng = new google.maps.LatLng($(this).data("lat"),$(this).data("lng"));
			var myMarker = new google.maps.Marker({
				// Coordonnées du cinéma
				position: LatLng,
				map: map,
				title: $(el).text()
			});
		});
		
		$("#loader").hide();
		//$('html,body').animate({ scrollTop: 0 }, 400);
		

		_this.handleHash();

	};

	this.bindEvents = function(){
		$("html").on("click", ".retailer", function(e){
			e.preventDefault();
			_this.panTo($(this).data("lat"),$(this).data("lng"));
			//window.location.hash = $(this).data("poi");
			//_this.updateKml();
		});

		$(window).on( 'hashchange', function(){
			_this.handleHash();			
		});
	};

	this.handleHash = function(){
		if(window.location.hash){
			var poi = window.location.hash.replace("#", "");
			console.log(poi)
		}else{
			
		}
	};

	this.panTo = function(lat,lng){
		console.log(lat,lng)
		var LatLng = new google.maps.LatLng(lat,lng);
		map.panTo(LatLng);
	};
	

	this.setZoom = function(val){
		zoom = val;
	};
	
	this.changeZoom = function(val){
		//console.log("changeZoom: ",map);
		map.setZoom(val);
		//console.log("changeZoom: ",map);
	};
		
	this.styleMap = function(){
		var style = [
					    {
					        "featureType": "landscape",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 65
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 51
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 30
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "road.local",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 40
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "transit",
					        "stylers": [
					            {
					                "saturation": -100
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.province",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "labels",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "lightness": -25
					            },
					            {
					                "saturation": -100
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "hue": "#ffff00"
					            },
					            {
					                "lightness": -25
					            },
					            {
					                "saturation": -97
					            }
					        ]
					    }
					];
		return style;
	};


}