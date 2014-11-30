$( window ).load(function() {



	$('#submit-image').click(function() {
		var imgURL = $('#user-input').val();
		console.log(imgURL);


		$('<img src="' + imgURL + '">').load(function() {
			var colorThief = new ColorThief();

			console.log(this); // check image URL

			// display dominant color

			var domColor = colorThief.getColor(this);
			$('.img-color').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')');  // display the dominant color
			$('.img-container').css('background-color', 'rgb(' + domColor[0] + ',' + domColor[1] + ',' + domColor[2] + ')'); // load dom color bg for modal

			// load the image in a new div hidden

			$('#loaded-img').prepend(this).css;

			// on click display the image in a modal

			$('.img-color').click(function() {
				$('.img-container').fadeIn(200);
			});

			// close modal 

			$('#img-close').click(function() {
				$('.img-container').fadeOut(200);
			});



		});
	});
});