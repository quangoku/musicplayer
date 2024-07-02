const audio=document.getElementById("audio");
const button=document.getElementById("button");
var check=0;
function play_pause()
{
    if(!check)
        {
            check=1;
            audio.play();
            button.style.animation="spin 5s linear infinite";
        }
        else {
            check=0;
            audio.pause();
            button.style.animation="";

        }
}
