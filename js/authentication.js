$( window ).load(function() {

	var imgUrlArray = [];

	$.ajax ({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/users/30940069/media/recent/?access_token=30940069.918a798.b34436dee9224d5f9c347247fa869f4f",
		success: function(data) {
			for (var i = 0; i < 3; i++) {
				imgUrlArray.push(data.data[i].images.low_resolution.url);
			}
			imgColor(imgUrlArray);
		}
	});


	function imgColor(data) {


		for (var j = 0; j < data.length; j++) {

			$('.recent').append('<li><a target="_blank" href="' + data[j] + '"><img src="' + data[j]+ '"></img></a></li>');

			var imgObject = new Image();
			imgObject.src = data[j];


			$('#mainContainer').append('<div id="colorContainer' + j + '">TESTING' + j + '</div>'); // create new div

			$('#colorContainer' + j).addClass('img-color');


				var colorThief = new ColorThief();
				var domColor = colorThief.getColor(imgObject);

				// display dominant color in specific div
				$('#colorContainer' + j + '.img-color').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')');  // display the dominant color

				$('.img-container').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')'); // load dom color bg for modal

				$('.loaded-img').prepend(imgObject).css;

					// on click display the image in a modal

					$('.img-color').click(function() {
						$('.img-container').fadeIn(200);
					});

					// close modal 

					$('.close-button').click(function() {
						$('.img-container').fadeOut(200);
					});


		};


	};

});