$( window ).load(function() {

	var imgUrlArray = [];

	$.ajax ({
		type: "GET",
		dataType: "JSON",
		cache: false,
		url: "https://api.instagram.com/v1/users/30940069/media/recent/?access_token=30940069.918a798.b34436dee9224d5f9c347247fa869f4f",
		success: function(data) {
			for (var i = 0; i < 5; i++) {
				imgUrlArray.push(data.data[i].images.low_resolution.url);
			}
			preload(imgUrlArray);
			// imgColor(imgUrlArray);
		}
	});

	var images = new Array();

	function preload(array) {

		for (var k = 0; k < array.length; k++) {
			var img = new Image();
			var counter = 0;
			img.src = array[k];
			images[k] = img;
			// counter++;
			// console.log(counter)		
		}

		// if (counter.length == array.length) {
			imgColor(images);
		// }

	}


	function imgColor(data) {

		for (var j = 0; j < data.length; j++) {

			var imgObject = data[j];
			$('.recent').append('<li><img src="' + imgUrlArray[j] + '"></img></li>');


			$('#mainContainer').append('<div id="colorContainer' + j + '">TESTING' + j + '</div>'); // create a new square div for the color

			$('#colorContainer' + j).addClass('img-color');


				var colorThief = new ColorThief();
				var domColor = colorThief.getColor(imgObject, 3);

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