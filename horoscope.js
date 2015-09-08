function getMusic (){
	var input = document.getElementById('input')
	var zodiac;


	document.write("Enter Works");

	if((input[0]=='1' && input[1]=='2' && input[3]=='2' && input[4]=='2'){
		zodiac = "capricorn"
	}

	var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    if (zodiac=='capricorn'){
    	player.loadVideoByUrl(mediaContentUrl:'https://youtu.be/SqhR3h2IkWA',
    }

}

$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        getMusic();
    }
});

