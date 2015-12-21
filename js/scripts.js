var bTimerStarted = false;
var bTimerOn = false;
var cnt = 0;

window.onload = function () {
    bTimerStarted = false;
    bTimerOn = false;
    cnt = 0;

    document.getElementById("playPauseButton").addEventListener("click", playPauseButtonClick);
}

function playPauseButtonClick() {
    var buttonIcon = document.getElementById("playPauseButtonIcon");
    var button = document.getElementById("playPauseButton");

    if (buttonIcon.innerHTML == "play_arrow") {
        buttonIcon.innerHTML = "pause"
        button.classList.remove("green");
        button.classList.add("red");
        toggleTimer();
    } else {
        buttonIcon.innerHTML = "play_arrow";
        button.classList.remove("red");
        button.classList.add("green");
        toggleTimer();
    }
}

function toggleTimer() {
    if (bTimerStarted == false) {
        setInterval(updateTimer, 1000);
        bTimerStarted = true;
        bTimerOn = true;
    }

    if (bTimerStarted == true) {
        if (bTimerOn == true) {
            clearInterval();
            bTimerOn = false;
        }else{
            setInterval(updateTimer, 1000);
            bTimerOn = true;
        }
    }
}



function updateTimer() {
    var timer = document.getElementById("timer");
    cnt = cnt + 1;
    timer.innerHTML = cnt.toString();
}
