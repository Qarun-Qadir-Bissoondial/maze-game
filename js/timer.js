var secs = 180,
interval,
element = document.getElementById("time");
lose = new Audio("sound/fail.mp3");
function ticToc()
{
    var remMins = Math.floor(secs / 60);
    var remSecs = secs % 60;
        if (pause == false){
        if (remSecs < 10) { remSecs = "0" + remSecs; }
        if (remMins < 10) { remMins = "0" + remMins; }       
        element.innerHTML = remMins + ":" + remSecs;
        secs --;
        if (secs < 10) { element.style.color = "red"; }
        if (secs < 0){
            element.innerHTML = "Time has expired";
            lose.play();
            setTimeout(function () {alert("You lost!!!"); }, 5500);
            pause = true;
            clearInterval(interval);
            setTimeout(function () {
                result = confirm("Do you want to play again? OK for yes and Cancel for no");
                if (result == true) { location.reload(); }
                else {
                    alert("thanks for playing :D");
                    window.close();
                }
            } , 5500);
        }
    }
}

interval = setInterval(ticToc, 1000);
