
	// var clientID = "918a798aebef4d2da2668c2136cdcd02";

$( window ).load(function() {

	var imgUrlArray = [];

	$.ajax ({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/users/30940069/media/recent/?access_token=30940069.918a798.b34436dee9224d5f9c347247fa869f4f",
		success: function(data) {
			for (var i = 0; i < 10; i++) {
				imgUrlArray.push(data.data[i].images.standard_resolution.url);
			}
			imgColor(imgUrlArray);
		}
	});

	function imgColor(data) {
		for (var i = 0; i < 1; i++) {

			$('<img src="' + imgUrlArray[i] + '">').load(function() {
			var colorThief = new ColorThief();

			// display dominant color

			var domColor = colorThief.getColor(this);
			$('.img-color').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')');  // display the dominant color
			$('.img-container').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')'); // load dom color bg for modal

			$('.loaded-img').prepend(this).css;

			// on click display the image in a modal

				$('.img-color').click(function() {
					$('.img-container').fadeIn(200);
				});

				// close modal 

				$('.img-close').click(function() {
					$('.img-container').fadeOut(200);
				});
			
			});
		};


	};

});