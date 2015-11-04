// wait for DOM to load before running JS
$(function() {

	//Declaring the entire form as a variable
	$searchSpotify = $('#searchSpotify');

	//Declaring the textblock where the song will be inputted
	$songName = $('#songName');

	//Declaring the submit "button"--Note the difference (and the fact there is a difference) between buttons and submitting
	$submitSearch = $('#submitSearch');

	//Declaring the where on the html the results will be displayed
	$results = $('#results');

	//The variable which will take the inputtd text and save it so the API can be properly called
	//Is this a bad idea to create two objects/variables with such similar names and that are so closely entwined? Am I shooting myself in the foot?
	//PROBLEM HERE. CONSOLE RETURNS BAD REQUEST
	var songNameInput = $songName.val();
	console.log(songName);

	//The Spotify API url with the value(song) entered in the search box
	//This needs some attention
	/*var spotifyUrl = 'https://api.spotify.com/v1/search?q=' + songNameInput + '&type=track';*/
	
	//A test url, the problem isn't getting the info from the API--the problem is in how it's being inputting the information into the PI
	var spotifyUrl = "https://api.spotify.com/v1/search?q=track:the%20E%20Street%20Shuffle&type=track";

	$.get(spotifyUrl, function (data){
		console.log(data);

		var songResults = data.tracks.items;
	})

	//Making it so submitting THE FORM doesn't refresh the page
	$searchSpotify.on('submit', function(event){
		console.log("Yup! Form was submitted");
		event.preventDefault();
	});

	//Adding the results to html specifically the ordered list
	$('#results').append('<li>' + songNameInput + '</li>');




});

/*var url = "https://api.spotify.com/v1/search?type=track&q=' + searchSong;  */

/* $("form").on('searchButton', function(event) {
  		event.preventDefault();
  		$.get(url, function (data) {
  			console.log(data);
  		});
  });*/   /*DON'T PUT IN CODE*/