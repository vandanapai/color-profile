
	// var clientID = "918a798aebef4d2da2668c2136cdcd02";
	// var redirectURI = "http://127.0.0.1";
	// var xhr = new  XMLHttpRequest();

	// xhr.open("GET", "https://instagram.com/oauth/authorize/?client_id=" + clientID + "&redirect_uri=" + redirectURI + "&response_type=token", false);

	// xhr.send();
	// console.log(xhr.status);
	// console.log(xhr.statusText);

var firstImgUrl;


$.ajax ({
	type: "GET",
	dataType: "jsonp",
	cache: false,
	url: "https://api.instagram.com/v1/users/30940069/media/recent/?access_token=30940069.918a798.b34436dee9224d5f9c347247fa869f4f",
	// success: function(data) {
	// 	for (var i = 0; i < 5; i++) {
	// 		$('#recent').append('<a target="_blank" href="' + data.data[i].link + '"><img src="' + data.data[i].images.low_resolution.url + '"></img></a></li>');

	// 	}
	// }
	success: function(data) {
		for (var i = 0; i < 1; i++) {
			useReturnData(data.data[i].images.low_resolution.url);
		}
	}
});

function useReturnData(data) {
	firstImgUrl = data;
	console.log(firstImgUrl);
};
