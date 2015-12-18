window.onload = function(){
	document.getElementById("playPauseButton").addEventListener("click", playPauseButtonClick);
}

function playPauseButtonClick(){
	var buttonIcon = document.getElementById("playPauseButtonIcon");
	if (buttonIcon.innerHTML == "play_arrow") {
		buttonIcon.innerHTML = "pause"
	}else{
			buttonIcon.innerHTML = "play_arrow";
		}
}