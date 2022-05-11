var pins = [
	['Нескучный', 51.182700, 3.569806, 'html/pin/pin0.png','html/pin/pin0.png']
];

function setMarkers(map) {
	for (var i = 0; i < pins.length; i++) {
		var pin = pins[i];
		var marker = new google.maps.Marker({
			position: {lat: pin[1], lng: pin[2]},
			map: map,
			icon: pin[3],
			title: pin[0]
		});

		pinMessage(marker, pin[5]);
		pinHover(marker, pin[3], pin[4]);
	}
}

function pinMessage(marker, secretMessage) {
	var infowindow = new google.maps.InfoWindow({
		content: '<div class="map-popup">'+secretMessage+'</div>'
	});

	/*marker.addListener('click', function() {
		infowindow.open(marker.get('map'), marker);
	});*/
}

function pinHover(marker, img, imgHover) {
	google.maps.event.addListener(marker, 'mouseout', function() {
		marker.setIcon(img);
	});

	google.maps.event.addListener(marker, 'mouseover', function() {
		marker.setIcon(imgHover);
	});
}

function initialize() {
	var 
		mapCanvas = document.getElementById('map'),

		styleArray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];		

		mapOptions = {
			zoom: 14,
			scrollwheel: false,
			styles: styleArray
		},
		map = new google.maps.Map(mapCanvas, mapOptions);
	setMarkers(map);
	centerMap(map);
}

function centerMap() {
	var 
		widthWindow = $(window).width(),
		mapCenter;

	if(widthWindow < 1460 && widthWindow > 1200) {
		mapCenter = {lat: 51.182700, lng: 3.569806};
	}
	if(widthWindow < 1200 && widthWindow > 800) {
		mapCenter = {lat: 51.182700, lng: 3.569806};
	}
	else if(widthWindow < 800) {
		mapCenter = {lat: 51.182700, lng: 3.569806};
	}
	else {
		mapCenter = {lat: 51.182700, lng: 3.569806};
	}
	map.setCenter(mapCenter); 
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.trigger(map, "resize", centerMap);